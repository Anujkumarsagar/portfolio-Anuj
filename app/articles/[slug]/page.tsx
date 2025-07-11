import { notFound } from 'next/navigation';
import { ArticleView } from '@/components/ArticleView';
import { articles } from '@/data/articles';
import { Suspense } from 'react';
import Loading from '../loading';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  // Find the article by matching the slug
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
   <Suspense fallback={<Loading />}>
     <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <section className="relative p-6 md:p-10 rounded-3xl overflow-hidden section-gradient">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
          
          <ArticleView article={article} />
        </section>
      </div>
    </main>
   </Suspense>
  );
}
