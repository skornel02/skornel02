<script lang="ts">
	import type {CertificateEntry} from '../../showcase';
	import ShowcaseFrame from './ShowcaseFrame.svelte';
	import {typeToIcon} from './showcase-helper';
	import ShowcaseLink from './ShowcaseLink.svelte';

	export let certificate: CertificateEntry;
</script>

<ShowcaseFrame id="{certificate.id}">
	<div class="flex flex-wrap">
		<div class="w-full flex justify-center order-1 sm:order-2">
			<div class="flex-grow-0 sm:flex-grow mr-auto basis-0"></div>
			<div class="flex justify-center">
				<div class:highlight="{certificate.id !== undefined}" class="icon text-warning mx-4">
					<svelte:component this="{typeToIcon(certificate.icon)}" size="{32}" />
				</div>
			</div>
			<div class="flex-grow basis-0 ml-auto">
				<p class="text-end">
					<small>
						{certificate.date}
					</small>
				</p>
			</div>
		</div>
		<div class="w-full my-1 order-2 sm:order-1">
			<div class="font-bold text-title text-center">{certificate.title}</div>
		</div>
	</div>
	<div class="flex flex-wrap">
		<div
			class="hidden sm:block w-full sm:w-1/2 justify-center sm:justify-start"
		></div>
		<div
			class="w-full sm:w-1/2 flex print:hidden justify-center sm:justify-end mt-1"
		>
			{#each certificate.links as link}
				<ShowcaseLink link="{link}" />
			{/each}
		</div>
	</div>
</ShowcaseFrame>
