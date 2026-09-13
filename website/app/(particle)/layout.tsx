import React from 'react';
import { ParticleBackground } from '@/components/common/ParticleBackground';

export default function ParticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <div className="relative z-10 w-full">{children}</div>
      <ParticleBackground />
    </div>
  );
}
