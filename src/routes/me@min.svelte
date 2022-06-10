<script lang="ts">
	import MeCard from '$lib/me/MeCard.svelte';
</script>

<div class="container mx-auto">
	<div class="column">
		<div class="row">
			<div class="d-none d-sm-block col-sm-2 col-md-3 col-lg-4"></div>
			<div id="content" class="col-12 col-sm-8 col-md-6 col-lg-4">
				<MeCard />
			</div>
			<div class="d-none d-sm-block col-sm-2 col-md-3 col-lg-4"></div>
		</div>
	</div>
</div>

<style lang="scss">
	#content {
		padding: 2rem 1rem;
        min-width: 320px;
	}
</style>
