import React from 'react';
import type { Metadata } from 'next';
import { MeCard } from '@/components/me/MeCard';

export const metadata: Metadata = {
  title: 'Stefán Kornél - Personal Card',
  description: 'Digital personal contact card of SK',
};

export default function MePage() {
  return (
    <main className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <MeCard />
    </main>
  );
}
