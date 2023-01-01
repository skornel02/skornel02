import {orderPosts} from '$lib/posts';
import type {PageLoad} from './$types';

export const prerender = true;

export const load: PageLoad = async ({fetch}) => {
	const sortedPosts = await fetch('/posts.json')
		.then((res) => res.json())
		.then((posts) => orderPosts(posts));

	return {
		posts: sortedPosts,
	};
};
