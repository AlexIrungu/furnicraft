import React from 'react';
import { ArrowRight, Check, PlayCircle } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
                Transform your space with
                <span className="block text-gray-600">premium furniture</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover beautifully crafted furniture that combines style, comfort, and durability. 
                From modern minimalist to classic elegance.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="flex items-center justify-center"
                onClick={scrollToProducts}
              >
                Shop Collection 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="flex items-center justify-center"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Story
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-600" />
                <span>Free delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-600" />
                <span>1-year warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-600" />
                <span>Premium materials</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&auto=format"
                alt="Modern living room with premium furniture"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Cards */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">10k+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
              </div>
            </div> */}
            
            {/* <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border">
              <div className="text-center">
                <div className="text-lg font-bold text-black">4.9★</div>
                <div className="text-gray-600 text-xs">Customer Rating</div>
              </div>
            </div> */}
            
            {/* Background Decoration */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-gray-100 rounded-full opacity-50"></div>
            <div className="absolute -z-10 -bottom-12 -left-12 w-24 h-24 bg-black/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;