/**
 * Responsive utility functions for breakpoint management
 */

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const breakpoints: Record<Breakpoint, number> = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
};

/**
 * Check if current viewport matches breakpoint
 */
export function matchesBreakpoint(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(`(min-width: ${breakpoints[breakpoint]}px)`).matches;
}

/**
 * Get current active breakpoint
 */
export function getCurrentBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'xs';

  const width = window.innerWidth;

  if (width >= breakpoints['3xl']) return '3xl';
  if (width >= breakpoints['2xl']) return '2xl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
}

/**
 * Generate responsive class variants
 */
export function responsive(
  baseClass: string,
  variants: Partial<Record<Breakpoint, string>>
): string {
  const classes = [baseClass];

  Object.entries(variants).forEach(([bp, value]) => {
    if (value) {
      classes.push(`${bp}:${value}`);
    }
  });

  return classes.join(' ');
}
