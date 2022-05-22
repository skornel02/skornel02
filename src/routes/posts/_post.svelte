<!-- _post.svelte -->
<script>
	import Giscus from '@giscus/svelte'
	import 'github-markdown-css/github-markdown.css';
	import './prism.css';
	import './markers.scss';

	export let title;
	export let date;
	export let time;
	export let hidden;
	export let description;
	if (time === undefined) time = '12:00:00';
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:published_time" content={`${date}T${time}Z`} />
	<title>{title} - SK blog</title>
	<meta name="description" content={description} />
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
	<footer id="comments">
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
