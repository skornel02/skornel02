'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import type { Skill } from '#content';

interface LanguagesAndToolsProps {
  skills: Skill[];
}

export function LanguagesAndTools({ skills }: LanguagesAndToolsProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const sortedSkills = [...skills].sort((a, b) => a.order - b.order);

  const handleSkillClick = (skill: Skill) => {
    if (!skill.detailed) return;
    setSelectedSkill((prev) => (prev?.slug === skill.slug ? null : skill));
  };

  return (
    <article className="flex flex-col my-4">
      <ul className="min-w-[40px] flex flex-wrap gap-3">
        {sortedSkills.map((skill) => {
          const isSelected = selectedSkill?.slug === skill.slug;
          return (
            <li key={skill.slug}>
              <button
                type="button"
                className={`btn btn-square transition-all ${
                  skill.detailed
                    ? isSelected
                      ? 'btn-primary shadow-lg ring ring-primary'
                      : 'btn-outline hover:btn-primary cursor-pointer'
                    : 'btn-disabled opacity-60'
                }`}
                disabled={!skill.detailed}
                onClick={() => handleSkillClick(skill)}
                title={`${skill.name}${skill.detailed ? ' (Click to see details)' : ''}`}
              >
                <Icon name={skill.icon} height={36} width={36} />
              </button>
            </li>
          );
        })}
      </ul>

      {selectedSkill && (
        <div id="skill-container" className="w-full mockup-window border bg-base-300 my-4 shadow-lg">
          <div className="px-6 py-4 bg-base-200 h-full markdown-body">
            <h3 className="text-xl text-center font-bold mb-4">{selectedSkill.name}</h3>
            {selectedSkill.content ? (
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedSkill.content }}
              />
            ) : (
              <p className="text-center opacity-75">No additional details available.</p>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default LanguagesAndTools;
