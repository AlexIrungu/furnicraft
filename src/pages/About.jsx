import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-square-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold text-square-black mb-8">
              Our story starts with you
            </h1>
            <p className="text-xl text-square-gray-600 leading-relaxed">
              We believe that great furniture isn't just about aesthetics—it's about creating 
              spaces where life unfolds, memories are made, and comfort meets style in perfect harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-square-black mb-8">
                Crafted with purpose
              </h2>
              <div className="space-y-6 text-square-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2014, our journey began with a simple belief: every home deserves 
                  furniture that tells a story. We started as a small workshop with big dreams, 
                  committed to creating pieces that would stand the test of time.
                </p>
                <p>
                  Today, we've grown into a trusted name in furniture design, but our core values 
                  remain unchanged. We source sustainable materials, support local artisans, and 
                  never compromise on quality or craftsmanship.
                </p>
                <p>
                  Every piece in our collection is thoughtfully designed to enhance your daily life, 
                  whether it's a comfortable reading chair or a dining table where families gather 
                  to share meals and create memories.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-square-gray-100 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Craftsperson working on furniture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-square-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-square-black mb-6">
              What drives us forward
            </h2>
            <p className="text-xl text-square-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our values shape everything we do, from the materials we choose to the 
              relationships we build with our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-square-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-4">Quality First</h3>
              <p className="text-square-gray-600 leading-relaxed">
                We never compromise on materials or craftsmanship. Every piece is built to last 
                and designed to be cherished for generations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-square-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-4">Sustainable Choice</h3>
              <p className="text-square-gray-600 leading-relaxed">
                We're committed to environmental responsibility, using sustainable materials and 
                supporting eco-friendly manufacturing practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-square-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-4">Customer Focused</h3>
              <p className="text-square-gray-600 leading-relaxed">
                Your satisfaction is our success. We're here to help you find the perfect pieces 
                and provide exceptional service every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-square-black mb-6">
              Meet the team
            </h2>
            <p className="text-xl text-square-gray-600 max-w-3xl mx-auto leading-relaxed">
              Behind every piece of furniture is a passionate team dedicated to bringing 
              exceptional design and quality to your home.
            </p>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="aspect-square bg-square-gray-100 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-2">Sarah Johnson</h3>
              <p className="text-square-gray-600 font-medium mb-3">Founder & Creative Director</p>
              <p className="text-square-gray-600 leading-relaxed">
                Sarah's vision of accessible luxury furniture drives our design philosophy. 
                With 15 years in interior design, she brings creativity and expertise to every piece.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-square-gray-100 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-2">Michael Chen</h3>
              <p className="text-square-gray-600 font-medium mb-3">Head of Manufacturing</p>
              <p className="text-square-gray-600 leading-relaxed">
                Michael oversees our production process, ensuring every piece meets our exacting 
                standards. His attention to detail is what makes our furniture exceptional.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-square-gray-100 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Emily Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-2">Emily Rodriguez</h3>
              <p className="text-square-gray-600 font-medium mb-3">Customer Experience Manager</p>
              <p className="text-square-gray-600 leading-relaxed">
                Emily leads our customer service team, making sure your furniture journey is 
                smooth from selection to delivery and beyond.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-square-black mb-6">
            Ready to transform your space?
          </h2>
          <p className="text-xl text-square-gray-600 mb-8 leading-relaxed">
            Discover furniture that reflects your style and enhances your daily life. 
            Our collection is waiting for you to explore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200">
              Shop Our Collection
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-square-black text-square-black font-medium rounded-full hover:bg-square-black hover:text-white transition-colors duration-200">
              Visit Our Showroom
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;