import React from 'react';
import type {Experience} from '#content';
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

interface ExperienceCardProps {
	experience: Experience;
}

export function ExperienceCard({experience}: ExperienceCardProps) {
	return (
		<Card className="mb-6 border-[#38bdf8] shadow-[0_6px_0_#0284c7]">
			<CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2 pb-2">
				<div className="flex items-center gap-2">
					<span className="text-xl">💳</span>
					<CardTitle>{experience.name}</CardTitle>
				</div>
				<Badge variant="ghost">{experience.duration}</Badge>
			</CardHeader>
			<CardContent>
				<CardDescription className="mb-3 text-primary">{experience.role}</CardDescription>
				{experience.content && (
					<div
						className="prose prose-sm max-w-none font-body leading-relaxed"
						dangerouslySetInnerHTML={{__html: experience.content}}
					/>
				)}
			</CardContent>
		</Card>
	);
}

export default ExperienceCard;
