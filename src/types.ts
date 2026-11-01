export type PageSection = 'home' | 'about' | 'services' | 'gallery' | 'work' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  keyFeatures: string[];
  idealFor: string;
  estimatedBudget: string;
  badge?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'weddings' | 'haldi_sangeet' | 'corporate' | 'birthdays_kitty' | 'concerts_exhibitions';
  categoryLabel: string;
  location: string;
  date: string;
  imageUrl: string;
  fallbackUrl: string;
  description: string;
  tags: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientType: string;
  venue: string;
  city: string;
  guestsCount: string;
  timeline: string;
  description: string;
  highlightMetric: string;
  metricLabel: string;
  coverImage: string;
  scopeOfWork: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  occasion: string;
  location: string;
  rating: number;
  review: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
