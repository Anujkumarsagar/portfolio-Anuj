"use client"

import { Article } from "@/types/article";
import { ArrowRight} from "lucide-react";
import Link from "next/link";




interface ArticlesCardProps {
    article: Article;
}

export function ArticlesCard({ article }: ArticlesCardProps) {
    return (
        <div className="bg-gray-900 rounded-3xl p-6 w-90 h-48">
            <h3 className="text-xl font-mono mb-2">{article.title}</h3>
        <p className="text-gray-400 text-sm mb-4 truncate w-[80%] ">{article.description}</p>
            <div className="flex items-center">
                <Link href={`/articles/${article.slug}`} className="bg-white text-black rounded-full px-4 py-1 text-sm font-medium mr-2">
                    Read 
                </Link>
                <ArrowRight className="w-4 h-4" />
            </div>
        </div>
    );
}