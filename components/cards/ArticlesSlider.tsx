// app/components/ArticlesSlider.tsx
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ArticlesCard } from "./ArticalsCard";
import { articles } from "@/data/articles";


const ArticlesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Define your articles data

  const nextArticle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevArticle = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <div className="relative overflow-hidden">
      <ArticlesCard article={articles[currentIndex]} />
      <div className="flex items-center justify-between mb-6">
        <button onClick={prevArticle} className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex space-x-2">
          {articles.map((_, index) => (
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