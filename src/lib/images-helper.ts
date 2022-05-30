export interface ImageMetadata {
	src: string;
	width: number;
	height: number;
	format: string;
}

export interface ImageData {
	meta: ImageMetadata[];
	path: string;
}

export const loadShowcaseImage = async (url: string): Promise<ImageMetadata[]> => {
	return (
		await import(
			`../../static/assets/competitions/${url}.jpeg?metadata&format=webp;jpg&quality=80&width=500`
		)
	).default;
};
