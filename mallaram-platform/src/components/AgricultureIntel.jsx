'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

const cropPrices = [
    { crop: '🌾 Paddy (Sona Masoori)', price: '₹2,140/qtl', change: '+₹45', trend: 'up' },
    { crop: '🌽 Maize', price: '₹1,850/qtl', change: '-₹20', trend: 'down' },
    { crop: '🫘 Red Gram', price: '₹8,500/qtl', change: '+₹120', trend: 'up' },
    { crop: '🥜 Groundnut', price: '₹5,200/qtl', change: '+₹80', trend: 'up' },
    { crop: '🌶️ Chilli', price: '₹12,000/qtl', change: '-₹300', trend: 'down' },
    { crop: '🧅 Onion', price: '₹1,800/qtl', change: '+₹150', trend: 'up' },
];

const weatherForecast = [
    { day: 'Today', icon: '⛈️', temp: '32°C', rain: '80%', desc: 'Thunderstorms' },
    { day: 'Tomorrow', icon: '🌦️', temp: '30°C', rain: '60%', desc: 'Scattered Rain' },
    { day: 'Day 3', icon: '⛅', temp: '33°C', rain: '20%', desc: 'Partly Cloudy' },
    { day: 'Day 4', icon: '☀️', temp: '35°C', rain: '5%', desc: 'Sunny' },
    { day: 'Day 5', icon: '☀️', temp: '34°C', rain: '10%', desc: 'Clear' },
];

const features = [
    { key: 'prices', icon: '📈', color: '#15803d' },
    { key: 'weather', icon: '🌤️', color: '#0d9488' },
    { key: 'pests', icon: '🐛', color: '#dc2626' },
    { key: 'irrigation', icon: '💧', color: '#0ea5e9' },
    { key: 'fertilizer', icon: '🧪', color: '#ca8a04' },
    { key: 'disease', icon: '🔬', color: '#7c3aed' },
];

export default function AgricultureIntel() {
    const { lang } = useLang();
    return (
        <section id="agriculture" className="relative py-24">
            <div className="section-container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 text-xs font-bold text-green-700">
                        🌱 Smart Agriculture
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                        {t(lang, 'agriculture.title')}{' '}
                        <span className="gradient-text">{t(lang, 'agriculture.titleHighlight')}</span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        {t(lang, 'agriculture.subtitle')}
                    </p>
                </motion.div>

                {/* Quick Access Icons */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-card text-center !p-4 hover:border-green-500/30 transition-all cursor-pointer"
                        >
                            <div className="text-3xl mb-2">{f.icon}</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                                {t(lang, `agriculture.${f.key}`)}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Market Intelligence */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        className="lg:col-span-5 glass-card gradient-border !p-0 overflow-hidden"
                    >
                        <div className="p-6 border-b flex justify-between items-center" style={{ borderColor: 'var(--border-color)' }}>
                            <h3 className="font-bold text-lg flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                📈 Market Prices
                            </h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-600">LIVE: WARANGAL MANDI</span>
                        </div>
                        <div className="p-6 space-y-3">
                            {cropPrices.map((c, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-green-500/5 transition-colors border border-green-500/5">
                                    <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{c.crop}</div>
                                    <div className="text-right">
                                        <div className="font-black text-sm" style={{ color: 'var(--text-primary)' }}>{c.price}</div>
                                        <div className={`text-[10px] font-bold ${c.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                            {c.trend === 'up' ? '▲' : '▼'} {c.change}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-slate-50 text-center">
                            <button className="text-xs font-bold text-green-700">VIEW FULL MARKET ANALYSIS →</button>
                        </div>
                    </motion.div>

                    {/* AI Advisory */}
                    <div className="lg:col-span-7 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }} 
                            className="glass-card"
                        >
                            <h3 className="font-bold text-lg mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                🌤️ Local Weather Forecast
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                {weatherForecast.map((w, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-green-500/5 border border-green-500/5 text-center">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">{w.day}</div>
                                        <div className="text-3xl mb-2">{w.icon}</div>
                                        <div className="font-black text-lg" style={{ color: 'var(--text-primary)' }}>{w.temp}</div>
                                        <div className="text-[10px] font-bold text-green-600 mt-1">🌧️ {w.rain}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ delay: 0.2 }}
                            className="glass-card gradient-border !bg-green-900/[0.02]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-2xl shrink-0 shadow-lg shadow-green-900/20">🌱</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                        {t(lang, 'agriculture.recommendation')}
                                        <span className="text-[10px] bg-green-600 text-white px-2 py-0.5 rounded-full">AI INSIGHT</span>
                                    </h4>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                        {t(lang, 'agriculture.recText')}
                                    </p>
                                    <div className="mt-4 flex gap-3">
                                        <button className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-green-600 text-white">GET DETAILED ADVISORY</button>
                                        <button className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-green-200">TALK TO AI AGENT</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
