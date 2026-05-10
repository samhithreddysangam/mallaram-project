'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

const agendaItems = [
    { title: 'CC Road Approval - Ward 5', type: 'Infrastructure', votes: 'Pending', time: '10:15 AM' },
    { title: 'Water Pipeline Extension Budget', type: 'Water Supply', votes: '✅ Approved (24-3)', time: '10:30 AM' },
    { title: 'Streetlight Maintenance Fund', type: 'Electricity', votes: 'Pending', time: '10:45 AM' },
    { title: 'School Building Repair Discussion', type: 'Education', votes: 'Pending', time: '11:00 AM' },
    { title: 'MGNREGA Work Allocation', type: 'Employment', votes: '✅ Approved (27-0)', time: '11:15 AM' },
];

const features = [
    { key: 'live', icon: '📺', desc: 'Live stream meetings to all citizens' },
    { key: 'agenda', icon: '📋', desc: 'Public access to meeting agenda' },
    { key: 'polling', icon: '🗳️', desc: 'Digital citizen voting system' },
    { key: 'resolutions', icon: '📄', desc: 'Digitally signed resolutions' },
    { key: 'archived', icon: '🗂️', desc: 'Full meeting archives & minutes' },
    { key: 'participation', icon: '📊', desc: 'Track citizen engagement' },
];

export default function GramSabha() {
    const { lang } = useLang();
    return (
        <section id="sabha" className="relative" style={{ background: 'var(--bg-secondary)' }}>
            <div className="section-container">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                        {t(lang, 'sabha.title')}{' '}
                        <span className="gradient-text">{t(lang, 'sabha.titleHighlight')}</span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>{t(lang, 'sabha.subtitle')}</p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    {features.map((f, i) => (
                        <motion.div key={f.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card text-center stat-glow">
                            <div className="text-3xl mb-2">{f.icon}</div>
                            <div className="text-xs font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{t(lang, `sabha.${f.key}`)}</div>
                            <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{f.desc}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Live Meeting Card */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>📺 {t(lang, 'sabha.nextMeeting')}</h3>
                            <span className="badge badge-danger flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow"></span> LIVE
                            </span>
                        </div>
                        {/* Video placeholder */}
                        <div className="rounded-xl overflow-hidden mb-4 relative" style={{ background: 'linear-gradient(135deg, #1e1b4b, #0f172a)', height: '200px' }}>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                <div className="text-4xl mb-3">🏛️</div>
                                <div className="text-sm font-semibold">Gram Sabha Meeting</div>
                                <div className="text-xs opacity-60 mt-1">May 15, 2026 • 10:00 AM</div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="mt-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-xs font-semibold border border-white/20"
                                >
                                    ▶ Join Live Stream
                                </motion.button>
                            </div>
                        </div>
                        {/* Participation stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { label: 'Attendees', value: '156', icon: '👥' },
                                { label: 'Online', value: '89', icon: '💻' },
                                { label: 'Resolutions', value: '5', icon: '📄' },
                            ].map((s, i) => (
                                <div key={i} className="text-center glass-card !p-2">
                                    <div className="text-lg">{s.icon}</div>
                                    <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{s.value}</div>
                                    <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Agenda */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card">
                        <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>📋 {t(lang, 'sabha.upcoming')}</h3>
                        <div className="space-y-3">
                            {agendaItems.map((a, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card !p-3">
                                    <div className="flex justify-between items-start mb-1">
                                        <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{a.title}</div>
                                        <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>{a.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="badge badge-info">{a.type}</span>
                                        <span className={`text-xs font-medium ${a.votes.includes('Approved') ? 'text-green-500' : ''}`} style={!a.votes.includes('Approved') ? { color: 'var(--text-muted)' } : {}}>
                                            {a.votes}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
