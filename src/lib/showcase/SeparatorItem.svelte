<script lang="ts">
	import type {SeparatorEntry} from '../../showcase';
	import ShowcaseFrame from './ShowcaseFrame.svelte';

	export let separator: SeparatorEntry;
</script>

<ShowcaseFrame>
	<div class="w-100 text-center text-secondary fw-bold">
		<p>
			{separator.text}
		</p>
	</div>
</ShowcaseFrame>

<style>
	p {
		margin-bottom: 0;
	}
</style>
