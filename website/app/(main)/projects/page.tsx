import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects of SK',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="flex flex-wrap justify-center align-middle p-4">
        <div className="mockup-browser border border-base-300 bg-base-100 dark:bg-gray-900 shadow-xl max-w-[550px] w-full">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300">
              <a
                href="https://metro.skornel02.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-80 hover:opacity-100"
              >
                https://metro.skornel02.hu
              </a>
            </div>
          </div>
          <div className="border-t border-base-300 flex justify-center p-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold mb-2">Metro door helper</h1>
              <p className="text-base text-text mb-4">
                A simple application that helps you pick which door you should board the Budapest
                Metro to get off at the right exit.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://metro.skornel02.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
