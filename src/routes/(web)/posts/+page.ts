import {loadPostsOrdered} from '$lib/posts';
import type {PageLoad} from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	const sortedPosts = await loadPostsOrdered(false);

	return {
		posts: sortedPosts,
	};
};
