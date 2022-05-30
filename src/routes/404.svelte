<script lang="ts">
	const totalCounter = 5;
	let counter = totalCounter;
	setInterval(() => {
		counter--;
	}, 1000);
</script>

<div id="content">
	<h2>Page not found!</h2>
	<p>Redirecting to main page in {counter}...</p>
</div>

<svelte:head>
	<meta http-equiv="refresh" content="{totalCounter}; url=/" />
</svelte:head>

<style>
	#content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		min-height: 75vh;
		max-height: 100vh;
	}
</style>
