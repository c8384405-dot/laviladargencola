export interface RoomOption {
  id: string;
  name: string;
  category: 'vila' | 'llacs' | 'fonts' | 'individual';
  tagline: string;
  capacity: number;
  maxCapacity?: number;
  bedrooms: number;
  bathrooms: number;
  surfaceM2: number;
  pricePerNight: number;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  bedsDistribution: string;
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'nature' | 'wine' | 'weddings' | 'culture' | 'gastronomy';
  image: string;
  duration?: string;
  badge?: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'finca' | 'rooms' | 'interiors' | 'weddings' | 'outdoors';
  categoryLabel: string;
  image: string;
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  stayType: string;
  quote: string;
  detail: string;
  rating: number;
  date: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  accommodationType: 'vila' | 'llacs' | 'fonts';
  adults: number;
  children: number;
  pets: number;
  babyCribs: number;
  extraSofaBeds: number;
  dayGuests: number;
  lateCheckout: boolean;
}
