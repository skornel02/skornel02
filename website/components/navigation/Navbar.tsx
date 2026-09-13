'use client';

import React from 'react';
import { NavigationItems } from './NavigationItems';
import { Footer } from './Footer';

interface NavbarProps {
  pageTitle?: string;
  useFace?: boolean;
  footer?: boolean;
  children: React.ReactNode;
}

export function Navbar({
  pageTitle = 'Portfolio',
  useFace = false,
  footer = true,
  children,
}: NavbarProps) {
  return (
    <div id="navbar" className="drawer lg:drawer-open min-h-screen">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Top navigation bar for mobile/tablet */}
        <div className="w-full navbar bg-primary text-white flex lg:hidden">
          <div className="flex-1 ml-2 font-bold text-2xl">{pageTitle}</div>

          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <NavigationItems />
            </ul>
          </div>
        </div>

        <div className="flex-1">{children}</div>

        {footer && <Footer />}
      </div>

      {/* Navigation static sidebar (lg and up) */}
      <div className="drawer-side z-40">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <div className="min-h-full w-72 bg-primary text-white flex flex-col justify-center py-8">
          <div className="my-auto flex justify-center items-center px-4">
            {useFace ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/images/people/sk.jpeg"
                alt="Kornél portrait"
                className="mask mask-squircle w-40 h-40 object-cover shadow-lg ring ring-white/20"
              />
            ) : (
              <div className="normal-case text-white text-3xl font-bold text-center">
                {pageTitle}
              </div>
            )}
          </div>
          <ul className="menu menu-lg p-4 w-full gap-2 mt-4">
            <NavigationItems />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
