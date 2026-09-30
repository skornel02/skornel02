import React from 'react';
import type {Metadata} from 'next';
import {BusinessCard} from '@/components/me/BusinessCard';
import {CardNavigation} from '@/components/me/CardNavigation';
import {
	SimpleWindow,
	SimpleWindowContent,
	SimpleWindowFooter,
	SimpleWindowHeader,
} from '@/components/ui/simple-window';

export const metadata: Metadata = {
	title: 'Business Card - Stefán Kornél',
	description: 'Digital personal contact card of SK',
};

export default function BusinessCardPage() {
	return (
		<main className="container mx-auto p-4 flex justify-center items-center min-h-screen">
			<SimpleWindow className="max-w-md">
				<SimpleWindowHeader />

				<SimpleWindowContent className="flex flex-col items-center text-center">
					<div className="my-8">
						<BusinessCard />
					</div>
					<div className="mt-4">
						<CardNavigation home={true} details={true} />
					</div>
				</SimpleWindowContent>

				<SimpleWindowFooter/>
			</SimpleWindow>
		</main>
	);
}
