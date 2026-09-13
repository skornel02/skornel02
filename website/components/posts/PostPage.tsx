'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Giscus from '@giscus/react';
import { Icon } from '@/components/common/Icon';
import type { Post } from '#content';

interface PostPageProps {
  post: Post;
}

export function PostPage({ post }: PostPageProps) {
  const [backHref, setBackHref] = useState('/posts');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      if (page && page !== '1') {
        setBackHref(`/posts/?page=${page}`);
      }
    }
  }, []);

  const dateStr = post.date
    ? new Date(post.date).toISOString().substring(0, 10)
    : '';

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <nav className="flex flex-wrap justify-between items-center my-4 gap-2">
        <span className="text-sm opacity-80">Published: {dateStr}</span>

        <div className="flex flex-wrap gap-1">
          {post.tags?.map((tag, idx) => (
            <div key={idx} className="badge badge-sm badge-outline badge-info">
              {tag}
            </div>
          ))}
        </div>

        <Link
          id="posts-go-back"
          href={backHref}
          className="btn btn-sm btn-outline btn-secondary flex items-center gap-1"
        >
          <Icon name="mdi:step-backward" height={16} width={16} />
          <span>Back</span>
        </Link>
      </nav>

      <div className="divider"></div>

      <article
        className="markdown-body p-4 rounded-xl bg-base-100 dark:bg-black"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="divider my-8">Comment section</div>

      <div className="my-6">
        <Giscus
          repo="skornel02/skornel02"
          repoId="R_kgDOG9KgxQ"
          category="Comment section"
          categoryId="DIC_kwDOG9Kgxc4CPOyt"
          mapping="title"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default PostPage;
