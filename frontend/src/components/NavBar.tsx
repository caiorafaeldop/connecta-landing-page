import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle Dark Mode Toggle
    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDark]);

    // Handle Scroll Detection for Sticky Navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const isActive = (path: string) => location.pathname === path ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b print:hidden ${isScrolled
            ? 'bg-white/95 dark:bg-secondary/95 backdrop-blur-xl shadow-lg border-gray-300 dark:border-gray-700'
            : 'bg-white/90 dark:bg-secondary/90 backdrop-blur-md border-gray-200 dark:border-gray-800'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group no-underline">
                        <svg width="42" height="42" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                            {/* Connections */}
                            <path d="M25 15 L12 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary dark:text-white" />
                            <path d="M25 15 L38 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary dark:text-white" />
                            <path d="M12 38 L38 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary dark:text-white" />

                            {/* Nodes */}
                            <circle cx="12" cy="38" r="7" className="fill-secondary dark:fill-white" />
                            <circle cx="38" cy="38" r="7" className="fill-secondary dark:fill-white" />
                            <circle cx="25" cy="15" r="7" className="fill-primary" />
                        </svg>
                        <span className="font-display font-bold text-2xl text-secondary dark:text-white tracking-tight">connecta<span className="text-primary">CI</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link className={`font-display font-medium transition-colors ${isActive('/')}`} to="/">Início</Link>
                        <Link className={`font-display font-medium transition-colors ${isActive('/team')}`} to="/team">Equipe</Link>
                        <Link className={`font-display font-medium transition-colors ${isActive('/portfolio')}`} to="/portfolio">Portfólio</Link>
                        <Link className={`font-display font-medium transition-colors ${isActive('/projects')}`} to="/projects">Projetos</Link>
                        <Link className={`font-display font-medium transition-colors ${isActive('/events')}`} to="/events">Eventos</Link>
                        {/*<Link className={`font-display font-medium transition-colors ${isActive('/support')}`} to="/support">Apoie</Link>*/}

                        <Link to="/contact" className="bg-primary hover:bg-sky-400 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5">
                            Contato
                        </Link>

                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
                        >
                            <span className="material-icons">{isDark ? 'light_mode' : 'dark_mode'}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
                        >
                            <span className="material-icons">{isDark ? 'light_mode' : 'dark_mode'}</span>
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative w-10 h-10 text-gray-600 dark:text-white hover:text-primary focus:outline-none"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                    }`}></span>
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100 my-1'
                                    }`}></span>
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-2'
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Menu Panel */}
                    <div className="relative z-50 md:hidden">
                        <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 shadow-2xl">
                            <div className="px-4 pt-2 pb-6 space-y-1">
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-primary/10 transition-all">
                                    Início
                                </Link>
                                <Link to="/team" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-primary/10 transition-all">
                                    Equipe
                                </Link>
                                <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-primary/10 transition-all">
                                    Portfólio
                                </Link>
                                <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-primary/10 transition-all">
                                    Projetos
                                </Link>
                                <Link to="/events" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-primary/10 transition-all">
                                    Eventos
                                </Link>
                                {/*<Link to="/support" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-primary/10 transition-all">
                                    Apoie
                                </Link>*/}
                                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-lg text-base font-semibold bg-primary/10 text-primary dark:text-primary hover:bg-primary hover:text-white transition-all">
                                    Contato
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};