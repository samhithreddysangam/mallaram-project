'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

const canalData = [
    { name: 'Main Canal', flow: '3.2 m³/s', level: 82, status: 'Active', nextRelease: '06:00 AM' },
    { name: 'Distributary Canal #1', flow: '1.8 m³/s', level: 65, status: 'Active', nextRelease: '07:30 AM' },
    { name: 'Minor Canal - Zone A', flow: '0.9 m³/s', level: 45, status: 'Scheduled', nextRelease: '10:00 AM' },
    { name: 'Minor Canal - Zone B', flow: '0.0 m³/s', level: 12, status: 'Closed', nextRelease: 'Tomorrow 06:00 AM' },
];

const waterSchedule = [
    { zone: 'Zone A - Paddy Fields', time: '06:00 - 08:00 AM', days: 'Mon, Wed, Fri', allocation: '450 m³' },
    { zone: 'Zone B - Vegetable Plots', time: '08:00 - 10:00 AM', days: 'Tue, Thu, Sat', allocation: '280 m³' },
    { zone: 'Zone C - Orchards', time: '04:00 - 06:00 PM', days: 'Mon, Thu', allocation: '180 m³' },
];

export default function WaterGovernance() {
    const { lang } = useLang();
    return (
        <section id="water" className="relative py-24" style={{ background: 'var(--bg-secondary)' }}>
            <div className="section-container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 text-xs font-bold text-green-700">
                        🌊 Resource Management
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                        {t(lang, 'water.title')}{' '}
                        <span className="gradient-text">{t(lang, 'water.titleHighlight')}</span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        {t(lang, 'water.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left: Reservoir and Stats */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true }} 
                            className="glass-card gradient-border !p-6"
                        >
                            <h3 className="font-bold text-lg mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                🏞️ Reservoir Level
                            </h3>
                            <div className="relative h-64 w-full bg-slate-100 rounded-2xl overflow-hidden border border-green-500/10">
                                <motion.div
                                    initial={{ height: '0%' }}
                                    whileInView={{ height: '72%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: 'circOut' }}
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-emerald-400"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-4 bg-white/20 animate-pulse"></div>
                                </motion.div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <div className="text-5xl font-black drop-shadow-md">72%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Current Storage</div>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="p-3 rounded-xl bg-green-500/5">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Available</div>
                                    <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>1,800 ML</div>
                                </div>
                                <div className="p-3 rounded-xl bg-green-500/5">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Daily Usage</div>
                                    <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>45 ML</div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { label: t(lang, 'water.canals'), value: '3/4 Active', icon: '🌊', color: 'var(--color-primary)' },
                                { label: t(lang, 'water.allocation'), value: '910 m³', icon: '💧', color: 'var(--color-accent)' },
                            ].map((s, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -20 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    viewport={{ once: true }} 
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="glass-card !p-4 flex items-center gap-4"
                                >
                                    <div className="text-2xl">{s.icon}</div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase">{s.label}</div>
                                        <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{s.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Canal and Schedule */}
                    <div className="lg:col-span-8 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            className="glass-card"
                        >
                            <h3 className="font-bold text-lg mb-6" style={{ color: 'var(--text-primary)' }}>🏗️ Canal Network Monitoring</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {canalData.map((c, i) => (
                                    <div key={i} className="p-4 rounded-xl border border-green-500/5 bg-green-500/[0.02] hover:bg-green-500/[0.05] transition-colors">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{c.name}</div>
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.status === 'Active' ? 'bg-green-500/10 text-green-600' : 'bg-slate-500/10 text-slate-500'}`}>
                                                {c.status}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-[10px] mb-2 font-bold uppercase tracking-tight text-slate-400">
                                            <span>Flow: <span className="text-green-600">{c.flow}</span></span>
                                            <span>Release: {c.nextRelease}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }} 
                                                whileInView={{ width: `${c.level}%` }} 
                                                viewport={{ once: true }} 
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className="h-full bg-green-500" 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ delay: 0.2 }}
                            className="glass-card"
                        >
                            <h3 className="font-bold text-lg mb-6" style={{ color: 'var(--text-primary)' }}>📅 Smart Irrigation Schedule</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b" style={{ borderColor: 'var(--border-color)' }}>
                                            <th className="pb-4">Irrigation Zone</th>
                                            <th className="pb-4">Timing</th>
                                            <th className="pb-4">Active Days</th>
                                            <th className="pb-4">Allocation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
                                        {waterSchedule.map((s, i) => (
                                            <tr key={i} className="text-sm">
                                                <td className="py-4 font-bold" style={{ color: 'var(--text-primary)' }}>{s.zone}</td>
                                                <td className="py-4 font-medium" style={{ color: 'var(--text-secondary)' }}>{s.time}</td>
                                                <td className="py-4 text-xs font-semibold text-green-600">{s.days}</td>
                                                <td className="py-4 font-bold" style={{ color: 'var(--color-accent)' }}>{s.allocation}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
