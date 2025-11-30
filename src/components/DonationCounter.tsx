import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface DonationCounterProps {
    className?: string;
    showLivesImpacted?: boolean;
}

export default function DonationCounter({ className = '', showLivesImpacted = true }: DonationCounterProps) {
    const [donationCount, setDonationCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const counterRef = useScrollAnimation();

    useEffect(() => {
        // Fetch donation count from API
        const fetchDonationCount = async () => {
            try {
                const response = await fetch('/api/donations/count');
                if (response.ok) {
                    const data = await response.json();
                    setDonationCount(data.count || 0);
                } else {
                    // Fallback to a default value if API is not ready
                    setDonationCount(150); // Default value
                }
            } catch (error) {
                console.error('Failed to fetch donation count:', error);
                setDonationCount(150); // Default value
            } finally {
                setIsLoading(false);
            }
        };

        fetchDonationCount();
    }, []);

    const [displayCount, setDisplayCount] = useState(0);

    // Animate the counter
    useEffect(() => {
        if (isLoading || donationCount === 0) return;

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
    }, [donationCount, isLoading]);

    const livesImpacted = donationCount * 3; // Estimate: each flashlight impacts family of 3

    return (
        <div ref={counterRef} className={`scroll-fade ${className}`}>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                <div className="space-y-6">
                    {/* Flashlights Donated */}
                    <div>
                        <div className="flex items-center justify-center mb-2">
                            <i className="fas fa-lightbulb text-primary text-3xl mr-3"></i>
                            <h3 className="text-5xl font-bold text-dark">
                                {isLoading ? (
                                    <span className="inline-block w-32 h-12 bg-gray-200 animate-pulse rounded"></span>
                                ) : (
                                    displayCount.toLocaleString()
                                )}
                            </h3>
                        </div>
                        <p className="text-xl text-gray-600 font-medium">Flashlights Donated</p>
                    </div>

                    {/* Lives Impacted */}
                    {showLivesImpacted && (
                        <div className="border-t border-gray-200 pt-6">
                            <div className="flex items-center justify-center mb-2">
                                <i className="fas fa-users text-accent text-2xl mr-3"></i>
                                <h4 className="text-3xl font-bold text-dark">
                                    {isLoading ? (
                                        <span className="inline-block w-24 h-10 bg-gray-200 animate-pulse rounded"></span>
                                    ) : (
                                        `${livesImpacted.toLocaleString()}+`
                                    )}
                                </h4>
                            </div>
                            <p className="text-lg text-gray-600">Lives Impacted</p>
                        </div>
                    )}

                    {/* Impact Message */}
                    <div className="bg-white/50 rounded-lg p-4">
                        <p className="text-sm text-gray-700 italic">
                            "Every flashlight brings hope, education, and opportunity to a child in need."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
