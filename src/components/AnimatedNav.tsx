import React from 'react';
import { Link, useLocation } from 'wouter';

type NavKey = 'home' | 'about' | 'shop' | 'blog' | 'impact' | 'volunteer' | 'partner' | 'contact' | 'donate';

const icons = {
    home: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3 9.5L12 4l9 5.5v7.5a2 2 0 0 1-2  2H5a2 2 0 0 1-2-2V9.5z" />
            <path d="M9 22V12h6v10" />
        </svg>
    ),
    about: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 3-3 3" />
            <circle cx="12" cy="17" r="1" />
        </svg>
    ),
    shop: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
    ),
    blog: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
    ),
    impact: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
        </svg>
    ),
    volunteer: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    partner: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
            <path d="M16 11l2 2 4-4" />
        </svg>
    ),
    contact: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M22 6l-10 7L2 6" />
        </svg>
    ),
};

interface IconButtonProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    href?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, active, href }) => {
    const [hovered, setHovered] = React.useState(false);
    const expandedWidth = Math.max(44 + label.length * 8, 100);
    const isExpanded = (hovered || active);

    const buttonContent = (
        <button
            type="button"
            aria-label={label}
            className={`flex items-center rounded-lg transition-all focus:outline-none relative
        ${active ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}
        duration-200 px-3 py-2`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className="flex items-center justify-center">
                {icon}
            </span>
            <span
                className={`text-sm transition-all duration-300 whitespace-nowrap overflow-hidden ml-2
          ${isExpanded ? 'opacity-100 max-w-[100px]' : 'opacity-0 max-w-0 ml-0'}`}
                style={{
                    transition: 'opacity 0.3s, max-width 0.35s cubic-bezier(0.4,0,0.2,1), margin-left 0.3s',
                }}
            >
                {label}
            </span>
        </button>
    );

    // Handle external links
    if (href?.startsWith('http')) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {buttonContent}
            </a>
        );
    }

    // Handle internal links
    if (href) {
        return <Link href={href}>{buttonContent}</Link>;
    }

    return buttonContent;
};

const AnimatedNav = () => {
    const [location] = useLocation();

    // Determine active nav item based on location
    const active: NavKey = React.useMemo(() => {
        if (location === '/') return 'home';
        if (location.startsWith('/about')) return 'about';
        if (location.startsWith('/shop')) return 'shop';
        if (location.startsWith('/blog')) return 'blog';
        if (location.startsWith('/impact')) return 'impact';
        if (location.startsWith('/volunteer')) return 'volunteer';
        if (location.startsWith('/partner')) return 'partner';
        if (location.startsWith('/contact')) return 'contact';
        return 'home';
    }, [location]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-white text-sm"></i>
                                </div>
                                <span className="text-xl font-bold text-dark">Flash Forward</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        <IconButton icon={icons.home} label="Home" active={active === 'home'} href="/" />
                        <IconButton icon={icons.about} label="About" active={active === 'about'} href="/about" />
                        <IconButton icon={icons.shop} label="Shop" active={active === 'shop'} href="/shop" />
                        <IconButton icon={icons.blog} label="Blog" active={active === 'blog'} href="/blog" />
                        <IconButton icon={icons.impact} label="Impact" active={active === 'impact'} href="/impact" />
                        <IconButton icon={icons.volunteer} label="Volunteer" active={active === 'volunteer'} href="/volunteer" />
                        <IconButton icon={icons.partner} label="Partner" active={active === 'partner'} href="/partner" />
                        <IconButton icon={icons.contact} label="Contact" active={active === 'contact'} href="/contact" />

                        {/* Donate Button */}
                        <a href="https://gofund.me/436b67db" target="_blank" rel="noopener noreferrer">
                            <button className="ml-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                                Donate Now
                            </button>
                        </a>
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

export default AnimatedNav;
