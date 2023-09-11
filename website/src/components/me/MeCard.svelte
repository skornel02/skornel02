<script lang="ts">
	import CardTitle from './CardTitle.svelte';
	import {fade, type FadeParams} from 'svelte/transition';

	const fadeParams: FadeParams = {
		duration: 750,
		delay: 200,
	};

	let loaded = false;

	const onLoad = () => {
		loaded = true;
	};
</script>

<svelte:head>
	<title>Stefán Kornél</title>
	<meta name="description" content="Digital personal information card" />
</svelte:head>

<div class="card w-80 sm:w-96 bg-base-100 m-auto z-10" in:fade={{delay: 200}} out:fade={{duration: 150}}>
	<div class="card-body" class:card-loaded={loaded}>
		<div id="nameSlot" class="sm:card-title justify-center">
			<CardTitle on:load={onLoad} />
		</div>
		{#if loaded}
			<hr in:fade={fadeParams} />
			<div id="faceSlot" class="mx-auto avatar ring ring-primary rounded" in:fade={fadeParams}>
				<!-- <Face class="rounded ring-offset-base-100 ring-offset-2" /> -->
				<slot name="face" />
			</div>
			<hr in:fade={fadeParams} />
			<div class="flex justify-center items-center" in:fade={fadeParams}>
				<slot name="contacts" />
				<!-- <CardContacts /> -->
			</div>
			<hr in:fade={fadeParams} />
			<div id="navigationSlot" in:fade={fadeParams}>
				<slot name="navigation" />
			</div>
		{/if}
	</div>
</div>

<style>
	.card-body {
		border-color: var(--color-secondary);
		height: fit-content;
		max-height: 100px;
		transition: max-height 0.5s;
	}
	.card-loaded {
		max-height: 800px;
	}
	#nameSlot {
		height: 3rem;
	}
	hr {
		color: #f00;
		border: 0;
		height: 1px;
	}
</style>
