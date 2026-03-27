'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  featured: boolean;
  createdAt: string;
}

interface Article {
  id: string;
  title: string;
  featured: boolean;
  publishedAt: string;
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, articlesRes] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/articles'),
        ]);

        if (projectsRes.ok) {
          setProjects(await projectsRes.json());
        }
        if (articlesRes.ok) {
          setArticles(await articlesRes.json());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-gray-400">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here&apos;s an overview of your portfolio content.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Projects Card */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 mb-4">
            Total Projects: <span className="text-white font-bold">{projects.length}</span>
          </p>
          <p className="text-gray-400 mb-6">
            Featured: <span className="text-white font-bold">{projects.filter(p => p.featured).length}</span>
          </p>
          <Link
            href="/admin/projects"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
          >
            Manage Projects →
          </Link>
        </div>

        {/* Articles Card */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Articles</h2>
          <p className="text-gray-400 mb-4">
            Total Articles: <span className="text-white font-bold">{articles.length}</span>
          </p>
          <p className="text-gray-400 mb-6">
            Featured: <span className="text-white font-bold">{articles.filter(a => a.featured).length}</span>
          </p>
          <Link
            href="/admin/articles"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
          >
            Manage Articles →
          </Link>
        </div>
      </div>

      {/* Recent Projects */}
      {projects.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Projects</h2>
          <div className="space-y-3">
            {projects.slice(0, 5).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-3 bg-gray-700/50 rounded">
                <div>
                  <p className="text-white font-medium">{project.title}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(project.createdAt).toLocaleDateString()}
                  </p>
                </div>
                {project.featured && (
                  <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 text-xs rounded">
                    Featured
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Articles */}
      {articles.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Articles</h2>
          <div className="space-y-3">
            {articles.slice(0, 5).map((article) => (
              <div key={article.id} className="flex items-center justify-between p-3 bg-gray-700/50 rounded">
                <div>
                  <p className="text-white font-medium">{article.title}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                </div>
                {article.featured && (
                  <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 text-xs rounded">
                    Featured
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
