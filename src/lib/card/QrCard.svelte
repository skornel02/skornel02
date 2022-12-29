<script lang="ts">
	import {fade} from 'svelte/transition';
	import BusinessCard from './BusinessCard.svelte';
	import CardNavigation from './CardNavigation.svelte';
</script>

<svelte:head>
	<title>Stefán Kornél</title>
	<meta name="description" content="Physical personal information card" />
</svelte:head>


<div id="me-card" class="card" in:fade={{duration: 700, delay: 250}}>
    <BusinessCard />
    <hr>
    <div id="navigationSlot">
        <CardNavigation  home={true} card={false} details={true}/>
    </div>
</div>

<style lang="scss">
	#me-card {
		padding: 1rem;
	}
	hr {
		color: var(--color-secondary);
		opacity: unset;
	}
</style>
