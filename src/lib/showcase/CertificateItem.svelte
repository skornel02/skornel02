<script lang="ts">
	import type { CertificateEntry } from '../../showcase';
	import ShowcaseFrame from './ShowcaseFrame.svelte';
	import { typeToIcon } from './showcaseHelper';
	import ShowcaseLink from './ShowcaseLink.svelte';

	export let certificate: CertificateEntry;
</script>

<ShowcaseFrame id={certificate.id}>	
	<div class="w-100 d-flex justify-content-between align-items-end">
		<div class="pe-2 me-auto w-100">
			<div class="fw-bold text-end">{certificate.title}</div>
			{#each certificate.links as link}
				<ShowcaseLink {link} />
			{/each}
		</div>
	</div>
	<div class:highlight={certificate.id !== undefined} class="icon text-secondary mx-1">
		<svelte:component this={typeToIcon(certificate.icon)} />
	</div>
</ShowcaseFrame>
