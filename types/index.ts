// Core type definitions for the application

export interface IModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IController<T> {
  get(id: string): Promise<T | null>;
  getAll(): Promise<T[]>;
  create(data: Partial<T>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
}

export interface IService<T> {
  execute(data: T): Promise<any>;
}

// Voter Information Types
export interface VoterGuideContent extends IModel {
  title: string;
  description: string;
  sections: VoterGuideSection[];
  metadata: VoterGuideMetadata;
}

export interface VoterGuideSection {
  id: string;
  title: string;
  content: string;
  order: number;
  type: SectionType;
}

export type SectionType =
  | 'hero'
  | 'overview'
  | 'details'
  | 'timeline'
  | 'faq'
  | 'resources'
  | 'action';

export interface VoterGuideMetadata {
  electionDate: string;
  issueTitle: string;
  jurisdiction: string;
  lastUpdated: Date;
}

// UI Component Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
}

// Theme Types
export interface ThemeConfig {
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  breakpoints: Breakpoints;
  shadows: Shadows;
  borderRadius: BorderRadius;
}

export interface ColorPalette {
  primary: ColorScale;
  secondary: ColorScale;
  neutral: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale;
}

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface Typography {
  fontFamily: {
    sans: string[];
    serif: string[];
    mono: string[];
  };
  fontSize: Record<string, [string, { lineHeight: string; letterSpacing?: string }]>;
  fontWeight: Record<string, number>;
}

export interface Spacing {
  [key: string]: string;
}

export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

export interface Shadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
  none: string;
}

export interface BorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
