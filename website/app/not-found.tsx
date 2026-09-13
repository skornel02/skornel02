import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { CountdownRedirect } from '@/components/common/CountdownRedirect';

export default function NotFound() {
  return (
    <Navbar pageTitle="Page not found">
      <div className="flex flex-col justify-center items-center min-h-[50vh] gap-4 p-8">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl">
          Redirecting to main page in <CountdownRedirect />...
        </p>
      </div>
    </Navbar>
  );
}
