<script lang="ts">
	import {Github, Facebook, Mail} from 'lucide-svelte';
</script>

<div class="column">
	<div class="row">
		<div class="col-12 col-sm-8 offset-0 offset-sm-2 py-1">
			<a
				id="gh"
				href="https://github.com/skornel02"
				target="_blank"
				rel="noreferrer noopener"
				class="btn btn-secondary"
			>
				<Github size="{32}" />
				<span> Github </span>
			</a>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-sm-8 offset-0 offset-sm-2 py-1">
			<a
				id="fb"
				href="https://www.facebook.com/stefankornel02"
				target="_blank"
				rel="noreferrer noopener"
				class="btn btn-secondary"
			>
				<Facebook size="{32}" fill="grey" />

				<span> Facebook </span>
			</a>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-sm-8 offset-0 offset-sm-2 py-1">
			<a id="mail" href="mailto:contact@skornel02.hu" class="btn btn-secondary">
				<Mail size="{32}" color="red" />

				<span> Email </span>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		font-weight: bold;
	}
	#gh {
		color: #171515;
		background-color: white !important;
	}
	#fb {
		color: white;
		background-color: #4267b2 !important;
	}
	#mail {
		color: black;
		background-color: white !important;
	}
	span {
		width: 100px;
		text-align: center;
	}
</style>
