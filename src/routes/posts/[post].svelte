<script lang="ts" context="module">
	export const load = async (a) => {
		try {
			let Thing = (await import(`../../posts/${a.params.post}.md`)).default;
			return {
				status: 200,
				props: {
					comp: Thing
				}
			};
		} catch (ex) {
			return {
				status: 404,
			};
		}
	};
</script>

<script>
	export let comp;
</script>

<svelte:component this={comp} />