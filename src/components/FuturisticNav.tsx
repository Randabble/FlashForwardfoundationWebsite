import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
    Home,
    Info,
    FileText,
    BarChart3,
    Users,
    Handshake,
    Mail,
    DollarSign
} from "lucide-react";

interface NavItem {
    id: number;
    icon: React.ReactNode;
    label: string;
    href: string;
}

const items: NavItem[] = [
    { id: 0, icon: <Home size={20} />, label: "Home", href: "/" },
    { id: 1, icon: <Info size={20} />, label: "About", href: "/about" },
    { id: 2, icon: <FileText size={20} />, label: "Blog", href: "/blog" },
    { id: 3, icon: <BarChart3 size={20} />, label: "Impact", href: "/impact" },
    { id: 4, icon: <Users size={20} />, label: "Volunteer", href: "/volunteer" },
    { id: 5, icon: <Handshake size={20} />, label: "Partner", href: "/partner" },
    { id: 6, icon: <Mail size={20} />, label: "Contact", href: "/contact" },
    { id: 7, icon: <DollarSign size={20} />, label: "Donate", href: "https://gofund.me/436b67db" },
];

const FuturisticNav = () => {
    const [active, setActive] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [location] = useLocation();

    // Update active state based on current location
    React.useEffect(() => {
        const currentIndex = items.findIndex(item => {
            if (item.href.startsWith('http')) return false;
            return item.href === location;
        });
        if (currentIndex !== -1) {
            setActive(currentIndex);
        }
    }, [location]);

    // Handle scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (index: number, href: string) => {
        setActive(index);
        // Handle external links
        if (href.startsWith('http')) {
            window.open(href, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg' : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                                        <i className="fas fa-lightbulb text-white text-sm"></i>
                                    </div>
                                    <span className="text-xl font-bold text-dark">Flash Forward</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Items */}
                    <div className="hidden md:block">
                        <div className="relative flex items-center gap-1">
                            {/* Active Indicator Glow */}
                            <motion.div
                                layoutId="active-indicator"
                                className="absolute h-10 rounded-lg blur-xl -z-10"
                                style={{
                                    background: "linear-gradient(to right, #22c55e, #059669)",
                                    width: "90px"
                                }}
                                animate={{
                                    left: `${active * 12.5}%`,
                                }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />

                            {items.map((item, index) => {
                                const isActive = index === active;
                                const isExternal = item.href.startsWith('http');
                                const isDonate = item.label === "Donate";

                                const buttonContent = (
                                    <motion.div key={item.id} className="relative group">
                                        <motion.button
                                            onClick={() => handleClick(index, item.href)}
                                            whileHover={{ scale: 1.05 }}
                                            animate={{ scale: isActive ? 1.05 : 1 }}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${isDonate
                                                    ? 'bg-primary text-white hover:bg-primary/90 font-medium'
                                                    : isActive
                                                        ? 'text-primary font-medium'
                                                        : 'text-gray-700 hover:text-primary'
                                                }`}
                                        >
                                            <span className="hidden lg:inline">{item.icon}</span>
                                            <span className="text-sm">{item.label}</span>
                                        </motion.button>

                                        {/* Tooltip for screens without icon */}
                                        <span className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs rounded-md bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                );

                                return isExternal ? (
                                    buttonContent
                                ) : (
                                    <Link key={item.id} href={item.href as string}>
                                        {buttonContent}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-primary">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default FuturisticNav;
