<script lang="ts">
	import type {LayoutData} from './$types';
	import Header from '$lib/header/Header.svelte';
	import ShlinkTracker from '$lib/ShlinkTracker.svelte';
	import {Rss} from 'lucide-svelte';
	import {fade} from 'svelte/transition';
	import '../../app.css';

	export let data: LayoutData;
	const {route, shlinkUrl} = data;

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<meta property="og:url" content="{`https://skornel02.hu${route}`}" />
</svelte:head>

<Header />

{#key route}
	<main
		class="lg:pl-sideBar lg:pt-0"
		in:fade="{{duration: 150, delay: 100}}"
		out:fade="{{duration: 100}}"
	>
		<slot />
	</main>
{/key}

<footer
	id="footer"
	class="flex print:hidden flex-col justify-center items-center lg:pl-sideBar"
>
	<p>
		Have a nice day! • {year} © •
		<a href="/rss.xml">
			<Rss size="{16}" class="inline" />
		</a>
		<ShlinkTracker shlinkUrl="{shlinkUrl}" />
	</p>
</footer>

<style lang="scss">
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		p {
			margin: auto 0;
		}
		:global(svg) {
			color: orange;
			transition: 0.1s color;
		}
		:global(svg:hover) {
			color: darkred;
		}
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
