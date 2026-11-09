export type ProjectCategory = 
  | 'all' 
  | 'ecommerce' 
  | 'company-profile' 
  | 'landing-page' 
  | 'web-app';

export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: ProjectMetric[];
  techStack: string[];
  deliverables: string[];
  demoUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  featured?: boolean;
}

export interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  timeline: string;
  idealFor: string;
  features: PricingFeature[];
  isPopular?: boolean;
  colorScheme: 'slate' | 'indigo' | 'emerald';
}

export interface AddonOption {
  id: string;
  name: string;
  description: string;
  price: number;
  priceFormatted: string;
  badge?: string;
}

export type ConsultationPlatform = 'google-meet' | 'zoom' | 'whatsapp-call';

export interface BookingAppointment {
  id: string;
  bookingCode: string;
  date: string; // ISO date string YYYY-MM-DD
  timeSlot: string; // e.g., "10:00 - 10:30 WIB"
  platform: ConsultationPlatform;
  packageId: string;
  packageName: string;
  selectedAddons: string[];
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  businessName: string;
  projectBrief: string;
  estimatedTotal: number;
  createdAt: string;
  status: 'confirmed' | 'completed' | 'cancelled';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectType: string;
  metricGain: string;
}
