'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

const channels = [
    { key: 'whatsapp', icon: '💬', count: '2,847', desc: 'Subscribers', color: '#25D366' },
    { key: 'sms', icon: '📱', count: '3,450', desc: 'Recipients', color: '#15803d' },
    { key: 'voice', icon: '📞', count: '1,200', desc: 'Registered', color: '#06b6d4' },
    { key: 'flood', icon: '🌊', count: '0', desc: 'Active Now', color: '#10b981' },
    { key: 'rain', icon: '🌧️', count: '2', desc: 'Active Warnings', color: '#f59e0b' },
    { key: 'announce', icon: '📢', count: '156', desc: 'This Year', color: '#ef4444' },
];

const activeAlerts = [
    { type: '⛈️ Heavy Rain Warning', severity: 'High', time: '2 hours ago', message: 'Heavy rainfall expected in next 24 hours. Farmers advised to secure crops and livestock.', channels: ['WhatsApp', 'SMS', 'Voice'] },
    { type: '🌊 Canal Water Level', severity: 'Medium', time: '5 hours ago', message: 'Canal water levels rising. Residents near Zone B canal are advised to stay alert.', channels: ['WhatsApp', 'SMS'] },
];

const recentAlerts = [
    { type: 'Weather Update', message: 'Clear skies expected from Thursday', time: '1 day ago', severity: 'Low' },
    { type: 'Vaccination Camp', message: 'Free COVID booster camp at PHC on May 20', time: '2 days ago', severity: 'Info' },
    { type: 'Water Supply', message: 'Water supply disruption in Ward 3, expected 4 hours', time: '3 days ago', severity: 'Medium' },
    { type: 'Road Closure', message: 'Main road closed for repair work, use bypass', time: '4 days ago', severity: 'Low' },
];

export default function EmergencyAlerts() {
    const { lang } = useLang();
    return (
        <section id="emergency" className="relative" style={{ background: 'var(--bg-secondary)' }}>
            <div className="section-container">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                        {t(lang, 'emergency.title')}{' '}
                        <span className="gradient-text">{t(lang, 'emergency.titleHighlight')}</span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>{t(lang, 'emergency.subtitle')}</p>
                </motion.div>

                {/* Channel Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    {channels.map((c, i) => (
                        <motion.div key={c.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card text-center stat-glow">
                            <div className="text-3xl mb-2">{c.icon}</div>
                            <div className="text-lg font-bold" style={{ color: c.color }}>{c.count}</div>
                            <div className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{t(lang, `emergency.${c.key}`)}</div>
                            <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{c.desc}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Active Alerts */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                            🚨 {t(lang, 'emergency.active')}
                            <span className="badge badge-danger flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow"></span> {activeAlerts.length}
                            </span>
                        </h3>
                        <div className="space-y-4">
                            {activeAlerts.map((a, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                                    className="glass-card !p-4 border-l-4"
                                    style={{ borderLeftColor: a.severity === 'High' ? '#ef4444' : '#f59e0b' }}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{a.type}</div>
                                        <span className={`badge ${a.severity === 'High' ? 'badge-danger' : 'badge-warning'}`}>{a.severity}</span>
                                    </div>
                                    <p className="text-xs mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{a.message}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {a.channels.map((ch, j) => (
                                                <span key={j} className="badge badge-info text-[10px]">{ch}</span>
                                            ))}
                                        </div>
                                        <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{a.time}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Recent Alerts */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card">
                        <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>📋 {t(lang, 'emergency.recent')}</h3>
                        <div className="space-y-3">
                            {recentAlerts.map((a, i) => (
                                <div key={i} className="glass-card !p-3">
                                    <div className="flex justify-between items-start mb-1">
                                        <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{a.type}</div>
                                        <span className={`badge ${a.severity === 'Medium' ? 'badge-warning' : a.severity === 'Info' ? 'badge-info' : 'badge-success'
                                            }`}>{a.severity}</span>
                                    </div>
                                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{a.message}</p>
                                    <div className="text-[10px] mt-1" style={{ color: 'var(--text-muted)' }}>{a.time}</div>
                                </div>
                            ))}
                        </div>

                        {/* Emergency Contact Card */}
                        <div className="mt-4 glass-card gradient-border !bg-gradient-to-r !from-red-500/10 !to-orange-500/10">
                            <div className="text-sm font-bold mb-2" style={{ color: 'var(--text-primary)' }}>🆘 Emergency Contacts</div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                {[
                                    { label: 'Sarpanch', phone: '9876543210' },
                                    { label: 'MPDO Office', phone: '9876543211' },
                                    { label: 'Police Station', phone: '100' },
                                    { label: 'Fire Station', phone: '101' },
                                ].map((c, i) => (
                                    <div key={i} className="flex justify-between">
                                        <span style={{ color: 'var(--text-secondary)' }}>{c.label}</span>
                                        <span className="font-mono font-bold" style={{ color: 'var(--text-primary)' }}>{c.phone}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
