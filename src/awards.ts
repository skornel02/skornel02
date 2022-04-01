import srcsetIfju2022 from '$static/assets/competitions/Ifju-Tudosok-2022.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetDuszaMobil2021 from '$static/assets/competitions/Dusza-mobil-2021.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetDuszaMobil2020 from '$static/assets/competitions/Dusza-mobil-2020.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetDuszaMobil2019 from '$static/assets/competitions/Dusza-mobil-2019.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetBBB2021 from '$static/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2021.jpg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetInno2021 from '$static/assets/competitions/Innovacios-tehetsegkutato-2021.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetKHN2021 from '$static/assets/competitions/Kodolj-Hatarok-Nelkul-2021.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetMerklik2021 from '$static/assets/competitions/Merklik-2021.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetBBB2020 from '$static/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2020.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetSZIIV2020 from '$static/assets/competitions/SZIIV-2020.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetKHN2020 from '$static/assets/competitions/Kodolj-Hatarok-Nelkul-2020.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetInno2020 from '$static/assets/competitions/Innovacios-tehetsegkutato-2020.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetDusza2020 from '$static/assets/competitions/Dusza-2020.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetBBB2019 from '$static/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2019.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetWebex from '$static/assets/competitions/Webex-Teams-Hackathlon-2019-photo.jpg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetSZIIV2019 from '$static/assets/competitions/SZIIV-2019.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetNemes19 from '$static/assets/competitions/Nemes-Tihamer-2019.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetDusza2019 from '$static/assets/competitions/Dusza-2019.jpeg?format=webp;jpg&srcset&quality=80&width=500';
import srcsetSuli2018 from '$static/assets/competitions/Iskola-programozas-verseny-2018.jpeg?format=webp;jpg&srcset&quality=80&width=500';

interface AwardType {
    id?: string;
    title: string;
    placement: string;
    icon: string;
    date: string;
    links: {
        text: string;
        icon: string;
        url: string;
        srcset?: string;
        pdf?: boolean;
    }[];
}

