"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { ArticlesCard } from "./ArticalsCard";
import { Article } from "@/types/article";

const ArticlesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const res = await fetch("/api/homepage-articles");
        if (!res.ok) throw new Error("Failed to fetch articles");
        const data = await res.json();
        setArticles(data.articles);
      } catch (err: any) {
        console.error("Error fetching articles:", err);
        setError(err.message || "Failed to load articles");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const nextArticle = () => {
    if (articles.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevArticle = () => {
    if (articles.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  if (loading) {
    return (
      <div className="relative overflow-hidden flex items-center justify-center h-48">
        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  if (error || articles.length === 0) {
    return (
      <div className="relative overflow-hidden flex items-center justify-center h-48">
        <p className="text-gray-400 text-sm">
          {error || "No articles available yet."}
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <ArticlesCard article={articles[currentIndex]} />
      <div className="flex items-center w-[25%] mx-auto my-2 justify-between mb-6">
        <button onClick={prevArticle} className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex space-x-2">
          {articles.slice(0, 5).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-600'}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
        <button onClick={nextArticle} className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ArticlesSlider;