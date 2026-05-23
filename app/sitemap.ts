import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cvanuj.vercel.app' // TODO: Replace with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/links`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}