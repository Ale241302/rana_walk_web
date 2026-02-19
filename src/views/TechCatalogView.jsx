import React from 'react';
import { ArrowRight } from 'lucide-react';
import { techData } from '../data/ranaData';
import SectionHeader from '../components/common/SectionHeader';

const TechCatalogView = ({ navigate }) => (
    <div className="py-20 animate-fadeIn">
        {/* Compliance: Rana Walk Design System v2.8 — Adecuado 2026-02-18 */}
        <div className="container mx-auto px-6 text-center mb-20">
            <SectionHeader sub="SCIENCE & TECHNOLOGY VIEWER" title="Bio-mimetismo en cada capa: la ciencia detrás del movimiento." />
            <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
                No fabricamos accesorios. Construimos ecosistemas de materiales que emulan funciones biológicas reales. Cada componente de Rana Walk® tiene un propósito de ingeniería definido.
            </p>
        </div>
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
                {techData.map(t => (
                    <div
                        key={t.id}
                        onClick={() => navigate('techDetail', t.id)}
                        className="group flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 cursor-pointer"
                    >
                        <div className="md:w-1/3 bg-[#0F172A] flex flex-col items-center justify-center p-8 text-[#75CBB3] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#75CBB3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="scale-[2.5] group-hover:rotate-12 transition-transform duration-700 relative z-10">{t.icon}</div>
                        </div>
                        <div className="md:w-2/3 p-10">
                            <h3 className="text-3xl font-black text-[#013A57] mb-2">{t.name}</h3>
                            <p className="text-[#75CBB3] font-bold text-xs mb-4 uppercase tracking-widest">{t.claim}</p>
                            <p className="text-slate-500 text-sm mb-6 leading-relaxed italic">{t.description}</p>
                            <span className="text-[#013A57] font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-4 flex items-center gap-2 transition-all">
                                Análisis Comparativo <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
export default TechCatalogView;
