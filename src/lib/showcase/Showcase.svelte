<script lang="ts">
	import { showcase } from '../../showcase';
	import ShowcaseItem from './ShowcaseItem.svelte';

	const orderedItems = showcase.sort((a, b) => {
		const aDate = new Date(a.date);
		const bDate = new Date(b.date);
		return bDate.getTime() - aDate.getTime();
	});
</script>

<ul class="list-group">
	{#each orderedItems as item}
		<ShowcaseItem {item} />
	{/each}
</ul>

<style>
	:global(.file) {
		display: inline-block;
		width: 16px;
		height: 16px;
	}
</style>
