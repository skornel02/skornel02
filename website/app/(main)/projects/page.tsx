import React from 'react';
import type {Metadata} from 'next';
import {
	SimpleWindow,
	SimpleWindowContent,
	SimpleWindowFooter,
	SimpleWindowHeader,
} from '@/components/ui/simple-window';
import {
	BrowserWindow,
	BrowserWindowContent,
	BrowserWindowHeader,
} from '@/components/ui/browser-window';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Projects of SK',
};

export default function ProjectsPage() {
	return (
		<SimpleWindow className="mx-auto w-full max-w-5xl mt-unit-xl">
			<SimpleWindowHeader />

			<SimpleWindowContent className="flex flex-wrap items-center justify-center p-unit-xl">
				<BrowserWindow className="max-w-[550px]">
					<BrowserWindowHeader url="https://metro.skornel02.hu" />

					<BrowserWindowContent className="flex flex-col items-center text-center">
						<h1 className="headline-sm mb-unit-xs text-on-surface">Metro Door Helper</h1>
						<p className="body-md mb-unit-lg text-on-surface-variant">
							A simple application that helps you pick which door you should board the Budapest
							Metro to get off at the right exit.
						</p>

						<a
							href="https://metro.skornel02.hu"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 font-mono text-xs font-bold text-primary-foreground shadow-layer-1 transition-all duration-135 hover:-translate-y-0.5 hover:shadow-layer-2">
							Visit App
						</a>
					</BrowserWindowContent>
				</BrowserWindow>
			</SimpleWindowContent>

			<SimpleWindowFooter />
		</SimpleWindow>
	);
}