export const awards: AwardType[] = [
    {
        title: 'Ifjútudosok tudományos vetélkedő - 2022 - Traditional category',
        placement: 'Finalist',
        icon: 'medal',
        date: '2022-03-08',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Ifju-Tudosok-2022.jpeg',
                srcset: srcsetIfju2022
            }
        ]
    },
    {
        title: 'Dusza Árpád Országos Programozói Emlékverseny - 2021 - Mobile category',
        placement: 'I. place',
        icon: 'trophy',
        date: '2021-12-04',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Dusza-mobil-2021.jpeg',
                srcset: srcsetDuszaMobil2021
            }
        ]
    },
    {
        title: 'Bakonyi Bitfaragó Bajnokság - 2021',
        placement: 'I. place',
        icon: 'trophy',
        date: '2021-11-20',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2021.jpg',
                srcset: srcsetBBB2021
            }
        ]
    },
    {
        title: '30. Ifjúsági Tudományos és Innovációs Tehetségkutató Verseny',
        placement: 'Finalist',
        icon: 'medal',
        date: '2021-06-22',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Innovacios-tehetsegkutato-2021.jpeg',
                srcset: srcsetInno2021
            }
        ]
    },
    {
        title: 'CCNA Routing and Switching: Introduction to Networking',
        placement: 'Certificate',
        icon: 'certificate',
        date: '2021-06-03',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/certificates/CCNA-1-certificate.pdf',
                pdf: true
            }
        ]
    },
    {
        title: 'Kódolj Határok Nélkül! - 2021',
        placement: 'Finalist',
        icon: 'medal',
        date: '2021-06-01',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Kodolj-Hatarok-Nelkul-2021.jpeg',
                srcset: srcsetKHN2021
            }
        ]
    },
    {
        title: 'II. Merklik László problémamegoldó verseny',
        placement: 'Finalist',
        icon: 'medal',
        date: '2021-04-15',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Kodolj-Hatarok-Nelkul-2021.jpeg',
                srcset: srcsetMerklik2021
            }
        ]
    },
    {
        title: 'Bakonyi Bitfaragó Bajnokság - 2020',
        placement: 'I. place',
        icon: 'trophy',
        date: '2021-04-17',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2020.jpeg',
                srcset: srcsetBBB2020
            }
        ]
    },
    {
        title: 'Neumann János Egyetem Programming contest - 2020',
        placement: 'II. place',
        icon: 'medal',
        date: '2021-01-27',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/GAMF programozó verseny 2020.pdf',
                pdf: true
            }
        ]
    },
    {
        title: 'WebGraf - 2020',
        placement: 'II. place',
        icon: 'medal',
        date: '2021-01-01',
        links: []
    },
    {
        title: 'Dusza Árpád Országos Programozói Emlékverseny - 2020 - Mobile category',
        placement: 'I. place',
        icon: 'trophy',
        date: '2020-12-05',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Dusza-mobil-2020.jpeg',
                srcset: srcsetDuszaMobil2020
            }
        ]
    },
    {
        id: "parkmyst",
        title: 'Szegedi Innovatív Informatika Verseny - 2020 - Software category',
        placement: 'I. place',
        icon: 'trophy',
        date: '2020-11-07',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/SZIIV-2020.jpeg',
                srcset: srcsetSZIIV2020
            },
            {
                text: 'website',
                icon: 'globe',
                url: 'https://www.inf.u-szeged.hu/sziiv2020/eredmenyek#:~:text=hazizz%20velunk%3A%20parkmyst'
            }
        ]
    },
    {
        title: 'Kódolj Határok Nélkül! - 2020',
        placement: 'Finalist',
        icon: 'medal',
        date: '2020-09-15',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Kodolj-Hatarok-Nelkul-2020.jpeg',
                srcset: srcsetKHN2020
            }
        ]
    },
    {
        title: 'Accenture Java competition - 2020',
        placement: 'Finalist',
        icon: 'medal',
        date: '2020-07-06',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Accenture Java 2020.pdf',
                pdf: true
            }
        ]
    },
    {
        title: '29. Ifjúsági Tudományos és Innovációs Tehetségkutató Verseny',
        placement: 'Finalist',
        icon: 'medal',
        date: '2020-05-28',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Innovacios-tehetsegkutato-2020.jpeg',
                srcset: srcsetInno2020
            }
        ]
    },
    {
        title: 'Nemes Tihamér Nemzetközi Informatikai Tanulmányi Verseny - 2020 - Programming category',
        placement: '39. place',
        icon: 'medal',
        date: '2020-04-15',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Nemes-Tihamer-2020.pdf',
                pdf: true
            }
        ]
    },
    {
        title: 'Dusza Árpád Országos Programozói Emlékverseny - 2020 - Traditional category',
        placement: 'II. place',
        icon: 'medal',
        date: '2020-02-22',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Dusza-2020.jpeg',
                srcset: srcsetDusza2020
            }
        ]
    },
    {
        title: 'Dusza Árpád Országos Programozói Emlékverseny - 2019 - Mobile category',
        placement: 'I. place',
        icon: 'trophy',
        date: '2019-12-07',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Dusza-mobil-2019.jpeg',
                srcset: srcsetDuszaMobil2019
            }
        ]
    },
    {
        title: 'Bakonyi Bitfaragó Bajnokság - 2019',
        placement: 'Finalist',
        icon: 'medal',
        date: '2019-11-09',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Bakonyi-Bitfarago-Bajnoksag-2019.jpeg',
                srcset: srcsetBBB2019
            }
        ]
    },
    {
        title: 'Http Alapítvány - Cisco Webex Hacathlon - 2019',
        placement: 'I. place',
        icon: 'trophy',
        date: '2019-04-12',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Webex-Teams-Hackathlon-2019-photo.jpg',
                srcset: srcsetWebex
            }
        ]
    },
    {
        id: "hazizz",
        title: 'Szegedi Innovatív Informatika Verseny - 2019 - Software category',
        placement: 'I. place',
        icon: 'trophy',
        date: '2019-04-06',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/SZIIV-2019.jpeg',
                srcset: srcsetSZIIV2019
            },
            {
                text: 'website',
                icon: 'globe',
                url: 'https://www.inf.u-szeged.hu/sziiv2019/eredmenyek#:~:text=hazizz%20velunk'
            }
        ]
    },
    {
        title: 'Nemes Tihamér Nemzetközi Informatikai Tanulmányi Verseny - 2019 - Programming category',
        placement: '41. place',
        icon: 'medal',
        date: '2019-04-05',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Nemes-Tihamer-2019.jpeg',
                srcset: srcsetNemes19
            }
        ]
    },
    {
        title: 'Dusza Árpád Országos Programozói Emlékverseny - 2019 - Traditional category',
        placement: 'I. place',
        icon: 'trophy',
        date: '2019-02-21',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Dusza-2019.jpeg',
                srcset: srcsetDusza2019
            }
        ]
    },
    {
        title: 'Secondary School Programming contest - 2018',
        placement: 'I. place',
        icon: 'trophy',
        date: '2019-02-21',
        links: [
            {
                text: 'Reference',
                icon: 'file',
                url: '/assets/competitions/Iskola-programozas-verseny-2018.jpeg',
                srcset: srcsetSuli2018
            }
        ]
    },
];