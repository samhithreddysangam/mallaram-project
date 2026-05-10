'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

const funds = [
    { label: 'Gram Panchayat Funds', received: '₹10L', spent: '₹3.1L', color: '#15803d' },
    { label: 'MGNREGS Payments', received: '₹0L', spent: '₹0L', color: '#0d9488' },
    { label: 'Central Govt Grants', received: '₹0L', spent: '₹0L', color: '#0f766e' },
    { label: 'Local Revenue', received: '₹0L', spent: '₹0L', color: '#166534' },
];

export default function TransparencyPortal() {
    const { lang } = useLang();
    return (
        <section id="transparency" className="py-24 relative">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 text-xs font-bold text-green-700">
                                📊 Full Visibility
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
                                {t(lang, 'transparency.title')}<br />
                                <span className="gradient-text">{t(lang, 'transparency.titleHighlight')}</span>
                            </h2>
                            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {t(lang, 'transparency.subtitle')} Every rupee received and spent by the village is clearly visible to the public. No hidden policies.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    { label: t(lang, 'transparency.budget'), value: '₹10L', icon: '💰' },
                                    { label: t(lang, 'transparency.spent'), value: '₹3.1L', icon: '💸' },
                                    { label: t(lang, 'transparency.projects'), value: '4', icon: '🏗️' },
                                ].map(item => (
                                    <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl glass border-green-500/5">
                                        <div className="text-2xl">{item.icon}</div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</div>
                                            <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card gradient-border !p-0 overflow-hidden"
                        >
                            <div className="p-6 border-b flex justify-between items-center" style={{ borderColor: 'var(--border-color)' }}>
                                <h3 className="font-bold text-green-800">{t(lang, 'transparency.fundsTitle')}</h3>
                                <button className="text-xs font-bold text-green-600">DOWNLOAD REPORT ↓</button>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b" style={{ borderColor: 'var(--border-color)' }}>
                                            <th className="pb-4">{t(lang, 'transparency.fundsTitle')}</th>
                                            <th className="pb-4">Allocated</th>
                                            <th className="pb-4">Utilized</th>
                                            <th className="pb-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
                                        {funds.map((fund, i) => (
                                            <tr key={i} className="text-sm">
                                                <td className="py-4 font-bold" style={{ color: 'var(--text-primary)' }}>{fund.label}</td>
                                                <td className="py-4 font-medium" style={{ color: 'var(--text-secondary)' }}>{fund.received}</td>
                                                <td className="py-4 font-medium" style={{ color: 'var(--text-secondary)' }}>{fund.spent}</td>
                                                <td className="py-4">
                                                    <div className="w-24 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                                        <motion.div 
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: '75%' }}
                                                            viewport={{ once: true }}
                                                            className="h-full rounded-full"
                                                            style={{ backgroundColor: fund.color }}
                                                        />
                                                    </div>
                                                </td>
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
