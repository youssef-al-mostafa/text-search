import type { Article } from '../types';

export const searchArticles = (articles: Article[], query: string): Article[] => {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();

  return articles.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.content.toLowerCase().includes(lowerQuery)
  );
};
