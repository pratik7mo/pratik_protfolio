import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, PERSONAL_DATA } from '../constants/data.js';

const Header = ({ theme, onThemeSwitch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
    const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>;
    const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light/80 dark:bg-dark-secondary/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="text-2xl font-bold text-accent">
                        <a href="#">Portfolio.</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map(link => (
                           <motion.a 
                                key={link.name} 
                                href={link.href} 
                                className="relative text-light-text dark:text-dark-text hover:text-accent dark:hover:text-accent transition-colors py-2"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                {link.name}
                                <motion.div
                                    variants={{
                                        rest: { scaleX: 0, originX: 0.5 },
                                        hover: { scaleX: 1, originX: 0.5 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                />
                            </motion.a>
                        ))}
                    </div>
                    <div className="flex items-center">
                         <button onClick={onThemeSwitch} className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent" aria-label="Toggle theme">
                            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <div className="md:hidden ml-4">
                            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
                                {isOpen ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-light dark:bg-dark-card shadow-lg"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {NAV_LINKS.map(link => (
                                <a key={link.name} href={link.href} onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-light-text dark:text-dark-text hover:bg-light-card dark:hover:bg-dark-secondary">{link.name}</a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;