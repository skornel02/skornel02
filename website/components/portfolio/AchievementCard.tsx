'use client';

import React from 'react';
import {Icon} from '@/components/common/Icon';
import {TeamMemberPicture} from './TeamMemberPicture';
import {UrlLink} from '@/components/link/UrlLink';
import {ImageLinkModal} from '@/components/link/ImageLinkModal';
import {PdfLinkModal} from '@/components/link/PdfLinkModal';
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import type {Achievement, Person} from '#content';
import ExportedImage from 'next-image-export-optimizer';

interface AchievementCardProps {
	achievement: Achievement;
	peopleMap?: Record<string, Person>;
}

export function AchievementCard({achievement, peopleMap = {}}: AchievementCardProps) {
	const teamMembers = (achievement.team || []).map((slug) => peopleMap[slug]).filter(Boolean);

	const dateStr = achievement.date ? new Date(achievement.date).toISOString().substring(0, 10) : '';

	return (
		<Card className="mb-6 border-[#f59e0b] shadow-[0_8px_0_#b45309,0_16px_25px_rgba(0,0,0,0.25)] relative group">
			<div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-amber-300/40 to-transparent rounded-bl-full pointer-events-none"></div>

			<CardHeader className="flex flex-row items-center justify-between pb-2 mb-2 relative z-10 border-none">
				<div className="flex items-center gap-2">
					<Badge variant="default" className="text-[10px] sm:text-xs">
						<span className="mr-1">🏆</span> {achievement.placement}
					</Badge>
					<span className="font-display font-bold text-xs text-amber-800">{dateStr}</span>
				</div>
				<div className="flex items-center justify-end">
					<Icon
						className={`min-w-8 min-h-8 ${achievement.highlighted ? 'animate-bounce' : ''}`}
						name={achievement.icon}
						color={achievement.iconColor || 'orange'}
						height={32}
						width={32}
					/>
				</div>
			</CardHeader>

			<CardContent className="relative z-10">
				<CardTitle className="mb-2 text-xl sm:text-2xl">{achievement.name}</CardTitle>
				<CardDescription className="mb-4">
					{achievement.placement} -{' '}
					{achievement.date ? new Date(achievement.date).getFullYear() : ''}
				</CardDescription>

				{achievement.coverImage && (
					<figure className="group relative max-h-[200px] overflow-hidden rounded-xl border-2 border-amber-200/50 shadow-inner mb-4 bg-code-surface">
						{/* 1. Base Image: 100% in focus, forced crisp edges */}
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<ExportedImage
							src={achievement.coverImage.src}
							alt={achievement.coverImage.alt || achievement.name}
							className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 [image-rendering:pixelated]"
              width='512'
              height='512'
							loading="lazy"
						/>

						{/* 2. Sharp LCD Dot Matrix Overlay (No blur!) */}
						<div
							className="pointer-events-none absolute inset-0 z-10 opacity-60 mix-blend-multiply transition-opacity duration-500 ease-out group-hover:opacity-0 dark:mix-blend-overlay dark:opacity-80"
							style={{
								// Draws a tiny, crisp 3x3 repeating dot grid over the perfectly focused image
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='3' height='3' viewBox='0 0 3 3' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='rgba(0,0,0,0.3)'/%3E%3C/svg%3E")`,
								backgroundSize: '3px 3px',
							}}
						/>

						{/* 3. Subtle Corner UI Crosshairs (Fades out on hover) */}
						<span className="pointer-events-none absolute left-2 top-1.5 z-20 font-mono text-[10px] leading-none text-on-surface-variant transition-opacity duration-500 group-hover:opacity-0">
							┌
						</span>
						<span className="pointer-events-none absolute right-2 bottom-1.5 z-20 font-mono text-[10px] leading-none text-on-surface-variant transition-opacity duration-500 group-hover:opacity-0">
							┘
						</span>
					</figure>
				)}

				<div className="flex flex-wrap gap-2 mt-4 items-center justify-between">
					<div className="flex items-center">
						{teamMembers.length > 0 && (
							<div className="flex -space-x-3 my-0 px-2 py-1">
								{teamMembers.map((person, idx) => (
									<TeamMemberPicture
										key={idx}
										person={person}
										width={40}
										height={40}
										className="rounded-2xl border-2 border-amber-400 shadow-md bg-amber-100 w-10 h-10 object-cover relative z-10 hover:z-20 hover:scale-110 transition-transform"
									/>
								))}
							</div>
						)}
					</div>

					{/* Fixed Links & Popups Container */}
					<div
						className="flex flex-wrap print:hidden justify-center items-center sm:justify-end gap-2 relative z-50"
						onClick={(e) => e.stopPropagation()}>
						{achievement.urls?.map((url, idx) => (
							<UrlLink key={`url-${idx}`} url={url} />
						))}
						{achievement.pdfs?.map((pdf, idx) => (
							<PdfLinkModal key={`pdf-${idx}`} pdf={pdf} />
						))}
						{achievement.images?.map((image, idx) => (
							<ImageLinkModal key={`img-${idx}`} image={image} />
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default AchievementCard;
