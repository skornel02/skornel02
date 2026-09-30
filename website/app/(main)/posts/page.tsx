'use client';

import React, {Suspense, useEffect, useState} from 'react';
import {useSearchParams, useRouter} from 'next/navigation';
import {posts as allPosts} from '#content';
import {PostCard} from '@/components/posts/PostCard';
import {PostsSearch} from '@/components/posts/PostsSearch';
import {Button} from '@/components/ui/button';
import {
	SimpleWindow,
	SimpleWindowContent,
	SimpleWindowFooter,
	SimpleWindowHeader,
} from '@/components/ui/simple-window';
import {Separator} from '@/components/ui/8bit/separator';

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
		<SimpleWindow className="max-w-5xl mx-auto">
			<SimpleWindowHeader />

			<SimpleWindowContent>
				<div className="my-2 pb-4">
					<h1 className="text-4xl font-display mb-6 ">Blog Posts</h1>
					<PostsSearch posts={visiblePosts} />
				</div>

				<Separator />

				<div className="space-y-4 my-6">
					{paginatedPosts.length === 0 ? (
						<p className="text-center py-8 opacity-75">No posts available yet.</p>
					) : (
						paginatedPosts.map((post) => <PostCard key={post.slug} post={post} page={page} />)
					)}
				</div>

				{totalPages > 1 && (
					<div className="flex justify-center items-center gap-4 mt-8 pt-6 border-t-2 border-cyan-900/50">
						<Button
							variant="outline"
							disabled={page <= 1}
							onClick={() => goToPage(page - 1)}
							className="w-20">
							« Previous
						</Button>
						<span className="text-sm font-medium font-mono">
							Page {page} of {totalPages}
						</span>
						<Button
							variant="outline"
							disabled={page >= totalPages}
							onClick={() => goToPage(page + 1)}
							className="w-20">
							Next »
						</Button>
					</div>
				)}
			</SimpleWindowContent>

			<SimpleWindowFooter />
		</SimpleWindow>
	);
}

export default function PostsPage() {
	return (
		<Suspense
			fallback={
				<div className="container mx-auto p-8 text-center text-amber-200 font-display">
					Loading posts...
				</div>
			}>
			<PostsContent />
		</Suspense>
	);
}
