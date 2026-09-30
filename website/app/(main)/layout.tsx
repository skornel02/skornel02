import React from 'react';
import {Footer} from '@/components/navigation/Footer';
import LivingOcean from '@/components/common/MainBackground';
import {GeneralNavbar} from '@/components/navigation/GeneralNavbar';

export default function MainLayout({children}: {children: React.ReactNode}) {
	return (
		<div className="relative min-h-screen">
			<LivingOcean />
			<div className="relative z-10 flex flex-col min-h-screen">
				<GeneralNavbar />
				<main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-28">
					{children}
				</main>
				<Footer />
			</div>
		</div>
	);
}
