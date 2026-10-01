import React from 'react';
import Image from 'next/image';
import { Container, Button } from '@/components/ui';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#008B9C] via-[#007C8C] to-[#006B7A] text-white overflow-hidden">
      {/* Background Image with 28% opacity */}
      <div className="absolute inset-0" style={{ opacity: 0.32 }}>
        <Image
          src="/assets/hero-rva-orig.png"
          alt="Richmond skyline"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />

      <Container maxWidth="xl" className="relative">
        <div className="section-lg text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in">
              Virginia&apos;s Redistricting Amendment
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-primary-100 animate-slide-up">
              Vote on April 21, 2026
            </p>

            <p className="text-base md:text-lg lg:text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Get informed about Virginia&apos;s redistricting amendment and understand what&apos;s
              at stake for our community. Your vote matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-scale-in">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary-700"
              >
                Find Polling Place
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-50 to-transparent" />
    </section>
  );
};
