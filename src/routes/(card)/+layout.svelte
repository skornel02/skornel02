<script lang="ts">
	import type {LayoutData} from './$types';
	import ShlinkTracker from '$lib/ShlinkTracker.svelte';
	import {fade} from 'svelte/transition';
	import MeBackground from '$lib/card/CardBackground.svelte';
	import '../../app.css';

	export let data: LayoutData;
	const {route, shlinkUrl} = data;
</script>

<svelte:head>
	<meta property="og:url" content="{`https://skornel02.hu${route}`}" />
</svelte:head>

{#key route}
	<main class="container mx-auto" in:fade="{{duration: 150, delay: 100}}" out:fade="{{duration: 100}}">
		<div class="column">
			<div class="row">
				<div class="d-none d-sm-block col-sm-2 col-md-3 col-xl-4"></div>
				<div id="content" class="col-12 col-sm-8 col-md-6 col-xl-4">
					<MeBackground />
					<slot />
				</div>
				<div class="d-none d-sm-block col-sm-2 col-md-3 col-xl-4"></div>
			</div>
		</div>
	</main>
{/key}

<ShlinkTracker shlinkUrl="{shlinkUrl}" />

<style lang="scss">
	#content {
		padding: 2rem 1rem;
		min-width: 320px;
	}
</style>
