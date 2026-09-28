import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Richmond First | Virginia's Redistricting Amendment",
  description:
    "Comprehensive voter information guide for Virginia's April 21, 2026 redistricting amendment. Learn about what's at stake and make an informed decision.",
  keywords: [
    'Virginia',
    'redistricting',
    'amendment',
    'voter guide',
    'Richmond',
    'election 2026',
  ],
  authors: [{ name: 'Richmond First' }],
  openGraph: {
    title: "Virginia's Redistricting Amendment - Voter Guide",
    description:
      'Get informed about Virginia\'s redistricting amendment and understand what\'s at stake for our community.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Virginia's Redistricting Amendment - Voter Guide",
    description:
      'Get informed about Virginia\'s redistricting amendment. Vote April 21, 2026.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
