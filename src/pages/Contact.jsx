import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-square-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold text-square-black mb-8">
              We're here to help
            </h1>
            <p className="text-xl text-square-gray-600 leading-relaxed">
              Have questions about our furniture, need design advice, or want to schedule a consultation? 
              Our team is ready to assist you in creating the perfect space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-square-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-square-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-3">Phone</h3>
              <p className="text-square-gray-600 mb-4">Speak with our team directly</p>
              <a href="tel:+1234567890" className="text-square-black font-medium hover:underline">
                (123) 456-7890
              </a>
            </div>

            <div className="text-center p-8 bg-square-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-square-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-3">Email</h3>
              <p className="text-square-gray-600 mb-4">Send us a message anytime</p>
              <a href="mailto:hello@furniturestore.com" className="text-square-black font-medium hover:underline">
                hello@furniturestore.com
              </a>
            </div>

            <div className="text-center p-8 bg-square-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-square-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-square-black mb-3">Showroom</h3>
              <p className="text-square-gray-600 mb-4">Visit us in person</p>
              <address className="text-square-black font-medium not-italic">
                123 Design Street<br />
                New York, NY 10001
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-square-black mb-8">
                Send us a message
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message sent successfully!</h3>
                  <p className="text-green-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-square-black font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-square-gray-300 rounded-xl bg-white text-square-black placeholder-square-gray-400 focus:ring-2 focus:ring-square-black focus:border-transparent transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-square-black font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-square-gray-300 rounded-xl bg-white text-square-black placeholder-square-gray-400 focus:ring-2 focus:ring-square-black focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-square-black font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-square-gray-300 rounded-xl bg-white text-square-black placeholder-square-gray-400 focus:ring-2 focus:ring-square-black focus:border-transparent transition-colors duration-200"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-square-black font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-square-gray-300 rounded-xl bg-white text-square-black focus:ring-2 focus:ring-square-black focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="delivery">Delivery & Installation</option>
                      <option value="warranty">Warranty & Support</option>
                      <option value="partnership">Business Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-square-black font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-square-gray-300 rounded-xl bg-white text-square-black placeholder-square-gray-400 focus:ring-2 focus:ring-square-black focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map and Hours */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-square-black mb-6">Visit our showroom</h3>
                <div className="aspect-video bg-square-gray-100 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919355!2d-74.00425878459391!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647309739717!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Showroom Location"
                  />
                </div>
              </div>

              <div className="bg-square-gray-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-square-black mb-4">Showroom Hours</h4>
                <div className="space-y-2 text-square-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">12:00 PM - 5:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-square-gray-200">
                  <p className="text-sm text-square-gray-600">
                    Free consultation available by appointment. Call ahead to ensure 
                    our design experts are available to assist you.
                  </p>
                </div>
              </div>

              <div className="bg-square-gray-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-square-black mb-4">FAQ</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-square-black mb-2">Do you offer delivery?</h5>
                    <p className="text-sm text-square-gray-600">
                      Yes, we offer white-glove delivery and setup service within 50 miles of our showroom.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-square-black mb-2">Can I schedule a consultation?</h5>
                    <p className="text-sm text-square-gray-600">
                      Absolutely! Our design experts offer free consultations to help you find the perfect pieces.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-square-black mb-2">What's your return policy?</h5>
                    <p className="text-sm text-square-gray-600">
                      We offer a 30-day return policy for most items in original condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;