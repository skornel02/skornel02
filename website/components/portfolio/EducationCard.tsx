import React from 'react';
import type { Education } from '#content';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="card w-full bg-base-100 dark:bg-gray-900 shadow-xl my-3 border border-base-200 dark:border-gray-800">
      <div className="card-body">
        <div className="card-actions flex-wrap justify-between items-baseline">
          <h3 className="text-2xl font-bold uppercase text-title">{education.school}</h3>
          <span className="text-secondary font-medium">{education.duration}</span>
        </div>
        <h4 className="text-lg">
          <span className="text-primary font-semibold uppercase">{education.major}</span>
          {education.minor && (
            <>
              <br />
              <span className="text-secondary">{education.minor}</span>
            </>
          )}
        </h4>
        {education.content && (
          <div
            className="prose dark:prose-invert max-w-none text-text mt-2"
            dangerouslySetInnerHTML={{ __html: education.content }}
          />
        )}
      </div>
    </div>
  );
}

export default EducationCard;
