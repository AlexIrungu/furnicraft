import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, X, Menu, Package, Home, Sofa, Bed, UtensilsCrossed, Briefcase, TreePine, Command } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

// Debounce utility
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
};

// Search Modal Component
const SearchModal = ({ isOpen, onClose, products = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (debouncedSearch) {
      const results = products.filter(product =>
        product.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        product.category?.toLowerCase().includes(debouncedSearch.toLowerCase())
      ).slice(0, 6);
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [debouncedSearch, products]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center p-4 pt-16">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl animate-scale-in">
          {/* Search Input */}
          <div className="flex items-center border-b border-gray-200 px-6 py-4">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search furniture, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-lg outline-none placeholder:text-gray-400"
              autoFocus
            />
            <button 
              onClick={onClose}
              className="ml-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto p-2">
            {searchQuery && filteredResults.length > 0 ? (
              <div className="space-y-1">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Products ({filteredResults.length})
                </div>
                {filteredResults.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products?search=${product.name}`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate group-hover:text-black">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {product.category}
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      ${product.price}
                    </div>
                  </Link>
                ))}
              </div>
            ) : searchQuery && filteredResults.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              <div className="px-4 py-8 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Quick Links
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Living Room', 'Bedroom', 'Dining Room', 'Office'].map(cat => (
                      <Link
                        key={cat}
                        to={`/products?category=${cat.toLowerCase().replace(' ', '-')}`}
                        onClick={onClose}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors text-center"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-3 bg-gray-50 rounded-b-2xl">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded shadow-sm font-mono">ESC</kbd>
                to close
              </span>
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded shadow-sm font-mono">⌘K</kbd>
                to search
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart Dropdown Component
const CartDropdown = ({ isOpen, onClose, cartItems = [] }) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 animate-scale-in z-50">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Shopping Cart</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {cartItems.length === 0 ? (
          <div className="p-8 text-center">
            <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">Your cart is empty</p>
          </div>
        ) : (
          <div className="p-2 space-y-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t border-gray-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-lg font-bold text-gray-900">${subtotal.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            onClick={onClose}
            className="block w-full py-3 bg-black text-white text-center font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Cart & Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Sample products for search (you'd pass real products from props or context)
  const products = [
    { id: 1, name: 'Modern Sofa', category: 'living-room', price: 1299 },
    { id: 2, name: 'Office Chair', category: 'office', price: 499 },
    // Add more sample products
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = [
    { name: 'Living Room', icon: Sofa, href: '/products?category=living-room', description: 'Sofas, tables & more' },
    { name: 'Bedroom', icon: Bed, href: '/products?category=bedroom', description: 'Beds, dressers & more' },
    { name: 'Dining Room', icon: UtensilsCrossed, href: '/products?category=dining-room', description: 'Tables, chairs & more' },
    { name: 'Office', icon: Briefcase, href: '/products?category=office', description: 'Desks, chairs & more' },
    { name: 'Outdoor', icon: TreePine, href: '/products?category=outdoor', description: 'Patio & garden furniture' },
  ];

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActiveLink = (path) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`bg-white sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-md border-b border-gray-100 backdrop-blur-lg bg-white/95' : 'border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center mr-2.5 group-hover:bg-gray-800 transition-colors">
                <Sofa className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">FurniCraft</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActiveLink(link.path)
                      ? 'text-black bg-gray-100'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <Link
                  to="/products"
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    isActiveLink('/products')
                      ? 'text-black bg-gray-100'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Mega Menu Dropdown */}
                {isProductsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 animate-scale-in">
                    <div className="p-2">
                      <Link
                        to="/products"
                        className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg transition-colors group mb-2"
                      >
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
                          <Package className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">All Products</p>
                          <p className="text-xs text-gray-500">Browse entire collection</p>
                        </div>
                      </Link>
                      
                      <div className="h-px bg-gray-100 my-2" />
                      
                      {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg transition-colors group"
                          >
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                              <Icon className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="font-medium text-sm text-gray-900 group-hover:text-black">{category.name}</p>
                              <p className="text-xs text-gray-500">{category.description}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors group"
              >
                <Search className="w-4 h-4" />
                <span className="text-xs text-gray-400">⌘K</span>
              </button>

              {/* Cart Button with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}
                  onMouseEnter={() => setIsCartDropdownOpen(true)}
                  onMouseLeave={() => setIsCartDropdownOpen(false)}
                  className="relative p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                      {cartItemCount}
                    </span>
                  )}
                </button>
                
                <div onMouseEnter={() => setIsCartDropdownOpen(true)} onMouseLeave={() => setIsCartDropdownOpen(false)}>
                  <CartDropdown 
                    isOpen={isCartDropdownOpen} 
                    onClose={() => setIsCartDropdownOpen(false)}
                    cartItems={cartItems}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <Link
                to="/checkout"
                className="relative p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-black">Menu</h3>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActiveLink(link.path)
                        ? 'text-black bg-gray-100'
                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Products Section */}
                <div className="pt-4">
                  <Link
                    to="/products"
                    className="block px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Products
                  </Link>
                  
                  <div className="pl-4 space-y-1">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">{category.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        products={products}
      />
    </>
  );
};

export default Navbar;