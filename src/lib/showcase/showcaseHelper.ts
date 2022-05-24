import FaTrophy from 'svelte-icons/fa/FaTrophy.svelte';
import FaMedal from 'svelte-icons/fa/FaMedal.svelte';
import FaCertificate from 'svelte-icons/fa/FaCertificate.svelte';
import FaFile from 'svelte-icons/fa/FaFile.svelte';
import FaGlobe from 'svelte-icons/fa/FaGlobe.svelte';

export const typeToIcon = (type: string): typeof FaTrophy => {
    switch (type) {
        case 'trophy':
            return FaTrophy;
        case 'medal':
            return FaMedal;
        case 'certificate':
            return FaCertificate;
        case 'file':
            return FaFile;
        case 'globe':
            return FaGlobe;
        default:
            return FaFile;
    }
};