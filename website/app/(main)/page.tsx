import React from 'react';
import type {Metadata} from 'next';
import {ExperienceCard} from '@/components/portfolio/ExperienceCard';
import {EducationCard} from '@/components/portfolio/EducationCard';
import {LanguagesAndTools} from '@/components/portfolio/LanguagesAndTools';
import {AchievementCard} from '@/components/portfolio/AchievementCard';
import {
	achievements as allAchievements,
	experience as allExperiences,
	education as allEducations,
	skills as allSkills,
	people as allPeople,
	type Achievement,
} from '#content';
import {ActionBridge, DossierSection, DossierTextBlock} from '@/components/portfolio/Dossier';
import {PortfolioActionDock} from '@/components/portfolio/PortfolioActionDock';
import {TooltipProvider} from '@/components/ui/tooltip';

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Portfolio of SK',
};

interface AchievementGroup {
	name: string;
	achievements: Achievement[];
}

export default function HomePage() {
	const experiences = [...allExperiences].sort((a, b) => b.order - a.order);
	const educations = [...allEducations].sort((a, b) => b.order - a.order);

	const peopleMap = Object.fromEntries(allPeople.map((person) => [person.slug, person]));

	const achievementsGrouped: AchievementGroup[] = [];
	[...allAchievements]
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.forEach((achievement) => {
			const compYear = new Date(achievement.date).getFullYear().toString();
			const group = achievementsGrouped.find((g) => g.name === compYear);
			if (group) {
				group.achievements.push(achievement);
			} else {
				achievementsGrouped.push({
					name: compYear,
					achievements: [achievement],
				});
			}
		});

	return (
		<div className="w-full">
			<DossierSection
				id="overview"
				category="IDENTITY"
				titleNoun="STEFÁN"
				titleAccent="KORNÉL"
				subtitle="WorldSkills Bronze medallist 🥉 // Fullstack developer // System Architect"
				statusText=""
				containerClassName="mt-4">
				<PortfolioActionDock />
			</DossierSection>

			<ActionBridge
				nodes={
					[
						// {
						// 	label: 'Education',
						// 	href: '#education',
						// },
						// {
						// 	label: 'Awards',
						// 	href: '#awards',
						// },
						// {
						// 	label: 'Certifications',
						// 	href: '#certifications',
						// },
					]
				}
			/>

			<DossierSection
				id="experience"
				category="EXPERIENCE"
				titleNoun="PREVIOUS"
				titleAccent="EXPERIENCES"
				subtitle=""
				statusText="">
				<div className="relative z-10 pt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2 text-teal-300 mb-2">
							<span className="text-[22px]">💼</span>
							<span className="font-display font-bold text-xs uppercase tracking-wider">
								Experience
							</span>
						</div>
						{experiences.map((experience) => (
							<ExperienceCard key={experience.slug} experience={experience} />
						))}
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2 text-emerald-300 mb-2">
							<span className="text-[22px]">🎓</span>
							<span className="font-display font-bold text-xs uppercase tracking-wider">
								Education
							</span>
						</div>
						{educations.map((education) => (
							<EducationCard key={education.slug} education={education} />
						))}
					</div>
				</div>
			</DossierSection>

			<ActionBridge nodes={[]} />

			<DossierSection
				id="achievements"
				category="ACHIEVEMENTS"
				titleNoun="PERSONAL"
				titleAccent="ACHIEVEMENTS"
				subtitle=""
				statusText="">
				<div className="space-y-8">
					{achievementsGrouped.map((group) => (
						<div key={group.name} className="space-y-3">
							<h3 className="text-2xl font-bold text-amber-300 border-b-2 pb-1 border-amber-300/20 font-display">
								{group.name}
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
								<TooltipProvider>
									{group.achievements.map((achievement) => (
										<div key={achievement.slug} className="lg:col-span-1">
											<AchievementCard achievement={achievement} peopleMap={peopleMap} />
										</div>
									))}
								</TooltipProvider>
							</div>
						</div>
					))}
				</div>
			</DossierSection>

			<ActionBridge nodes={[]} />

			<DossierSection
				id="skills"
				category="SKILLS"
				titleNoun="WORK"
				titleAccent="SKILLS"
				subtitle=""
				statusText="">
				<LanguagesAndTools skills={allSkills} />
			</DossierSection>
		</div>
	);
}
