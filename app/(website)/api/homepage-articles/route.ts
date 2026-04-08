import { getPayload } from "payload"
import config from "@payload-config"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config })
    const { docs: fetchedArticles } = await payload.find({
      collection: 'articles',
      limit: 10,
      sort: '-date',
    })

    const articles = fetchedArticles.map((article: any) => ({
      id: article.id,
      title: article.title,
      description: article.description,
      date: article.date,
      readTime: article.readTime,
      content: article.content_html || "",
      category: article.category,
      image: article.image || "https://images.unsplash.com/photo-1460925895917-aaf4b51baea8?q=80&w=2700&auto=format&fit=crop",
      slug: article.slug,
      embedurl: article.embedurl || "",
    }))

    return NextResponse.json({ articles })
  } catch (error) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ articles: [] }, { status: 500 })
  }
}
