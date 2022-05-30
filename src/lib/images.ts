import metadataIfju2022 from '$static/assets/competitions/Ifju-Tudosok-2022.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataDuszaMobil2021 from '$static/assets/competitions/Dusza-mobil-2021.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataDuszaMobil2020 from '$static/assets/competitions/Dusza-mobil-2020.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataDuszaMobil2019 from '$static/assets/competitions/Dusza-mobil-2019.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataBBB2021 from '$static/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2021.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataInno2021 from '$static/assets/competitions/Innovacios-tehetsegkutato-2021.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataKHN2021 from '$static/assets/competitions/Kodolj-Hatarok-Nelkul-2021.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataMerklik2021 from '$static/assets/competitions/Merklik-2021.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataBBB2020 from '$static/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2020.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataSZIIV2020 from '$static/assets/competitions/SZIIV-2020.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataKHN2020 from '$static/assets/competitions/Kodolj-Hatarok-Nelkul-2020.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataInno2020 from '$static/assets/competitions/Innovacios-tehetsegkutato-2020.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataDusza2020 from '$static/assets/competitions/Dusza-2020.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataBBB2019 from '$static/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2019.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataWebex from '$static/assets/competitions/Webex-Teams-Hackathlon-2019-photo.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataSZIIV2019 from '$static/assets/competitions/SZIIV-2019.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataNemes19 from '$static/assets/competitions/Nemes-Tihamer-2019.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataDusza2019 from '$static/assets/competitions/Dusza-2019.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataSuli2018 from '$static/assets/competitions/Iskola-programozas-verseny-2018.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataSkillsJuniorWeb2022 from '$static/assets/competitions/Skills-Junior-Web-2022.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import metadataAszev from '$static/assets/competitions/ASZEV2022.jpeg?metadata&format=webp;jpg&quality=80&width=500';
import type {ImageData, ImageMetadata} from './images-helper';

type url =
	| '/assets/competitions/Ifju-Tudosok-2022.jpeg'
	| '/assets/competitions/Dusza-mobil-2021.jpeg'
	| '/assets/competitions/Dusza-mobil-2020.jpeg'
	| '/assets/competitions/Dusza-mobil-2019.jpeg'
	| '/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2021.jpeg'
	| '/assets/competitions/Innovacios-tehetsegkutato-2021.jpeg'
	| '/assets/competitions/Kodolj-Hatarok-Nelkul-2021.jpeg'
	| '/assets/competitions/Merklik-2021.jpeg'
	| '/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2020.jpeg'
	| '/assets/competitions/SZIIV-2020.jpeg'
	| '/assets/competitions/Kodolj-Hatarok-Nelkul-2020.jpeg'
	| '/assets/competitions/Innovacios-tehetsegkutato-2020.jpeg'
	| '/assets/competitions/Dusza-2020.jpeg'
	| '/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2019.jpeg'
	| '/assets/competitions/Webex-Teams-Hackathlon-2019-photo.jpeg'
	| '/assets/competitions/SZIIV-2019.jpeg'
	| '/assets/competitions/Nemes-Tihamer-2019.jpeg'
	| '/assets/competitions/Dusza-2019.jpeg'
	| '/assets/competitions/Iskola-programozas-verseny-2018.jpeg'
	| '/assets/competitions/Skills-Junior-Web-2022.jpeg'
	| '/assets/competitions/ASZEV2022.jpeg';

export const getImageData = (url: url): ImageData => {
	const imageData = {
		path: url,
		meta: [] as ImageMetadata[],
	};
	switch (url) {
		case '/assets/competitions/Ifju-Tudosok-2022.jpeg':
			imageData.meta = metadataIfju2022;
			break;
		case '/assets/competitions/Dusza-mobil-2021.jpeg':
			imageData.meta = metadataDuszaMobil2021;
			break;
		case '/assets/competitions/Dusza-mobil-2020.jpeg':
			imageData.meta = metadataDuszaMobil2020;
			break;
		case '/assets/competitions/Dusza-mobil-2019.jpeg':
			imageData.meta = metadataDuszaMobil2019;
			break;
		case '/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2021.jpeg':
			imageData.meta = metadataBBB2021;
			break;
		case '/assets/competitions/Innovacios-tehetsegkutato-2021.jpeg':
			imageData.meta = metadataInno2021;
			break;
		case '/assets/competitions/Kodolj-Hatarok-Nelkul-2021.jpeg':
			imageData.meta = metadataKHN2021;
			break;
		case '/assets/competitions/Merklik-2021.jpeg':
			imageData.meta = metadataMerklik2021;
			break;
		case '/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2020.jpeg':
			imageData.meta = metadataBBB2020;
			break;
		case '/assets/competitions/SZIIV-2020.jpeg':
			imageData.meta = metadataSZIIV2020;
			break;
		case '/assets/competitions/Kodolj-Hatarok-Nelkul-2020.jpeg':
			imageData.meta = metadataKHN2020;
			break;
		case '/assets/competitions/Innovacios-tehetsegkutato-2020.jpeg':
			imageData.meta = metadataInno2020;
			break;
		case '/assets/competitions/Dusza-2020.jpeg':
			imageData.meta = metadataDusza2020;
			break;
		case '/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2019.jpeg':
			imageData.meta = metadataBBB2019;
			break;
		case '/assets/competitions/Webex-Teams-Hackathlon-2019-photo.jpeg':
			imageData.meta = metadataWebex;
			break;
		case '/assets/competitions/SZIIV-2019.jpeg':
			imageData.meta = metadataSZIIV2019;
			break;
		case '/assets/competitions/Nemes-Tihamer-2019.jpeg':
			imageData.meta = metadataNemes19;
			break;
		case '/assets/competitions/Dusza-2019.jpeg':
			imageData.meta = metadataDusza2019;
			break;
		case '/assets/competitions/Iskola-programozas-verseny-2018.jpeg':
			imageData.meta = metadataSuli2018;
			break;
		case '/assets/competitions/Skills-Junior-Web-2022.jpeg':
			imageData.meta = metadataSkillsJuniorWeb2022;
			break;
		case '/assets/competitions/ASZEV2022.jpeg':
			imageData.meta = metadataAszev;
			break;
	}
	return imageData;
};
