<script lang="ts">
	import {fade} from 'svelte/transition';
	import BusinessCard from './BusinessCard.svelte';
	import CardNavigation from './CardNavigation.svelte';
</script>

<svelte:head>
	<title>Stefán Kornél</title>
	<meta name="description" content="Physical personal information card" />
</svelte:head>


<div class="card w-80 sm:w-96 bg-base-100 m-auto"  in:fade={{duration: 700, delay: 250}} out:fade={{duration: 150}}>
	<div class="card-body">
		<BusinessCard />
		<hr>
		<div id="navigationSlot">
			<CardNavigation  home={true} card={false} details={true}/>
		</div>
	</div>
</div>

<style lang="scss">
	hr {
		color: var(--color-secondary);
		opacity: unset;
	}
</style>
