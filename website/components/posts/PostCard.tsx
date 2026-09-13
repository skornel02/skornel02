import React from 'react';
import Link from 'next/link';
import { createPostHref } from '@/lib/hrefs';
import type { Post } from '#content';

interface PostCardProps {
  post: Post;
  page?: number;
}

export function PostCard({ post, page }: PostCardProps) {
  const href = createPostHref(post, page);
  const dateStr = post.date
    ? new Date(post.date).toISOString().substring(0, 10)
    : '';

  return (
    <Link href={href} className="block group">
      <div className="w-full bg-base-100 dark:bg-gray-900 shadow-xl my-4 rounded-xl border border-base-200 dark:border-gray-800 transition-all group-hover:scale-[1.01] group-hover:shadow-2xl">
        <div className="card-body p-6">
          <div className="card-actions flex-wrap justify-between items-baseline mb-2">
            <h3 className="text-2xl font-bold uppercase text-title group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <span className="text-secondary font-medium">{dateStr}</span>
          </div>

          <p className="text-text">{post.description}</p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="badge badge-sm badge-outline badge-info">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
