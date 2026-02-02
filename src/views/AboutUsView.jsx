import React from 'react';
import { Target, Eye, Shield, Users } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

const AboutUsView = () => (
    <div className="animate-fadeIn">
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <SectionHeader sub="NUESTRA GÉNESIS" title="Ingeniería inspirada en el Laboratorio más grande del mundo: La Naturaleza" />
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Rana Walk® no nació en una oficina, sino en la observación de la resiliencia biológica. En el Life Sciences Hub de Costa Rica, transformamos los principios de supervivencia de la naturaleza en arquitectura funcional para el calzado.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h3 className="text-3xl font-black text-[#013A57] mb-6 uppercase tracking-tight">Nuestra Historia</h3>
                        <div className="space-y-6 text-slate-600 text-lg">
                            <p>
                                Fundada en el corazón de un ecosistema que alberga el 6% de la biodiversidad mundial, Rana Walk® se propuso resolver el colapso estructural del calzado convencional.
                            </p>
                            <p>
                                Observamos cómo las especies biomiméticas gestionan el impacto y la carga sin perder eficiencia. Esa misma "inteligencia de diseño" es la que inyectamos en cada chasis LeapCore™ y sistema ThinBoom™.
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-3xl aspect-video overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1549400854-3413da1176bc?auto=format&fit=crop&q=80&w=1000" alt="Bio-mimetismo" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-24">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-[#013A57] transition-all">
                        <Target className="w-12 h-12 text-[#75CBB3] mb-6" />
                        <h4 className="text-xl font-black text-[#013A57] group-hover:text-white mb-4 uppercase tracking-wider">Misión</h4>
                        <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed">
                            Proveer sistemas de soporte estructural que emulen la perfección biológica para optimizar el bienestar humano en entornos exigentes.
                        </p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-[#013A57] transition-all">
                        <Eye className="w-12 h-12 text-[#75CBB3] mb-6" />
                        <h4 className="text-xl font-black text-[#013A57] group-hover:text-white mb-4 uppercase tracking-wider">Visión</h4>
                        <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed">
                            Ser el estándar global de bio-ingeniería podal, donde cada paso esté respaldado por ciencia validada y diseño biomimético.
                        </p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-[#013A57] transition-all">
                        <Shield className="w-12 h-12 text-[#75CBB3] mb-6" />
                        <h4 className="text-xl font-black text-[#013A57] group-hover:text-white mb-4 uppercase tracking-wider">Valores</h4>
                        <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed">
                            Precisión científica, resiliencia biológica, integridad industrial y un compromiso inamovible con la salud funcional.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#75CBB3]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="relative z-10">
                        <SectionHeader sub="DNA RANA WALK" title="Nuestros Valores Clave" dark center={false} />
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
                            {[
                                { title: "Resiliencia Total", desc: "Sistemas que no colapsan bajo carga continua." },
                                { title: "Bio-Mimetismo", desc: "Emulamos la amortiguación reactiva de la naturaleza." },
                                { title: "Ciencia Validada", desc: "Desarrollo en el Life Sciences Hub de Costa Rica." },
                                { title: "Diseño Funcional", desc: "Estética industrial que potencia el rendimiento." }
                            ].map((v, idx) => (
                                <div key={idx} className="border-l-2 border-[#75CBB3] pl-6">
                                    <h5 className="font-black text-[#75CBB3] uppercase tracking-widest text-sm mb-2">{v.title}</h5>
                                    <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default AboutUsView;
