<script lang="ts">
	import {Home, QrCode, List} from 'lucide-svelte';

	export let home = true;
	export let details = true;
	export let card = true;
</script>

<div class="flex justify-center">
	<div class="btn-group">
		{#if card}
			<a id="home" href="/card" class="btn btn-outline btn-secondary">
				<QrCode size="{32}" />
			</a>
		{:else if details}
			<a id="details" href="/me" class="btn btn-outline btn-secondary">
				<List size="{32}" />
			</a>
		{/if}
		{#if home}
			<a id="home" href="/" class="btn btn-outline btn-secondary" data-sveltekit-reload>
				<Home size="{32}" />
			</a>
		{/if}
	</div>
</div>

<style lang="scss">
	a:hover {
		background-color: var(--color-primary) !important;
	}
</style>
