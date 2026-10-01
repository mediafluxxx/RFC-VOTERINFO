'use client';

import React from 'react';
import { Container, Card, Button } from '@/components/ui';

export const Resources: React.FC = () => {
  const resources = [
    {
      title: 'Voter Registration',
      description: 'Check your registration status or register to vote',
      link: 'https://www.elections.virginia.gov/registration/',
      icon: '📝',
    },
    {
      title: 'Polling Locations',
      description: 'Find your polling place and voting hours',
      link: 'https://www.elections.virginia.gov/citizen-portal/',
      icon: '📍',
    },
    {
      title: 'Official Amendment Text',
      description: 'Read the complete text of the proposed amendment',
      link: '#',
      icon: '📄',
    },
    {
      title: 'Absentee Voting',
      description: 'Learn about early voting and absentee ballot options',
      link: 'https://www.elections.virginia.gov/casting-a-ballot/absentee-voting/',
      icon: '✉️',
    },
  ] as const;

  return (
    <section id="resources" className="section bg-white">
      <Container maxWidth="xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Voter Resources
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Everything you need to participate in the upcoming election
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} variant="outlined" padding="lg" className="hover:border-primary-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{resource.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{resource.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                    onClick={() => window.open(resource.link, '_blank')}
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make Your Voice Heard?
          </h3>
          <p className="text-lg md:text-xl text-primary-50 mb-6 max-w-2xl mx-auto">
            Make sure you&apos;re registered and know your polling location before April 21, 2026
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-primary-700 hover:bg-primary-50"
          >
            Check Registration Status
          </Button>
        </div>
      </Container>
    </section>
  );
};
