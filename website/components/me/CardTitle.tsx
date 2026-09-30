'use client';

import React, { useEffect, useState } from 'react';

interface CardTitleProps {
  onDone?: () => void;
}

export function CardTitle({ onDone }: CardTitleProps) {
  const firstName = 'Stefán';
  const lastName = 'Kornél';
  const fullText = `${firstName} ${lastName}`;
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    if (displayedLength < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedLength((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (onDone) {
      const timeout = setTimeout(() => {
        onDone();
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [displayedLength, fullText.length, onDone]);

  const currentFirst = firstName.slice(0, Math.min(displayedLength, firstName.length));
  const currentLast =
    displayedLength > firstName.length + 1
      ? lastName.slice(0, displayedLength - firstName.length - 1)
      : '';

  return (
    <h1 className="text-4xl whitespace-nowrap">
      <span className="">{currentFirst}</span>
      {displayedLength > firstName.length && <span> </span>}
      <span className="text-primary">{currentLast}</span>
    </h1>
  );
}

export default CardTitle;
