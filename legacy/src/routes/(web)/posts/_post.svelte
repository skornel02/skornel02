<script>
	import Giscus from '@giscus/svelte';
	import 'github-markdown-css/github-markdown.css';
	import './prism.css';
	import './markers.css';

	/**
	 * @type {import('$lib/posts').Metadata}
	 */
	let {title, date, time, description, hidden} = $$props;

	if (time === undefined) time = '12:00:00';
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{title}" />
	<meta property="og:published_time" content="{`${date}T${time}Z`}" />
	<title>{title} - SK blog</title>
	<meta name="description" content="{description}" />
	{#if hidden}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<main class="container">
	<header>
		<div class="flex my-2">
			<div class="w-3/4 flex">
				<p class="my-auto">Published: {date}</p>
			</div>
			<div class="w-1/4 flex justify-end">
				<a href="/posts" class="d-block m-auto btn btn-outline btn-secondary print:hidden">
					Back
				</a>
			</div>
		</div>
	</header>
	<div class="divider">{title}</div>
	<article class="markdown-body">
		<slot />
	</article>
	<hr />
	<footer id="comments" class="print:hidden">
		<Giscus
			repo="skornel02/skornel02"
			repoId="R_kgDOG9KgxQ"
			category="Comment section"
			categoryId="DIC_kwDOG9Kgxc4CPOyt"
			mapping="title"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			theme="preferred_color_scheme"
			loading="lazy"
			lang="en"
		/>
	</footer>
</main>

<style>
	@media print {
		article :global(a) {
			display: none;
		}
	}
</style>
