// hooks/useProducts.js
import { useState, useEffect, useMemo } from 'react';
import { 
  products, 
  categories, 
  getProductById, 
  getProductsByCategory, 
  getFeaturedProducts,
  getProductsOnSale,
  searchProducts,
  getRelatedProducts 
} from '../data/products';

export const useProducts = (initialFilters = {}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    inStock: false,
    onSale: false,
    sortBy: 'name',
    searchQuery: '',
    ...initialFilters
  });

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Filter and sort products based on current filters
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply search filter
    if (filters.searchQuery) {
      result = searchProducts(filters.searchQuery);
    }

    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }

    // Apply price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(product => {
        const price = product.price;
        return max ? (price >= min && price <= max) : price >= min;
      });
    }

    // Apply stock filter
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }

    // Apply sale filter
    if (filters.onSale) {
      result = result.filter(product => product.onSale);
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.createdAt || '2023-01-01') - new Date(a.createdAt || '2023-01-01');
        case 'popularity':
          return b.reviews - a.reviews;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [filters]);

  // Update a specific filter
  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Update multiple filters at once
  const updateFilters = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  // Reset all filters to default
  const resetFilters = () => {
    setFilters({
      category: 'all',
      priceRange: 'all',
      inStock: false,
      onSale: false,
      sortBy: 'name',
      searchQuery: ''
    });
  };

  // Get products by specific criteria
  const getProductsBy = (criteria) => {
    switch (criteria) {
      case 'featured':
        return getFeaturedProducts();
      case 'sale':
        return getProductsOnSale();
      case 'bestsellers':
        return products.filter(p => p.bestSeller);
      case 'new':
        return products.filter(p => p.newArrival);
      default:
        return products;
    }
  };

  // Get single product with related products
  const getProductDetails = (productId) => {
    const product = getProductById(productId);
    const related = product ? getRelatedProducts(productId) : [];
    
    return {
      product,
      relatedProducts: related
    };
  };

  // Get price range for filtering
  const getPriceRange = () => {
    const prices = products.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  };

  // Get available filter options
  const getFilterOptions = () => {
    return {
      categories: categories,
      priceRanges: [
        { value: 'all', label: 'All Prices' },
        { value: '0-300', label: 'Under $300' },
        { value: '300-600', label: '$300 - $600' },
        { value: '600-1000', label: '$600 - $1,000' },
        { value: '1000-1500', label: '$1,000 - $1,500' },
        { value: '1500', label: 'Over $1,500' }
      ],
      sortOptions: [
        { value: 'name', label: 'Name A-Z' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'rating', label: 'Highest Rated' },
        { value: 'newest', label: 'Newest First' },
        { value: 'popularity', label: 'Most Popular' }
      ]
    };
  };

  return {
    // Data
    products: filteredProducts,
    allProducts: products,
    categories,
    loading,
    error,
    
    // Current filter state
    filters,
    
    // Actions
    updateFilter,
    updateFilters,
    resetFilters,
    
    // Utilities
    getProductsBy,
    getProductDetails,
    getPriceRange,
    getFilterOptions,
    
    // Computed values
    totalProducts: filteredProducts.length,
    hasProducts: filteredProducts.length > 0,
    isFiltered: Object.values(filters).some(value => 
      value !== 'all' && value !== '' && value !== false
    )
  };
};