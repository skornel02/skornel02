<script lang="ts">
	import {showcase} from '../../showcase';
	import ShowcaseItem from './ShowcaseItem.svelte';

	const orderedItems = showcase.sort((a, b) => {
		const aDate = new Date(a.date);
		const bDate = new Date(b.date);
		return bDate.getTime() - aDate.getTime();
	});
</script>

<ul class="flex flex-col px-0 rounded-sm print:block">
	{#each orderedItems as item}
		<ShowcaseItem item="{item}" />
	{/each}
</ul>

<div id="showcase-modal" class="modal">
	<div class="modal-box relative">
		<label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<label for="showcase-modal" class="btn">Yay!</label>
		</div>
	</div>
</div>

<style>
	:global(.file) {
		display: inline-block;
		width: 16px;
		height: 16px;
	}
</style>
