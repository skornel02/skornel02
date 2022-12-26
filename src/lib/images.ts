export interface ImageMetadata {
	src: string;
	width: number;
	height?: number;
	format: string;
}

export interface ImageData {
	meta: ImageMetadata[];
	path: string;
}

const competitionImages = Object.keys(import.meta.glob("/static/assets/competitions/*.jpeg"))
	.map(name => name.replace("/static/assets/competitions/", "").replace(".jpeg", ""))

export const getCompetitionImageData = (url: string): ImageData => {
	if (!competitionImages.includes(url)) {
		throw new Error(`Image /static/assets/competitions/${url}.jpeg not found`);
	}

	const imageData = {
		path: `/assets/competitions/${url}.jpeg`,
		meta: [] as ImageMetadata[],
	};
	imageData.meta = [
		{
			format: 'webp',
			src: `/images/competitions/${url}.webp`,
			width: 500,
		},
		{
			format: 'jpeg',
			src: `/images/competitions/${url}.jpg`,
			width: 500,
		},
	]
	return imageData;
};
