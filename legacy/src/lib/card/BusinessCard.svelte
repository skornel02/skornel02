<script>
	import BusinessCardBack from './BusinessCardBack.svelte';
	import BusinessCardFront from './BusinessCardFront.svelte';
</script>

<div class="card-container">
	<div class="row">
		<div class="col">
			<div class="flip-container">
				<div class="flipper">
					<div class="front">
						<BusinessCardFront />
					</div>
					<div class="back">
						<BusinessCardBack />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/** https://stackoverflow.com/a/43541472 */

	.card-container {
		width: 100%; /* Adjust the target width*/
	}
	.flip-container {
		position: relative;
		perspective: 1000px;
	}

	/* flip the pane when hovered */
	.flip-container:hover .flipper {
		transform: rotateY(180deg);
	}

	.flip-container,
	.front,
	.back {
		width: 100%;
		height: 180px;
		display: flex;
		justify-content: center;
	}

	/* flip speed goes here */
	.flipper {
		transition: 0.9s;
		transform-style: preserve-3d;
		position: relative;
	}

	/* hide back of pane during swap */
	.front,
	.back {
		backface-visibility: hidden;
		position: absolute;
		top: 0;
		left: 0;
	}

	/* front pane, placed above back */
	.front {
		z-index: 2;
		/* for firefox 31 */
		transform: rotateY(0deg);
	}

	/* back, initially hidden pane */
	.back {
		transform: rotateY(180deg);
	}
</style>
