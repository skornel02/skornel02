<script context="module">
	export const prerender = false;
</script>

<script lang="ts">
	export let shlinkUrl: string | undefined;
</script>

{#if shlinkUrl}
	<img src="{shlinkUrl}" alt="" />
{/if}

<style>
	img {
		width: 1px;
		height: 1px;
	}
</style>
