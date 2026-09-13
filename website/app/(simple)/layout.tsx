import React from 'react';
import 'terminal.css';

export default function SimpleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="terminal-container p-4 md:p-8 max-w-4xl mx-auto">
      {children}
    </div>
  );
}
