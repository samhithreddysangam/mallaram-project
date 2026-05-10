'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

export default function Footer() {
    const { lang } = useLang();
    return (
        <footer className="relative border-t" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-green-900/20">M</div>
                            <div>
                                <div className="font-black text-xl leading-none" style={{ color: 'var(--text-primary)' }}>Mallaram</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1" style={{ color: 'var(--text-muted)' }}>Mana Ooru Platform</div>
                            </div>
                        </div>
                        <p className="text-sm max-w-sm leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                            {t(lang, 'footer.desc')} Transforming rural governance through technology and transparency in Mallaram Gram Panchayat.
                        </p>
                        <div className="flex gap-4">
                            {['📱', '💬', '📧', '🌐'].map((icon, i) => (
                                <motion.a 
                                    key={i} 
                                    whileHover={{ y: -4, scale: 1.1 }} 
                                    className="w-12 h-12 rounded-2xl glass border border-green-500/10 flex items-center justify-center text-lg cursor-pointer"
                                >
                                    {icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="font-black text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--text-primary)' }}>Navigation</h4>
                        <ul className="space-y-4">
                            {['about', 'ikp', 'schemes', 'transparency'].map((key) => (
                                <li key={key}>
                                    <a href={`#${key}`} className="text-sm font-medium transition-colors hover:text-green-600" style={{ color: 'var(--text-secondary)' }}>
                                        {t(lang, `nav.${key}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4">
                        <h4 className="font-black text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--text-primary)' }}>Contact Us</h4>
                        <div className="space-y-4 glass-card !p-6 border-green-500/5">
                            <div className="flex gap-3">
                                <span className="text-xl">📍</span>
                                <div>
                                    <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Panchayat Office</div>
                                    <div className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>Mallaram Village, Telangana, 505403</div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-xl">📞</span>
                                <div>
                                    <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Support Hotline</div>
                                    <div className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>+91 9989120933</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-6" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="flex flex-col items-center sm:items-start">
                        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                            Developed by Samhithreddy Sangam
                        </p>
                        <p className="text-[10px] mt-1" style={{ color: 'var(--text-muted)' }}>{t(lang, 'footer.rights')}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>SYSTEM STATUS: OPERATIONAL</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
