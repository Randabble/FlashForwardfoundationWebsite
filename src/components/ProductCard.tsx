import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Heart, ShoppingCart } from 'lucide-react';

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
    product: {
        id: number;
        name: string;
        price: number;
        description: string;
        image: string;
        donationCount: number;
    };
    onAddToCart: (product: any) => void;
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
    ({ className, product, onAddToCart, ...props }, ref) => {
        const [isAdding, setIsAdding] = useState(false);
        const [isLiked, setIsLiked] = useState(false);

        const handleAddToCart = (e: React.MouseEvent) => {
            e.preventDefault();
            setIsAdding(true);
            onAddToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                donationCount: product.donationCount,
            });

            setTimeout(() => setIsAdding(false), 600);
        };

        const handleLike = (e: React.MouseEvent) => {
            e.preventDefault();
            setIsLiked(!isLiked);
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "relative grid h-[500px] w-full transform-gpu overflow-hidden rounded-xl border border-gray-200 shadow-lg transition-all duration-300 ease-in-out group hover:shadow-2xl",
                    className
                )}
                {...props}
            >
                {/* Background Image with Hover Animation */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://placehold.co/600x800/f97316/ffffff?text=${encodeURIComponent(product.name)}`;
                    }}
                />

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Buy One Donate Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-gift text-sm"></i>
                            <span className="font-semibold text-sm">Buy 1, Donate {product.donationCount}</span>
                        </div>
                    </div>
                </div>

                {/* Like Button */}
                <button
                    aria-label={isLiked ? "Unlike product" : "Like product"}
                    onClick={handleLike}
                    className={cn(
                        "absolute top-4 right-4 z-20 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 active:scale-95",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    )}
                >
                    <Heart
                        className={cn(
                            "h-6 w-6 text-white transition-all",
                            isLiked && "fill-red-500 text-red-500"
                        )}
                    />
                </button>

                {/* Text Content with Hover Animation */}
                <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                    {/* Category/Price Tag */}
                    <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-medium uppercase tracking-wider text-gray-200">
                            - Solar Powered -
                        </p>
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-2xl font-bold">${product.price}</span>
                        </div>
                    </div>

                    {/* Product Name */}
                    <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                        {product.name}
                    </h2>

                    {/* Description */}
                    <p className="mb-4 text-gray-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {product.description}
                    </p>

                    {/* Impact Message */}
                    <div className="mb-4 bg-primary/20 border-l-4 border-primary rounded p-3 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm text-white">
                            <i className="fas fa-heart text-primary mr-2"></i>
                            Donates <strong>{product.donationCount} flashlight{product.donationCount > 1 ? 's' : ''}</strong> to children in Ghana
                        </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdding}
                        className={cn(
                            "w-full bg-gradient-to-r from-primary to-accent text-white px-6 py-4 rounded-lg font-bold text-lg",
                            "hover:shadow-xl transform hover:scale-105 transition-all duration-200",
                            "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                            "flex items-center justify-center space-x-2",
                            "opacity-0 group-hover:opacity-100"
                        )}
                    >
                        {isAdding ? (
                            <>
                                <i className="fas fa-check"></i>
                                <span>Added!</span>
                            </>
                        ) : (
                            <>
                                <ShoppingCart className="h-5 w-5" />
                                <span>Add to Cart</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        );
    }
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
