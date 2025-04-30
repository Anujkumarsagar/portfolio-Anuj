"use client";

import { FC } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Article } from '@/types/article';

interface ArticleViewProps {
  article: Article;
}

const ArticleView: FC<ArticleViewProps> = ({ article }) => {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <section className="relative p-6 md:p-10 rounded-3xl overflow-hidden section-gradient">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/articles"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>

            <article className="prose prose-invert prose-lg max-w-none">
              <h1 className="text-4xl md:text-5xl font-bungee mb-4">{article.title}</h1>
              
              <div className="flex items-center text-gray-400 mb-8">
                <time dateTime={article.date}>
                  {format(new Date(article.date), 'MMMM d, yyyy')}
                </time>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>

              <p className="text-xl text-gray-300 mb-8">{article.description}</p>

              <div className="border-t border-gray-800 pt-8 prose-headings:font-bungee prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300" dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default ArticleView; 