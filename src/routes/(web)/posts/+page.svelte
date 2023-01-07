<script lang="ts">
	import type {PageData} from './$types';
	import Fuse from 'fuse.js';

	export let data: PageData;

	let postsShown = data.posts;

	const searchOptions = {
		includeScore: true,
		keys: [
			{name: 'metadata.title', weight: 0.8},
			{name: 'metadata.description', weight: 0.2},
		],
	};
	let search = "";
	const fuse = new Fuse(data.posts, searchOptions);

	$: {
		if (search !== '') {
			const result = fuse.search(search);
			postsShown = result.map((r) => r.item);
		} else {
			postsShown = data.posts;
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
	<h1 class="text-4xl text-center">Blog Posts</h1>
	<div class="divider" >Search</div>
	<div id="search">
		<input  
			bind:value="{search}"
			class="input input-bordered w-full "
			type="text"
			placeholder="Title..."
		/>
	</div>
	<div class="divider" >Posts</div>
	<div class="d-flex flex-column">
		{#each postsShown as post, index}
			<div id="post-{index}" class="w-100 flex flex-col p-4">
				<h2 class="text-xl">
					{post.metadata.title}
				</h2>
				<p>
					{post.metadata.description ?? 'No description'}
				</p>
				<div class="flex justify-end">
					<div class="flex flex-col">
						<a href="{post.path}" class="btn btn-outline btn-primary">Read</a>
						<p>{new Date(post.metadata.date).toLocaleDateString()}</p>
					</div>
				</div>
				<div class="divider"/>
			</div>
		{/each}
	</div>
</div>
