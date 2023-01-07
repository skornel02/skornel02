<script lang="ts">
	import type {AwardEntry} from '../../showcase';
	import ShowcaseFrame from './ShowcaseFrame.svelte';
	import {typeToIcon} from './showcase-helper';
	import ShowcaseLink from './ShowcaseLink.svelte';
	import TeamMember from './TeamMember.svelte';

	export let award: AwardEntry;
</script>

<ShowcaseFrame id="{award.id}">
	<div class="flex flex-wrap">
		<div class="w-full flex justify-center order-1 sm:order-2">
			<div class="flex-grow-0 sm:flex-grow mr-auto basis-0"></div>
			<div class="flex justify-center">
				<div class:highlight="{award.id !== undefined}" class="icon text-warning mx-1">
					<svelte:component this="{typeToIcon(award.icon)}" size="{32}"/>
				</div>
				<div>
					<span class="badge bg-primary rounded">
						{award.placement}
					</span>
				</div>
			</div>
			<div class="flex-grow basis-0 ml-auto">
				<p class="text-end text-title">
					<small>
						{award.date}
					</small>
				</p>
			</div>
		</div>
		<div class="w-full my-1 order-2 sm:order-1">
			<div class="font-bold text-title text-center">{award.title}</div>
		</div>
	</div>
	<div class="flex flex-wrap">
		<div class="w-full sm:w-1/2 flex justify-center sm:justify-start teams">
			{#if Array.isArray(award.team)}
				<p class="font-light text-title">Team:</p>
				{#each award.team as member}
					<TeamMember member="{member}" />
				{/each}
			{/if}
		</div>
		<div
			class="w-full sm:w-1/2 flex print:hidden justify-center sm:justify-end mt-1"
		>
			{#each award.links as link}
				<ShowcaseLink link="{link}" />
			{/each}
		</div>
	</div>
</ShowcaseFrame>

<style>
	@keyframes highlight {
		0% {
			transform: none;
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: none;
		}
	}

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
