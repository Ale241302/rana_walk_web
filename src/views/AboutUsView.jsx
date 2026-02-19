import React from 'react';
import { Globe } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

const AboutUsView = () => (
    <div className="animate-fadeIn">
        {/* Compliance: Rana Walk Design System v2.8 — Adecuado 2026-02-18 */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Nuestra Génesis */}
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <SectionHeader sub="NOSOTROS" title="Ingeniería Inspirada en la Vida" />
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Ingeniería inspirada en el laboratorio más eficiente del mundo: <strong className="text-[#013A57]">La Naturaleza.</strong>
                    </p>
                    <p className="text-lg text-slate-500 leading-relaxed mt-6">
                        Rana Walk® no nació en una oficina convencional; nació de la observación técnica de la resiliencia biológica. En el Costa Rica MedTech Hub, transformamos los principios de supervivencia de la naturaleza en arquitectura funcional de grado médico para el calzado. No inventamos soluciones desde cero; optimizamos el bienestar humano emulando mecanismos biológicos que han sido perfeccionados durante millones de años.
                    </p>
                </div>

                {/* Nuestra Historia */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h3 className="text-3xl font-black text-[#013A57] mb-6 uppercase tracking-tight">Nuestra Historia</h3>
                        <div className="space-y-6 text-slate-600 text-lg">
                            <p>
                                Fundada en el epicentro de un ecosistema que custodia el <strong className="text-[#013A57]">6% de la biodiversidad mundial</strong>, Rana Walk® se propuso resolver el colapso estructural del calzado convencional.
                            </p>
                            <p>
                                Entendemos que la naturaleza ha resuelto los retos de carga y eficiencia mucho antes que la industria. Por ello, emulamos la estructura de la megafauna para crear chasis que no colapsan y la eficiencia elástica de los felinos para potenciar el retorno de energía.
                            </p>
                            <p className="text-[#013A57] font-bold">
                                Somos la convergencia única donde la inspiración biológica se fabrica con la precisión de la ingeniería médica de exportación.
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-3xl aspect-video overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1549400854-3413da1176bc?auto=format&fit=crop&q=80&w=1000" alt="Bio-mimetismo" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>

        {/* DNA RANA WALK - Estilo Beneficios Biomecánicos */}
        <div className="bg-slate-50 py-24 border-t border-slate-100">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-[#e6fffb] rounded-full text-[#013A57] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#75CBB3]/20">
                        DNA Rana Walk
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#013A57] mb-6 leading-tight">
                        Nuestros <span className="text-[#75CBB3]">Valores</span>
                    </h2>
                    <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed">
                        Los pilares que definen nuestra <strong className="text-[#013A57]">ingeniería biomimética</strong> y compromiso con tu bienestar.
                    </p>
                </div>

                {/* Highlight principal */}
                <div className="bg-[#013A57] text-white p-10 md:p-14 rounded-[2.5rem] mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#75CBB3]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#75CBB3]/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                            Nuestro origen está en el <span className="text-[#75CBB3]">Costa Rica MedTech Hub</span>
                        </h3>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Uno de los ecosistemas de dispositivos médicos más avanzados del mundo.
                            Creamos sistemas validados bajo carga física real y respaldados por investigación científica.
                        </p>
                    </div>
                </div>

                {/* Grid de valores - Estilo Beneficios Biomecánicos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {[
                        {
                            num: "01",
                            title: "Precisión Biomecánica",
                            subtitle: "Ingeniería de Grado Médico",
                            description: "Creamos sistemas validados bajo carga física real de hasta 110 kg (220 lbs) y jornadas de +8 horas."
                        },
                        {
                            num: "02",
                            title: "Bio-mimetismo Evolutivo",
                            subtitle: "Millones de años de evolución",
                            description: "Desde la resiliencia de la megafauna hasta la agilidad de los felinos, inyectamos inteligencia biológica en cada sistema."
                        },
                        {
                            num: "03",
                            title: "Resiliencia Inquebrantable",
                            subtitle: "Durabilidad Real",
                            description: "Nuestros sistemas —como LeapCore™ y el Arch System— están diseñados para resistir el colapso mecánico y no degradarse."
                        },
                        {
                            num: "04",
                            title: "Innovación con Propósito",
                            subtitle: "Beneficio biomecánico directo",
                            description: "Cada tecnología reduce la fatiga, protege las articulaciones y optimiza el aprovechamiento de la energía cinética."
                        },
                        {
                            num: "05",
                            title: "Integridad Estructural",
                            subtitle: "Honestidad en los materiales",
                            description: "Utilizamos LeapCore™ de bi-densidad y el Arch System de alta tenacidad porque el soporte verdadero no cede ante la fatiga extrema."
                        }
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#75CBB3]/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                        >
                            {/* Número decorativo */}
                            <span className="absolute top-4 right-4 text-6xl font-black text-slate-100 group-hover:text-[#e6fffb] transition-colors duration-300">
                                {value.num}
                            </span>

                            {/* Barra de acento */}
                            <div className="w-12 h-1 bg-[#75CBB3] rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>

                            <h3 className="text-xl font-black text-[#013A57] mb-2 relative z-10 group-hover:text-[#013A57] transition-colors">
                                {value.title}
                            </h3>
                            <span className="text-[#75CBB3] text-xs font-bold uppercase tracking-[0.15em] block mb-4">
                                {value.subtitle}
                            </span>
                            <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer de la sección */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm">
                        <span className="w-2 h-2 bg-[#75CBB3] rounded-full animate-pulse"></span>
                        <span className="text-slate-600 text-sm font-medium">
                            Rechazamos la cultura de lo desechable
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Presencia Global */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-[#013A57] to-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#75CBB3]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#75CBB3]/20 rounded-full mb-8">
                            <Globe className="w-8 h-8 text-[#75CBB3]" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black mb-4">Presencia Global</h3>
                        <p className="text-[#75CBB3] font-bold text-lg mb-6">Ingeniería y R&D desde el Costa Rica MedTech Hub.</p>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Desarrollamos tecnología de vanguardia desde el corazón de Centroamérica para impactar la salud biomecánica en los mercados de <strong className="text-white">USA, Europa, Brasil, Latam y el resto del Mundo.</strong>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-10">
                            {['USA', 'Europa', 'Brasil', 'Latam', 'Global'].map((region) => (
                                <span key={region} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                                    {region}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default AboutUsView;
