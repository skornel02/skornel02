'use client';

import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';
import {Separator} from '@/components/ui/8bit/separator';
import {
	SimpleWindow,
	SimpleWindowHeader,
	SimpleWindowContent,
	SimpleWindowCallout,
	SimpleWindowFooter,
} from '@/components/ui/simple-window';
import {CardTitle} from './CardTitle';
import {CardContacts} from './CardContacts';
import {CardNavigation} from './CardNavigation';

export function MeCard() {
	const containerRef = useRef<HTMLDivElement>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);
	const [isReady, setIsReady] = useState(false);

	// useLayoutEffect runs before the browser paints
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const items = gsap.utils.toArray<HTMLElement>('.gsap-dossier-item');

			tlRef.current = gsap
				.timeline({
					paused: true,
					onComplete: () => setIsReady(true),
				})
				.fromTo(
					items,
					{autoAlpha: 0, y: 12},
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.35,
						stagger: 0.08,
						ease: 'power2.out',
					}
				)
				.fromTo(
					'#faceSlot',
					{scale: 0.92},
					{
						scale: 1,
						duration: 0.4,
						ease: 'back.out(1.7)',
					},
					'<0.05'
				);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const handleTitleDone = useCallback(() => {
		tlRef.current?.play();
	}, []);

	return (
		<main
			ref={containerRef}
			className="mx-auto flex w-full max-w-content flex-1 flex-col items-center justify-center px-gutter-mobile py-unit-3xl md:px-gutter-desktop">
			<SimpleWindow className="max-w-md">
				<SimpleWindowHeader />

				<SimpleWindowContent className="flex flex-col items-center text-center">
					<div
						id="nameSlot"
						className="headline-md flex min-h-12 w-full items-center justify-center text-on-surface">
						<CardTitle onDone={handleTitleDone} />
					</div>

					<div className={`w-full space-y-unit-md ${!isReady ? 'pointer-events-none' : ''}`}>
						<div className="gsap-dossier-item invisible opacity-0 flex items-center gap-unit-xs pt-unit-xs">
							<Separator className="flex-1 bg-border" />
						</div>

						<div className="gsap-dossier-item invisible opacity-0">
							<div
								id="faceSlot"
								className="group relative mx-auto size-40 scale-[0.92] rounded-lg p-1 shadow-layer-2 transition-transform duration-135 hover:-translate-y-0.5">
								<img
									src="/images/people/sk.jpeg"
									alt="Kornél portrait"
									className="size-full rounded-sm object-cover border-2 border-primary transition-transform duration-150 group-hover:scale-105"
								/>
							</div>
						</div>

						<div className="gsap-dossier-item invisible opacity-0">
							<Separator className="bg-border/70" />
						</div>

						<SimpleWindowCallout className="gsap-dossier-item invisible opacity-0 flex items-center justify-center py-unit-sm">
							<CardContacts />
						</SimpleWindowCallout>

						<div className="gsap-dossier-item invisible opacity-0">
							<Separator className="bg-border/70" />
						</div>

						<div id="navigationSlot" className="gsap-dossier-item invisible opacity-0 pt-unit-2xs">
							<CardNavigation home={true} card={true} />
						</div>
					</div>
				</SimpleWindowContent>

				<SimpleWindowFooter />
			</SimpleWindow>
		</main>
	);
}
