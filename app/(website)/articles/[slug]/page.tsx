import { notFound } from 'next/navigation';
import { ArticleView } from '@/components/ArticleView';
import { Suspense } from 'react'; 
import { getPayload } from "payload";
import config from "@payload-config";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: 'articles',
    where: {
      slug: {
        equals: slug,
      }
    }
  });
  
  if (docs.length === 0) return { title: 'Article not found' };
  
  return {
    title: docs[0].title,
    description: docs[0].description,
  }
}

export const dynamic = 'force-dynamic'

export default async function ArticlePage ({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug;

  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: 'articles',
    where: {
      slug: {
        equals: slug,
      }
    }
  });

  const payloadArticle = docs[0] as any;

  if (!payloadArticle) {
    notFound();
  } 

  const article = {
    id: payloadArticle.id,
    title: payloadArticle.title,
    description: payloadArticle.description,
    date: payloadArticle.date,
    readTime: payloadArticle.readTime,
    content: payloadArticle.content_html || "",
    category: payloadArticle.category,
    image: payloadArticle.image || "https://images.unsplash.com/photo-1460925895917-aaf4b51baea8?q=80&w=2700&auto=format&fit=crop",
    slug: payloadArticle.slug,
    embedurl: payloadArticle.embedurl || "",
  }

  return (
    <Suspense >
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* <section className="relative  md:p-5 rounded-3xl overflow-hidden section-gradient"> */}
            {/* <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div> */}

            {/* D */}
          {/* </section> */}

          <ArticleView article={article} />
        </div>
      </main>
    </Suspense>
  );
}
