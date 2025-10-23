// ProductFilter.jsx
import React, { useState } from 'react';

const ProductFilter = ({ onFilterChange, filters = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const categories = ['all', 'electronics', 'clothing', 'accessories', 'home', 'sports'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $25', value: '0-25' },
    { label: '$25 - $50', value: '25-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200+' },
  ];

  const sortOptions = [
    { label: 'Name A-Z', value: 'name', order: 'asc' },
    { label: 'Name Z-A', value: 'name', order: 'desc' },
    { label: 'Price Low to High', value: 'price', order: 'asc' },
    { label: 'Price High to Low', value: 'price', order: 'desc' },
    { label: 'Newest First', value: 'date', order: 'desc' },
  ];

  const handleFilterChange = (filterType, value) => {
    onFilterChange({
      ...filters,
      [filterType]: value,
    });
  };

  const handleSortChange = (sortValue, orderValue) => {
    setSortBy(sortValue);
    setSortOrder(orderValue);
    onFilterChange({
      ...filters,
      sortBy: sortValue,
      sortOrder: orderValue,
    });
  };

  return (
    <div className="bg-white border-b border-square-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center px-4 py-2 border border-square-gray-300 rounded-md text-sm font-medium text-square-gray-700 hover:text-square-black hover:border-square-gray-400 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>

          {/* Desktop Filters */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-square-gray-700">Category:</label>
              <select
                value={filters.category || 'all'}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="border border-square-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-square-black focus:border-square-black"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-square-gray-700">Price:</label>
              <select
                value={filters.priceRange || 'all'}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="border border-square-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-square-black focus:border-square-black"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-square-gray-700 hidden sm:block">Sort:</label>
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [sortValue, orderValue] = e.target.value.split('-');
                handleSortChange(sortValue, orderValue);
              }}
              className="border border-square-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-square-black focus:border-square-black"
            >
              {sortOptions.map((option) => (
                <option key={`${option.value}-${option.order}`} value={`${option.value}-${option.order}`}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-square-gray-200 animate-slide-up">
            <div className="grid grid-cols-1 gap-4">
              
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-square-gray-700 mb-2">Category</label>
                <select
                  value={filters.category || 'all'}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full border border-square-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-square-black focus:border-square-black"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-square-gray-700 mb-2">Price Range</label>
                <select
                  value={filters.priceRange || 'all'}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-full border border-square-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-square-black focus:border-square-black"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;