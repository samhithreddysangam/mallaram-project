'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

const kpis = [
    { key: 'governance', value: '87/100', icon: '🏛️', color: '#15803d', trend: '+5 pts', chartValues: [60, 68, 72, 75, 80, 84, 87] },
    { key: 'complaints', value: '↓12%', icon: '📉', color: '#10b981', trend: 'Improving', chartValues: [45, 42, 38, 36, 34, 32, 30] },
    { key: 'waterUsage', value: '82%', icon: '💧', color: '#06b6d4', trend: 'Efficient', chartValues: [70, 73, 76, 78, 80, 81, 82] },
    { key: 'sanitation', value: '94%', icon: '🧹', color: '#f59e0b', trend: '+3%', chartValues: [82, 85, 87, 89, 91, 93, 94] },
    { key: 'prediction', value: '95%', icon: '🧠', color: '#8b5cf6', trend: 'Accuracy', chartValues: [88, 89, 90, 92, 93, 94, 95] },
    { key: 'health', value: '8.2/10', icon: '❤️', color: '#ef4444', trend: '+0.5', chartValues: [6.5, 6.8, 7.2, 7.5, 7.8, 8.0, 8.2] },
];

const performanceData = [
    { month: 'Jan', governance: 72, water: 65, sanitation: 80, complaints: 45 },
    { month: 'Feb', governance: 75, water: 70, sanitation: 82, complaints: 42 },
    { month: 'Mar', governance: 78, water: 73, sanitation: 85, complaints: 38 },
    { month: 'Apr', governance: 80, water: 76, sanitation: 87, complaints: 36 },
    { month: 'May', governance: 84, water: 80, sanitation: 91, complaints: 32 },
    { month: 'Jun', governance: 87, water: 82, sanitation: 94, complaints: 30 },
];

export default function AnalyticsDashboard() {
    const { lang } = useLang();
    return (
        <section id="analytics" className="relative grid-bg">
            <div className="section-container">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                        {t(lang, 'analytics.title')}{' '}
                        <span className="gradient-text">{t(lang, 'analytics.titleHighlight')}</span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>{t(lang, 'analytics.subtitle')}</p>
                </motion.div>

                {/* KPI Cards with mini charts */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                    {kpis.map((kpi, i) => (
                        <motion.div key={kpi.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card stat-glow">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <div className="text-2xl mb-1">{kpi.icon}</div>
                                    <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{t(lang, `analytics.${kpi.key}`)}</div>
                                </div>
                                <span className="badge badge-success">{kpi.trend}</span>
                            </div>
                            <div className="text-2xl font-bold mb-3" style={{ color: kpi.color }}>{kpi.value}</div>
                            {/* Mini chart */}
                            <div className="flex items-end gap-1 h-10">
                                {kpi.chartValues.map((v, j) => {
                                    const max = Math.max(...kpi.chartValues);
                                    return (
                                        <motion.div
                                            key={j}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${(v / max) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.3 + j * 0.08 }}
                                            className="flex-1 rounded-sm"
                                            style={{ background: `${kpi.color}${j === kpi.chartValues.length - 1 ? '' : '66'}` }}
                                        />
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Performance Table */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card">
                    <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>📊 Monthly Performance Trends</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                                    <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-muted)' }}>Month</th>
                                    <th className="text-left py-3 px-2 font-semibold" style={{ color: '#15803d' }}>Governance</th>
                                    <th className="text-left py-3 px-2 font-semibold" style={{ color: '#06b6d4' }}>Water</th>
                                    <th className="text-left py-3 px-2 font-semibold" style={{ color: '#f59e0b' }}>Sanitation</th>
                                    <th className="text-left py-3 px-2 font-semibold" style={{ color: '#10b981' }}>Complaints ↓</th>
                                </tr>
                            </thead>
                            <tbody>
                                {performanceData.map((row, i) => (
                                    <motion.tr key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                                        <td className="py-3 px-2 font-semibold" style={{ color: 'var(--text-primary)' }}>{row.month}</td>
                                        <td className="py-3 px-2">
                                            <div className="flex items-center gap-2">
                                                <div className="progress-bar flex-1 !h-2"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${row.governance}%` }} /></div>
                                                <span className="font-semibold text-xs" style={{ color: '#15803d' }}>{row.governance}%</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-2">
                                            <div className="flex items-center gap-2">
                                                <div className="progress-bar flex-1 !h-2"><div className="h-full rounded-full bg-cyan-500" style={{ width: `${row.water}%` }} /></div>
                                                <span className="font-semibold text-xs" style={{ color: '#06b6d4' }}>{row.water}%</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-2">
                                            <div className="flex items-center gap-2">
                                                <div className="progress-bar flex-1 !h-2"><div className="h-full rounded-full bg-amber-500" style={{ width: `${row.sanitation}%` }} /></div>
                                                <span className="font-semibold text-xs" style={{ color: '#f59e0b' }}>{row.sanitation}%</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-2">
                                            <span className="font-semibold" style={{ color: '#10b981' }}>{row.complaints}</span>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
