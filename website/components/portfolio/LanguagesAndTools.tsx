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
    <article className="flex flex-col">
      <ul className="flex flex-wrap gap-3">
        {sortedSkills.map((skill) => {
          const isSelected = selectedSkill?.slug === skill.slug;
          return (
            <li key={skill.slug}>
              <button
                type="button"
                className={`flex items-center justify-center w-12 h-12 rounded-xl border-2 transition-all shadow-sm ${
                  skill.detailed
                    ? isSelected
                      ? 'bg-amber-300 border-amber-500 shadow-[0_4px_0_#d97706] translate-y-1'
                      : 'bg-amber-100 border-amber-300 shadow-[0_4px_0_#d97706] hover:-translate-y-1 hover:bg-amber-200 cursor-pointer'
                    : 'bg-slate-100 border-slate-300 opacity-60 cursor-not-allowed shadow-none'
                }`}
                disabled={!skill.detailed}
                onClick={() => handleSkillClick(skill)}
                title={`${skill.name}${skill.detailed ? ' (Click to see details)' : ''}`}
              >
                <Icon name={skill.icon} height={28} width={28} />
              </button>
            </li>
          );
        })}
      </ul>

      {selectedSkill && (
        <div id="skill-container" className="w-full mt-6 rounded-2xl bg-[#1e130b] border-4 border-[#8d562b] shadow-[0_8px_0_#4a2810,0_16px_25px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold mb-4 text-amber-300 font-display flex items-center gap-2">
              <Icon name={selectedSkill.icon} height={24} width={24} /> {selectedSkill.name}
            </h3>
            {selectedSkill.content ? (
              <div
                className="prose prose-sm max-w-none text-amber-100 font-body"
                dangerouslySetInnerHTML={{ __html: selectedSkill.content }}
              />
            ) : (
              <p className="opacity-75 text-amber-100/50">No additional details available.</p>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default LanguagesAndTools;
