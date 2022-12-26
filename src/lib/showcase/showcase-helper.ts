import { Trophy, Medal, File, Globe, Album, Github, Smartphone } from 'lucide-svelte';

export const typeToIcon = (type: string): typeof Trophy => {
	switch (type) {
		case 'trophy':
			return Trophy;
		case 'medal':
			return Medal;
		case 'certificate':
			return Album;
		case 'file':
			return File;
		case 'globe':
			return Globe;
		case 'github':
			return Github;
		case 'playstore':
			return Smartphone;
		default:
			return File;
	}
};
