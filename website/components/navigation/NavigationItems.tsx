'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/common/Icon';

export function NavigationItems() {
  const pathname = usePathname();

  const isMainPage = pathname === '/' || pathname === '';
  const isProjectsPage = pathname === '/projects' || pathname === '/projects/';
  const isPostsPage = pathname.startsWith('/posts');

  return (
    <>
      <li>
        <Link
          href="/"
          className={`flex items-center gap-2 ${
            isMainPage
              ? 'active font-bold bg-primary-content/20 text-white'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <div className="tooltip tooltip-bottom" data-tip="Home">
            <Icon height={20} width={20} name="mdi:home" />
          </div>
          <span className="hidden sm:inline">Home</span>
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className={`flex items-center gap-2 ${
            isProjectsPage
              ? 'active font-bold bg-primary-content/20 text-white'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <div className="tooltip tooltip-bottom" data-tip="Projects">
            <Icon height={20} width={20} name="mdi:hammer-screwdriver" />
          </div>
          <span className="hidden sm:inline">Projects</span>
        </Link>
      </li>
      <li>
        <Link
          href="/posts"
          className={`flex items-center gap-2 ${
            isPostsPage
              ? 'active font-bold bg-primary-content/20 text-white'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <div className="tooltip tooltip-bottom" data-tip="Posts">
            <Icon height={20} width={20} name="mdi:notebook-outline" />
          </div>
          <span className="hidden sm:inline">Posts</span>
        </Link>
      </li>
    </>
  );
}

export default NavigationItems;
