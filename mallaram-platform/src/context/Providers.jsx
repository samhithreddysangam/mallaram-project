'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
const LangContext = createContext();

export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const stored = localStorage.getItem('mallaram-theme');
        if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);
    const toggleTheme = () => {
        setDark(prev => {
            const next = !prev;
            document.documentElement.classList.toggle('dark', next);
            localStorage.setItem('mallaram-theme', next ? 'dark' : 'light');
            return next;
        });
    };
    return <ThemeContext.Provider value={{ dark, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function LangProvider({ children }) {
    const [lang, setLang] = useState('en');
    useEffect(() => {
        const stored = localStorage.getItem('mallaram-lang');
        if (stored) setLang(stored);
    }, []);
    const toggleLang = () => {
        setLang(prev => {
            const next = prev === 'en' ? 'te' : 'en';
            localStorage.setItem('mallaram-lang', next);
            return next;
        });
    };
    return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
export const useLang = () => useContext(LangContext);
