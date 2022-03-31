<!-- _post.svelte -->
<script>
	import './prism-vsc-dark-plus.css';
    import './markers.scss';
	import './modest.scss';

	export let title;
	export let description;
	export let date;
	export let time;
	export let hidden;
	if (time === undefined) time = '12:00:00';
</script>

<svelte:head>
	<title>SK - {title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:published_time" content={`${date}T${time}Z`} />
	{#if hidden}
	<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<article class="container">
	<h1>{title}</h1>

	<div class="col">
		<div class="row">
			<div class="col-9 d-flex">
				<p class="my-auto">Published: {date}</p>
			</div>
			<div class="col-3">
				<a href="/posts" class="btn btn-outline-dark"> Back </a>
			</div>
		</div>
	</div>
	<p class="lead">
		{description}
	</p>
	<hr />

	<slot />
</article>

<style>
	@media print {
		article a{
			display: none;
		}
	}
</style>