"use client"

import { Suspense, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, Clock, User, ArrowLeft } from "lucide-react"
import { articles } from '@/data/articles'
import { format } from 'date-fns'
import Loading from "../loading"

// Categories for filtering
const categories = ["All", "Web Development", "Mobile Development", "Web Design", "UX Design"]

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter posts based on search query and active category
  const filteredPosts = articles.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        <Link href={"/"} className="inline-flex items-center text-emerald-400 hover:text-emerald-600 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2 text-emerald-400" />
        <span className="text-emerald-400 hover:text-emerald-600">Back to Main Page</span>
        </Link>
        {/* Header Section */}
        <section className="relative p-6 md:p-10 rounded-3xl overflow-hidden section-gradient mb-12">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bungee mb-6">Articles & Insights</h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore my thoughts, experiences, and technical insights from years of working in web and mobile
              development.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-gray-900/60 border border-gray-800 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category ? "bg-white text-black" : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link href={`/articles/${post.slug}`} key={post.id} className="group">
              <article className="bg-gray-900 rounded-3xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bungee mb-3 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">{post.description}</p>

                  <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </time>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-800 mt-auto">
                  <div className="flex items-center justify-end">
                    <span className="flex items-center gap-1 text-sm group-hover:text-white transition-colors">
                      Read article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bungee mb-4">No articles found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
            <button
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("All")
              }}
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-24 relative p-8 md:p-12 rounded-3xl overflow-hidden section-gradient">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl  mb-6">Stay updated with my latest articles</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to my newsletter to receive notifications about new articles, insights, and updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-gray-900/60 border border-gray-800 rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-black rounded-full py-3 px-6  hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
    </Suspense>
  )
}
