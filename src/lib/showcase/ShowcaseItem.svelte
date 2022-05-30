<script lang="ts">
	import type {AwardEntry, CertificateEntry, SeparatorEntry} from '../../showcase';
	import AwardItem from './AwardItem.svelte';
	import CertificateItem from './CertificateItem.svelte';
	import SeparatorItem from './SeparatorItem.svelte';

	export let item: AwardEntry | CertificateEntry | SeparatorEntry;
</script>

{#if item.type === 'award'}
	<AwardItem award="{item}" />
{:else if item.type === 'certificate'}
	<CertificateItem certificate="{item}" />
{:else if item.type === 'separator'}
	<SeparatorItem separator="{item}" />
{/if}
