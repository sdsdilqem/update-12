import { Car, Home, Laptop, Smartphone, Tv, Shirt, Sofa, Dumbbell } from 'lucide-react';

export const recentSearches = [
  'iPhone 13 Pro',
  'Nike Air Max',
  'Gaming Laptop',
] as const;

export const trendingTags = [
  '#geyim',
  '#elektronika',
  '#əmlak',
  '#avtomobil',


] as const;

export const categories = [
  { name: 'Cars', icon: Car },
  { name: 'Property', icon: Home },
  { name: 'Electronics', icon: Laptop },
  { name: 'Phones', icon: Smartphone },
  { name: 'TV & Audio', icon: Tv },
  { name: 'Fashion', icon: Shirt },
  { name: 'Furniture', icon: Sofa },
  { name: 'Sports', icon: Dumbbell },
] as const;