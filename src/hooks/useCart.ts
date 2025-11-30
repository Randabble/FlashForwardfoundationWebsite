import { useState, useEffect } from 'react';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    donationCount: number; // Number of flashlights donated per purchase
}

export interface Cart {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
    totalDonations: number;
}

const CART_STORAGE_KEY = 'flashforward_cart';

export function useCart() {
    const [cart, setCart] = useState<Cart>(() => {
        // Load cart from localStorage on initialization
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem(CART_STORAGE_KEY);
            if (savedCart) {
                try {
                    return JSON.parse(savedCart);
                } catch (e) {
                    console.error('Failed to parse saved cart:', e);
                }
            }
        }
        return {
            items: [],
            totalItems: 0,
            totalPrice: 0,
            totalDonations: 0,
        };
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        }
    }, [cart]);

    const calculateTotals = (items: CartItem[]) => {
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const totalDonations = items.reduce((sum, item) => sum + item.donationCount * item.quantity, 0);
        return { totalItems, totalPrice, totalDonations };
    };

    const addItem = (product: Omit<CartItem, 'quantity'>) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.items.findIndex((item) => item.id === product.id);
            let newItems: CartItem[];

            if (existingItemIndex > -1) {
                // Item exists, increase quantity
                newItems = [...prevCart.items];
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: newItems[existingItemIndex].quantity + 1,
                };
            } else {
                // New item, add to cart
                newItems = [...prevCart.items, { ...product, quantity: 1 }];
            }

            return {
                items: newItems,
                ...calculateTotals(newItems),
            };
        });
    };

    const removeItem = (productId: number) => {
        setCart((prevCart) => {
            const newItems = prevCart.items.filter((item) => item.id !== productId);
            return {
                items: newItems,
                ...calculateTotals(newItems),
            };
        });
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity <= 0) {
            removeItem(productId);
            return;
        }

        setCart((prevCart) => {
            const newItems = prevCart.items.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            );
            return {
                items: newItems,
                ...calculateTotals(newItems),
            };
        });
    };

    const clearCart = () => {
        setCart({
            items: [],
            totalItems: 0,
            totalPrice: 0,
            totalDonations: 0,
        });
    };

    return {
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
    };
}
