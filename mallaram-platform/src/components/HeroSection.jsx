'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

export default function HeroSection() {
    const { lang } = useLang();

    const stats = [
        { label: t(lang, 'hero.stats.population'), value: '2,000+', icon: '👥' },
        { label: t(lang, 'hero.stats.literacy'), value: '85%', icon: '📚' },
        { label: t(lang, 'hero.stats.households'), value: '400+', icon: '🏡' },
        { label: t(lang, 'hero.stats.projects'), value: '4', icon: '🏗️' },
    ];

    return (
        <section id="hero" className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background elements */}
            <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="section-container relative">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 text-xs font-bold"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {t(lang, 'hero.badge')}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
                        >
                            {t(lang, 'hero.title')}<br />
                            <span className="gradient-text">{t(lang, 'hero.titleHighlight')}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            {t(lang, 'hero.subtitle')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                        >
                            <button className="btn-primary">
                                {t(lang, 'hero.cta1')} <span>→</span>
                            </button>
                            <button className="btn-secondary">
                                {t(lang, 'hero.cta2')}
                            </button>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative w-full max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative z-10"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((s, i) => (
                                    <motion.div
                                        key={s.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + i * 0.1 }}
                                        className="glass-card stat-glow p-6 text-center lg:text-left"
                                    >
                                        <div className="text-3xl mb-2">{s.icon}</div>
                                        <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>{s.value}</div>
                                        <div className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* AI Badge float */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-xs font-bold border-green-500/20 shadow-xl hidden md:block"
                            style={{ color: 'var(--color-primary)' }}
                        >
                            ✨ AI Powered
                        </motion.div>
                    </div>
                </div>

                {/* Dashboard Preview Section (Bottom) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 glass-card gradient-border overflow-hidden !p-0"
                >
                    <div className="p-3 border-b flex items-center gap-2" style={{ borderColor: 'var(--border-color)' }}>
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="glass rounded-md px-3 py-1 text-[10px] inline-block" style={{ color: 'var(--text-muted)' }}>
                                mallaram.gov.in/dashboard/admin
                            </div>
                        </div>
                    </div>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Revenue Collected', value: '₹10L', trend: '+12%', color: 'var(--color-success)' },
                            { label: 'Active Schemes', value: '18', trend: 'Live', color: 'var(--color-primary)' },
                            { label: 'Families Served', value: '2,847', trend: '+156', color: 'var(--color-accent)' },
                            { label: 'Works Completed', value: '142', trend: '98%', color: 'var(--color-warning)' },
                        ].map((item, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                                <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{item.value}</div>
                                <div className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-500/10 inline-block" style={{ color: item.color }}>{item.trend}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
