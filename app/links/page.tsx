"use client"

import Link from "next/link"
import { Suspense, useState } from "react"
import { ArrowLeft } from "lucide-react"
import Loading from "../loading"

// Mock data
const allLinks = [
  {
    id: 1,
    title: "Diffrent Carousels ",
    url: "https://v0.dev/chat/carousels-with-tailwind-ccfGICO06Pj",
    category: "v0",
    date: "2025-07-11",
    description: "Diffrent=2 Types of Carousels Code",
  },
  {
    id: 2,
    title: "Modern Layout Website ",
    url: "https://v0.dev/chat/website-inspiration-FCb2BBcvhXz",
    category: "v0",
    date: "2025-07-11",
    description: "Modern Layout Website with parrot green theme",
  },

]

export default function LinksPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", ...Array.from(new Set(allLinks.map((link) => link.category)))]
  const filteredLinks =
    selectedCategory === "all" ? allLinks : allLinks.filter((link) => link.category === selectedCategory)

  return (
    <Suspense unstable_expectedLoadTime={} fallback={<Loading />}>
      <div className="min-h-screen  bg-black text-white">


        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Link href={"/"} className="inline-flex items-center text-emerald-400 hover:text-emerald-600 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-emerald-400 hover:text-emerald-600">Back to Main Page</span>
            </Link>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white ">Saved Links</h1>
              <div className="flex items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex bg-white rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${viewMode === "grid" ? "text-white  shadow-sm" : "text-gray-600"
                      }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${viewMode === "list" ? "text-white shadow-sm" : "text-gray-600"
                      }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category
                        ? "bg-blue-100 text-blue-800"
                        : "bg-white text-gray-700 hover:bg-white/50"
                      }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Links Display */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLinks.map((link) => (
                  <div
                    key={link.id}
                    className="text-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {link.category}
                        </span>
                        <span className="text-sm text-white-500">{link.date}</span>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                          {link.title}
                        </a>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{link.description}</p>
                      <p className="text-blue-600 text-sm truncate">{link.url}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {filteredLinks.map((link) => (
                    <li key={link.id}>
                      <div className="px-4 py-4 sm:px-6 hover:bg-white/50">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-sm font-medium text-blue-600 truncate">
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                  {link.title}
                                </a>
                              </h3>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                                {link.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{link.description}</p>
                            <p className="text-sm text-gray-500">{link.url}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="text-sm text-gray-500">{link.date}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </main>
      </div>
    </Suspense>
  )
}
