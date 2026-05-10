'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

const metrics = [
    { key: 'rainfall', icon: '🌧️', value: '12mm', sub: 'Last 24h', color: '#059669', trend: 'Optimal' },
    { key: 'canal', icon: '🌊', value: '2.8 m³/s', sub: 'Inflow', color: '#0d9488', trend: 'Normal' },
    { key: 'irrigation', icon: '🚿', value: '06:00 AM', sub: 'Next Release', color: '#15803d', trend: 'Scheduled' },
    { key: 'sanitation', icon: '🧹', value: '98%', sub: 'Coverage', color: '#0f766e', trend: '+2%' },
    { key: 'electricity', icon: '⚡', value: '99.8%', sub: 'Uptime', color: '#166534', trend: 'Stable' },
    { key: 'weather', icon: '☀️', value: 'Clear', sub: 'Forecast', color: '#064e3b', trend: 'Low Risk' },
];

export default function CommandCenter() {
    const { lang } = useLang();
    return (
        <section id="ikp" className="relative overflow-hidden py-24" style={{ background: 'var(--bg-secondary)' }}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 text-xs font-bold" style={{ color: 'var(--color-primary)' }}>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> {t(lang, 'command.titleHighlight')}
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                        {t(lang, 'command.title')}
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        {t(lang, 'command.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={m.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card !p-6 border-l-4"
                            style={{ borderLeftColor: m.color }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-2xl">{m.icon}</div>
                                <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-500/10" style={{ color: m.color }}>{m.trend}</span>
                            </div>
                            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{m.value}</div>
                            <div className="text-sm font-bold mb-1" style={{ color: 'var(--text-secondary)' }}>
                                {t(lang, `command.${m.key}`)}
                            </div>
                            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{m.sub}</div>
                            
                            <div className="mt-4 flex gap-1 h-1">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(j => (
                                    <div key={j} className="flex-1 rounded-full bg-green-500/20" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Governance Insights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 glass-card gradient-border overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8 p-2">
                        <div className="w-full md:w-1/3 aspect-video rounded-xl bg-green-900/10 overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-green-600/20 text-6xl font-black">IKB</div>
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="text-xs font-bold uppercase tracking-wider opacity-80">Slot System</div>
                                <div className="text-lg font-bold">IKB Smart Booking</div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                {t(lang, 'command.aiInsight')}
                                <span className="text-[10px] bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">AI Analysis</span>
                            </h4>
                            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                                {t(lang, 'command.aiText')}
                            </p>
                            <button className="text-xs font-bold text-green-600 flex items-center gap-1 hover:gap-2 transition-all">
                                ACCESS GOVERNANCE SYSTEM <span>→</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
