import himalayanSalted from '@/assets/products/himalayan-salted.jpg';
import masala from '@/assets/products/masala.jpg';
import caramel from '@/assets/products/caramel.jpg';
import mexican from '@/assets/products/mexican.jpg';
import creamOnion from '@/assets/products/cream-onion.jpg';

export interface Product {
  id: string;
  name: string;
  flavor: string;
  description: string;
  price: number;
  image: string;
  color: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: 'himalayan-salted',
    name: 'Krave Krunch',
    flavor: 'Himalayan Salted',
    description: 'Pure, subtle, and perfectly salted with authentic Himalayan pink salt. A timeless classic for the purist snacker.',
    price: 99,
    image: himalayanSalted,
    color: '#9B4D82',
    benefits: ['Low Sodium', 'Natural Salt', 'Zero Additives'],
  },
  {
    id: 'masala',
    name: 'Krave Krunch',
    flavor: 'Masala',
    description: 'Bold Indian spices meet crispy makhana. A symphony of authentic flavors that dance on your palate.',
    price: 109,
    image: masala,
    color: '#C73E3E',
    benefits: ['Traditional Spices', 'No MSG', 'Rich in Antioxidants'],
  },
  {
    id: 'caramel',
    name: 'Krave Krunch',
    flavor: 'Caramel',
    description: 'Luxuriously sweet caramel coating meets the light crunch of makhana. Indulgence redefined.',
    price: 119,
    image: caramel,
    color: '#6B4423',
    benefits: ['Natural Sweetener', 'No Artificial Colors', 'Guilt-Free Treat'],
  },
  {
    id: 'mexican',
    name: 'Krave Krunch',
    flavor: 'Mexican',
    description: 'Zesty lime and authentic Mexican spices create a fiesta of flavors in every bite.',
    price: 109,
    image: mexican,
    color: '#2D5A3D',
    benefits: ['Tangy Flavor', 'Vitamin C Rich', 'Bold & Exciting'],
  },
  {
    id: 'cream-onion',
    name: 'Krave Krunch',
    flavor: 'Cream & Onion',
    description: 'Creamy, savory, and utterly addictive. A sophisticated take on a beloved classic.',
    price: 109,
    image: creamOnion,
    color: '#2B4B7A',
    benefits: ['Rich & Creamy', 'Savory Notes', 'Perfect Balance'],
  },
];
