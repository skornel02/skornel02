<script context="module" lang="ts">
	import type {LoadEvent, LoadOutput} from '@sveltejs/kit';

	export const load = async ({url, fetch}: LoadEvent): Promise<LoadOutput> => {
		const route: string = url.pathname;
		let shlinkUrl: string | undefined = await loadShlinkUrl(route, fetch);

		return {
			props: {
				route,
				shlinkUrl,
			},
		};
	};
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import ShlinkTracker from '$lib/ShlinkTracker.svelte';
	import FaRssSquare from 'svelte-icons/fa/FaRssSquare.svelte';
	import {fade} from 'svelte/transition';
	import {loadShlinkUrl} from '$lib/layout-helper';
	import '../app.scss';

	export let route: string;
	export let shlinkUrl: string | undefined;

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<meta property="og:url" content="{`https://skornel02.hu${route}`}" />
</svelte:head>

<Header />

{#key route}
	<main in:fade="{{duration: 150, delay: 100}}" out:fade="{{duration: 100}}">
		<slot />
	</main>
{/key}

<footer
	id="footer"
	class="d-flex d-print-none flex-column justify-content-center align-items-center"
>
	<p>
		Have a nice day! • {year} © •
		<a href="/rss.xml">
			<FaRssSquare />
		</a>
		<ShlinkTracker shlinkUrl="{shlinkUrl}" />
	</p>
</footer>

<style lang="scss">
	@media (min-width: 992px) {
		:global(body) {
			padding-top: 0;
			padding-left: 17rem;
		}
	}

	main {
		padding-top: 54px;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer :global(svg) {
		color: orange;
		height: 16px;
		width: 16px;
		transition: 0.1s color;
	}

	footer :global(svg:hover) {
		color: darkred;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
