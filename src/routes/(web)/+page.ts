export const prerender = true;

export interface SectionData {
	[key: string]: Section;
}

interface Section {
	index: number;
	top: number;
	title: string;
}
