import type { Metadata } from 'next';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import './globals.css';
import { GeneralNavbar } from '@/components/navigation/GeneralNavbar';
import { TooltipProvider } from '@/components/ui/tooltip';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    template: '%s - SK',
    default: 'SK',
  },
  description: 'Portfolio of SK',
  metadataBase: new URL('https://skornel02.hu'),
  openGraph: {
    type: 'website',
    locale: 'en',
    siteName: 'skornel02',
    images: ['/og-banner.jpg'],
  },
  twitter: {
    card: 'summary',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
