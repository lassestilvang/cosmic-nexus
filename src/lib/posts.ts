import postsData from './posts.json';

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  readingTime: string;
}

export function getAllPosts(): Post[] {
  return postsData;
}

export function getPostBySlug(slug: string): Post | null {
  return postsData.find((post) => post.slug === slug) || null;
}

export function getRelatedPosts(currentSlug: string, category: string): Post[] {
  return postsData
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, 3);
}