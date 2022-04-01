<script lang="ts">
	import Award from '$lib/awards/Award.svelte';
	import ImageModal from '$lib/ImageModal.svelte';
	import FaTrophy from 'svelte-icons/fa/FaTrophy.svelte';
	import FaMedal from 'svelte-icons/fa/FaMedal.svelte';
	import FaCertificate from 'svelte-icons/fa/FaCertificate.svelte';
	import FaFile from 'svelte-icons/fa/FaFile.svelte';
	import FaGlobe from 'svelte-icons/fa/FaGlobe.svelte';
	import { awards } from '../../awards';
import PdfModal from '$lib/PdfModal.svelte';

	const typeToIcon = (type: string): typeof FaTrophy => {
		switch (type) {
			case 'trophy':
				return FaTrophy;
			case 'medal':
				return FaMedal;
			case 'certificate':
				return FaCertificate;
			case 'file':
				return FaFile;
			case 'globe':
				return FaGlobe;
			default:
				return FaFile;
		}
	};

	const orderedAwards = awards.sort((a, b) => {
		const aDate = new Date(a.date);
		const bDate = new Date(b.date);
		return bDate.getTime() - aDate.getTime();
	});
</script>

<ul class="list-group">
	{#each orderedAwards as award}
		<Award id={award.id}>
			<svelte:component this={typeToIcon(award.icon)} slot="icon" />
			<svelte:fragment slot="badge">{award.placement}</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="fw-bold">{award.title}</div>
				{#each award.links as link}
					{#if link.srcset !== undefined}
						<ImageModal location={link.url} srcset={link.srcset}>
							<div class="file">
								<svelte:component this={typeToIcon(link.icon)} slot="icon" />
							</div>
							{link.text}
						</ImageModal>
                    {:else if link.pdf}
                        <PdfModal location={link.url}>
                            <div class="file">
								<svelte:component this={typeToIcon(link.icon)} slot="icon" />
							</div>
							{link.text}
                        </PdfModal>
					{:else}
						<a
							href={link.url}
							target="_blank"
							rel="noopener"
						>
							<div class="file">
								<svelte:component this={typeToIcon(link.icon)} slot="icon" />
							</div>
							{link.text}
						</a>
					{/if}
				{/each}
			</svelte:fragment>
		</Award>
	{/each}
</ul>

<style>
	.file {
		display: inline-block;
		width: 16px;
		height: 16px;
	}
</style>
