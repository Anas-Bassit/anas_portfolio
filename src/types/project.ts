export const PROJECT_CATEGORIES = [
  'personal',
  'academic',
  'professional',
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  personal: 'Personal Work',
  academic: 'Academic / Technical Work',
  professional: 'Professional Work',
};

// More specific classification inside each category.
// Example:
// personal + product  => Shoply
// personal + project  => Event Management Platform
// academic + technical-project => University technical project
// professional + professional-contribution => Work done through an employer
export const PROJECT_KINDS = [
  'product',
  'project',
  'technical-project',
  'professional-contribution',
] as const;

export type ProjectKind = (typeof PROJECT_KINDS)[number];

export const PROJECT_KIND_LABELS: Record<ProjectKind, string> = {
  product: 'Personal Product',
  project: 'Personal Project',
  'technical-project': 'Academic / Technical Project',
  'professional-contribution': 'Professional Contribution',
};

export type ProjectSourceVisibility = 'public' | 'private' | 'not-applicable';

export type ProjectImage = {
  src: string;
  alt: string;
};

export interface Project {
  id: string;
  title: string;
  shortDescription: string;

  category: ProjectCategory;
  kind?: ProjectKind;

  technologies: readonly string[];

  status?: string;
  role?: string;

  problem?: string;
  solution?: string;

  backendWork?: readonly string[];
  highlights?: readonly string[];

  architecture?: readonly string[];
  integrations?: readonly string[];

  githubUrl?: string;
  liveUrl?: string;

  image?: ProjectImage;

  sourceVisibility?: ProjectSourceVisibility;

  featured?: boolean;
  caseStudyAvailable?: boolean;
}
