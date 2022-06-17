<script lang="ts">
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
</script>

<div class="column">
	<div class="row">
		<div class="col-12 col-sm-8 offset-0 offset-sm-2 py-1">
			<a id="gh" href="https://github.com/skornel02" target="_blank" class="btn btn-secondary">
				<i class="icon"> <FaGithub /></i>
				Github
			</a>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-sm-8 offset-0 offset-sm-2 py-1">
			<a
				id="fb"
				href="https://www.facebook.com/stefankornel02"
				target="_blank"
				class="btn btn-secondary"
			>
				<i class="icon"> <FaFacebook /></i>
				Facebook
			</a>
		</div>
	</div>
	<div class="row d-none">
		<div class="col-12 col-sm-8 offset-0 offset-sm-2 py-1">
			<a id="mail" href="mailto:contact@skornel02.hu" class="btn btn-secondary">
				<i class="icon"> <FaEnvelope /></i>
				Email
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
	.icon {
		display: inline;
		width: 32px;
		height: 32px;
		margin: 0 6px;
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
		i {
			color: #ea4335;
		}
	}
</style>
