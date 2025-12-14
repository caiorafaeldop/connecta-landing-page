import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
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

    const isActive = (path: string) => location.pathname === path ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary";

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 dark:bg-secondary/90 glass-effect border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group no-underline">
                        <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                            <span className="material-icons">hub</span>
                        </div>
                        <span className="font-display font-bold text-2xl text-secondary dark:text-white tracking-tight">connecta<span className="text-primary">CI</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link className={`font-display font-medium transition-colors ${isActive('/')}`} to="/">Início</Link>
                        <Link className={`font-display font-medium transition-colors ${isActive('/projects')}`} to="/projects">Projetos & Eventos</Link>
                        <Link className={`font-display font-medium transition-colors ${isActive('/support')}`} to="/support">Apoie</Link>
                        
                        <Link to="/contact" className="bg-primary hover:bg-sky-400 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5">
                            Participe
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
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-white hover:text-primary">
                            <span className="material-icons text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50">Início</Link>
                        <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50">Projetos & Eventos</Link>
                        <Link to="/support" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50">Apoie</Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50">Participe</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};