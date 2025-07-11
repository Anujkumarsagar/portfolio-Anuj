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

export const ArticleView: FC<ArticleViewProps> = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <Link
        href="/articles"
        className="inline-flex items-center text-emerald-400 hover:text-emerald-600 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2 text-emerald-400" />
        <span className="text-emerald-400 hover:text-emerald-600">Back to Articles</span>
      </Link>

      <article className="prose prose-invert prose-lg max-w-none">
        <h1 className="text-4xl font-bungee mb-4">{article.title}</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <time dateTime={article.date}>
            {format(new Date(article.date), 'MMMM d, yyyy')}
          </time>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>

        <p className="text-xl text-gray-300 mb-8">{article.description}</p>

        <div
          className="border-t overflow-x-auto border-gray-800  pt-8 prose-headings:font-bungee prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8"
      >
        <div className="relative w-full  rounded-3xl overflow-hidden">
        <iframe src={`${article.embedurl}`} height="718" width="504" frameborder="1" allowfullscreen="true" title="Embedded post"></iframe>
         </div>
      </motion.div>
    </motion.div>
  );
};

