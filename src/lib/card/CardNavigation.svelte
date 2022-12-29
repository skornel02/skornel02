<script lang="ts">
	import {Home, QrCode, List} from 'lucide-svelte';

	export let home = true;
	export let details = true;
	export let card = true;
</script>

<div class="column">
	<div class="row">
		<div class="col-12 d-flex justify-content-center">
			{#if card}
				<a id="home" href="/card" class="btn btn-secondary mx-1">
					<QrCode size="{32}" />
				</a>
			{:else if details}
				<a id="details" href="/me" class="btn btn-secondary mx-1">
					<List size="{32}" />
				</a>
			{/if}
			{#if home}
				<a id="home" href="/" class="btn btn-secondary mx-1" data-sveltekit-reload>
					<Home size="{32}" />
				</a>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	a:hover {
		background-color: var(--color-primary) !important;
	}
</style>