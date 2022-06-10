<script>
	import {onMount} from 'svelte';
	import {loadFull} from 'tsparticles';

	const DISABLE_ON_PHONE = false;
	let ParticlesComponent;

	onMount(async () => {
		const module = await import('svelte-particles');

		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		background: {
			color: {
				value: '#232741',
			},
		},
		fullScreen: {
			zIndex: -1,
		},
		particles: {
			color: {
				value: '#ffffff',
			},
			links: {
				color: {
					value: '#ffffff',
				},
				distance: 150,
				opacity: 0.4,
			},
			move: {
				attract: {
					rotate: {
						x: 600,
						y: 600,
					},
				},
				enable: true,
				outModes: {
					bottom: 'out',
					left: 'out',
					right: 'out',
					top: 'out',
				},
				random: true,
				speed: 1,
			},
			number: {
				density: {
					enable: true,
				},
				value: 160,
			},
			opacity: {
				random: {
					enable: true,
				},
				value: {
					min: 0,
					max: 1,
				},
				animation: {
					enable: true,
					speed: 1,
					minimumValue: 0,
				},
			},
			size: {
				random: {
					enable: true,
				},
				value: {
					min: 1,
					max: 3,
				},
				animation: {
					speed: 4,
					minimumValue: 0.3,
				},
			},
		},
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
		if ((DISABLE_ON_PHONE && window.matchMedia('(max-width: 500px)').matches) 
			|| window.matchMedia('prefers-reduced-motion').matches) {
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
