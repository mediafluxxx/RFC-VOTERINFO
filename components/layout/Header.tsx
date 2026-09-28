'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
      )}
    >
      <Container maxWidth="xl">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center focus-ring rounded-lg">
            <Image
              src="/assets/richmond-first-logo.png"
              alt="Richmond First Club"
              width={242}
              height={46}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#overview"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium focus-ring rounded px-2 py-1"
            >
              Overview
            </Link>
            <Link
              href="#details"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium focus-ring rounded px-2 py-1"
            >
              Details
            </Link>
            <Link
              href="#resources"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium focus-ring rounded px-2 py-1"
            >
              Resources
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600 focus-ring rounded"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
};
