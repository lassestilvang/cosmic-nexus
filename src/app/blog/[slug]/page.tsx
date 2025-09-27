import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import mdxComponents from '@/components/MDXComponents';
import SocialShare from '@/components/SocialShare';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Enable ISR for blog posts
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.category);

  return (
    <div className="min-h-screen bg-cosmic-blue text-neon-cyan">
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-block bg-holographic-purple/20 text-holographic-purple px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neon-cyan font-geist-sans">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <p className="text-xl text-organic-green leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <SocialShare title={post.title} />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-neon-cyan/20 pt-8">
            <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Related Posts</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-black/20 backdrop-blur-sm border border-neon-cyan/20 rounded-lg p-4 hover:border-neon-cyan/50 transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2 hover:text-organic-green transition-colors">
                    <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">{relatedPost.excerpt}</p>
                  <time className="text-xs text-gray-500" dateTime={relatedPost.date}>
                    {new Date(relatedPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/50 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}