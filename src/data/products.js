// data/products.js

export const categories = [
  { id: 'all', name: 'All Products', count: 18 },
  { id: 'sofa', name: 'Sofas & Chairs', count: 6 },
  { id: 'table', name: 'Tables', count: 4 },
  { id: 'bedroom', name: 'Bedroom', count: 5 },
  { id: 'storage', name: 'Storage', count: 3 }
];

export const products = [
  {
    id: 1,
    name: 'Modern Sectional Sofa',
    price: 1299,
    originalPrice: 1599,
    category: 'sofa',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.8,
    reviews: 124,
    description: 'Comfortable L-shaped sectional perfect for modern living rooms. Features premium fabric upholstery and solid hardwood frame.',
    features: ['Premium fabric upholstery', 'Solid hardwood frame', 'Reversible cushions', 'Easy to clean', 'Modular design'],
    dimensions: '120" W x 85" D x 32" H',
    colors: ['Charcoal', 'Navy Blue', 'Beige'],
    materials: ['Hardwood', 'Premium Fabric', 'High-density Foam'],
    inStock: true,
    stockQuantity: 15,
    bestSeller: true,
    newArrival: false,
    onSale: true,
    tags: ['living room', 'sectional', 'modern', 'comfortable']
  },
  {
    id: 2,
    name: 'Oak Dining Table',
    price: 899,
    originalPrice: 1099,
    category: 'table',
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.9,
    reviews: 89,
    description: 'Solid oak dining table seats up to 6 people comfortably. Handcrafted with traditional joinery techniques.',
    features: ['Solid oak construction', 'Seats 6 comfortably', 'Traditional craftsmanship', 'Sturdy legs', 'Natural wood grain'],
    dimensions: '72" L x 36" W x 30" H',
    colors: ['Natural Oak', 'Dark Walnut'],
    materials: ['Solid Oak', 'Metal Hardware'],
    inStock: true,
    stockQuantity: 8,
    bestSeller: false,
    newArrival: true,
    onSale: true,
    tags: ['dining', 'oak', 'rustic', 'family']
  },
  {
    id: 3,
    name: 'Upholstered Accent Chair',
    price: 459,
    originalPrice: 599,
    category: 'sofa',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.6,
    reviews: 67,
    description: 'Elegant accent chair with premium upholstery and ergonomic design. Perfect for reading nooks.',
    features: ['Ergonomic design', 'Premium upholstery', 'Swivel base', 'Comfortable padding', 'Modern style'],
    dimensions: '28" W x 32" D x 42" H',
    colors: ['Emerald Green', 'Velvet Blue', 'Charcoal Gray'],
    materials: ['Wood Frame', 'Premium Fabric', 'Foam Padding'],
    inStock: true,
    stockQuantity: 12,
    bestSeller: false,
    newArrival: false,
    onSale: true,
    tags: ['accent', 'chair', 'reading', 'comfort']
  },
  {
    id: 4,
    name: 'Platform Bed Frame',
    price: 749,
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1505693314120-26d4fee3c3c6?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.7,
    reviews: 156,
    description: 'Minimalist platform bed with built-in storage and LED lighting. Available in king and queen sizes.',
    features: ['Built-in storage', 'LED lighting', 'Multiple sizes', 'No box spring needed', 'Easy assembly'],
    dimensions: '85" L x 65" W x 18" H (Queen)',
    colors: ['Walnut', 'White', 'Black'],
    materials: ['Engineered Wood', 'Metal Frame', 'LED Strips'],
    inStock: true,
    stockQuantity: 10,
    bestSeller: true,
    newArrival: false,
    onSale: false,
    tags: ['bedroom', 'storage', 'modern', 'platform']
  },
  {
    id: 5,
    name: 'Coffee Table Set',
    price: 329,
    category: 'table',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.5,
    reviews: 43,
    description: 'Modern glass-top coffee table with matching side tables. Features tempered glass and steel frame.',
    features: ['Tempered glass top', 'Steel frame', '3-piece set', 'Easy to clean', 'Sleek design'],
    dimensions: '48" L x 24" W x 18" H',
    colors: ['Chrome', 'Black'],
    materials: ['Tempered Glass', 'Stainless Steel'],
    inStock: true,
    stockQuantity: 20,
    bestSeller: false,
    newArrival: true,
    onSale: false,
    tags: ['coffee table', 'modern', 'glass', 'living room']
  },
  {
    id: 6,
    name: 'Modular Storage Unit',
    price: 399,
    originalPrice: 499,
    category: 'storage',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.4,
    reviews: 78,
    description: 'Versatile storage system with adjustable shelves and modern design. Perfect for offices and living rooms.',
    features: ['Adjustable shelves', 'Modular design', 'Easy assembly', 'Multiple configurations', 'Durable construction'],
    dimensions: '36" W x 12" D x 72" H',
    colors: ['White', 'Oak', 'Black'],
    materials: ['MDF', 'Metal Hardware'],
    inStock: true,
    stockQuantity: 25,
    bestSeller: false,
    newArrival: false,
    onSale: true,
    tags: ['storage', 'modular', 'shelves', 'organization']
  },
  {
    id: 7,
    name: 'Executive Office Chair',
    price: 579,
    category: 'sofa',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.6,
    reviews: 92,
    description: 'Premium leather executive chair with lumbar support and adjustable height. Built for long work sessions.',
    features: ['Genuine leather', 'Lumbar support', 'Height adjustable', 'Swivel base', 'Padded armrests'],
    dimensions: '27" W x 27" D x 45" H',
    colors: ['Black Leather', 'Brown Leather'],
    materials: ['Genuine Leather', 'Steel Frame', 'Nylon Base'],
    inStock: true,
    stockQuantity: 7,
    bestSeller: true,
    newArrival: false,
    onSale: false,
    tags: ['office', 'executive', 'comfort', 'professional']
  },
  {
    id: 8,
    name: 'Vintage Dresser',
    price: 649,
    originalPrice: 799,
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.7,
    reviews: 113,
    description: 'Vintage-inspired dresser with 6 spacious drawers. Solid wood construction with antique brass hardware.',
    features: ['6 spacious drawers', 'Solid wood construction', 'Antique brass hardware', 'Smooth gliding drawers', 'Vintage finish'],
    dimensions: '60" W x 18" D x 32" H',
    colors: ['Distressed White', 'Antique Oak'],
    materials: ['Solid Wood', 'Brass Hardware'],
    inStock: false,
    stockQuantity: 0,
    bestSeller: false,
    newArrival: false,
    onSale: true,
    tags: ['vintage', 'dresser', 'bedroom', 'storage']
  },
  {
    id: 9,
    name: 'Bar Stool Set',
    price: 199,
    category: 'sofa',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.3,
    reviews: 67,
    description: 'Set of 2 modern bar stools with adjustable height and swivel function. Comfortable padded seats.',
    features: ['Set of 2 stools', 'Adjustable height', 'Swivel function', 'Padded seats', 'Modern design'],
    dimensions: '18" W x 18" D x 42" H',
    colors: ['Black', 'Chrome', 'Walnut'],
    materials: ['Metal', 'Wood', 'Fabric'],
    inStock: true,
    stockQuantity: 30,
    bestSeller: false,
    newArrival: true,
    onSale: false,
    tags: ['bar stool', 'kitchen', 'modern', 'set']
  },
  {
    id: 10,
    name: 'Console Table',
    price: 379,
    category: 'table',
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.4,
    reviews: 54,
    description: 'Sleek console table perfect for entryways or behind sofas. Features a drawer and lower shelf for storage.',
    features: ['Built-in drawer', 'Lower shelf', 'Sleek design', 'Easy assembly', 'Versatile use'],
    dimensions: '48" L x 14" W x 32" H',
    colors: ['White', 'Walnut', 'Black'],
    materials: ['Engineered Wood', 'Metal Legs'],
    inStock: true,
    stockQuantity: 18,
    bestSeller: false,
    newArrival: false,
    onSale: false,
    tags: ['console', 'entryway', 'slim', 'storage']
  },
  {
    id: 11,
    name: 'King Size Bed Frame',
    price: 899,
    originalPrice: 1099,
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.8,
    reviews: 201,
    description: 'Luxurious king size bed frame with upholstered headboard and sturdy slat system.',
    features: ['Upholstered headboard', 'Sturdy slat system', 'No box spring needed', 'Easy to assemble', 'Premium fabric'],
    dimensions: '85" L x 78" W x 45" H',
    colors: ['Navy Blue', 'Charcoal Gray', 'Beige'],
    materials: ['Wood Frame', 'Upholstery Fabric', 'Metal Hardware'],
    inStock: true,
    stockQuantity: 6,
    bestSeller: true,
    newArrival: false,
    onSale: true,
    tags: ['king size', 'bedroom', 'luxury', 'headboard']
  },
  {
    id: 12,
    name: 'Bookshelf Unit',
    price: 289,
    category: 'storage',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.5,
    reviews: 89,
    description: '5-shelf bookcase perfect for home office or living room. Adjustable shelves accommodate items of various sizes.',
    features: ['5 adjustable shelves', 'Sturdy construction', 'Easy assembly', 'Versatile storage', 'Modern design'],
    dimensions: '31" W x 12" D x 72" H',
    colors: ['White', 'Black Brown', 'Natural Oak'],
    materials: ['Engineered Wood', 'Metal Hardware'],
    inStock: true,
    stockQuantity: 22,
    bestSeller: false,
    newArrival: true,
    onSale: false,
    tags: ['bookshelf', 'storage', 'office', 'shelves']
  },
  {
    id: 13,
    name: 'Loveseat Sofa',
    price: 699,
    originalPrice: 849,
    category: 'sofa',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.7,
    reviews: 134,
    description: 'Compact loveseat perfect for small spaces. Features deep seating and premium cushions.',
    features: ['Compact design', 'Deep seating', 'Premium cushions', 'Solid wood legs', 'Durable fabric'],
    dimensions: '60" W x 35" D x 34" H',
    colors: ['Light Gray', 'Navy Blue', 'Forest Green'],
    materials: ['Hardwood Frame', 'Premium Fabric', 'High-resiliency Foam'],
    inStock: true,
    stockQuantity: 11,
    bestSeller: true,
    newArrival: false,
    onSale: true,
    tags: ['loveseat', 'compact', 'living room', 'comfortable']
  },
  {
    id: 14,
    name: 'Nightstand Set',
    price: 249,
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.4,
    reviews: 76,
    description: 'Set of 2 matching nightstands with drawer and open shelf. Perfect bedroom companions.',
    features: ['Set of 2', 'Drawer storage', 'Open shelf', 'Easy assembly', 'Matching design'],
    dimensions: '18" W x 16" D x 24" H each',
    colors: ['White', 'Walnut', 'Black'],
    materials: ['Engineered Wood', 'Metal Hardware'],
    inStock: true,
    stockQuantity: 15,
    bestSeller: false,
    newArrival: false,
    onSale: false,
    tags: ['nightstand', 'bedroom', 'set', 'storage']
  },
  {
    id: 15,
    name: 'Entertainment Center',
    price: 549,
    originalPrice: 699,
    category: 'storage',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.6,
    reviews: 98,
    description: 'Modern entertainment center with ample storage for media components and gaming consoles.',
    features: ['Cable management', 'Adjustable shelves', 'Console storage', 'Modern design', 'Durable construction'],
    dimensions: '60" W x 18" D x 24" H',
    colors: ['Black', 'Dark Walnut', 'White'],
    materials: ['MDF', 'Tempered Glass', 'Metal Hardware'],
    inStock: true,
    stockQuantity: 9,
    bestSeller: false,
    newArrival: true,
    onSale: true,
    tags: ['entertainment', 'TV stand', 'media', 'storage']
  },
  {
    id: 16,
    name: 'Dining Chair Set',
    price: 399,
    category: 'sofa',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.5,
    reviews: 112,
    description: 'Set of 4 modern dining chairs with comfortable padded seats and sturdy construction.',
    features: ['Set of 4 chairs', 'Padded seats', 'Sturdy construction', 'Stackable design', 'Easy to clean'],
    dimensions: '18" W x 20" D x 34" H each',
    colors: ['Black', 'White', 'Natural Wood'],
    materials: ['Wood Frame', 'Fabric Upholstery', 'Metal Legs'],
    inStock: true,
    stockQuantity: 14,
    bestSeller: true,
    newArrival: false,
    onSale: false,
    tags: ['dining chairs', 'set', 'modern', 'comfortable']
  },
  {
    id: 17,
    name: 'Study Desk',
    price: 429,
    category: 'table',
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.7,
    reviews: 87,
    description: 'Spacious study desk with built-in drawer and cable management. Perfect for home office.',
    features: ['Built-in drawer', 'Cable management', 'Spacious work surface', 'Adjustable legs', 'Modern design'],
    dimensions: '55" L x 24" W x 30" H',
    colors: ['White', 'Walnut', 'Black'],
    materials: ['Engineered Wood', 'Metal Frame'],
    inStock: true,
    stockQuantity: 12,
    bestSeller: false,
    newArrival: true,
    onSale: false,
    tags: ['desk', 'office', 'study', 'work']
  },
  {
    id: 18,
    name: 'Wardrobe Cabinet',
    price: 799,
    originalPrice: 999,
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format'
    ],
    rating: 4.8,
    reviews: 145,
    description: 'Spacious wardrobe with sliding doors, multiple shelves, and hanging rod. Perfect for bedroom organization.',
    features: ['Sliding doors', 'Multiple shelves', 'Hanging rod', 'Mirror option', 'Spacious interior'],
    dimensions: '60" W x 24" D x 80" H',
    colors: ['White', 'Walnut', 'Gray'],
    materials: ['Engineered Wood', 'Metal Hardware', 'Glass'],
    inStock: true,
    stockQuantity: 5,
    bestSeller: true,
    newArrival: false,
    onSale: true,
    tags: ['wardrobe', 'closet', 'storage', 'bedroom']
  }
];

// Utility functions for product data
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.bestSeller || product.newArrival);
};

export const getProductsOnSale = () => {
  return products.filter(product => product.onSale);
};

export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};