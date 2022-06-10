<script>
	import {onMount} from 'svelte';
	import {loadFull} from 'tsparticles';

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
		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
        setInterval(() => { 
            if (window.matchMedia("(max-width: 500px)").matches) {
                particlesContainer.pause();
            } else {
                particlesContainer.play();
            }
        }, 1000)
	};

	let particlesInit = async (main) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
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
