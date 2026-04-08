'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface InfiniteScrollContainerProps {
  children: ReactNode;
  onScroll?: (progress: number) => void;
}

export default function InfiniteScrollContainer({
  children,
  onScroll,
}: InfiniteScrollContainerProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll === 0 ? 0 : scrollTop / totalScroll;

      setScrollProgress(progress);
      onScroll?.(progress);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [onScroll]);

  return (
    <>
      {/* Scroll indicator bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-white via-gray-400 to-gray-600 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
        initial={{ width: '0%' }}
        animate={{ width: `${scrollProgress * 100}%` }}
        transition={{ type: 'tween', duration: 0.3 }}
      />

      {/* Scroll indicator circle */}
      {isScrolling && (
        <motion.div
          className="fixed bottom-8 right-8 w-3 h-3 rounded-full bg-white z-40"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      )}

      <div className="relative w-full">
        {children}
      </div>

      {/* Scroll-to-top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: scrollProgress > 0.2 ? 1 : 0,
          y: scrollProgress > 0.2 ? 0 : 20,
        }}
        className="fixed bottom-8 left-8 z-40 p-3 squircle-a-full bg-gray-900 border border-gray-700 text-white shadow-lg hover:shadow-xl hover:bg-gray-800 hover:border-gray-600 transition-all disabled:opacity-50"
        style={{
          pointerEvents: scrollProgress > 0.2 ? 'auto' : 'none',
        }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </>
  );
}
