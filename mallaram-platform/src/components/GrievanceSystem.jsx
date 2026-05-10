'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

const recentComplaints = [
    { id: 'GRV-2026-102', category: 'Water Supply', status: 'Resolved', priority: 'Critical', date: '4h ago', ward: 'Ward 1' },
    { id: 'GRV-2026-098', category: 'Road Repair', status: 'Resolved', priority: 'High', date: '1d ago', ward: 'Ward 3' },
    { id: 'GRV-2026-105', category: 'Electricity', status: 'Resolved', priority: 'Medium', date: '2h ago', ward: 'Ward 5' },
    { id: 'GRV-2026-092', category: 'Sanitation', status: 'Resolved', priority: 'Low', date: '3d ago', ward: 'Ward 2' },
];

export default function GrievanceSystem() {
    const { lang } = useLang();
    const [formOpen, setFormOpen] = useState(false);
    const categories = t(lang, 'grievance.categories') || [];

    return (
        <section id="grievance" className="relative py-24" style={{ background: 'var(--bg-primary)' }}>
            <div className="section-container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 text-xs font-bold text-green-700">
                        🛡️ Accountable Governance
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                        {t(lang, 'grievance.title')}{' '}
                        <span className="gradient-text">{t(lang, 'grievance.titleHighlight')}</span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        {t(lang, 'grievance.subtitle')}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: t(lang, 'grievance.total'), value: '51', icon: '📋', color: 'var(--color-primary)' },
                        { label: t(lang, 'grievance.resolved'), value: '51', icon: '✅', color: 'var(--color-success)' },
                        { label: t(lang, 'grievance.pending'), value: '0', icon: '⏳', color: 'var(--color-warning)' },
                        { label: t(lang, 'grievance.avgTime'), value: '1.2 Days', icon: '⚡', color: 'var(--color-accent)' },
                    ].map((s, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ delay: i * 0.1 }} 
                            className="glass-card !p-6 border-b-4"
                            style={{ borderBottomColor: s.color }}
                        >
                            <div className="text-2xl mb-3">{s.icon}</div>
                            <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{s.value}</div>
                            <div className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Complaint Form Panel */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        className="lg:col-span-5 glass-card gradient-border !p-8"
                    >
                        <h3 className="font-bold text-xl mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                            ✍️ {t(lang, 'grievance.formTitle')}
                        </h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Full Name</label>
                                    <input type="text" placeholder={t(lang, 'grievance.formName')} className="w-full px-4 py-3 rounded-xl text-sm border border-green-500/10 focus:border-green-500/40 outline-none glass" style={{ color: 'var(--text-primary)' }} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Phone Number</label>
                                    <input type="tel" placeholder={t(lang, 'grievance.formPhone')} className="w-full px-4 py-3 rounded-xl text-sm border border-green-500/10 focus:border-green-500/40 outline-none glass" style={{ color: 'var(--text-primary)' }} />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Category</label>
                                <select className="w-full px-4 py-3 rounded-xl text-sm border border-green-500/10 focus:border-green-500/40 outline-none glass" style={{ color: 'var(--text-secondary)' }}>
                                    <option>{t(lang, 'grievance.formCategory')}</option>
                                    {Array.isArray(categories) && categories.map((c, i) => <option key={i}>{c}</option>)}
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Description</label>
                                <textarea rows="4" placeholder={t(lang, 'grievance.formDesc')} className="w-full px-4 py-3 rounded-xl text-sm border border-green-500/10 focus:border-green-500/40 outline-none glass resize-none" style={{ color: 'var(--text-primary)' }} />
                            </div>
                            <div className="glass rounded-xl p-6 text-center cursor-pointer border-2 border-dashed border-green-500/20 hover:border-green-500/40 transition-colors">
                                <div className="text-3xl mb-2">📸</div>
                                <div className="text-xs font-bold text-slate-500">Upload Photo Evidence</div>
                                <div className="text-[10px] text-slate-400 mt-1">AI will automatically analyze the image for priority</div>
                            </div>
                            <button className="btn-primary w-full justify-center py-4 text-base font-bold shadow-green-900/20">
                                {t(lang, 'grievance.formSubmit')}
                            </button>
                        </div>
                    </motion.div>

                    {/* Admin Tracking Panel */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        className="lg:col-span-7 glass-card !p-0 overflow-hidden"
                    >
                        <div className="p-6 border-b flex justify-between items-center bg-green-500/5" style={{ borderColor: 'var(--border-color)' }}>
                            <h3 className="font-bold text-lg flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                📋 Tracking System
                            </h3>
                            <div className="flex gap-2">
                                <span className="badge badge-success">Live Updates</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            {recentComplaints.map((c, i) => (
                                <div key={i} className="glass-card !p-4 hover:bg-green-500/5 transition-colors">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-lg">📁</div>
                                            <div>
                                                <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{c.category}</div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                                    {c.id} • {c.ward} • <span className="text-green-600">{c.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
                                            <div className="flex gap-2">
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.priority === 'Critical' ? 'bg-red-500/10 text-red-600' : 'bg-blue-500/10 text-blue-600'}`}>
                                                    {c.priority} Priority
                                                </span>
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.status === 'Resolved' ? 'bg-green-500/10 text-green-600' : 'bg-yellow-500/10 text-yellow-600'}`}>
                                                    {c.status}
                                                </span>
                                            </div>
                                            <div className="w-full sm:w-32 h-1 rounded-full bg-slate-100 overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: c.status === 'Resolved' ? '100%' : c.status === 'In Progress' ? '65%' : '20%' }}
                                                    className={`h-full rounded-full ${c.status === 'Resolved' ? 'bg-green-500' : 'bg-yellow-500'}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-slate-50 text-center">
                            <button className="text-xs font-bold text-slate-500 hover:text-green-600 transition-colors">VIEW ALL COMPLAINTS (51) ↓</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
