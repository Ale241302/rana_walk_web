import React from 'react';
import { systemsData } from '../data/ranaData';
import SectionHeader from '../components/common/SectionHeader';

const SystemsCatalogView = ({ navigate }) => (
    <div className="py-20 animate-fadeIn">
        <div className="container mx-auto px-6 text-center mb-16">
            <SectionHeader sub="SISTEMAS DE BIO-MIMETISMO" title="Cuatro ecosistemas de movimiento. Cuatro respuestas de la naturaleza." />
            <p className="text-slate-500 max-w-3xl mx-auto mb-10 text-xl leading-relaxed">
                Rana Walk® no diseña modelos aislados. Organizamos nuestro portafolio en sistemas que emulan la especialización biológica para responder a tres variables críticas: <strong>impacto, carga y espacio interno del calzado.</strong>
            </p>
        </div>

        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {systemsData.map(s => (
                    <div key={s.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col border border-slate-100">
                        <div className="h-64 overflow-hidden relative">
                            <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-black text-[#013A57] tracking-widest border border-slate-100">{s.id.toUpperCase()}</div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-black text-[#013A57] mb-1">{s.name}</h3>
                            <p className="text-[#75CBB3] font-bold text-xs uppercase tracking-wider mb-4">{s.tagline}</p>
                            <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">{s.shortDesc}</p>

                            <div className="space-y-4 mb-8 pt-6 border-t border-slate-50">
                                <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                    <span>Carga</span>
                                    <span className="text-[#013A57]">{s.aiReadySummary.load}</span>
                                </div>
                                <div className="w-full bg-slate-50 h-1.5 rounded-full overflow-hidden border border-slate-100">
                                    <div className="bg-[#75CBB3] h-full transition-all duration-1000" style={{ width: s.aiReadySummary.load.includes('10/10') ? '100%' : (s.aiReadySummary.load.includes('9/10') ? '90%' : (s.aiReadySummary.load.includes('8/10') ? '80%' : (s.aiReadySummary.load.includes('7/10') ? '70%' : '60%'))) }}></div>
                                </div>

                                <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                    <span>Impacto</span>
                                    <span className="text-[#013A57]">{s.aiReadySummary.impact}</span>
                                </div>
                                <div className="w-full bg-slate-50 h-1.5 rounded-full overflow-hidden border border-slate-100">
                                    <div className="bg-[#75CBB3] h-full transition-all duration-1000" style={{ width: s.aiReadySummary.impact.includes('10/10') ? '100%' : (s.aiReadySummary.impact.includes('9/10') ? '90%' : (s.aiReadySummary.impact.includes('8/10') ? '80%' : (s.aiReadySummary.impact.includes('7/10') ? '70%' : '60%'))) }}></div>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate('systemDetail', s.id)}
                                className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#013A57] transition-colors"
                            >
                                Ver Especificaciones
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
export default SystemsCatalogView;
