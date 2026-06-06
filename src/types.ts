export interface SlideItem {
  id: number;
  category: string;
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[] | { title: string; text: string }[];
  visualType?: 'none' | 'grid-summary' | 'flow-chart' | 'roi' | 'sandbox' | 'radar';
}

export interface ProgramDetail {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  concept: string;
  strategicWeight: string;
  rplRelevance: string;
  implementationSteps: string[];
  ethicsRegulations: string;
  fundingStructure: string;
  budgetImpact: string;
  visualLabel?: string;
}

export interface InstitutionConfig {
  name: string;
  city: string;
  targetEnrollment: number;
  currentEnrollment: number;
  averageTuition: number; // in rupiah (e.g., 8000000)
}
