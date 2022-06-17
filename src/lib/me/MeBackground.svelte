<script>
	import {onMount} from 'svelte';
	import {loadFull} from 'tsparticles';
	import {createConfig} from './particle.config';

	const DISABLE_ON_PHONE = false;
	let ParticlesComponent;
	let particlesConfig;

	onMount(async () => {
		const module = await import('svelte-particles');
		const style = getComputedStyle(document.body);
		particlesConfig = createConfig({
			link: style.getPropertyValue('--color-primary').trim(),
		});
		ParticlesComponent = module.default;
	});

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
		if (
			(DISABLE_ON_PHONE && window.matchMedia('(max-width: 500px)').matches) ||
			window.matchMedia('prefers-reduced-motion').matches
		) {
			setInterval(() => {
				particlesContainer.pause();
			}, 1000);
		} else {
			particlesContainer.play();
		}
	};

	let particlesInit = async (main) => {
		await loadFull(main);
	};
</script>

<svelte:component
	this="{ParticlesComponent}"
	id="tsparticles"
	options="{particlesConfig}"
	on:particlesLoaded="{onParticlesLoaded}"
	particlesInit="{particlesInit}"
/>
