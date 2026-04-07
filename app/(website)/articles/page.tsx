import { getPayload } from "payload"
import config from "@payload-config"
import ArticlesList from "@/components/ArticlesList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Articles",
  description: "Explore my thoughts, experiences, and technical insights",
}

export const dynamic = 'force-dynamic'

export default async function ArticlesPage() {
  const payload = await getPayload({ config })
  const { docs: fetchedArticles } = await payload.find({
    collection: 'articles',
    limit: 100,
  })

  // Map to the Article type expected by the frontend
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

  return (
    <ArticlesList articles={articles} />
  )
}
