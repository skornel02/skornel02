<script lang="ts">
	import Face from '$lib/header/Face.svelte';
	import CardContacts from './CardContacts.svelte';
	import CardTitle from './CardTitle.svelte';
	import {fade, type FadeParams} from 'svelte/transition';
	import CardNavigation from './CardNavigation.svelte';

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

<div id="me-card" class="card" class:card-loaded="{loaded}" in:fade={{delay: 200}} out:fade={{duration: 150}}>
	<div id="nameSlot">
		<CardTitle on:load="{onLoad}" />
	</div>
	{#if loaded}
		<hr in:fade="{fadeParams}" />
		<div id="faceSlot" class="mx-auto" in:fade="{fadeParams}">
			<Face class="img-fluid img-profile rounded" />
		</div>
		<hr in:fade="{fadeParams}" />
		<div id="contactSlot" in:fade="{fadeParams}">
			<CardContacts />
		</div>
		<hr in:fade="{fadeParams}" />
		<div id="navigationSlot" in:fade="{fadeParams}">
			<CardNavigation home={true} card={true} details={false}/>
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
		:global(.img-profile) {
			border: 0.2rem solid var(--color-primary);
		}
	}
	#navigationSlot {

	}
	hr {
		color: var(--color-secondary);
		opacity: unset;
	}
</style>
