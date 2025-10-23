import React, { useState } from 'react';

const Newsletter = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In real app, make API call here
      console.log('Newsletter signup:', email);
      
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSubscribed) {
    return (
      <div className={`${
        variant === 'footer' 
          ? 'bg-square-gray-900 text-white' 
          : 'bg-gradient-to-r from-square-gray-50 to-white'
      } ${variant === 'inline' ? 'py-8' : 'py-16'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          variant === 'inline' ? 'text-center' : ''
        }`}>
          <div className="text-center animate-scale-in">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${
              variant === 'footer' ? 'text-white' : 'text-square-black'
            }`}>
              Thank you for subscribing!
            </h3>
            <p className={`text-sm ${
              variant === 'footer' ? 'text-square-gray-300' : 'text-square-gray-600'
            }`}>
              We'll send you updates about our latest products and exclusive offers.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="mt-4 text-sm text-square-gray-500 hover:text-square-gray-700 underline transition-colors duration-200"
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default Newsletter Component
  if (variant === 'default') {
    return (
      <section className="bg-gradient-to-r from-square-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-square-black mb-4">
                Stay in the loop
              </h2>
              <p className="text-lg text-square-gray-600 leading-relaxed">
                Get the latest updates on new products, exclusive offers, and insider news. 
                Join thousands of customers who trust us to deliver value to their inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-square-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-square-black focus:border-square-black transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-square-black text-white font-medium rounded-lg hover:bg-square-gray-800 focus:outline-none focus:ring-2 focus:ring-square-black focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing up...
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>

              {error && (
                <div className="mt-3 text-sm text-red-600 text-left animate-slide-up">
                  {error}
                </div>
              )}

              <div className="mt-4 text-xs text-square-gray-500 text-center">
                By subscribing, you agree to our{' '}
                <a href="#" className="underline hover:text-square-gray-700 transition-colors duration-200">
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a href="#" className="underline hover:text-square-gray-700 transition-colors duration-200">
                  Terms of Service
                </a>
                . Unsubscribe at any time.
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-square-gray-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No spam, ever
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure & private
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Easy unsubscribe
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Footer Variant
  if (variant === 'footer') {
    return (
      <div className="bg-square-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-sm text-square-gray-300 mb-4">
              Get updates on new products and exclusive offers.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-square-gray-800 border border-square-gray-700 rounded text-sm text-white placeholder-square-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-white text-square-black font-medium rounded text-sm hover:bg-square-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-square-gray-900 transition-colors duration-200 disabled:opacity-50 min-w-[80px]"
                >
                  {isSubmitting ? '...' : 'Subscribe'}
                </button>
              </div>
              {error && (
                <div className="mt-2 text-sm text-red-400">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Inline Variant
  if (variant === 'inline') {
    return (
      <div className="bg-square-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-square-black mb-2">
            Don't miss out on exclusive offers
          </h3>
          <p className="text-sm text-square-gray-600 mb-4">
            Join our newsletter for the latest updates and special discounts.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-3 py-2 border border-square-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-square-black focus:border-square-black transition-all duration-200"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-square-black text-white font-medium rounded text-sm hover:bg-square-gray-800 focus:outline-none focus:ring-2 focus:ring-square-black focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting ? '...' : 'Join'}
              </button>
            </div>
            {error && (
              <div className="mt-2 text-sm text-red-600 text-left">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
};

export default Newsletter;