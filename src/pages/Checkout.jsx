import React, { useState, useContext } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    sameAsShipping: true
  });

  const handleInputChange = (section, field, value) => {
    if (section === 'shipping') {
      setShippingInfo(prev => ({ ...prev, [field]: value }));
    } else if (section === 'payment') {
      setPaymentInfo(prev => ({ ...prev, [field]: value }));
    }
  };

  const validateStep = (step) => {
    if (step === 1) {
      return Object.values(shippingInfo).every(value => value.trim() !== '');
    } else if (step === 2) {
      const required = ['cardNumber', 'expiryDate', 'cvv', 'nameOnCard'];
      return required.every(field => paymentInfo[field].trim() !== '');
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const orderNum = 'FS' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setOrderNumber(orderNum);
      setOrderComplete(true);
      setIsProcessing(false);
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-square-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-square-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-square-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-square-black mb-4">Your cart is empty</h2>
          <p className="text-square-gray-600 mb-8">Add some beautiful furniture to your cart before checking out.</p>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-square-gray-50">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-square-black mb-4">Order Confirmed!</h2>
          <p className="text-xl text-square-gray-600 mb-6">
            Thank you for your purchase. Your order number is <strong>{orderNumber}</strong>
          </p>
          <div className="bg-white rounded-2xl p-8 mb-8 text-left">
            <h3 className="text-xl font-semibold text-square-black mb-4">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-square-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">1</div>
                <div>
                  <h4 className="font-medium text-square-black">Order Processing</h4>
                  <p className="text-square-gray-600 text-sm">We'll prepare your items for shipment within 1-2 business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-square-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">2</div>
                <div>
                  <h4 className="font-medium text-square-black">Shipping Notification</h4>
                  <p className="text-square-gray-600 text-sm">You'll receive tracking information via email once shipped.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-square-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">3</div>
                <div>
                  <h4 className="font-medium text-square-black">Delivery & Setup</h4>
                  <p className="text-square-gray-600 text-sm">Our team will deliver and set up your furniture at your convenience.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200">
              Continue Shopping
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-square-black text-square-black font-medium rounded-full hover:bg-square-black hover:text-white transition-colors duration-200">
              Track Your Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-square-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                currentStep >= 1 ? 'bg-square-black border-square-black text-white' : 'border-square-gray-300 text-square-gray-300'
              }`}>
                1
              </div>
              <div className={`h-0.5 w-16 ${currentStep >= 2 ? 'bg-square-black' : 'bg-square-gray-300'}`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                currentStep >= 2 ? 'bg-square-black border-square-black text-white' : 'border-square-gray-300 text-square-gray-300'
              }`}>
                2
              </div>
              <div className={`h-0.5 w-16 ${currentStep >= 3 ? 'bg-square-black' : 'bg-square-gray-300'}`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                currentStep >= 3 ? 'bg-square-black border-square-black text-white' : 'border-square-gray-300 text-square-gray-300'
              }`}>
                3
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-16 text-sm text-square-gray-600">
              <span className={currentStep >= 1 ? 'text-square-black font-medium' : ''}>Shipping</span>
              <span className={currentStep >= 2 ? 'text-square-black font-medium' : ''}>Payment</span>
              <span className={currentStep >= 3 ? 'text-square-black font-medium' : ''}>Review</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-3xl font-bold text-square-black mb-8">Shipping Information</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-square-black font-medium mb-2">First Name *</label>
                        <input
                          type="text"
                          value={shippingInfo.firstName}
                          onChange={(e) => handleInputChange('shipping', 'firstName', e.target.value)}
                          className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-square-black font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
                        className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-square-black font-medium mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) => handleInputChange('shipping', 'phone', e.target.value)}
                        className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-square-black font-medium mb-2">Address *</label>
                      <input
                        type="text"
                        value={shippingInfo.address}
                        onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
                        className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-square-black font-medium mb-2">City *</label>
                        <input
                          type="text"
                          value={shippingInfo.city}
                          onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
                          className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-square-black font-medium mb-2">State *</label>
                        <input
                          type="text"
                          value={shippingInfo.state}
                          onChange={(e) => handleInputChange('shipping', 'state', e.target.value)}
                          className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-square-black font-medium mb-2">ZIP Code *</label>
                        <input
                          type="text"
                          value={shippingInfo.zipCode}
                          onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
                          className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-8 py-4 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-3xl font-bold text-square-black mb-8">Payment Information</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-square-black font-medium mb-2">Card Number *</label>
                      <input
                        type="text"
                        value={paymentInfo.cardNumber}
                        onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-square-black font-medium mb-2">Expiry Date *</label>
                        <input
                          type="text"
                          value={paymentInfo.expiryDate}
                          onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-square-black font-medium mb-2">CVV *</label>
                        <input
                          type="text"
                          value={paymentInfo.cvv}
                          onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-square-black font-medium mb-2">Name on Card *</label>
                      <input
                        type="text"
                        value={paymentInfo.nameOnCard}
                        onChange={(e) => handleInputChange('payment', 'nameOnCard', e.target.value)}
                        className="w-full px-4 py-3 border border-square-gray-300 rounded-xl focus:ring-2 focus:ring-square-black focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-3 mt-6">
                      <input
                        type="checkbox"
                        id="sameAsShipping"
                        checked={paymentInfo.sameAsShipping}
                        onChange={(e) => handleInputChange('payment', 'sameAsShipping', e.target.checked)}
                        className="w-4 h-4 text-square-black border-square-gray-300 rounded focus:ring-square-black"
                      />
                      <label htmlFor="sameAsShipping" className="text-square-black">
                        Billing address same as shipping address
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-8 py-4 border-2 border-square-black text-square-black font-medium rounded-full hover:bg-square-black hover:text-white transition-colors duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-8 py-4 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200"
                      >
                        Review Order
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-3xl font-bold text-square-black mb-8">Review Your Order</h2>
                  
                  <div className="space-y-8">
                    {/* Shipping Info Review */}
                    <div className="border border-square-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-square-black mb-4">Shipping Information</h3>
                      <div className="text-square-gray-600">
                        <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                        <p>{shippingInfo.address}</p>
                        <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                        <p>{shippingInfo.email}</p>
                        <p>{shippingInfo.phone}</p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="mt-4 text-square-black hover:underline"
                      >
                        Edit
                      </button>
                    </div>

                    {/* Payment Info Review */}
                    <div className="border border-square-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-square-black mb-4">Payment Information</h3>
                      <div className="text-square-gray-600">
                        <p>**** **** **** {paymentInfo.cardNumber.slice(-4)}</p>
                        <p>{paymentInfo.nameOnCard}</p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="mt-4 text-square-black hover:underline"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-8 py-4 border-2 border-square-black text-square-black font-medium rounded-full hover:bg-square-black hover:text-white transition-colors duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isProcessing}
                        className="px-8 py-4 bg-square-black text-white font-medium rounded-full hover:bg-square-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline-block"></div>
                            Processing...
                          </>
                        ) : (
                          'Place Order'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-square-black mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-square-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-square-black">{item.name}</h4>
                      <p className="text-sm text-square-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-square-black font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-square-gray-200 pt-6 space-y-3">
                <div className="flex justify-between text-square-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-square-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-square-gray-600">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-square-black pt-3 border-t border-square-gray-200">
                  <span>Total</span>
                  <span>${(totalPrice * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-square-gray-50 rounded-xl">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm">
                    <p className="font-medium text-square-black">Free White Glove Delivery</p>
                    <p className="text-square-gray-600">Professional delivery and setup included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;