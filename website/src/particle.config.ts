import type {IDivEvent, ISourceOptions} from 'tsparticles-engine';

export const options: ISourceOptions = {
	fpsLimit: 30,
	background: {
		color: {
			value: '#232741',
		},
	},
	fullScreen: {
		zIndex: 0,
		enable: true,
	},
	particles: {
		color: {
			value: '#ffffff',
		},
		links: {
			enable: true,
			color: {
				value: '#2e74b5',
			},
			distance: 75,
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
			outModes: 'bounce',
			random: true,
			speed: 0.75,
			straight: false,
		},
		number: {
			density: {
				enable: true,
			},
			value: 160,
		},
		opacity: {
			random: true,
			value: {
				min: 0,
				max: 1,
			},
			animation: {
				enable: true,
				speed: 1,
				minimumValue: 0,
				sync: false,
			},
		},
		size: {
			random: true,
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
