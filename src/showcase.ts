import {getImageData} from '$lib/images';
import type {ImageData} from '$lib/images-helper';
import {FMate, HGergely, IErik, RGergely, SKornel, VAvar, VTibor, type Person} from '$lib/people';

interface Link {
	type: 'simple' | 'pdf' | 'img';
	text: string;
	icon: string;
}

export interface SimpleLink extends Link {
	type: 'simple';
	url: string;
}

export interface PdfLink extends Link {
	type: 'pdf';
	url: string;
}

export interface ImgLink extends Link {
	type: 'img';
	data: ImageData;
}

interface ShowcaseEntry {
	type: 'award' | 'certificate' | 'separator';
	id?: string;
	date: string;
}

export interface SeparatorEntry extends ShowcaseEntry {
	type: 'separator';
	text: string;
}

interface ShowcaseItem extends ShowcaseEntry {
	title: string;
	icon: string;
	links: Array<SimpleLink | PdfLink | ImgLink>;
}

export interface AwardEntry extends ShowcaseItem {
	type: 'award';
	placement: string;
	team?: Person[];
}

export interface CertificateEntry extends ShowcaseItem {
	type: 'certificate';
}

export const showcase: Array<AwardEntry | CertificateEntry | SeparatorEntry> = [	
	{
		type: 'separator',
		text: '2022',
		date: '2023-01-01',
	},
	{
		type: 'award',
		id: 'aszev',
		title:
			'Ágazati és ágazaton belüli specializáció szakmai érettségi vizsgatárgyak versenye - 2022',
		placement: 'I. place',
		icon: 'trophy',
		date: '2022-04-13',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/ASZEV2022.jpeg'),
			},
		],
	},
	{
		type: 'award',
		title: 'Skills Junior 2022 - Web category',
		placement: 'I. place',
		icon: 'trophy',
		date: '2022-04-02',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Skills-Junior-Web-2022.jpeg'),
			},
		],
	},
	{
		type: 'award',
		title: 'Ifjútudosok tudományos vetélkedő - 2022 - Traditional category',
		placement: 'Finalist',
		icon: 'medal',
		date: '2022-03-08',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Ifju-Tudosok-2022.jpeg'),
			},
		],
	},
	{
		type: 'separator',
		text: '2021',
		date: '2022-01-01',
	},
	{
		type: 'award',
		title: 'Dusza Árpád Országos Programozói Emlékverseny - 2021 - Mobile category',
		placement: 'I. place',
		icon: 'trophy',
		date: '2021-12-04',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Dusza-mobil-2021.jpeg'),
			},
		],
		team: [IErik, HGergely, SKornel],
	},
	{
		type: 'award',
		title: 'Bakonyi Bitfaragó Bajnokság - 2021',
		placement: 'I. place',
		icon: 'trophy',
		date: '2021-11-20',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2021.jpeg'),
			},
		],
		team: [HGergely, SKornel, VAvar],
	},
	{
		type: 'award',
		title: '30. Ifjúsági Tudományos és Innovációs Tehetségkutató Verseny',
		placement: 'Finalist',
		icon: 'medal',
		date: '2021-06-22',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Innovacios-tehetsegkutato-2021.jpeg'),
			},
		],
		team: [SKornel, VAvar],
	},
	{
		type: 'certificate',
		title: 'CCNA Routing and Switching: Introduction to Networking',
		icon: 'certificate',
		date: '2021-06-03',
		links: [
			{
				type: 'pdf',
				text: 'Reference',
				icon: 'file',
				url: '/assets/certificates/CCNA-1-certificate.pdf',
			},
		],
	},
	{
		type: 'award',
		title: 'Kódolj Határok Nélkül! - 2021',
		placement: 'Finalist',
		icon: 'medal',
		date: '2021-06-01',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Kodolj-Hatarok-Nelkul-2021.jpeg'),
			},
		],
		team: [RGergely, SKornel, VAvar],
	},
	{
		type: 'award',
		title: 'II. Merklik László problémamegoldó verseny',
		placement: 'Finalist',
		icon: 'medal',
		date: '2021-04-15',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Kodolj-Hatarok-Nelkul-2021.jpeg'),
			},
		],
		team: [HGergely, SKornel, VAvar],
	},
	{
		type: 'award',
		title: 'Bakonyi Bitfaragó Bajnokság - 2020',
		placement: 'I. place',
		icon: 'trophy',
		date: '2021-04-17',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2020.jpeg'),
			},
		],
		team: [HGergely, SKornel, VAvar],
	},
	{
		type: 'award',
		title: 'Neumann János Egyetem Programming contest - 2020',
		placement: 'II. place',
		icon: 'medal',
		date: '2021-01-27',
		links: [
			{
				type: 'pdf',
				text: 'Reference',
				icon: 'file',
				url: '/assets/competitions/GAMF programozó verseny 2020.pdf',
			},
		],
		team: [HGergely, IErik, SKornel],
	},
	{
		type: 'award',
		title: 'WebGraf - 2020',
		placement: 'II. place',
		icon: 'medal',
		date: '2021-01-05',
		links: [],
		team: [HGergely, SKornel, VAvar],
	},
	{
		type: 'separator',
		text: '2020',
		date: '2021-01-01',
	},
	{
		type: 'award',
		title: 'Dusza Árpád Országos Programozói Emlékverseny - 2020 - Mobile category',
		placement: 'I. place',
		icon: 'trophy',
		date: '2020-12-05',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Dusza-mobil-2020.jpeg'),
			},
		],
		team: [IErik, HGergely, SKornel],
	},
	{
		type: 'award',
		id: 'parkmyst',
		title: 'Szegedi Innovatív Informatika Verseny - 2020 - Software category',
		placement: 'I. place',
		icon: 'trophy',
		date: '2020-11-07',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/SZIIV-2020.jpeg'),
			},
			{
				type: 'simple',
				text: 'website',
				icon: 'globe',
				url: 'https://www.inf.u-szeged.hu/sziiv2020/eredmenyek#:~:text=hazizz%20velunk%3A%20parkmyst',
			},
		],
		team: [HGergely, SKornel, VAvar],
	},
	{
		type: 'award',
		title: 'Kódolj Határok Nélkül! - 2020',
		placement: 'Finalist',
		icon: 'medal',
		date: '2020-09-15',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Kodolj-Hatarok-Nelkul-2020.jpeg'),
			},
		],
		team: [RGergely, SKornel, VAvar],
	},
	{
		type: 'award',
		title: 'Accenture Java competition - 2020',
		placement: 'Finalist',
		icon: 'medal',
		date: '2020-07-06',
		links: [
			{
				type: 'pdf',
				text: 'Reference',
				icon: 'file',
				url: '/assets/competitions/Accenture Java 2020.pdf',
			},
		],
		team: [FMate, SKornel, VTibor],
	},
	{
		type: 'award',
		title: '29. Ifjúsági Tudományos és Innovációs Tehetségkutató Verseny',
		placement: 'Finalist',
		icon: 'medal',
		date: '2020-05-28',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Innovacios-tehetsegkutato-2020.jpeg'),
			},
		],
		team: [SKornel, VAvar],
	},
	{
		type: 'award',
		title: 'Nemes Tihamér Nemzetközi Informatikai Tanulmányi Verseny - 2020 - Programming category',
		placement: '39. place',
		icon: 'medal',
		date: '2020-04-15',
		links: [
			{
				type: 'pdf',
				text: 'Reference',
				icon: 'file',
				url: '/assets/competitions/Nemes-Tihamer-2020.pdf',
			},
		],
	},
	{
		type: 'award',
		title: 'Dusza Árpád Országos Programozói Emlékverseny - 2020 - Traditional category',
		placement: 'II. place',
		icon: 'medal',
		date: '2020-02-22',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Dusza-2020.jpeg'),
			},
		],
		team: [IErik, HGergely, SKornel],
	},
	{
		type: 'separator',
		text: '2019',
		date: '2020-01-01',
	},
	{
		type: 'award',
		title: 'Dusza Árpád Országos Programozói Emlékverseny - 2019 - Mobile category',
		placement: 'I. place',
		icon: 'trophy',
		date: '2019-12-07',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Dusza-mobil-2019.jpeg'),
			},
		],
		team: [IErik, HGergely, SKornel],
	},
	{
		type: 'award',
		title: 'Bakonyi Bitfaragó Bajnokság - 2019',
		placement: 'Finalist',
		icon: 'medal',
		date: '2019-11-09',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2019.jpeg'),
			},
		],
		team: [RGergely, SKornel, VAvar],
	},
	{
		type: 'award',
		title: 'Http Alapítvány - Cisco Webex Hacathlon - 2019',
		placement: 'I. place',
		icon: 'trophy',
		date: '2019-04-12',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Webex-Teams-Hackathlon-2019-photo.jpeg'),
			},
		],
		team: [IErik, HGergely, SKornel],
	},
	{
		type: 'award',
		id: 'hazizz',
		title: 'Szegedi Innovatív Informatika Verseny - 2019 - Software category',
		placement: 'I. place',
		icon: 'trophy',
		date: '2019-04-06',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/SZIIV-2019.jpeg'),
			},
			{
				type: 'simple',
				text: 'website',
				icon: 'globe',
				url: 'https://www.inf.u-szeged.hu/sziiv2019/eredmenyek#:~:text=hazizz%20velunk',
			},
		],
		team: [IErik, SKornel, VAvar],
	},
	{
		type: 'award',
		title: 'Nemes Tihamér Nemzetközi Informatikai Tanulmányi Verseny - 2019 - Programming category',
		placement: '41. place',
		icon: 'medal',
		date: '2019-04-05',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Nemes-Tihamer-2019.jpeg'),
			},
		],
	},
	{
		type: 'award',
		title: 'Dusza Árpád Országos Programozói Emlékverseny - 2019 - Traditional category',
		placement: 'I. place',
		icon: 'trophy',
		date: '2019-02-21',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Dusza-2019.jpeg'),
			},
		],
		team: [IErik, HGergely, SKornel],
	},
	{
		type: 'award',
		title: 'Secondary School Programming contest - 2018',
		placement: 'I. place',
		icon: 'trophy',
		date: '2019-02-21',
		links: [
			{
				type: 'img',
				text: 'Reference',
				icon: 'file',
				data: getImageData('/assets/competitions/Iskola-programozas-verseny-2018.jpeg'),
			},
		],
	},
];
