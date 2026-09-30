import React from 'react';
import Link from 'next/link';
import {Footer} from '@/components/navigation/Footer';
import LivingOcean from '@/components/common/MainBackground';
import {GeneralNavbar} from '@/components/navigation/GeneralNavbar';
import CountdownRedirect from '@/components/common/CountdownRedirect';
import {
	SimpleWindow,
	SimpleWindowCallout,
	SimpleWindowContent,
	SimpleWindowFooter,
	SimpleWindowHeader,
} from '@/components/ui/simple-window';

export default function NotFound() {
	return (
		<div className="relative min-h-screen">
			<LivingOcean />

			<div className="relative z-10 flex min-h-screen flex-col">
				<GeneralNavbar />

				<main className="mx-auto flex w-full max-w-content flex-1 flex-col items-center justify-center px-gutter-mobile py-unit-3xl md:px-gutter-desktop">
					<SimpleWindow className="max-w-md">
						{/* Can be self-closing or take custom title/badges as children */}
						<SimpleWindowHeader rightCorner="[──┐" />

						<SimpleWindowContent className="flex flex-col items-center text-center">
							<h1 className="display-hero text-primary dark:text-badge-cyan">404</h1>

							<p className="headline-sm mt-unit-2xs font-mono text-on-surface">&gt; Lost at Sea!</p>

							<SimpleWindowCallout className="mt-unit-lg">
								Redirecting to main page in{' '}
								<span className="font-bold text-award-bronze dark:text-award-gold">
									<CountdownRedirect />
								</span>
								...
							</SimpleWindowCallout>

							<Link
								href="/"
								className="tech-badge mt-unit-md inline-flex h-10 items-center justify-center border-primary/50 bg-primary/10 px-4 text-xs font-semibold text-primary transition-all duration-135 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
								[ ← RETURN TO MAIN PAGE ]
							</Link>
						</SimpleWindowContent>

						<SimpleWindowFooter>
							<span className="text-teal-accent dark:text-badge-cyan">AUTO_REROUTE: ACTIVE</span>
						</SimpleWindowFooter>
					</SimpleWindow>
				</main>

				<Footer />
			</div>
		</div>
	);
}
