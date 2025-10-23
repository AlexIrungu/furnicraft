// hooks/useCart.js
import { useCart as useCartContext } from '../context/CartContext';

// This hook provides access to cart context with additional utilities
export const useCart = () => {
  const context = useCartContext();
  
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen
  } = context;

  // Additional utility functions
  const getItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const getCartItemById = (productId) => {
    return cartItems.find(item => item.id === productId);
  };

  const getCartSummary = () => {
    const subtotal = totalPrice;
    const tax = subtotal * 0.08; // 8% tax
    const shipping = subtotal > 100 ? 0 : 15; // Free shipping over $100
    const total = subtotal + tax + shipping;

    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      tax: parseFloat(tax.toFixed(2)),
      shipping: parseFloat(shipping.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
      itemCount: totalItems
    };
  };

  const incrementItem = (productId) => {
    const currentQuantity = getItemQuantity(productId);
    updateQuantity(productId, currentQuantity + 1);
  };

  const decrementItem = (productId) => {
    const currentQuantity = getItemQuantity(productId);
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  return {
    // State
    cartItems,
    totalItems,
    totalPrice,
    isCartOpen,
    
    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    incrementItem,
    decrementItem,
    
    // Cart controls
    toggleCart,
    closeCart,
    openCart,
    
    // Utilities
    getItemQuantity,
    isInCart,
    getCartItemById,
    getCartSummary
  };
};