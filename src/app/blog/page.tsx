import { getAllPosts } from '@/lib/posts';
import BlogContent from './BlogContent';

export default function Blog() {
  const posts = getAllPosts();

  return <BlogContent posts={posts} />;
}