import React from 'react';
import { Icon } from '@/components/common/Icon';
import { TeamMemberPicture } from './TeamMemberPicture';
import { UrlLink } from '@/components/link/UrlLink';
import { ImageLinkModal } from '@/components/link/ImageLinkModal';
import { PdfLinkModal } from '@/components/link/PdfLinkModal';
import type { Achievement, Person } from '#content';

interface AchievementCardProps {
  achievement: Achievement;
  peopleMap?: Record<string, Person>;
}

export function AchievementCard({ achievement, peopleMap = {} }: AchievementCardProps) {
  const teamMembers = (achievement.team || [])
    .map((slug) => peopleMap[slug])
    .filter(Boolean);

  const dateStr = achievement.date
    ? new Date(achievement.date).toISOString().substring(0, 10)
    : '';

  return (
    <div className="card bg-base-100 dark:bg-gray-900 shadow-xl my-3 border border-base-200 dark:border-gray-800">
      <div className="card-body p-4 sm:p-6">
        <h3 className="card-title justify-center text-center text-lg order-2 sm:order-1 font-bold">
          {achievement.name}
        </h3>

        <div className="w-full flex justify-between items-center order-1 sm:order-2">
          <div className="flex items-center gap-2">
            <Icon
              className={`min-w-8 min-h-8 ${achievement.highlighted ? 'animate-bounce' : ''}`}
              name={achievement.icon}
              color={achievement.iconColor || 'orange'}
              height={32}
              width={32}
            />
            <span className="badge bg-primary rounded text-white font-semibold px-3 py-2 min-w-20 text-center">
              {achievement.placement}
            </span>
          </div>
          <div className="text-end text-title">
            <small className="opacity-75">{dateStr}</small>
          </div>
        </div>

        <div className="card-actions justify-between items-center order-4 mt-2">
          <div className="flex justify-center sm:justify-start items-center">
            {teamMembers.length > 0 && (
              <div className="avatar-group -space-x-2 my-0 px-2 py-1">
                {teamMembers.map((person, idx) => (
                  <TeamMemberPicture
                    key={idx}
                    person={person}
                    width={40}
                    height={40}
                    className="avatar rounded-full border-2 border-base-100 ring ring-secondary"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex print:hidden justify-center items-center sm:justify-end mt-1 join">
            {achievement.urls.map((url, idx) => (
              <UrlLink key={idx} url={url} />
            ))}
            {achievement.pdfs.map((pdf, idx) => (
              <PdfLinkModal key={idx} pdf={pdf} />
            ))}
            {achievement.images.map((image, idx) => (
              <ImageLinkModal key={idx} image={image} />
            ))}
          </div>
        </div>
      </div>

      {achievement.coverImage && (
        <figure className="max-h-[150px] lg:max-h-[300px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={achievement.coverImage.src}
            alt={achievement.coverImage.alt || achievement.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </figure>
      )}
    </div>
  );
}

export default AchievementCard;
