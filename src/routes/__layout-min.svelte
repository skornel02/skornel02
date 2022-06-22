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
	import ShlinkTracker from '$lib/ShlinkTracker.svelte';
	import {fade} from 'svelte/transition';
	import '../app.scss';
	import {loadShlinkUrl} from '$lib/layout-helper';

	export let route: string;
	export let shlinkUrl: string | undefined;
</script>

<svelte:head>
	<meta property="og:url" content="{`https://skornel02.hu${route}`}" />
</svelte:head>

{#key route}
	<main in:fade="{{duration: 150, delay: 100}}" out:fade="{{duration: 100}}">
		<slot />
	</main>
{/key}

<ShlinkTracker shlinkUrl="{shlinkUrl}" />