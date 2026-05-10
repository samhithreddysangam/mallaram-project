'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/context/Providers';
import { t } from '@/utils/translations';

const mapLayers = [
    { key: 'roads', icon: '🛣️', color: '#15803d', items: ['Main Road NH-65', 'Village Road - Ward 1-3', 'CC Road - Market Area', 'Internal Road Network'] },
    { key: 'pipelines', icon: '🔧', color: '#06b6d4', items: ['Main Water Pipeline', 'Distribution Line - North', 'Distribution Line - South', 'New Extension Line'] },
    { key: 'canals', icon: '🌊', color: '#0ea5e9', items: ['Main Canal', 'Distributary Canal #1', 'Minor Canal - Zone A', 'Minor Canal - Zone B'] },
    { key: 'schools', icon: '🏫', color: '#10b981', items: ['ZP High School', 'Primary School - Ward 2', 'Anganwadi Center - Ward 4'] },
    { key: 'hospitals', icon: '🏥', color: '#ef4444', items: ['PHC Mallaram', 'Sub-Center - Ward 3', 'Veterinary Hospital'] },
    { key: 'lights', icon: '💡', color: '#f59e0b', items: ['42 Solar Streetlights', '18 LED Streetlights', '5 High Mast Lights'] },
    { key: 'works', icon: '🏗️', color: '#8b5cf6', items: ['CC Road Construction - Ward 3', 'Pipeline Extension', 'Community Hall Renovation'] },
    { key: 'waterInfra', icon: '💧', color: '#14b8a6', items: ['Overhead Tank - 1L Capacity', 'Borewell #1-5', 'Public Tap Connections (180)', 'Water Treatment Plant'] },
];

export default function VillageMap() {
    const { lang } = useLang();
    const [activeLayer, setActiveLayer] = useState('roads');

    const active = mapLayers.find(l => l.key === activeLayer);

    return (
        <section id="map" className="relative grid-bg">
            <div className="section-container">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                        {t(lang, 'map.title')}{' '}
                        <span className="gradient-text">{t(lang, 'map.titleHighlight')}</span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>{t(lang, 'map.subtitle')}</p>
                </motion.div>

                {/* Layer Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {mapLayers.map(l => (
                        <button
                            key={l.key}
                            onClick={() => setActiveLayer(l.key)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-1.5 ${activeLayer === l.key ? 'shadow-lg scale-105' : 'glass-card !p-2 !px-4'
                                }`}
                            style={activeLayer === l.key ? { background: l.color, color: 'white' } : {}}
                        >
                            {l.icon} {t(lang, `map.${l.key}`)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Map Visualization */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 glass-card !p-0 overflow-hidden"
                        style={{ minHeight: '400px' }}
                    >
                        {/* Stylized map background */}
                        <div className="relative w-full h-full min-h-[400px]" style={{ background: 'var(--bg-primary)' }}>
                            {/* Grid */}
                            <svg className="absolute inset-0 w-full h-full opacity-20">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <line key={`h${i}`} x1="0" y1={`${i * 5}%`} x2="100%" y2={`${i * 5}%`} stroke={active?.color || '#15803d'} strokeWidth="0.5" />
                                ))}
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <line key={`v${i}`} x1={`${i * 5}%`} y1="0" x2={`${i * 5}%`} y2="100%" stroke={active?.color || '#15803d'} strokeWidth="0.5" />
                                ))}
                            </svg>

                            {/* Points of interest */}
                            <div className="absolute inset-0 p-6">
                                {[
                                    { x: 20, y: 15, label: 'ZP School' },
                                    { x: 55, y: 25, label: 'PHC' },
                                    { x: 75, y: 20, label: 'Overhead Tank' },
                                    { x: 30, y: 45, label: 'Panchayat Office' },
                                    { x: 60, y: 50, label: 'Market' },
                                    { x: 45, y: 70, label: 'Community Hall' },
                                    { x: 15, y: 75, label: 'Canal Entry' },
                                    { x: 80, y: 65, label: 'Power Station' },
                                    { x: 40, y: 35, label: 'Temple' },
                                ].map((poi, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.08, type: 'spring' }}
                                        className="absolute flex flex-col items-center"
                                        style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
                                    >
                                        <div className="w-4 h-4 rounded-full animate-pulse-slow shadow-lg" style={{ background: active?.color || '#15803d', boxShadow: `0 0 12px ${active?.color || '#15803d'}44` }} />
                                        <span className="text-[9px] mt-1 font-semibold whitespace-nowrap px-1.5 py-0.5 rounded glass" style={{ color: 'var(--text-primary)' }}>{poi.label}</span>
                                    </motion.div>
                                ))}

                                {/* Roads / lines */}
                                <svg className="absolute inset-0 w-full h-full">
                                    <motion.path
                                        d="M 10% 45% Q 30% 30%, 55% 25% T 80% 65%"
                                        fill="none"
                                        stroke={active?.color || '#15803d'}
                                        strokeWidth="2"
                                        strokeDasharray="8,4"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2 }}
                                    />
                                    <motion.path
                                        d="M 15% 75% Q 30% 60%, 60% 50% T 75% 20%"
                                        fill="none"
                                        stroke={active?.color || '#06b6d4'}
                                        strokeWidth="1.5"
                                        strokeDasharray="4,4"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, delay: 0.3 }}
                                    />
                                </svg>

                                {/* Village label */}
                                <div className="absolute bottom-4 left-4 glass rounded-lg px-3 py-2">
                                    <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>📍 Mallaram Village</div>
                                    <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>17.234°N, 79.123°E</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Layer Details */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: active?.color }}>
                            {active?.icon} {t(lang, `map.${activeLayer}`)}
                        </h3>
                        <div className="space-y-2">
                            {active?.items.map((item, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card !p-3 flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full shrink-0" style={{ background: active.color }} />
                                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{item}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-4 p-3 rounded-xl" style={{ background: `${active?.color}11`, border: `1px solid ${active?.color}22` }}>
                            <div className="text-xs font-semibold" style={{ color: active?.color }}>Layer Info</div>
                            <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                                Showing {active?.items.length} items for {t(lang, `map.${activeLayer}`)} layer. Click markers on the map for details.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
