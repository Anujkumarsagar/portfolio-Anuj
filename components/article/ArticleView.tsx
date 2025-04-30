import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, Bookmark, Heart } from "lucide-react";
import { Article } from "@/types/article";

interface ArticleViewProps {
  article: Article;
}

export default function ArticleView({ article }: ArticleViewProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Article Header */}
        <section className="relative p-6 md:p-10 rounded-3xl overflow-hidden section-gradient">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>

          <header className="relative flex justify-between items-center mb-10">
            <Link href="/" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <ArrowLeft size={24} />
              <span className="font-mono">Back to Home</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Bookmark size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-invert max-w-none">
            <div className="mb-10">
              <h1 className="text-5xl md:text-6xl font-mono mb-6">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-400">
                <span className="font-mono">Anuj Kumar</span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="relative w-full h-[400px] mb-10 rounded-3xl overflow-hidden">
              <Image
                src={`/assets/articles/${article.id}.jpg`}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                {article.description}
              </p>

              <div className="content">
                {article.content}
              </div>
            </div>
          </article>

          {/* Article Footer */}
          <footer className="mt-20 pt-10 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/png/image.png"
                  alt="Author"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-mono">Anuj Kumar</h3>
                  <p className="text-gray-400">Full-stack Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href="https://github.com/Anujkumarsagar" className="hover:text-gray-300 transition-colors">
                  GitHub
                </Link>
                <Link href="https://linkedin.com/in/Anujkumarsagar" className="hover:text-gray-300 transition-colors">
                  LinkedIn
                </Link>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
} 