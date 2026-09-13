import React from 'react';
import type { Metadata } from 'next';
import { BusinessCard } from '@/components/me/BusinessCard';
import { CardNavigation } from '@/components/me/CardNavigation';

export const metadata: Metadata = {
  title: 'Business Card - Stefán Kornél',
  description: 'Digital personal contact card of SK',
};

export default function BusinessCardPage() {
  return (
    <main className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <div className="card w-80 sm:w-96 bg-base-100 dark:bg-gray-900 shadow-2xl border border-secondary m-auto z-10 py-6 px-4">
        <div className="my-8">
          <BusinessCard />
        </div>
        <div className="mt-4">
          <CardNavigation home={true} details={true} />
        </div>
      </div>
    </main>
  );
}
