import React from 'react';
import { Award, Truck, Shield, Headphones, Leaf, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Premium Quality',
      description: 'Handcrafted furniture made from the finest materials with attention to every detail.',
      icon: Award,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Free Delivery',
      description: 'Complimentary white-glove delivery and setup for all orders over $500.',
      icon: Truck,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: '10-Year Warranty',
      description: 'Comprehensive warranty coverage on all furniture pieces for your peace of mind.',
      icon: Shield,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: '24/7 Support',
      description: 'Expert customer service team available around the clock to assist you.',
      icon: Headphones,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Eco-Friendly',
      description: 'Sustainably sourced materials and environmentally conscious manufacturing processes.',
      icon: Leaf,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Quick Assembly',
      description: 'Easy-to-follow instructions and all necessary tools included for fast setup.',
      icon: Clock,
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Why choose FurniCraft?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to bringing you the best furniture experience with 
            uncompromising quality, exceptional service, and sustainable practices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${feature.color} group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white rounded-xl p-8 shadow-sm border">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">50k+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;