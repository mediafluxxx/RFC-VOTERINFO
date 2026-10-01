import React from 'react';
import { Container, Card } from '@/components/ui';

export const Details: React.FC = () => {
  return (
    <section id="details" className="section bg-neutral-50">
      <Container maxWidth="lg">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Amendment Details
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            A comprehensive look at what the amendment proposes
          </p>
        </div>

        <Card variant="default" padding="xl" className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Current Process
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Currently, Virginia&apos;s General Assembly is responsible for drawing district
                lines. This process has been subject to various legal challenges and
                concerns about fairness and representation.
              </p>
            </div>

            <div className="h-px bg-neutral-200" />

            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Proposed Changes
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The amendment proposes establishing a commission-based approach to
                redistricting, with the following key features:
              </p>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Independent commission with bipartisan representation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Public input requirements and transparency measures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Criteria for fair and equitable district boundaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Procedures for resolving disputes and deadlocks</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-neutral-200" />

            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Impact on Communities
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                This amendment will affect how communities are represented in both state
                legislature and Congress. Understanding these changes is crucial for making
                an informed decision at the ballot box.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-8 p-6 bg-warning-50 border-l-4 border-warning-500 rounded-r-lg">
          <p className="text-warning-900 font-medium">
            <strong>Note:</strong> This is a simplified overview. For complete legal text
            and detailed analysis, please refer to the official documentation.
          </p>
        </div>
      </Container>
    </section>
  );
};
