<script lang="ts">
	import Face from '$lib/header/Face.svelte';
	import BusinessCard from './BusinessCard.svelte';
import MeBackground from './MeBackground.svelte';
</script>

<svelte:head>
    <title>Stefán Kornél</title>
</svelte:head>


<div class="card">
	<div id="faceSlot" class="mx-auto">
		<Face class="img-fluid img-profile rounded" />
	</div>
	<div id="cardSlot" class="mx-auto">
		<BusinessCard />
	</div>
</div>

<MeBackground />

<style lang="scss">
	.card {
		border-color: var(--color-secondary);
	}
	#faceSlot {
		margin-top: 1rem;
		width: 128px;
		:global(.img-profile) {
			border: 0.2rem solid var(--color-primary);
		}
	}
	#cardSlot {
		padding: 1rem;
		perspective: 1000px;
		width: 100%;
		max-width: 320px;
		:global(svg) {
			width: 100%;
			height: 100%;
		}
	}
</style>
