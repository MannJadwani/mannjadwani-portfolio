import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mannjadwani.in';
  const routes: MetadataRoute.Sitemap = ['', '/projects', '/skills', '/about', '/contact', '/utility', '/utility/mistral-ocr', '/utility/gemini-chat', '/utility/prompt-book'].map((route) => ({
    url: `${base}${route || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  return routes;
}
