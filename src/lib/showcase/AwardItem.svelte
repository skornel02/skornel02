<script lang="ts">
	import type {AwardEntry} from '../../showcase';
	import ShowcaseFrame from './ShowcaseFrame.svelte';
	import {typeToIcon} from './showcase-helper';
	import ShowcaseLink from './ShowcaseLink.svelte';
	import TeamMember from './TeamMember.svelte';

	export let award: AwardEntry;
</script>

<ShowcaseFrame id="{award.id}">
	<div class="row">
		<div class="col-12 d-flex justify-content-center order-0 order-sm-1">
			<div class="flex-grow-0 flex-sm-grow-1 mr-auto" style="flex-basis: 0;"></div>
			<div class="d-flex justify-content-center">
				<div class:highlight="{award.id !== undefined}" class="icon text-warning mx-1">
					<svelte:component this="{typeToIcon(award.icon)}" size="{32}"/>
				</div>
				<div>
					<span class="badge bg-primary rounded-pill">
						{award.placement}
					</span>
				</div>
			</div>
			<div class="flex-grow-1 ml-auto" style="flex-basis: 0;">
				<p class="text-end">
					<small>
						{award.date}
					</small>
				</p>
			</div>
		</div>
		<div class="col-12 my-1 order-1 order-sm-0">
			<div class="fw-bold text-center">{award.title}</div>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start teams">
			{#if Array.isArray(award.team)}
				<p class="fw-light">Team:</p>
				{#each award.team as member}
					<TeamMember member="{member}" />
				{/each}
			{/if}
		</div>
		<div
			class="col-12 col-sm-6 d-flex d-print-none justify-content-center justify-content-sm-end mt-1"
		>
			{#each award.links as link}
				<ShowcaseLink link="{link}" />
			{/each}
		</div>
	</div>
</ShowcaseFrame>

<style>
	.icon {
		min-width: 32px;
		min-height: 32px;
	}

	.badge {
		min-width: 80px;
	}

	.icon.highlight {
		animation-name: highlight;
		animation-iteration-count: infinite;
		animation-duration: 2s;
	}

	.teams > p {
		line-height: 40px;
		margin: 0;
	}
</style>
