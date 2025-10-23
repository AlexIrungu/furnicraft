import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import Features from '../components/ui/Features';
import Newsletter from '../components/ui/Newsletter';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Products Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-square-black mb-6">
              Crafted for modern living
            </h2>
            <p className="text-xl text-square-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover furniture that combines timeless design with contemporary comfort. 
              Each piece is carefully selected to transform your space into a sanctuary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group cursor-pointer">
              <div className="aspect-square bg-square-gray-100 rounded-2xl overflow-hidden mb-6 group-hover:shadow-medium transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1724582586495-d050726cf354?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbSUyMG1vZGVybiUyMHNvZmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
                  alt="Modern Sofa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-3">Living Room</h3>
              <p className="text-square-gray-600 mb-4">Comfortable seating that brings families together</p>
              <Link to="/products" className="text-square-black font-medium hover:underline">
                Explore Collection →
              </Link>
            </div>
            
            <div className="group cursor-pointer">
              <div className="aspect-square bg-square-gray-100 rounded-2xl overflow-hidden mb-6 group-hover:shadow-medium transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1617098900591-3f90928e8c54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
                  alt="Modern Bedroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-3">Bedroom</h3>
              <p className="text-square-gray-600 mb-4">Rest and recharge in ultimate comfort</p>
              <Link to="/products" className="text-square-black font-medium hover:underline">
                Explore Collection →
              </Link>
            </div>
            
            <div className="group cursor-pointer">
              <div className="aspect-square bg-square-gray-100 rounded-2xl overflow-hidden mb-6 group-hover:shadow-medium transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern Dining Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-3">Dining Room</h3>
              <p className="text-square-gray-600 mb-4">Gather around tables built for memories</p>
              <Link to="/products" className="text-square-black font-medium hover:underline">
                Explore Collection →
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200"
            >
              Shop All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-square-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-square-black mb-8">
                Your space, your story
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-square-black mb-3">
                    Crafted with care
                  </h3>
                  <p className="text-square-gray-600 leading-relaxed">
                    Every piece in our collection is thoughtfully designed and built to last, 
                    using sustainable materials and time-honored craftsmanship techniques.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-square-black mb-3">
                    Designed for life
                  </h3>
                  <p className="text-square-gray-600 leading-relaxed">
                    We understand that furniture isn't just about filling space—it's about 
                    creating environments where life happens and memories are made.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-square-black mb-3">
                    Support that matters
                  </h3>
                  <p className="text-square-gray-600 leading-relaxed">
                    From selection to delivery and beyond, our team is here to ensure 
                    your furniture journey is seamless and satisfying.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-square-gray-100 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Beautiful modern living room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-2xl shadow-soft flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-square-black">10+</div>
                  <div className="text-sm text-square-gray-600 font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Home;