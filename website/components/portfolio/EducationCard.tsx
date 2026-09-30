import React from 'react';
import type {Education} from '#content';
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

interface EducationCardProps {
	education: Education;
}

export function EducationCard({education}: EducationCardProps) {
	return (
		<Card className="mb-6 border-emerald-400 shadow-[0_6px_0_#059669]">
			<CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2 pb-2">
				<div className="flex items-center gap-2">
					<span className="text-xl">🎓</span>
					<CardTitle>{education.school}</CardTitle>
				</div>
				<Badge variant="ghost">{education.duration}</Badge>
			</CardHeader>
			<CardContent>
				<CardDescription className="mb-3 text-emerald-600 font-bold">
					{education.major}
					{education.minor && (
						<>
							<br />
							<span className="text-emerald-400 font-normal">{education.minor}</span>
						</>
					)}
				</CardDescription>
				{education.content && (
					<div
						className="prose prose-sm max-w-none  font-body leading-relaxed"
						dangerouslySetInnerHTML={{__html: education.content}}
					/>
				)}
			</CardContent>
		</Card>
	);
}

export default EducationCard;
