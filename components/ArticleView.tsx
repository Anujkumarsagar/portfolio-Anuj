"use client";

import { FC, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { Article } from '@/types/article';
import useRouterHook from '@/hooks/use-router';

interface ArticleViewProps {
  article: Article;
}

export const ArticleView: FC<ArticleViewProps> = ({ article }) => {
  const { navigateBack, navigateTo } = useRouterHook()
  const [menuOpen, setMenuOpen] = useState(false)

  console.log(" article.content: ",  article.content)

  useEffect(() => {
    // Prevent background scroll when menu is open
    if (menuOpen) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
  

      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={() => navigateBack()}
          className="inline-flex items-center text-emerald-400 hover:text-emerald-600"
        >
          <ArrowLeft className="w-4 h-4 mr-2 text-emerald-400" />
          <span className="text-emerald-400 hover:text-emerald-600">Back</span>
        </button>

       
      </div>

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
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
          // ref={(el) => {
          //   if (el) {
          //     // Basic syntax highlighting for code blocks
          //     const codeBlocks = el.querySelectorAll('blockquote code');
          //     codeBlocks.forEach((codeBlock) => {
          //       const text = codeBlock.textContent || '';
          //       // Simple highlighting for JavaScript keywords
          //       let highlighted = text
          //         .replace(/\b(const|let|var|function|return|if|else|for|while|class|extends|import|export|from|async|await|try|catch)\b/g, '<span style="color: #c792ea">$1</span>') // keywords
          //         .replace(/(["'`])(.*?)\1/g, '<span style="color: #c3e88d">$&</span>') // strings
          //         .replace(/(\/\/.*$)/gm, '<span style="color: #546e7a">$1</span>') // comments
          //         .replace(/\b(\d+(\.\d+)?)\b/g, '<span style="color: #f78c6c">$1</span>') // numbers
          //         .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, '<span style="color: #82aaff">$1</span>('); // function calls
          //       codeBlock.innerHTML = highlighted;
          //     });
          //   }
          // }}
        />
      </article>

      {/* Mobile hamburger menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-72 max-w-[80%] bg-gray-900 text-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Menu</h3>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <button
                className="text-left px-2 py-2 rounded hover:bg-gray-800"
                onClick={() => {
                  navigateTo('/')
                  setMenuOpen(false)
                }}
              >
                Home
              </button>
              <button
                className="text-left px-2 py-2 rounded hover:bg-gray-800"
                onClick={() => {
                  navigateTo('/articles')
                  setMenuOpen(false)
                }}
              >
                Articles
              </button>
              <button
                className="text-left px-2 py-2 rounded hover:bg-gray-800"
                onClick={() => {
                  navigateTo('/links')
                  setMenuOpen(false)
                }}
              >
                Links
              </button>
            </nav>
          </div>

          {/* Clickable backdrop to close the menu */}
          <div className="flex-1 bg-black/60" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8"
      >
        <div className="relative w-full  rounded-3xl overflow-hidden">
          <iframe src={`${article.embedurl}`} height="718" width="504" frameborder="1" allowfullscreen="true" title="Embedded post"></iframe>
        </div>
      </motion.div> */}
    </motion.div>
  );
};

