import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Navbar pageTitle="Portfolio" useFace={true} footer={true}>
      {children}
    </Navbar>
  );
}
