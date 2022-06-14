<script lang="ts">
	import type {CertificateEntry} from '../../showcase';
	import ShowcaseFrame from './ShowcaseFrame.svelte';
	import {typeToIcon} from './showcase-helper';
	import ShowcaseLink from './ShowcaseLink.svelte';

	export let certificate: CertificateEntry;
</script>

<ShowcaseFrame id="{certificate.id}">
	<div class="row">
		<div class="col-12 d-flex justify-content-center order-0 order-sm-1">
			<div class="flex-grow-0 flex-sm-grow-1 mr-auto" style="flex-basis: 0;">

			</div>
			<div class="d-flex justify-content-center">
				<div class:highlight="{certificate.id !== undefined}" class="icon text-warning mx-4">
					<svelte:component this="{typeToIcon(certificate.icon)}" />
				</div>
			</div>
			<div class="flex-grow-1 ml-auto" style="flex-basis: 0;">
				<p class="text-end">
					<small>
						{certificate.date}
					</small>
				</p>
			</div>
		</div>
		<div class="col-12 my-1 order-1 order-sm-0">
			<div class="fw-bold text-center">{certificate.title}</div>
		</div>
	</div>
	<div class="row">
		<div
			class="d-none d-sm-block col-sm-6 d-flex justify-content-center justify-content-sm-start teams"
		></div>
		<div class="col-12 col-sm-6 d-flex d-print-none justify-content-center justify-content-sm-end mt-1">
			{#each certificate.links as link}
				<ShowcaseLink link="{link}" />
			{/each}
		</div>
	</div>
</ShowcaseFrame>
