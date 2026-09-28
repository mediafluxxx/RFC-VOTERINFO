import React from 'react';
import { Container } from '@/components/ui';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100 py-12 md:py-16">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Richmond First</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Empowering voters with clear, accessible information about Virginia's
              redistricting amendment.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Important Dates</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Election Date: April 21, 2026</li>
              <li>Early Voting Begins: TBD</li>
              <li>Registration Deadline: TBD</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.elections.virginia.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  Virginia Elections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  Voter Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  Find Your Polling Place
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-center text-sm text-neutral-500">
            © {currentYear} Richmond First. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
