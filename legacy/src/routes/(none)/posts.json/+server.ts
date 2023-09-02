import { loadPosts, orderPosts } from "$lib/posts";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const prerender = true;

export const GET: RequestHandler = async () => {
	const posts = await loadPosts();
	const sortedPosts = await orderPosts(posts, false);

	return json(sortedPosts);
}
