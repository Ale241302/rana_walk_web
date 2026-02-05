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
                        Rana Walk® desarrolla soluciones de bio-mimetismo podal inspiradas en la eficiencia de la naturaleza y diseñadas en el Costa Rica MedTech Hub. Name it, leap forward.
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
                                Nacemos en el territory con la mayor densidad biográfica del planeta. Mientras que las plantillas genéricas ofrecen una suavidad inicial que colapsa rápidamente, perdiendo soporte y estabilidad tras pocas semanas de uso, Rana Walk® emula los mecanismos de supervivencia de la naturaleza.
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
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {techData.map(t => (
                        <div
                            key={t.id}
                            onClick={() => navigate('techDetail', t.id)}
                            className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:-translate-y-3 hover:border-[#75CBB3]/50 hover:shadow-[0_20px_60px_rgba(117,203,179,0.25)] transition-all duration-500 cursor-pointer group flex flex-col items-center text-center overflow-hidden"
                        >
                            {/* Efecto de brillo superior */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#75CBB3]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Glow effect detrás del icono */}
                            <div className="absolute top-8 w-24 h-24 bg-[#75CBB3]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icono con más tamaño */}
                            <div className="relative text-[#75CBB3] mb-6 group-hover:scale-110 transition-transform duration-500">
                                {t.icon}
                            </div>
                            {/* Título con mejor espaciado */}
                            <h4 className="font-black text-base mb-3 group-hover:text-[#75CBB3] transition-colors duration-300">
                                {t.name}
                            </h4>
                            {/* Badge opcional "Premium" o "Patented" */}
                            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#75CBB3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Responsabilidad Corporativa */}
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <SectionHeader sub="COMPROMISO BIO-ÉTICO" title="Responsabilidad que emula el equilibrio" center={false} />
                        <div className="space-y-6 text-slate-600">
                            <p>En Rana Walk®, entendemos que la innovación no debe comprometer el entorno que la inspira. Nuestro compromiso con la sostenibilidad biológica guía cada decisión de manufactura.</p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#75CBB3]/20 flex items-center justify-center shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-[#75CBB3]"></div>
                                    </div>
                                    <p className="text-sm"><strong>Materiales de Larga Duración:</strong> Reducimos el desperdicio creando sistemas que duran 3x más que las plantillas convencionales.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#75CBB3]/20 flex items-center justify-center shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-[#75CBB3]"></div>
                                    </div>
                                    <p className="text-sm"><strong>Manufactura Local:</strong> Centralizamos la producción en Costa Rica para minimizar la huella de carbono logística.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8a98039f5?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
                        <div className="relative z-10 text-center">
                            <p className="text-[#75CBB3] text-5xl font-black mb-4">100%</p>
                            <p className="text-white font-black uppercase tracking-widest text-xs">Compromiso con la<br />Regeneración Biológica</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonios */}
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionHeader sub="VOCES DE LA INDUSTRIA" title="Validación en el Terreno Real" />
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Carlos M.", role: "Ingeniero Industrial", text: "Goliath cambió mi jornada. Paso 12 horas en concreto y el soporte al final del día sigue siendo el mismo que al inicio." },
                        { name: "Elena R.", role: "Especialista en Salud", text: "La arquitectura ThinBoom en los Velox es lo más cercano que he visto a la respuesta elástica natural del pie." },
                        { name: "Juan P.", role: "Operador Logístico", text: "He probado todo tipo de gel. Nada se compara con la estabilidad de LeapCore. Mis rodillas lo agradecen." }
                    ].map((t, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 text-[#75CBB3] font-black">★</div>)}
                            </div>
                            <p className="text-slate-600 italic mb-8">"{t.text}"</p>
                            <div>
                                <p className="font-black text-[#013A57] uppercase text-xs tracking-widest">{t.name}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default HomeView;
