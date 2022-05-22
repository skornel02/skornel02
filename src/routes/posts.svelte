<script lang="ts" context="module">
	import { loadPostsOrdered, type Post } from '$lib/posts';

	export const prerender = true;

	export const load = async () => {
		const sortedPosts = await loadPostsOrdered();

		return {
			status: 200,
			props: {
				posts: sortedPosts
			}
		};
	};
</script>

<script lang="ts">
	export let posts: Post[];
</script>

<svelte:head>
	<meta property="og:title" content="SK - Blog" />
	<meta property="og:description" content="Personal blog of SK" />
	<meta property="og:type" content="website" />
	<title>SK - Blog</title>
	<meta name="description" content="ersonal blog of SK" />
</svelte:head>

<div class="container">
	<div class="column">
		<div class="row">
			{#each posts as post}
				<div class="col-12 col-md-6 col-xl-4" class:visually-hidden={post.metadata.hidden}>
					<div class="card w-100">
						<div class="card-body">
							<h5 class="card-title">{post.metadata.title}</h5>
							<p class="card-text">
								{post.metadata.description ?? 'No description'}
							</p>
							<a href={post.path} class="btn btn-outline-primary">Read</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
