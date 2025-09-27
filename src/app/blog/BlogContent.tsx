"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '../../lib/animations';

interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  readingTime: string;
}

interface BlogContentProps {
  posts: Post[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const reducedMotion = prefersReducedMotion();

  return (
    <div className="min-h-screen bg-cosmic-blue text-neon-cyan">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-8 font-geist-sans">Blog</h1>
          <p className="text-lg text-organic-green">Latest thoughts and insights from the cosmic frontier</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.slug} className="bg-black/20 backdrop-blur-sm border border-neon-cyan/20 rounded-lg overflow-hidden hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/10">
              {/* AI-generated cosmic image */}
              <div className="h-48 bg-gradient-to-br from-cosmic-blue via-holographic-purple to-organic-green relative overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/cosmic-${index}/400/300?blur=1`}
                  alt={`AI-generated cosmic landscape for ${post.title}`}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="inline-block bg-neon-cyan/20 text-neon-cyan px-2 py-1 rounded-full text-xs font-medium">
                    AI Generated
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-holographic-purple/20 text-holographic-purple px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold mb-2 hover:text-organic-green transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}