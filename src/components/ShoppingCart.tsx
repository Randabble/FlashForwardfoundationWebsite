import React from 'react';
import { Cart } from '../hooks/useCart';
import { Link } from 'wouter';

interface ShoppingCartProps {
    cart: Cart;
    isOpen: boolean;
    onClose: () => void;
    onUpdateQuantity: (productId: number, quantity: number) => void;
    onRemoveItem: (productId: number) => void;
}

export default function ShoppingCart({
    cart,
    isOpen,
    onClose,
    onUpdateQuantity,
    onRemoveItem,
}: ShoppingCartProps) {
    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={onClose}
                ></div>
            )}

            {/* Cart Panel */}
            <div
                className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-accent text-white p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-shopping-cart text-2xl"></i>
                                <h2 className="text-2xl font-bold">Your Cart</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
                            >
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        <p className="text-white/90 mt-2">
                            {cart.totalItems} {cart.totalItems === 1 ? 'item' : 'items'}
                        </p>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {cart.items.length === 0 ? (
                            <div className="text-center py-12">
                                <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
                                <p className="text-gray-500 text-lg">Your cart is empty</p>
                                <button
                                    onClick={onClose}
                                    className="mt-4 text-primary hover:underline font-medium"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cart.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4"
                                    >
                                        {/* Product Image */}
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-dark mb-1">{item.name}</h3>
                                            <p className="text-sm text-gray-600 mb-2">
                                                <i className="fas fa-gift text-primary mr-1"></i>
                                                Donates {item.donationCount} flashlight{item.donationCount > 1 ? 's' : ''}
                                            </p>
                                            <p className="text-primary font-bold">${item.price}</p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex flex-col items-end space-y-2">
                                            <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200">
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                    className="px-3 py-1 hover:bg-gray-100 rounded-l-lg transition-colors"
                                                >
                                                    <i className="fas fa-minus text-sm"></i>
                                                </button>
                                                <span className="font-semibold px-2">{item.quantity}</span>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 py-1 hover:bg-gray-100 rounded-r-lg transition-colors"
                                                >
                                                    <i className="fas fa-plus text-sm"></i>
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => onRemoveItem(item.id)}
                                                className="text-red-500 hover:text-red-700 text-sm transition-colors"
                                            >
                                                <i className="fas fa-trash mr-1"></i>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {cart.items.length > 0 && (
                        <div className="border-t border-gray-200 p-6 bg-gray-50">
                            {/* Donation Impact */}
                            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-heart text-primary text-xl"></i>
                                        <span className="text-sm font-medium text-gray-700">Your Impact:</span>
                                    </div>
                                    <span className="text-lg font-bold text-primary">
                                        {cart.totalDonations} Flashlight{cart.totalDonations > 1 ? 's' : ''}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-600 mt-2">
                                    You're lighting up education for {cart.totalDonations} {cart.totalDonations > 1 ? 'children' : 'child'} in Ghana!
                                </p>
                            </div>

                            {/* Total */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-lg font-semibold text-dark">Total:</span>
                                <span className="text-2xl font-bold text-dark">
                                    ${cart.totalPrice.toFixed(2)}
                                </span>
                            </div>

                            {/* Checkout Button */}
                            <Link href="/checkout">
                                <button
                                    onClick={onClose}
                                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                                >
                                    <i className="fas fa-lock mr-2"></i>
                                    Proceed to Checkout
                                </button>
                            </Link>

                            <button
                                onClick={onClose}
                                className="w-full mt-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
