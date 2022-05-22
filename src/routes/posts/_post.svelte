<!-- _post.svelte -->
<script>
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { onDestroy, onMount } from 'svelte';
	import 'github-markdown-css/github-markdown.css';
	import './prism.css';
	import './markers.scss';

	export let title;
	export let date;
	export let time;
	export let hidden;
	if (time === undefined) time = '12:00:00';

	onMount(() => {
		if (document !== undefined) {
			document
				.querySelector("meta[property='og:title']")
				.setAttribute('property', 'disabled:og:title');
			document
				.querySelector("meta[property='og:type']")
				.setAttribute('property', 'disabled:og:type');
			document.querySelector("meta[property='og:url']").setAttribute('property', 'disabled:og:url');
		}
	});
	onDestroy(() => {
		if (browser) {
			document
				.querySelector("meta[property='disabled:og:title']")
				.setAttribute('property', 'og:title');
			document
				.querySelector("meta[property='disabled:og:type']")
				.setAttribute('property', 'og:type');
			document.querySelector("meta[property='disabled:og:url']").setAttribute('property', 'og:url');
		}
	});
</script>

<svelte:head>
	<title>SK - {title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:url" content={`https://skornel02.hu${$page.url.pathname}`} />
	<meta property="og:published_time" content={`${date}T${time}Z`} />
	{#if hidden}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<main class="container">
	<header>
		<div class="row">
			<div class="col-9 d-flex">
				<p class="my-auto">Published: {date}</p>
			</div>
			<div class="col-3">
				<a href="/posts" class="d-block m-auto btn btn-outline-dark"> Back </a>
			</div>
		</div>
	</header>
	<hr />
	<article class="markdown-body">
		<slot />
	</article>
	<hr />
	<footer>
		<script
			src="https://utteranc.es/client.js"
			repo="skornel02/skornel02"
			issue-term="pathname"
			label="comment section"
			theme="preferred-color-scheme"
			crossorigin="anonymous"
			async>
		</script>
	</footer>
</main>

<style>
	@media print {
		header a {
			display: none;
		}
		article :global(a) {
			display: none;
		}
		footer {
			display: none;
		}
	}
</style>
