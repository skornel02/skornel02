<script lang="ts">
	import type {LayoutData} from './$types';
	import ShlinkTracker from '$lib/ShlinkTracker.svelte';
	import {fade} from 'svelte/transition';
	import '../../app.scss';

	export let data: LayoutData;
	const {route, shlinkUrl} = data;
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
