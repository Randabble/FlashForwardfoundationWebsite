import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { useLocation } from 'wouter';

export default function Checkout() {
    const { cart, clearCart } = useCart();
    const [, setLocation] = useLocation();
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
    });

    // Redirect if cart is empty
    React.useEffect(() => {
        if (cart.items.length === 0 && !orderComplete) {
            setLocation('/shop');
        }
    }, [cart.items.length, orderComplete, setLocation]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        try {
            // Submit order to backend
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customer: formData,
                    items: cart.items,
                    total: cart.totalPrice,
                    donationCount: cart.totalDonations,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Here the backend would return a Stripe checkout URL or payment intent
                // For now, we'll simulate success
                console.log('Order created:', data);
                setOrderComplete(true);
                clearCart();
            } else {
                alert('Failed to create order. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (orderComplete) {
        return (
            <div className="font-sans">
                <Navigation />
                <section className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-check text-green-600 text-4xl"></i>
                            </div>
                            <h1 className="text-3xl font-bold text-dark mb-4">Order Confirmed!</h1>
                            <p className="text-gray-600 text-lg mb-6">
                                Thank you for your purchase! A confirmation email has been sent to {formData.email}.
                            </p>

                            {/* Impact Summary */}
                            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 mb-6">
                                <h2 className="text-2xl font-bold text-dark mb-2">Your Impact</h2>
                                <div className="flex items-center justify-center space-x-2 mb-4">
                                    <i className="fas fa-heart text-primary text-3xl"></i>
                                    <span className="text-4xl font-bold text-primary">{cart.totalDonations}</span>
                                    <span className="text-2xl text-gray-600">Flashlights Donated</span>
                                </div>
                                <p className="text-gray-700">
                                    You've just brought light to {cart.totalDonations} {cart.totalDonations > 1 ? 'children' : 'child'} in Ghana!
                                </p>
                            </div>

                            <button
                                onClick={() => setLocation('/shop')}
                                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                            >
                                Continue Shopping
                            </button>
                            <button
                                onClick={() => setLocation('/')}
                                className="ml-4 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

    return (
        <div className="font-sans">
            <Navigation />

            <section className="min-h-screen pt-24 pb-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-dark text-center mb-12">Checkout</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Order Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-dark mb-6">Shipping Information</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                        Street Address *
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                            City *
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                                            State *
                                        </label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                                            ZIP Code *
                                        </label>
                                        <input
                                            type="text"
                                            id="zipCode"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                                            Country *
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        >
                                            <option value="United States">United States</option>
                                            <option value="Canada">Canada</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isProcessing ? (
                                        <span className="flex items-center justify-center">
                                            <i className="fas fa-spinner fa-spin mr-2"></i>
                                            Processing...
                                        </span>
                                    ) : (
                                        <span>
                                            <i className="fas fa-lock mr-2"></i>
                                            Complete Order
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div>
                            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                                <h2 className="text-2xl font-bold text-dark mb-6">Order Summary</h2>

                                {/* Items */}
                                <div className="space-y-4 mb-6">
                                    {cart.items.map((item) => (
                                        <div key={item.id} className="flex items-center space-x-4 pb-4 border-b border-gray-200">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-dark">{item.name}</h3>
                                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                            </div>
                                            <p className="font-bold text-dark">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Donation Impact */}
                                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-gray-700">Your Impact:</span>
                                        <span className="text-lg font-bold text-primary">
                                            {cart.totalDonations} Flashlight{cart.totalDonations > 1 ? 's' : ''}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        <i className="fas fa-heart text-primary mr-1"></i>
                                        Donated to children in Ghana
                                    </p>
                                </div>

                                {/* Total */}
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-600">Subtotal:</span>
                                        <span className="font-semibold text-dark">${cart.totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-600">Shipping:</span>
                                        <span className="font-semibold text-dark">FREE</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xl font-bold">
                                        <span>Total:</span>
                                        <span className="text-primary">${cart.totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
