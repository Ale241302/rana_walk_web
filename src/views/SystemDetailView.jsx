import React, { useMemo, useState } from 'react';
import { ArrowLeft, Activity, Zap, Info } from 'lucide-react';
import { systemsData, techData } from '../data/ranaData';
import AddToCartModal from '../components/common/AddToCartModal';

const SystemDetailView = ({ systemId, navigate, addToCart }) => {
    const system = useMemo(() => systemsData.find(s => s.id === systemId), [systemId]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!system) return null;

    return (
        <>
            <div className="animate-fadeIn">
                <div className="bg-slate-50 py-16 border-b border-slate-100">
                    <div className="container mx-auto px-6">
                        <button onClick={() => navigate('systems')} className="flex items-center gap-2 text-slate-400 hover:text-[#013A57] mb-10 font-black transition-colors uppercase text-xs tracking-widest">
                            <ArrowLeft className="w-4 h-4" /> Volver al Portafolio
                        </button>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                                <img src={system.image} alt={system.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#013A57]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div>
                                <span className="text-[#75CBB3] font-black tracking-[0.3em] text-xs uppercase mb-4 block">SISTEMA · {system.ref}</span>
                                <h1 className="text-5xl md:text-8xl font-black text-[#013A57] mb-6 leading-none">{system.name}</h1>
                                <p className="text-2xl text-slate-500 font-medium mb-10 leading-relaxed italic">"{system.fullDescription}"</p>

                                <div className="flex flex-wrap gap-2 mb-12">
                                    {system.technologies.slice(0, 4).map(tId => {
                                        const t = techData.find(td => td.id === tId);
                                        return (
                                            <div key={tId} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black text-[#013A57] uppercase tracking-widest">
                                                <Activity className="w-3 h-3 text-[#75CBB3]" /> {t?.name}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="bg-slate-900 p-10 rounded-[2rem] text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#75CBB3]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                    <div className="flex justify-between items-center mb-8">
                                        <div>
                                            <span className="font-black text-[#75CBB3] uppercase text-[10px] tracking-widest block mb-1">Inversión Técnica</span>
                                            <span className="text-4xl font-black">$59.90 <span className="text-sm font-normal text-slate-400">USD</span></span>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-black text-[#75CBB3] uppercase text-[10px] tracking-widest block mb-1">Disponibilidad</span>
                                            <span className="text-sm font-bold text-emerald-400">En Inventario</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full py-5 bg-[#75CBB3] text-[#013A57] rounded-xl font-black uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.02] transition-all shadow-xl shadow-[#75CBB3]/10"
                                    >
                                        Implementar en mi calzado
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-2 space-y-20">
                            <section>
                                <h3 className="text-3xl font-black text-[#013A57] mb-8 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#e6fffb] rounded-full flex items-center justify-center text-[#013A57]"><Info size={20} /></div>
                                    ¿Qué es el Sistema {system.name}?
                                </h3>
                                <p className="text-xl text-slate-600 leading-relaxed mb-8">{system.whatIs}</p>
                                <div className="bg-[#013A57] text-white p-8 rounded-3xl border-l-8 border-[#75CBB3]">
                                    <h4 className="font-black uppercase tracking-widest text-xs mb-4 text-[#75CBB3]">Bio-Mimicry Insight</h4>
                                    <p className="text-lg italic leading-relaxed">"{system.bioMimicry}"</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-black text-[#013A57] mb-8 uppercase tracking-tight">Arquitectura de Funcionamiento</h3>
                                <div className="grid sm:grid-cols-3 gap-8">
                                    {system.howItWorks.map((h, i) => (
                                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="text-[#75CBB3] mb-4"><Zap size={24} /></div>
                                            <h4 className="font-black text-[#013A57] mb-3 text-sm uppercase tracking-widest">{h.tech}</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed italic">{h.func}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                                <h3 className="text-xl font-black text-[#013A57] mb-8 uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm">✕</span>
                                    Lo que NO es {system.name}
                                </h3>
                                <div className="space-y-4">
                                    {system.whatIsNot.map((item, i) => {
                                        const [title, ...rest] = item.split(':');
                                        const description = rest.join(':').trim();
                                        return (
                                            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-[#013A57] block mb-1">{title}</span>
                                                        {description && (
                                                            <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-10">
                            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#75CBB3]/5 rounded-full -mb-16 -mr-16 blur-2xl"></div>
                                <h3 className="text-xl font-black mb-8 text-[#75CBB3] uppercase tracking-widest">Ficha Técnica</h3>
                                <div className="space-y-8">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black block mb-2">Escenario Biomecánico</span>
                                        <p className="font-bold text-lg">{system.scenario}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black block mb-2">Sensation Factor</span>
                                        <p className="font-bold text-lg">{system.sensation}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black block mb-2">Especificaciones</span>
                                        <p className="text-sm text-slate-300 leading-relaxed font-medium">{system.technicalSpecs}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black block mb-2">Calzado Recomendado</span>
                                        <p className="font-bold text-lg">{system.bestFootwear}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 relative group">

                                {/* Beneficios del Sistema */}
                                {system.beneficiosSistema && (
                                    <div className="border-t border-emerald-200 pt-6 mt-6">
                                        <h4 className="text-xs font-black text-[#013A57] uppercase tracking-widest mb-4">Beneficios del Sistema</h4>
                                        <div className="space-y-3">
                                            {[
                                                { key: 'mejoraPostura', label: 'Mejora de Postura / Alineamiento' },
                                                { key: 'absorcionImpacto', label: 'Absorción de Impacto en el Paso' },
                                                { key: 'anatomicaFlexible', label: 'Anatómica y Flexible' },
                                                { key: 'devolucionEnergia', label: 'Devolución de Energía' },
                                                { key: 'piesFrescosSecos', label: 'Pies Frescos y Secos' },
                                                { key: 'manejoPeso', label: 'Manejo de Peso / Resiliencia' },
                                                { key: 'protectorRodillaCadera', label: 'Protector de Rodilla y Cadera' },
                                                { key: 'rellenoEspacio', label: 'Ajuste al Calzado (Grosor)' }
                                            ].map(({ key, label }) => (
                                                <div key={key} className="flex items-center justify-between gap-4">
                                                    <span className="text-xs font-medium text-slate-600 flex-1">{label}</span>
                                                    <div className="flex gap-1">
                                                        {[1, 2, 3, 4, 5].map((dot) => (
                                                            <div
                                                                key={dot}
                                                                className={`w-2.5 h-2.5 rounded-full transition-all ${dot <= system.beneficiosSistema[key] ? 'bg-[#75CBB3]' : 'bg-slate-200'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <p className="mt-6 text-sm text-emerald-800 font-medium leading-relaxed italic border-t border-emerald-200 pt-6">"{system.idealIf}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddToCartModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={addToCart}
                system={system}
            />
        </>
    );
};
export default SystemDetailView;
