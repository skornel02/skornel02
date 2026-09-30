'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Giscus from '@giscus/react';
import {Icon} from '@/components/common/Icon';
import type {Post} from '#content';
import {
	SimpleWindow,
	SimpleWindowContent,
	SimpleWindowFooter,
	SimpleWindowHeader,
} from '../ui/simple-window';
import {Separator} from '../ui/8bit/separator';
import {Button} from '../ui/button';
import {Badge} from '../ui/badge';
import {useRootTheme} from '@/lib/hooks/use-root-theme';

interface PostPageProps {
	post: Post;
}

export function PostPage({post}: PostPageProps) {
	const [backHref, setBackHref] = useState('/posts');
	const {isDark} = useRootTheme();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const params = new URLSearchParams(window.location.search);
			const page = params.get('page');
			if (page && page !== '1') {
				setBackHref(`/posts/?page=${page}`);
			}
		}
	}, []);

	const dateStr = post.date ? new Date(post.date).toISOString().substring(0, 10) : '';

	return (
		<SimpleWindow className="container mx-auto px-4 py-6 max-w-4xl">
			<SimpleWindowHeader>
				<div className="grow flex justify-between items-center">
					<span className="text-xs opacity-80">Published: {dateStr}</span>

					<Button
						nativeButton={false}
						render={
							<Link
								id="posts-go-back"
								href={backHref}
								className="btn btn-sm btn-outline btn-secondary flex items-center gap-1">
								<Icon name="mdi:step-backward" className="size-4" />
								<span>Back</span>
							</Link>
						}
					/>
				</div>
			</SimpleWindowHeader>

			<SimpleWindowContent>
				<div className="flex flex-wrap justify-between items-center my-4 gap-2">
					<div className="flex flex-wrap gap-1">
						{post.tags?.map((tag, idx) => (
							<Badge key={idx} variant="secondary">
								{tag}
							</Badge>
						))}
					</div>
				</div>

				<Separator />

				<article
					className="markdown-body p-4 rounded-xl bg-base-100 dark:bg-black"
					dangerouslySetInnerHTML={{__html: post.content}}
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
						theme={isDark ? 'dark_dimmed' : 'light'}
						lang="en"
						loading="lazy"
					/>
				</div>
			</SimpleWindowContent>

			<SimpleWindowFooter />
		</SimpleWindow>
	);
}

export default PostPage;
