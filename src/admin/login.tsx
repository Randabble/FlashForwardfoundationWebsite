import React, { useState } from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AdminLogin() {
    const [, setLocation] = useLocation();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/auth/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                // Store auth token in localStorage
                localStorage.setItem('admin_token', data.token);
                // Redirect to blog editor
                setLocation('/admin/blog-editor');
            } else {
                const data = await response.json();
                setError(data.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="font-sans min-h-screen flex flex-col">
            <Navigation />

            <section className="flex-1 pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-shield-alt text-primary text-3xl"></i>
                            </div>
                            <h1 className="text-3xl font-bold text-dark mb-2">Admin Login</h1>
                            <p className="text-gray-600">Enter your credentials to manage blog posts</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Enter your username"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Enter your password"
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
                                        Logging in...
                                    </span>
                                ) : (
                                    <span>
                                        <i className="fas fa-sign-in-alt mr-2"></i>
                                        Login
                                    </span>
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <a href="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                ← Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
