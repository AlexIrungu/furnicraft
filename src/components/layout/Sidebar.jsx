import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, type = 'navigation', filters = {}, onFilterChange = () => {} }) => {
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState(filters);

  // Navigation items for mobile sidebar
  const navigationItems = [
    { name: 'Home', path: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'All Products', path: '/products', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { name: 'Electronics', path: '/products?category=electronics', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Clothing', path: '/products?category=clothing', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Accessories', path: '/products?category=accessories', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: 'About', path: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Contact', path: '/contact', icon: 'M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  // Filter categories for product filtering
  const filterCategories = [
    {
      name: 'Category',
      key: 'category',
      options: ['electronics', 'clothing', 'accessories', 'home', 'sports']
    },
    {
      name: 'Price Range',
      key: 'price',
      options: ['0-25', '25-50', '50-100', '100-200', '200+']
    },
    {
      name: 'Brand',
      key: 'brand',
      options: ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony']
    },
    {
      name: 'Rating',
      key: 'rating',
      options: ['4+', '3+', '2+', '1+']
    }
  ];

  useEffect(() => {
    setSelectedFilters(filters);
  }, [filters]);

  const handleFilterChange = (category, value) => {
    const newFilters = { ...selectedFilters };
    
    if (!newFilters[category]) {
      newFilters[category] = [];
    }
    
    if (newFilters[category].includes(value)) {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    } else {
      newFilters[category] = [...newFilters[category], value];
    }
    
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setSelectedFilters({});
    onFilterChange({});
  };

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path.split('?')[0]);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-square-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-square-black rounded-sm flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-square-black">
              {type === 'navigation' ? 'Menu' : 'Filters'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-square-gray-400 hover:text-square-black transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-full pb-20">
          {type === 'navigation' ? (
            /* Navigation Menu */
            <nav className="p-6">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActiveLink(item.path)
                          ? 'bg-square-black text-white'
                          : 'text-square-gray-700 hover:bg-square-gray-50 hover:text-square-black'
                      }`}
                      onClick={onClose}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-square-gray-200">
                <h3 className="text-sm font-semibold text-square-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    to="/checkout"
                    className="flex items-center px-4 py-3 bg-square-gray-50 rounded-lg text-sm font-medium text-square-gray-700 hover:bg-square-gray-100 transition-colors duration-200"
                    onClick={onClose}
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L7 13m5 0v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
                    </svg>
                    View Cart
                  </Link>
                </div>
              </div>
            </nav>
          ) : (
            /* Filter Menu */
            <div className="p-6">
              {/* Clear Filters Button */}
              <div className="mb-6">
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-2 text-sm font-medium text-square-gray-600 hover:text-square-black border border-square-gray-300 rounded-lg hover:border-square-gray-400 transition-colors duration-200"
                >
                  Clear All Filters
                </button>
              </div>

              {/* Filter Categories */}
              {filterCategories.map((category) => (
                <div key={category.key} className="mb-6">
                  <h3 className="text-sm font-semibold text-square-gray-900 mb-3">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.options.map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters[category.key]?.includes(option) || false}
                          onChange={() => handleFilterChange(category.key, option)}
                          className="w-4 h-4 text-square-black bg-gray-100 border-gray-300 rounded focus:ring-square-black focus:ring-2"
                        />
                        <span className="ml-3 text-sm text-square-gray-700 capitalize">
                          {option.replace('-', ' - $')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {/* Apply Filters Button */}
              <div className="mt-8 pt-6 border-t border-square-gray-200">
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-square-black text-white text-sm font-medium rounded-lg hover:bg-square-gray-800 transition-colors duration-200"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;