import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Icon } from '@/components/common/Icon';
import { ExperienceCard } from '@/components/portfolio/ExperienceCard';
import { EducationCard } from '@/components/portfolio/EducationCard';
import { GithubCard } from '@/components/portfolio/GithubCard';
import { LanguagesAndTools } from '@/components/portfolio/LanguagesAndTools';
import { AchievementCard } from '@/components/portfolio/AchievementCard';
import {
  achievements as allAchievements,
  experience as allExperiences,
  education as allEducations,
  skills as allSkills,
  people as allPeople,
  type Achievement,
} from '#content';

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

  const peopleMap = Object.fromEntries(
    allPeople.map((person) => [person.slug, person])
  );

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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* About Section */}
      <section className="resume-section my-8" id="about">
        <div className="my-auto">
          <h1 id="name" className="mb-2 text-5xl sm:text-pageTitle">
            <span className="text-secondary block">Stefán</span>
            <span className="text-primary block">Kornél</span>
          </h1>
          <p className="italic text-lg sm:text-xl font-medium text-title mb-3">
            World #3 in IT Software Solutions 🥉 | 47th WorldSkills
          </p>
          <p className="mb-6 text-base sm:text-lg leading-relaxed text-text">
            I am a young tinkerer that loves programming. My current goal is to start working in the
            field. Learning to bake is in progress!
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-grow">
              <Link href="/simple" className="btn btn-sm md:btn-md btn-ghost border border-base-300">
                Simplified website
              </Link>
            </div>
            <div className="mx-0 join">
              <Link
                id="social-card"
                className="btn btn-sm md:btn-md btn-outline btn-secondary join-item"
                href="/me"
                title="Personal Card"
              >
                <Icon height={20} width={20} name="mdi:format-list-bulleted" />
              </Link>
              <a
                id="social-gh"
                className="btn btn-sm md:btn-md btn-outline btn-primary join-item"
                href="https://github.com/skornel02"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Icon height={20} width={20} name="mdi:github" />
              </a>
              <a
                className="btn btn-sm md:btn-md btn-outline btn-primary join-item"
                href="https://www.facebook.com/stefankornel02"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <Icon height={20} width={20} name="mdi:facebook-box" />
              </a>
              <a
                className="btn btn-sm md:btn-md btn-outline btn-primary join-item"
                href="https://linkedin.com/in/skornel02"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Icon height={20} width={20} name="mdi:linkedin" />
              </a>
              <a
                className="btn btn-sm md:btn-md btn-outline btn-primary join-item"
                href="https://aemail.com/Elgl"
                title="Email"
              >
                <Icon height={20} width={20} name="mdi:email-fast" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider my-10"></div>

      {/* Experience Section */}
      <section className="resume-section my-8" id="experience">
        <h2 className="mb-6 text-3xl sm:text-pageSection">Experience</h2>
        <div className="space-y-4">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </section>

      <div className="divider my-10"></div>

      {/* Education Section */}
      <section className="resume-section my-8" id="education">
        <h2 className="mb-6 text-3xl sm:text-pageSection">Education</h2>
        <div className="space-y-4">
          {educations.map((education) => (
            <EducationCard key={education.slug} education={education} />
          ))}
        </div>
      </section>

      <div className="divider my-10"></div>

      {/* Skills Section */}
      <section className="resume-section my-8" id="skills">
        <h2 className="mb-6 text-3xl sm:text-pageSection">Skills &amp; Tools</h2>
        <LanguagesAndTools skills={allSkills} />
      </section>

      <div className="divider my-10"></div>

      {/* Achievements Section */}
      <section className="resume-section my-8" id="achievements">
        <h2 className="mb-6 text-3xl sm:text-pageSection">Achievements</h2>
        <div className="space-y-8">
          {achievementsGrouped.map((group) => (
            <div key={group.name} className="space-y-3">
              <h3 className="text-2xl font-bold text-secondary border-b pb-1 border-secondary/20">
                {group.name}
              </h3>
              <ul className="space-y-4 list-none p-0">
                {group.achievements.map((achievement) => (
                  <li key={achievement.slug}>
                    <AchievementCard achievement={achievement} peopleMap={peopleMap} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="divider my-10"></div>

      {/* GitHub Section */}
      <section className="resume-section my-8" id="github">
        <GithubCard />
      </section>
    </div>
  );
}
