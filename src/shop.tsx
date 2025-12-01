import React, { useEffect, useState } from 'react';
import AnimatedNav from './components/AnimatedNav';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import { useCart } from './hooks/useCart';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    donationCount: number;
}

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [donationCount, setDonationCount] = useState(0);
    const [displayCount, setDisplayCount] = useState(0);
    const { cart, addItem, updateQuantity, removeItem } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    setProducts(sampleProducts);
                }
            } catch (error) {
                console.error('Failed to fetch products:', error);
                setProducts(sampleProducts);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchDonationCount = async () => {
            try {
                const response = await fetch('/api/donations/count');
                if (response.ok) {
                    const data = await response.json();
                    setDonationCount(data.count || 150);
                } else {
                    setDonationCount(150);
                }
            } catch (error) {
                console.error('Failed to fetch donation count:', error);
                setDonationCount(150);
            }
        };

        fetchProducts();
        fetchDonationCount();
    }, []);

    // Animate the counter
    useEffect(() => {
        if (donationCount === 0) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = donationCount / (duration / 16); // 60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= donationCount) {
                setDisplayCount(donationCount);
                clearInterval(timer);
            } else {
                setDisplayCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [donationCount]);

    const sampleProducts: Product[] = [
        {
            id: 1,
            name: 'Solar Flashlight Classic',
            price: 25,
            description: 'Our flagship solar-powered flashlight with 8-hour battery life. Perfect for studying after dark.',
            image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            donationCount: 1,
        },
        {
            id: 2,
            name: 'Solar Flashlight Pro',
            price: 40,
            description: 'Enhanced model with adjustable brightness and USB charging port. Durable and water-resistant.',
            image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            donationCount: 2,
        },
        {
            id: 3,
            name: 'Solar Study Kit',
            price: 60,
            description: 'Complete kit with flashlight, portable solar panel, and study lamp. Powers education day and night.',
            image: 'https://images.unsplash.com/photo-1606166325683-7e92c1c4ea1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            donationCount: 3,
        },
    ];

    const handleAddToCart = (product: any) => {
        addItem(product);
        setIsCartOpen(true);
    };

    return (
        <div className="font-sans">
            <AnimatedNav />

            {/* Hero Section - Matching home page style */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-dark/30"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Shop to
                        <span className="text-primary"> Make a Difference</span>
                    </h1>

                    <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                        Every purchase donates flashlights to children in Ghana. Buy one, change lives.
                    </p>

                    <div>
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 px-6 py-3 rounded-lg">
                            <i className="fas fa-lightbulb text-primary text-2xl mr-3"></i>
                            <div className="text-left">
                                <p className="text-sm text-gray-300">Total Impact</p>
                                <p className="text-2xl font-bold">{displayCount.toLocaleString()} Flashlights Donated</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cart Button (Fixed) */}
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="fixed top-24 right-6 bg-gradient-to-r from-primary to-accent text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-30"
                >
                    <i className="fas fa-shopping-cart text-xl"></i>
                    {cart.totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                            {cart.totalItems}
                        </span>
                    )}
                </button>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold text-dark mb-4">Our Products</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Choose your impact level. Every purchase makes a real difference.
                        </p>
                    </div>

                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-gray-200 rounded-2xl h-[500px] animate-pulse"></div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAddToCart={handleAddToCart}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-dark text-center mb-4">How It Works</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-shopping-bag text-primary text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">1. Shop</h3>
                            <p className="text-gray-600">
                                Choose a product that fits your budget and desired impact level.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-gift text-accent text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">2. We Donate</h3>
                            <p className="text-gray-600">
                                For every flashlight purchased, we donate one (or more) to children in Ghana.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-graduation-cap text-primary text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">3. Change Lives</h3>
                            <p className="text-gray-600">
                                Students can study after dark, improving education outcomes and opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shopping Cart Panel */}
            <ShoppingCart
                cart={cart}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
            />

            <Footer />
        </div>
    );
}
