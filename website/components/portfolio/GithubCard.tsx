'use client';

import React, { useEffect, useState } from 'react';

export function GithubCard() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkMediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    darkMediaQuery.addEventListener('change', handler);
    return () => darkMediaQuery.removeEventListener('change', handler);
  }, []);

  const statsUrl = `https://github-readme-stats.vercel.app/api/top-langs?username=skornel02&show_icons=true&locale=en&layout=compact&theme=${
    isDark ? 'dark' : 'light'
  }`;

  return (
    <div className="flex justify-center my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={statsUrl}
        alt="skornel02's stats on GitHub"
        width={350}
        height={180}
        className="block mx-auto rounded shadow"
        loading="lazy"
      />
    </div>
  );
}

export default GithubCard;
