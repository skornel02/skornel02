<script lang="ts" context="module">
	import {loadPostsOrdered, type Post} from '$lib/posts';
	import type {LoadOutput} from '@sveltejs/kit';
	import Fuse from 'fuse.js';

	export const prerender = true;

	export const load = async (): Promise<LoadOutput> => {
		const sortedPosts = await loadPostsOrdered(false);

		return {
			status: 200,
			props: {
				posts: sortedPosts,
			},
		};
	};
</script>

<script lang="ts">
	export let posts: Post[];

	let postsShown = posts;

	const searchOptions = {
		includeScore: true,
		keys: [
			{name: 'metadata.title', weight: 0.8},
			{name: 'metadata.description', weight: 0.2},
		],
	};
	let search = '';
	const fuse = new Fuse(posts, searchOptions);

	$: {
		if (search !== '') {
			const result = fuse.search(search);
			postsShown = result.map((r) => r.item);
		} else {
			postsShown = posts;
		}
	}
</script>

<svelte:head>
	<meta property="og:title" content="SK - Blog" />
	<meta property="og:description" content="Personal blog of SK" />
	<meta property="og:type" content="website" />
	<title>SK - Blog</title>
	<meta name="description" content="Personal blog of SK" />
</svelte:head>

<div class="container">
	<h1>Blog Posts</h1>
	<div id="search">
		<input
			class="form-control form-control-lg"
			type="text"
			placeholder="Search..."
			bind:value="{search}"
		/>
	</div>
	<hr />
	<div class="d-flex flex-column">
		{#each postsShown as post, index}
			<div id="post-{index}" class="w-100 d-flex flex-column post">
				<h2>
					{post.metadata.title}
				</h2>
				<p>
					{post.metadata.description ?? 'No description'}
				</p>
				<div class="d-flex justify-content-end">
					<div class="d-flex flex-column">
						<a href="{post.path}" class="btn btn-outline-primary">Read</a>
						<p>{new Date(post.metadata.date).toLocaleDateString()}</p>
					</div>
				</div>
				<hr />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.post {
		padding: 1em;
		h2 {
			font-size: 1.2rem;
		}
		hr {
			color: var(--color-primary);
		}
	}
</style>
