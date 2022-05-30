<script lang="ts" context="module">
	import type {LoadEvent, LoadOutput} from '@sveltejs/kit';

	export const load = async (a: LoadEvent): Promise<LoadOutput> => {
		try {
			let Thing = (await import(`../../posts/${a.params.post}.md`)).default;
			return {
				status: 200,
				props: {
					comp: Thing,
				},
			};
		} catch (ex) {
			return {
				status: 404,
			};
		}
	};
</script>

<script lang="ts">
	import type {SvelteComponent} from 'svelte';

	export let comp: SvelteComponent;
</script>

<svelte:component this="{comp}" />
