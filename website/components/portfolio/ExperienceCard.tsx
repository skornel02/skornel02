import React from 'react';
import type { Experience } from '#content';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="card w-full bg-base-100 dark:bg-gray-900 shadow-xl my-3 border border-base-200 dark:border-gray-800">
      <div className="card-body">
        <div className="card-actions flex-wrap justify-between items-baseline">
          <h3 className="text-2xl font-bold uppercase text-title">{experience.name}</h3>
          <span className="text-secondary font-medium">{experience.duration}</span>
        </div>
        <h4 className="text-lg">
          <span className="text-primary font-semibold uppercase">{experience.role}</span>
        </h4>
        {experience.content && (
          <div
            className="prose dark:prose-invert max-w-none text-text mt-2"
            dangerouslySetInnerHTML={{ __html: experience.content }}
          />
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
