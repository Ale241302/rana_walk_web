import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, Zap, RefreshCw, Beaker } from 'lucide-react';
import { techData } from '../data/ranaData';
import SectionHeader from '../components/common/SectionHeader';

const HomeView = ({ navigate }) => (
    <div className="animate-fadeIn">
        {/* Hero Principal */}
        <section className="relative h-[90vh] flex items-center bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556103330-d5b932f7970a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 text-white pt-24 md:pt-0">
                <div className="max-w-4xl">
                    <h1 className="text-3xl md:text-6xl font-bold leading-[1.1] mb-8">
                        Sistemas de bio-mimetismo podal: diseñados para dominar el <span className="text-[#75CBB3]">impacto y la carga</span> en jornadas exigentes.
                    </h1>
                    <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-2xl">
                        Rana Walk® desarrolla soluciones de bio-mimetismo podal inspiradas en la eficiencia de la naturaleza y diseñadas en el Life Sciences Hub de las Américas en Costa Rica. Name it, leap forward.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <button onClick={() => navigate('systems')} className="bg-[#75CBB3] text-[#013A57] px-8 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-[#066383] transition-all flex items-center justify-center gap-2">
                            Explorar sistemas <ArrowRight className="w-5 h-5" />
                        </button>
                        <button onClick={() => navigate('consultor')} className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-white/10 transition-all">
                            ¿Cuál es mi sistema?
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Sección · Propuesta de Valor */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <SectionHeader sub="Bio-mimetismo aplicado a la base de tu bienestar" title="Nacemos donde la precisión de la bio-ingeniería converge" center={false} />
                        <div className="space-y-6 text-lg text-slate-600">
                            <p>
                                Nacemos en el territorio con la mayor densidad biológica del planeta. Mientras que las plantillas genéricas ofrecen una suavidad inicial que colapsa rápidamente, perdiendo soporte y estabilidad tras pocas semanas de uso, Rana Walk® emula los mecanismos de supervivencia de la naturaleza.
                            </p>
                            <div className="p-8 bg-slate-50 border-l-4 border-[#75CBB3] rounded-r-xl">
                                <p className="font-bold text-[#013A57]">
                                    Ofrecemos soporte estructural estable, protección reactiva ante impactos y un retorno de energía constante diseñado para durar en el mundo real.
                                </p>
                            </div>
                            <p>
                                Esto es posible porque no diseñamos capas aisladas, sino un ecosistema de tecnologías que trabajan como un sistema interconectado.
                            </p>
                            <button onClick={() => navigate('tech')} className="flex items-center gap-2 text-[#013A57] font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                                Conoce nuestra ciencia <ChevronRight className="w-5 h-5 text-[#75CBB3]" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#013A57] transition-colors">
                            <ShieldCheck className="w-12 h-12 text-[#75CBB3] mb-4" />
                            <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Resiliencia</h4>
                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Soporte óseo que no colapsa.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#013A57] transition-colors">
                            <Zap className="w-12 h-12 text-[#75CBB3] mb-4" />
                            <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Reacción</h4>
                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Protección instantánea certificada.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#013A57] transition-colors">
                            <RefreshCw className="w-12 h-12 text-[#75CBB3] mb-4" />
                            <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Retorno</h4>
                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Tendón elástico reactivo.</p>
                        </div>
                        <div className="bg-[#e6fffb] p-8 rounded-3xl border border-[#75CBB3]/30 flex flex-col items-center text-center group hover:bg-[#013A57] transition-colors">
                            <Beaker className="w-12 h-12 text-[#013A57] group-hover:text-[#75CBB3] mb-4 transition-colors" />
                            <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Ciencia</h4>
                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Life Sciences Hub CR.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Sección · Tecnologías (preview) */}
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <SectionHeader sub="Tecnologías que emulan una función real" title="El Ecosistema Tecnológico" dark />
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {techData.map(t => (
                        <div
                            key={t.id}
                            onClick={() => navigate('techDetail', t.id)}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group flex flex-col items-center text-center"
                        >
                            <div className="text-[#75CBB3] mb-4 group-hover:scale-110 transition-transform">{t.icon}</div>
                            <h4 className="font-black text-sm mb-2">{t.name}</h4>
                            <p className="text-[10px] text-slate-400 leading-tight uppercase tracking-widest">{t.bioFunction}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <button onClick={() => navigate('tech')} className="bg-transparent border-2 border-[#75CBB3] text-[#75CBB3] px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#75CBB3] hover:text-[#013A57] transition-all">
                        Conoce nuestras tecnologías →
                    </button>
                </div>
            </div>
        </section>

        {/* El Laboratorio del Mundo Real */}
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader sub="Life Sciences Hub" title="Diseñado en el Hub de Dispositivos Médicos" />
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Nuestra ciencia no se limita a simulaciones. Se valida en jornadas de +12 horas y bajo carga física real en las condiciones más exigentes de Costa Rica. Aprovechamos uno de los ecosistemas más avanzados en manufactura de dispositivos médicos a nivel global.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="font-black text-[#013A57] mb-2 uppercase text-xs tracking-widest">Protección Reactiva</h4>
                            <p className="text-sm text-slate-500">Emulamos los cojinetes de la rana que se endurecen ante el impacto absoluto.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="font-black text-[#013A57] mb-2 uppercase text-xs tracking-widest">Homeostasis Térmica</h4>
                            <p className="text-sm text-slate-500">Capilaridad reptiliana para gestionar la saturación térmica en el calzado.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="font-black text-[#013A57] mb-2 uppercase text-xs tracking-widest">Resiliencia Ósea</h4>
                            <p className="text-sm text-slate-500">Chasis LeapCore™ que mantiene la altura donde las espumas genéricas colapsan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
export default HomeView;
