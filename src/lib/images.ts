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


const peopleImages = Object.keys(import.meta.glob("/static/assets/people/*.jpeg"))
	.map(name => name.replace("/static/assets/people/", "").replace(".jpeg", ""))

export const getPeopleImageData = (url: string): ImageData => {
	const data = getImageData('people', url, peopleImages);
	data.meta.forEach(obj => obj.width = 160);
	return data;
}

export const getCompetitionImageData = (url: string): ImageData => {
	const data = getImageData('competitions', url, competitionImages);
	data.meta.forEach(obj => obj.width = 500);
	return data;
};


const getImageData = (folder: string, url: string, images: string[]): ImageData => {
	if (!images.includes(url)) {
		throw new Error(`Image /static/assets/${folder}/${url}.jpeg not found`);
	}

	const imageData = {
		path: `/assets/${folder}/${url}.jpeg`,
		meta: [] as ImageMetadata[],
	};
	imageData.meta = [
		{
			format: 'webp',
			src: `/images/${folder}/${url}.webp`,
			width: 0,
		},
		{
			format: 'jpeg',
			src: `/images/${folder}/${url}.jpg`,
			width: 0,
		},
		{
			format: 'avif',
			src: `/images/${folder}/${url}.avif`,
			width: 0,
		},
	]
	return imageData;
}