import React from 'react';
import { Container, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

export const Overview: React.FC = () => {
  const keyPoints = [
    {
      title: 'What is Redistricting?',
      description:
        'Redistricting is the process of redrawing electoral district boundaries to ensure equal representation based on population changes.',
      icon: '📍',
    },
    {
      title: 'Why Does It Matter?',
      description:
        'Fair redistricting ensures that every vote carries equal weight and that communities have proportional representation in government.',
      icon: '⚖️',
    },
    {
      title: 'What Changes?',
      description:
        'This amendment proposes changes to how Virginia conducts redistricting, affecting how district lines are drawn in the future.',
      icon: '🔄',
    },
  ];

  return (
    <section id="overview" className="section bg-white">
      <Container maxWidth="xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Understanding the Amendment
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Here's what you need to know about Virginia's redistricting amendment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {keyPoints.map((point, index) => (
            <Card key={index} variant="elevated" padding="lg" className="hover:scale-[1.02] transition-transform">
              <CardHeader>
                <div className="text-5xl mb-4">{point.icon}</div>
                <CardTitle className="text-xl md:text-2xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-primary-50 rounded-2xl border-2 border-primary-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary-900 mb-4">
            Quick Facts
          </h3>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold text-xl">✓</span>
              <span>Redistricting occurs every 10 years following the U.S. Census</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold text-xl">✓</span>
              <span>The amendment affects both state and congressional districts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold text-xl">✓</span>
              <span>Your vote determines how redistricting will be conducted in Virginia</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
