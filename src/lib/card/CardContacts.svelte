<script lang="ts">
	import {Github, Facebook, Mail, Linkedin} from 'lucide-svelte';
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
				<Facebook size="{32}" />
				<span> Facebook </span>
			</a>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-sm-8 offset-0 offset-sm-2 py-1">
			<a
				id="linkedin"
				href="https://linkedin.com/in/skornel02"
				target="_blank"
				rel="noreferrer noopener"
				class="btn btn-secondary"
			>
				<Linkedin size="{32}" />
				<span> LinkedIn </span>
			</a>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-sm-8 offset-0 offset-sm-2 py-1">
			<a id="mail" href="mailto:contact@skornel02.hu" class="btn btn-secondary">
				<Mail size="{32}" />
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
		color: white;
		background-color: #d44638 !important;
	}
	#linkedin {
		color: white;
		background-color: #0077b5 !important;
	}
	span {
		width: 100px;
		text-align: center;
	}
</style>
