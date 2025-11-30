import React, { useState, useEffect } from 'react';

interface NewsletterModalProps {
    onClose: () => void;
}

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    handleDismiss();
                }, 3000);
            } else {
                const data = await response.json();
                setError(data.message || 'Failed to subscribe. Please try again.');
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setError('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDismiss = () => {
        // Set "don't show again" flag in localStorage
        localStorage.setItem('newsletter_modal_dismissed', 'true');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleDismiss}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={handleDismiss}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>

                {!isSuccess ? (
                    <>
                        {/* Header with gradient background */}
                        <div className="bg-gradient-to-br from-primary to-accent p-8 text-white">
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                    <i className="fas fa-envelope text-4xl"></i>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-center mb-2">Stay Connected</h2>
                            <p className="text-white/90 text-center">
                                Join our community and get the latest updates on our mission to end energy poverty.
                            </p>
                        </div>

                        {/* Form Content */}
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="modal-email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your.email@example.com"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                        <i className="fas fa-exclamation-circle mr-2"></i>
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <i className="fas fa-spinner fa-spin mr-2"></i>
                                            Subscribing...
                                        </span>
                                    ) : (
                                        <span>
                                            <i className="fas fa-paper-plane mr-2"></i>
                                            Subscribe Now
                                        </span>
                                    )}
                                </button>
                            </form>

                            {/* Benefits */}
                            <div className="mt-6 space-y-3">
                                <p className="text-sm font-semibold text-gray-700">You'll receive:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start text-sm text-gray-600">
                                        <i className="fas fa-check text-primary mr-2 mt-1"></i>
                                        <span>Monthly impact updates from Ghana</span>
                                    </li>
                                    <li className="flex items-start text-sm text-gray-600">
                                        <i className="fas fa-check text-primary mr-2 mt-1"></i>
                                        <span>Exclusive stories and photos</span>
                                    </li>
                                    <li className="flex items-start text-sm text-gray-600">
                                        <i className="fas fa-check text-primary mr-2 mt-1"></i>
                                        <span>Early access to new products</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-xs text-gray-500 text-center mt-6">
                                We respect your privacy. Unsubscribe anytime.
                            </p>
                        </div>
                    </>
                ) : (
                    /* Success State */
                    <div className="p-12 text-center">
                        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="fas fa-check text-green-600 text-4xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-dark mb-2">You're All Set!</h3>
                        <p className="text-gray-600">
                            Thank you for subscribing. Check your email for a confirmation message.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
