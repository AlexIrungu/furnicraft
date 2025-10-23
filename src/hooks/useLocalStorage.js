// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

// Custom hook for managing localStorage with React state
export const useLocalStorage = (key, initialValue) => {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      // Save to localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Remove the item from localStorage
  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};

// Hook for managing multiple related localStorage items
export const useLocalStorageState = (prefix = 'app') => {
  // Get all keys with the prefix
  const getKeys = () => {
    if (typeof window === "undefined") return [];
    return Object.keys(localStorage).filter(key => key.startsWith(prefix));
  };

  // Get all values for keys with prefix
  const getAllValues = () => {
    const keys = getKeys();
    const values = {};
    keys.forEach(key => {
      try {
        const item = localStorage.getItem(key);
        values[key] = item ? JSON.parse(item) : null;
      } catch (error) {
        console.error(`Error reading localStorage key "${key}":`, error);
        values[key] = null;
      }
    });
    return values;
  };

  // Set a value with prefix
  const setItem = (key, value) => {
    const prefixedKey = `${prefix}_${key}`;
    try {
      const valueToStore = typeof value === 'function' ? value() : value;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(prefixedKey, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${prefixedKey}":`, error);
    }
  };

  // Get a value with prefix
  const getItem = (key, defaultValue = null) => {
    const prefixedKey = `${prefix}_${key}`;
    if (typeof window === "undefined") return defaultValue;
    try {
      const item = window.localStorage.getItem(prefixedKey);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${prefixedKey}":`, error);
      return defaultValue;
    }
  };

  // Remove a value with prefix
  const removeItem = (key) => {
    const prefixedKey = `${prefix}_${key}`;
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(prefixedKey);
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${prefixedKey}":`, error);
    }
  };

  // Clear all items with prefix
  const clearAll = () => {
    const keys = getKeys();
    keys.forEach(key => {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.removeItem(key);
        }
      } catch (error) {
        console.error(`Error removing localStorage key "${key}":`, error);
      }
    });
  };

  return {
    setItem,
    getItem,
    removeItem,
    clearAll,
    getAllValues,
    getKeys
  };
};

// Hook for managing cart items in localStorage
export const useCartStorage = () => {
  const [cartItems, setCartItems, clearCart] = useLocalStorage('cart_items', []);

  const addToCart = (product) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(currentItems => 
      currentItems.filter(item => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
};

// Hook for managing user preferences
export const usePreferences = () => {
  const [preferences, setPreferences] = useLocalStorage('user_preferences', {
    theme: 'light',
    currency: 'USD',
    notifications: true,
    newsletter: false
  });

  const updatePreference = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetPreferences = () => {
    setPreferences({
      theme: 'light',
      currency: 'USD',
      notifications: true,
      newsletter: false
    });
  };

  return {
    preferences,
    updatePreference,
    resetPreferences,
    theme: preferences.theme,
    currency: preferences.currency,
    notifications: preferences.notifications,
    newsletter: preferences.newsletter
  };
};

// Hook for managing recently viewed products
export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage('recently_viewed', []);

  const addToRecentlyViewed = (product) => {
    setRecentlyViewed(current => {
      const filtered = current.filter(item => item.id !== product.id);
      return [product, ...filtered].slice(0, 10); // Keep only last 10
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
  };

  return {
    recentlyViewed,
    addToRecentlyViewed,
    clearRecentlyViewed
  };
};

export default useLocalStorage;