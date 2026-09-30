import React from 'react';
import Link from 'next/link';
import {createPostHref} from '@/lib/hrefs';
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import type {Post} from '#content';

interface PostCardProps {
	post: Post;
	page?: number;
}

export function PostCard({post, page}: PostCardProps) {
	const href = createPostHref(post, page);
	const dateStr = post.date ? new Date(post.date).toISOString().substring(0, 10) : '';

	return (
		<Link href={href} className="block group mb-6">
			<Card className="group-hover:-translate-y-1  transition-all">
				<CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2 pb-2 border-cyan-900/60">
					<CardTitle className="transition-colors text-primary">{post.title}</CardTitle>
					<span className="font-mono text-xs">{dateStr}</span>
				</CardHeader>
				<CardContent>
					<p className="text-sm  mb-4">{post.description}</p>
					{post.tags && post.tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{post.tags.map((tag, idx) => (
								<Badge key={idx} variant="secondary" className="text-[10px]">
									{tag}
								</Badge>
							))}
						</div>
					)}
				</CardContent>
			</Card>
		</Link>
	);
}

export default PostCard;
