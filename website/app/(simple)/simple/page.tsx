import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Icon } from '@/components/common/Icon';
import {
  achievements as allAchievements,
  experience as allExperiences,
  education as allEducations,
} from '#content';

export const metadata: Metadata = {
  title: 'Simple Portfolio - Stefán Kornél',
  description: 'Minimal terminal.css version of SK portfolio',
};

export default function SimplePage() {
  const experiences = [...allExperiences].sort((a, b) => b.order - a.order);
  const educations = [...allEducations].sort((a, b) => b.order - a.order);
  const achievements = [...allAchievements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="simple-page">
      <section>
        <div className="terminal-nav">
          <div className="terminal-logo">
            <div className="logo terminal-prompt">Stefán Kornél</div>
          </div>
          <nav className="terminal-menu">
            <ul>
              <li>
                <a className="menu-item active" href="#">
                  Simple portfolio
                </a>
              </li>
              <li>
                <Link className="menu-item" href="/">
                  Back to the future
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <article className="my-8">
        <header>
          <h2>Experiences</h2>
        </header>
        <section>
          <div className="terminal-timeline">
            {experiences.map((exp) => (
              <div key={exp.slug} className="terminal-card my-4">
                <header>
                  {exp.name} ({exp.duration})
                </header>
                <header>
                  <small>{exp.role}</small>
                </header>
                {exp.content && (
                  <div
                    className="p-2"
                    dangerouslySetInnerHTML={{ __html: exp.content }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </article>

      <article className="my-8">
        <header>
          <h2>Educations</h2>
        </header>
        <section>
          <div className="terminal-timeline">
            {educations.map((edu) => (
              <div key={edu.slug} className="terminal-card my-4">
                <header>
                  {edu.school} ({edu.duration})
                </header>
                <header>
                  <small>
                    {edu.major} {edu.minor && ` / ${edu.minor}`}
                  </small>
                </header>
                {edu.content && (
                  <div
                    className="p-2"
                    dangerouslySetInnerHTML={{ __html: edu.content }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </article>

      <article className="my-8">
        <header>
          <h2>Achievements</h2>
        </header>
        <section>
          <div className="terminal-timeline">
            {achievements.map((ach) => (
              <div key={ach.slug} className="terminal-card my-4">
                <header>{ach.name}</header>
                <div className="p-2">
                  <div className="flex items-center justify-center gap-2 my-2">
                    <span className="font-bold">{ach.placement}</span>
                    <Icon
                      className={ach.highlighted ? 'animate-bounce' : ''}
                      name={ach.icon}
                      color={ach.iconColor || 'orange'}
                      height={24}
                      width={24}
                    />
                  </div>
                  <div className="flex flex-wrap justify-end gap-2 my-2">
                    {ach.pdfs.map((pdf, idx) => (
                      <a
                        key={idx}
                        href={pdf.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-default inline-flex items-center gap-1 text-xs"
                      >
                        {pdf.name}
                        {pdf.icon && <Icon name={pdf.icon} height={14} width={14} />}
                      </a>
                    ))}
                    {ach.images.map((image, idx) => (
                      <a
                        key={idx}
                        href={image.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-default inline-flex items-center gap-1 text-xs"
                      >
                        {image.name}
                        {image.icon && <Icon name={image.icon} height={14} width={14} />}
                      </a>
                    ))}
                    {ach.urls.map((url, idx) => (
                      <a
                        key={idx}
                        href={url.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-default inline-flex items-center gap-1 text-xs"
                      >
                        {url.name}
                        {url.icon && <Icon name={url.icon} height={14} width={14} />}
                      </a>
                    ))}
                  </div>
                </div>
                {ach.coverImage && (
                  <div className="cover-image max-h-[300px] overflow-hidden my-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ach.coverImage.src}
                      alt={ach.coverImage.alt || ach.name}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
