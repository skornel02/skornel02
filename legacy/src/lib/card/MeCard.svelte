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

<div class="card w-80 sm:w-96 bg-base-100 m-auto" in:fade="{{delay: 200}}" out:fade="{{duration: 150}}">
	<div class="card-body" class:card-loaded="{loaded}">
		<div id="nameSlot" class="sm:card-title">
			<CardTitle on:load="{onLoad}" />
		</div>
		{#if loaded}
			<hr in:fade="{fadeParams}" />
			<div id="faceSlot" class="mx-auto avatar ring ring-primary rounded" in:fade="{fadeParams}">
				<Face class="rounded ring-offset-base-100 ring-offset-2" />
			</div>
			<hr in:fade="{fadeParams}" />
			<div id="contactSlot" in:fade="{fadeParams}">
				<CardContacts />
			</div>
			<hr in:fade="{fadeParams}" />
			<div id="navigationSlot" in:fade="{fadeParams}">
				<CardNavigation home="{true}" card="{true}" details="{false}" />
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
