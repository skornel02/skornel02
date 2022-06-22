<script lang="ts">
	import Face from '$lib/header/Face.svelte';
	import BusinessCard from './BusinessCard.svelte';
	import CardContacts from './CardContacts.svelte';
	import CardTitle from './CardTitle.svelte';
	import MeBackground from './MeBackground.svelte';

	let hidden = true;

	const onLoad = () => {
		hidden = false;
	};
</script>

<svelte:head>
	<title>Stefán Kornél</title>
	<meta name="description" content="Digital personal information card" />
</svelte:head>

<MeBackground />
<div id="me-card" class="card">
	<div id="nameSlot">
		<CardTitle on:load="{onLoad}" />
	</div>
	<div id="faceSlot" class="mx-auto">
		<Face class="img-fluid img-profile rounded" />
	</div>
	<hr />
	<div id="contactSlot">
		<CardContacts />
	</div>
	<hr class="opacity-0" class:opacity-100="{!hidden}" />
	<div id="cardSlot" class="mx-auto opacity-0" class:opacity-100="{!hidden}">
		<BusinessCard />
	</div>
</div>

<style lang="scss">
	#me-card {
		padding: 1rem;
		div,
		hr {
			transition: 0.75s opacity;
		}
	}
	.card {
		border-color: var(--color-secondary);
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
