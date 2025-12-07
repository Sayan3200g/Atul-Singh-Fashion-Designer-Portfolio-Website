export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Couture' | 'Bridal' | 'Ready-to-Wear' | 'Accessories';
  imageUrl: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  priceRange?: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  styleInterest: string;
  budget: string;
  date: string;
}