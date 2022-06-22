export const unknownHeSrc = '/assets/people/unknownhe.jpeg';

export interface Person {
	name: string;
	website?: string;
	pictureUrl: string;
}

export const FMate: Person = {
	name: 'Fekete Máté',
	pictureUrl: 'https://avatars.githubusercontent.com/u/18264803?v=4',
};
export const HGergely: Person = {
	name: 'Horváth Gergely',
	website: 'https://gergelyhorvath.com',
	pictureUrl: unknownHeSrc,
};
export const IErik: Person = {
	name: 'Isakov Erik',
	website: 'https://github.com/indeednt',
	pictureUrl: unknownHeSrc,
};
export const RGergely: Person = {
	name: 'Ruzsa Gergely Gábor',
	website: 'https://ruzger.hu/',
	pictureUrl: 'https://ruzger.hu/kepek/profil_uj.jpg',
};
export const SKornel: Person = {
	name: 'Stefán Kornél',
	pictureUrl: '/assets/people/sk.jpeg',
};
export const VAvar: Person = {
	name: 'Vad Avar',
	website: 'https://vadavar.hu',
	pictureUrl: 'https://vadavar.hu/me.jpg',
};
export const VTibor: Person = {
	name: 'Várkonyi Tibor',
	website: 'https://mocman.hu',
	pictureUrl: 'https://avatars.githubusercontent.com/u/14221367?v=4',
};
