'use client';

import React from 'react';
import { ButtonProps } from '@/types';
import { cn } from '@/lib/utils';

/**
 * Button component with multiple variants and sizes
 * Implements expert-level UI/UX patterns with accessibility
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      'inline-flex items-center justify-center gap-2',
      'rounded-lg font-medium',
      'transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    ];

    const variantStyles = {
      primary: [
        'bg-primary-600 text-white',
        'hover:bg-primary-700 active:bg-primary-800',
        'focus-visible:ring-primary-500',
        'shadow-sm hover:shadow-md',
      ],
      secondary: [
        'bg-secondary-600 text-white',
        'hover:bg-secondary-700 active:bg-secondary-800',
        'focus-visible:ring-secondary-500',
        'shadow-sm hover:shadow-md',
      ],
      outline: [
        'border-2 border-primary-600 text-primary-600',
        'hover:bg-primary-50 active:bg-primary-100',
        'focus-visible:ring-primary-500',
      ],
      ghost: [
        'text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200',
        'focus-visible:ring-neutral-500',
      ],
      danger: [
        'bg-error-600 text-white',
        'hover:bg-error-700 active:bg-error-800',
        'focus-visible:ring-error-500',
        'shadow-sm hover:shadow-md',
      ],
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          loading && 'opacity-70 cursor-wait',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && !loading && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
