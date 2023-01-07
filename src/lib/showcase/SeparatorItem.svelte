<script lang="ts">
	import type {SeparatorEntry} from '../../showcase';
	import ShowcaseFrame from './ShowcaseFrame.svelte';

	export let separator: SeparatorEntry;
</script>

<ShowcaseFrame>
	<div class="w-full text-center text-secondary font-bold divider">
		{separator.text}
	</div>
</ShowcaseFrame>
