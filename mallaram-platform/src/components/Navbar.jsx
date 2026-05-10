'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

export default function Navbar() {
    const { dark, toggleTheme } = useTheme();
    const { lang, toggleLang } = useLang();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: 'home', href: '#hero' },
        { key: 'about', href: '#about' },
        { key: 'ikp', href: '#ikp' },
        { key: 'schemes', href: '#schemes' },
        { key: 'transparency', href: '#transparency' },
        { key: 'grievance', href: '#grievance' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-600 to-emerald-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-green-900/20">
                            M
                        </div>
                        <div className="hidden sm:block">
                            <div className="font-bold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>Mallaram</div>
                            <div className="text-[10px] leading-tight font-medium" style={{ color: 'var(--text-muted)' }}>Mana Ooru</div>
                        </div>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map(item => (
                            <a
                                key={item.key}
                                href={item.href}
                                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-green-500/10"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {t(lang, `nav.${item.key}`)}
                            </a>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleLang}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all border"
                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                        >
                            {lang === 'en' ? 'తెలుగు' : 'ENG'}
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all border"
                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                        >
                            {dark ? '☀️' : '🌙'}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center border"
                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                        >
                            {mobileOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass border-t"
                        style={{ borderColor: 'var(--border-color)' }}
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navItems.map(item => (
                                <a
                                    key={item.key}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-emerald-500/10"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {t(lang, `nav.${item.key}`)}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
