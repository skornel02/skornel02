<script lang="ts">
	import type { AwardEntry } from '../../showcase';
	import ShowcaseFrame from './ShowcaseFrame.svelte';
	import { typeToIcon } from './showcaseHelper';
	import ShowcaseLink from './ShowcaseLink.svelte';

	export let award: AwardEntry;
</script>

<ShowcaseFrame id={award.id}>
	<div class:highlight={award.id !== undefined} class="icon text-warning mx-1">
		<svelte:component this={typeToIcon(award.icon)} />
	</div>
	<span class="badge bg-primary rounded-pill">
		{award.placement}
	</span>
	<div class="w-100 d-flex justify-content-between align-items-start">
		<div class="ps-2 w-100">
			<div class="fw-bold">{award.title}</div>
			<div class="d-flex justify-content-end">
				{#each award.links as link}
					<ShowcaseLink {link} />
				{/each}
			</div>
		</div>
	</div>
</ShowcaseFrame>

<style>
	.icon {
		display: inline-block;
		width: 32px;
		height: 32px;
	}

	.badge {
		min-width: 80px;
	}

	.icon.highlight {
		animation-name: highlight;
		animation-iteration-count: infinite;
		animation-duration: 2s;
	}
</style>
