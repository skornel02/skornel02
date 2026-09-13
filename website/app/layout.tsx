import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <head>
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
