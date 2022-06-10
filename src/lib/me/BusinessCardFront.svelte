<script lang="ts">
	const DEBUG: boolean = true;
</script>

<svg width="91mm" height="61mm" viewBox="0 0 91 61" preserveAspectRatio="none">
	{#if DEBUG}
		<rect x="0" y="0" width="91" height="61" fill="red"></rect>
		<rect x="3" y="3" width="85" height="55" fill="white"></rect>
		<rect x="5" y="5" width="81" height="51" fill="blue"></rect>
	{/if}
</svg>
