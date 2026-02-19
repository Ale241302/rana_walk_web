import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, Zap, RefreshCw, Beaker } from 'lucide-react';
import { techData } from '../data/ranaData';
import SectionHeader from '../components/common/SectionHeader';

const HomeView = ({ navigate }) => (
    <div className="animate-fadeIn">
        {/* Compliance: Rana Walk Design System v2.8 — Adecuado 2026-02-18 */}
        {/* Hero Principal */}
        <section className="relative h-[90vh] flex items-center bg-[#0F172A] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556103330-d5b932f7970a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 text-white pt-24 md:pt-0">
                <div className="max-w-4xl">
                    <h1 className="text-3xl md:text-6xl font-bold leading-[1.1] mb-4">
                        Dominamos el <span className="text-[#75CBB3]">impacto</span>.
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold leading-[1.1] mb-8 text-slate-300">
                        Validamos el movimiento.
                    </h2>
                    <p className="text-lg text-slate-400 mb-4 font-semibold">
                        Sistemas de bio-ingeniería podal diseñados para el mundo real.
                    </p>
                    <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-2xl">
                        No diseñamos accesorios; creamos sistemas validados bajo carga física real de hasta 110 kg y jornadas de +8 horas. Inspirados en la naturaleza y certificados en el Costa Rica MedTech Hub, el ecosistema de dispositivos médicos más avanzado de la región.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <button onClick={() => navigate('systems')} className="bg-[#75CBB3] text-[#013A57] px-8 py-4 rounded-full font-black uppercase tracking-wider hover:bg-[#066383] transition-all flex items-center justify-center gap-2">
                            Explorar Sistemas <ArrowRight className="w-5 h-5" />
                        </button>
                        <button onClick={() => navigate('consultor')} className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-black uppercase tracking-wider hover:bg-white/10 transition-all">
                            ¿Cuál es mi sistema? (Consultor IA)
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
                        <SectionHeader sub="El ADN de Rana Walk®" title="Nacemos donde la precisión de la bio-ingeniería converge" center={false} />
                        <div className="space-y-6 text-lg text-slate-600">
                            <p>
                                Nuestros pilares fundamentales garantizan que cada paso sea una evolución en bienestar y rendimiento:
                            </p>
                            <button onClick={() => navigate('tech')} className="flex items-center gap-2 text-[#013A57] font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                                Conoce nuestra ciencia <ChevronRight className="w-5 h-5 text-[#75CBB3]" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#013A57] transition-colors">
                            <ShieldCheck className="w-12 h-12 text-[#75CBB3] mb-4" />
                            <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Precisión Biomecánica</h4>
                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Tratamos cada plantilla con el rigor de un dispositivo médico de exportación, probadas en condiciones de carga física extrema.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#013A57] transition-colors">
                            <Zap className="w-12 h-12 text-[#75CBB3] mb-4" />
                            <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Bio-mimetismo Evolutivo</h4>
                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Emulamos los mecanismos de supervivencia de la naturaleza, desde la resiliencia de la megafauna hasta la agilidad de los felinos.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#013A57] transition-colors">
                            <RefreshCw className="w-12 h-12 text-[#75CBB3] mb-4" />
                            <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Integridad Estructural</h4>
                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Honestidad en los materiales. Utilizamos Poliuretano (PU) de bi-densidad y vinilos de alta tenacidad que no ceden ante la fatiga.</p>
                        </div>
                        <div className="bg-[#e6fffb] p-8 rounded-3xl border border-[#75CBB3]/30 flex flex-col items-center text-center group hover:bg-[#013A57] transition-colors">
                            <Beaker className="w-12 h-12 text-[#013A57] group-hover:text-[#75CBB3] mb-4 transition-colors" />
                            <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Innovación con Propósito</h4>
                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Tecnologías como NanoSpread™ y ThinBoom™ diseñadas para reducir la fatiga y optimizar tu energía.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Sección · Tecnologías (preview) */}
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <SectionHeader sub="Ingeniería inspirada en la vida" title="Ecosistema Tecnológico" dark />
                <p className="text-center text-slate-400 max-w-3xl mx-auto mb-12 -mt-6">
                    Cada componente de nuestro ecosistema emula una función biológica específica para proteger tu biomecánica.
                </p>
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


        {/* Hub de Dispositivos y Validación */}
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <SectionHeader sub="Hub de Dispositivos y Validación" title="Probado en el laboratorio. Validado en el campo." />
                    <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                        En el Costa Rica MedTech Hub, no simulamos el movimiento; lo dominamos. Nuestros sistemas están diseñados para profesionales que enfrentan superficies duras y jornadas extensas:
                    </p>
                    {/* Tabla de Tecnologías */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                        <table className="w-full">
                            <thead className="bg-[#013A57] text-white">
                                <tr>
                                    <th className="px-6 py-4 text-center font-black uppercase text-xs tracking-widest">Tecnología</th>
                                    <th className="px-6 py-4 text-center font-black uppercase text-xs tracking-widest">Modelo Biológico</th>
                                    <th className="px-6 py-4 text-center font-black uppercase text-xs tracking-widest">Beneficio Biomecánico</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-[#013A57] text-center">Goliath</td>
                                    <td className="px-6 py-5 text-slate-600 text-center">Elefante / Megafauna</td>
                                    <td className="px-6 py-5 text-slate-500 text-sm text-center">Soporte masivo que no colapsa ante el peso extremo.</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-[#013A57] text-center">Velox</td>
                                    <td className="px-6 py-5 text-slate-600 text-center">Felino / Tendón</td>
                                    <td className="px-6 py-5 text-slate-500 text-sm text-center">Agilidad reactiva y retorno de energía explosivo.</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-[#013A57] text-center">Leopard</td>
                                    <td className="px-6 py-5 text-slate-600 text-center">Almohadilla Adaptable</td>
                                    <td className="px-6 py-5 text-slate-500 text-sm text-center">Flexibilidad dinámica y suspensión inteligente.</td>
                                </tr>
                            </tbody>
                        </table>
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
