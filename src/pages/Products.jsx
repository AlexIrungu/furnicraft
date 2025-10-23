import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import ProductSearch from '../components/product/ProductSearch';
import { useProducts } from '../hooks/useProducts';

const Products = () => {
  const { products, loading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'name'
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = [...products];

    // Apply category filter
    if (activeFilters.category !== 'all') {
      filtered = filtered.filter(product => product.category === activeFilters.category);
    }

    // Apply price range filter
    if (activeFilters.priceRange !== 'all') {
      const [min, max] = activeFilters.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        const price = product.price;
        return max ? (price >= min && price <= max) : price >= min;
      });
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (activeFilters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, activeFilters, searchQuery]);

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-square-gray-200 border-t-square-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-square-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-square-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-square-black mb-6">
              Our Collection
            </h1>
            <p className="text-xl text-square-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover furniture that transforms spaces and enhances your daily life. 
              From statement pieces to everyday essentials, find what speaks to you.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-square-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <ProductSearch 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <select
                value={activeFilters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="px-4 py-2 border border-square-gray-300 rounded-lg bg-white text-square-black focus:ring-2 focus:ring-square-black focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="living-room">Living Room</option>
                <option value="bedroom">Bedroom</option>
                <option value="dining-room">Dining Room</option>
                <option value="office">Office</option>
                <option value="outdoor">Outdoor</option>
              </select>
              
              <select
                value={activeFilters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="px-4 py-2 border border-square-gray-300 rounded-lg bg-white text-square-black focus:ring-2 focus:ring-square-black focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="0-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000">$2,000+</option>
              </select>
              
              <select
                value={activeFilters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="px-4 py-2 border border-square-gray-300 rounded-lg bg-white text-square-black focus:ring-2 focus:ring-square-black focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-6">
            <p className="text-square-gray-600">
              Showing {filteredProducts.length} of {products.length} products
              {searchQuery && (
                <span> for "{searchQuery}"</span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-square-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-square-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.529-1.00-6-2.709V9a6 6 0 1112 0v3.291z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-3">No products found</h3>
              <p className="text-square-gray-600 mb-6">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilters({
                    category: 'all',
                    priceRange: 'all',
                    sortBy: 'name'
                  });
                }}
                className="inline-flex items-center px-6 py-3 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-square-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-square-black mb-6">
            Need help finding the perfect piece?
          </h2>
          <p className="text-xl text-square-gray-600 mb-8 leading-relaxed">
            Our design experts are here to help you create the space of your dreams. 
            Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200">
              Schedule Consultation
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-square-black text-square-black font-medium rounded-full hover:bg-square-black hover:text-white transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;