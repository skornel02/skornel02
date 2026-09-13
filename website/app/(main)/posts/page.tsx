'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { posts as allPosts } from '#content';
import { PostCard } from '@/components/posts/PostCard';
import { PostsSearch } from '@/components/posts/PostsSearch';

const PAGE_SIZE = 10;

function PostsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = useState(isNaN(pageParam) ? 1 : pageParam);

  useEffect(() => {
    const p = parseInt(searchParams.get('page') || '1', 10);
    if (!isNaN(p)) {
      setCurrentPage(p);
    }
  }, [searchParams]);

  const visiblePosts = allPosts
    .filter((post) => !post.hidden)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalPages = Math.ceil(visiblePosts.length / PAGE_SIZE) || 1;
  const page = Math.max(1, Math.min(currentPage, totalPages));

  const paginatedPosts = visiblePosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goToPage = (newPage: number) => {
    setCurrentPage(newPage);
    router.push(newPage === 1 ? '/posts' : `/posts?page=${newPage}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="my-6">
        <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
        <PostsSearch posts={visiblePosts} />
      </div>

      <div className="divider my-6"></div>

      <div className="space-y-4 my-6">
        {paginatedPosts.length === 0 ? (
          <p className="text-center py-8 opacity-75">No posts available yet.</p>
        ) : (
          paginatedPosts.map((post) => (
            <PostCard key={post.slug} post={post} page={page} />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 my-8">
          <button
            type="button"
            className="btn btn-sm btn-outline"
            disabled={page <= 1}
            onClick={() => goToPage(page - 1)}
          >
            « Previous
          </button>
          <span className="text-sm font-medium">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            className="btn btn-sm btn-outline"
            disabled={page >= totalPages}
            onClick={() => goToPage(page + 1)}
          >
            Next »
          </button>
        </div>
      )}
    </div>
  );
}

export default function PostsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto p-8 text-center">Loading posts...</div>}>
      <PostsContent />
    </Suspense>
  );
}
