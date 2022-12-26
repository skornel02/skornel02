<script lang="ts">
	import Face from '$lib/header/Face.svelte';
	import BusinessCard from './BusinessCard.svelte';
	import CardContacts from './CardContacts.svelte';
	import CardTitle from './CardTitle.svelte';
	import MeBackground from './MeBackground.svelte';
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

<MeBackground />
<div id="me-card" class="card" class:card-loaded="{loaded}">
	<div id="nameSlot">
		<CardTitle on:load="{onLoad}" />
	</div>
	{#if loaded}
		<div id="faceSlot" class="mx-auto" in:fade="{fadeParams}">
			<Face class="img-fluid img-profile rounded" />
		</div>
		<hr in:fade="{fadeParams}" />
		<div id="contactSlot" in:fade="{fadeParams}">
			<CardContacts />
		</div>
		<hr in:fade="{fadeParams}" />
		<div id="cardSlot" class="mx-auto" in:fade="{fadeParams}">
			<BusinessCard />
		</div>
	{/if}
</div>

<style lang="scss">
	#me-card {
		padding: 1rem;
	}
	.card {
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
	#faceSlot {
		width: 128px;
		:global(.img-profile) {
			border: 0.2rem solid var(--color-primary);
		}
	}
	#cardSlot {
		padding: 0 1rem;
		perspective: 1000px;
		width: 100%;
		max-width: 320px;
		:global(svg) {
			width: 100%;
			height: 100%;
		}
	}
	hr {
		color: var(--color-secondary);
		opacity: unset;
	}
</style>
