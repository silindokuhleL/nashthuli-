export type Page = 'home' | 'shop' | 'about' | 'location' | 'gallery' | 'contact';

export type Category = 'All' | 'Couches' | 'Beds' | 'Tables' | 'TV Stands' | 'Headboards' | 'Kitchen Units';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  badge?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  initials: string;
  color: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}
