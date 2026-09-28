import React from 'react';
import { ContainerProps } from '@/types';
import { cn } from '@/lib/utils';

/**
 * Container component with responsive padding and max-width options
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = 'xl',
  padding = true,
}) => {
  const baseStyles = 'mx-auto w-full';

  const maxWidthStyles = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1400px]',
    full: 'max-w-full',
  };

  const paddingStyles = padding
    ? 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'
    : '';

  return (
    <div className={cn(baseStyles, maxWidthStyles[maxWidth], paddingStyles, className)}>
      {children}
    </div>
  );
};
