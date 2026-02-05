import React, { useMemo } from 'react';
import { ArrowLeft, Zap } from 'lucide-react';
import { techData } from '../data/ranaData';

const TechDetailView = ({ techId, navigate }) => {
    const tech = useMemo(() => techData.find(t => t.id === techId), [techId]);
    if (!tech) return null;

    return (
        <div className="py-24 animate-fadeIn">
            <div className="container mx-auto px-6 max-w-5xl">
                <button onClick={() => navigate('tech')} className="flex items-center gap-2 text-slate-400 hover:text-[#013A57] mb-12 font-black uppercase text-xs tracking-[0.3em] transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Portafolio de Ciencia
                </button>

                <div className="flex items-center gap-8 mb-16">
                    <div className="w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center text-[#75CBB3] shadow-2xl group">
                        {React.cloneElement(tech.icon, { size: 40 })}
                    </div>
                    <div>

                        <h1 className="text-4xl md:text-7xl font-black text-[#013A57] leading-none">{tech.name}</h1>
                        <p className="text-lg text-slate-400 font-bold uppercase tracking-widest mt-2">{tech.claim}</p>
                    </div>
                </div>

                {/* Beneficio Biomecánico Card */}
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 mb-8">
                    <div className="p-12 bg-gradient-to-br from-[#75CBB3]/10 to-[#013A57]/5">
                        <h2 className="text-xs font-black text-[#75CBB3] uppercase tracking-[0.3em] mb-6">Beneficio Biomecánico</h2>
                        <p className="text-xl text-[#013A57] leading-relaxed font-medium">{tech.bioFunction}</p>
                    </div>
                </div>

                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 mb-20">
                    <div className="p-12 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Especificación de Ingeniería</h2>
                        <p className="text-2xl text-[#013A57] leading-relaxed font-medium italic">"{tech.description}"</p>
                    </div>

                    <div className="p-0 overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white border-b border-slate-100">
                                    <th className="px-12 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-r border-slate-100">Variable Crítica</th>
                                    <th className="px-12 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Solución Genérica (Gel/Foam)</th>
                                    <th className="px-12 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#013A57] bg-[#75CBB3]/5">Criterio Rana Walk®</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tech.comparison.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group">
                                        <td className="px-12 py-8 font-black text-[#013A57] uppercase text-xs tracking-widest border-r border-slate-100">{row.aspect}</td>
                                        <td className="px-12 py-8 text-slate-500 font-medium italic text-sm">{row.generic}</td>
                                        <td className="px-12 py-8 font-black text-[#013A57] bg-[#75CBB3]/5 text-sm">{row.rana}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-slate-900 p-16 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl shadow-[#013A57]/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#75CBB3]/10 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
                    <Zap className="mx-auto text-[#75CBB3] mb-8" size={48} />
                    <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">¿Quieres ver esta tecnología en acción?</h3>
                    <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        {tech.name} no actúa de forma aislada. Forma parte de un ecosistema biomecánico diseñado para sostener tu rendimiento en jornadas críticas.
                    </p>
                    <button onClick={() => navigate('systems')} className="bg-[#75CBB3] text-[#013A57] px-12 py-5 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-white hover:scale-105 transition-all shadow-xl shadow-[#75CBB3]/20">
                        Explorar Sistemas Integrados
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TechDetailView;
