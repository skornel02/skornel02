import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { posts as allPosts } from '#content';
import { PostPage } from '@/components/posts/PostPage';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post not found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
    },
  };
}

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}
