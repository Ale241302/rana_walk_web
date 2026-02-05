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

                            <div className="space-y-3 mb-8 pt-6 border-t border-slate-50">
                                {s.beneficiosSistema && (
                                    <>
                                        <h4 className="text-[10px] font-black text-[#013A57] uppercase tracking-[0.15em] mb-2">Beneficios del Sistema</h4>
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
                                            <div key={key} className="flex items-center justify-between gap-2">
                                                <span className="text-[9px] font-medium text-slate-500 flex-1">{label}</span>
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4, 5].map((dot) => (
                                                        <div
                                                            key={dot}
                                                            className={`w-1.5 h-1.5 rounded-full transition-all ${dot <= s.beneficiosSistema[key] ? 'bg-[#75CBB3]' : 'bg-slate-200'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
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

        {/* Sección de Beneficios Biomecánicos */}
        <div className="bg-slate-50 py-24 mt-20 border-t border-slate-100">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-[#e6fffb] rounded-full text-[#013A57] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#75CBB3]/20">
                        Narrativa de Bienestar
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#013A57] mb-6 leading-tight">
                        Los 8 Beneficios <span className="text-[#75CBB3]">Biomecánicos</span>
                    </h2>
                    <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed">
                        Cada paso que das impacta tu cuerpo. Descubre cómo <strong className="text-[#013A57]">Rana Walk®</strong> transforma ese impacto en bienestar real y medible.
                    </p>
                </div>

                {/* Highlight principal */}
                <div className="bg-[#013A57] text-white p-10 md:p-14 rounded-[2.5rem] mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#75CBB3]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#75CBB3]/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                            La ciencia del <span className="text-[#75CBB3]">movimiento saludable</span>
                        </h3>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Nuestro sistema está diseñado para abordar los 8 pilares fundamentales de la salud biomecánica.
                            Cada beneficio está respaldado por investigación científica y validado por especialistas en podología y fisioterapia.
                        </p>
                    </div>
                </div>

                {/* Grid de beneficios */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[
                        {
                            num: "01",
                            title: "Alineamiento Corporal",
                            subtitle: "Mejora de Postura",
                            description: "Pies rectos para una columna sin dolor. La base correcta garantiza que cada articulación trabaje en su ángulo óptimo, previniendo descompensaciones y dolores crónicos."
                        },
                        {
                            num: "02",
                            title: "Absorción de Impacto",
                            subtitle: "Protección Activa",
                            description: "Disipación radial que elimina el 'golpe seco'. Cada paso genera hasta 3 veces tu peso corporal; nuestra tecnología dispersa esa energía para proteger tus articulaciones."
                        },
                        {
                            num: "03",
                            title: "Anatómica y Flexible",
                            subtitle: "Movimiento Natural",
                            description: "Soporte activo que permite que el pie trabaje sin enyesarlo. Diseño que respeta la biomecánica natural del pie, potenciando su función sin restringirla."
                        },
                        {
                            num: "04",
                            title: "Devolución de Energía",
                            subtitle: "Efecto Impulso",
                            description: "El efecto impulso que te mantiene ágil más tiempo. Materiales inteligentes que almacenan y devuelven energía en cada fase de la marcha, reduciendo la fatiga."
                        },
                        {
                            num: "05",
                            title: "Pies Frescos y Secos",
                            subtitle: "Control Térmico",
                            description: "Control térmico que evita hinchazón y ampollas. Sistema de ventilación y materiales transpirables que mantienen el microclima ideal durante todo el día."
                        },
                        {
                            num: "06",
                            title: "Manejo de Peso",
                            subtitle: "Resiliencia +110kg",
                            description: "Materiales que no se aplastan tras 12 horas. Espumas de alta densidad y estructura optimizada que mantienen su rendimiento incluso bajo cargas extremas."
                        },
                        {
                            num: "07",
                            title: "Protector Articular",
                            subtitle: "Rodilla y Cadera",
                            description: "Un escudo real contra el desgaste articular. Reducción comprobada del estrés en rodillas y caderas, extendiendo la vida útil de tus articulaciones."
                        },
                        {
                            num: "08",
                            title: "Ajuste al Calzado",
                            subtitle: "Grosor Ideal",
                            description: "Desde ultra-delgada hasta máximo relleno. Cada sistema tiene un grosor específico: VELOX para calzado ajustado, ORBIS y LEOPARD para espacio normal, y GOLIATH para zapatos amplios."
                        }
                    ].map((benefit, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#75CBB3]/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ${index === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-1' : ''}`}
                        >
                            {/* Número decorativo */}
                            <span className="absolute top-4 right-4 text-6xl font-black text-slate-100 group-hover:text-[#e6fffb] transition-colors duration-300">
                                {benefit.num}
                            </span>

                            {/* Barra de acento */}
                            <div className="w-12 h-1 bg-[#75CBB3] rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>

                            <h3 className="text-xl font-black text-[#013A57] mb-2 relative z-10 group-hover:text-[#013A57] transition-colors">
                                {benefit.title}
                            </h3>
                            <span className="text-[#75CBB3] text-xs font-bold uppercase tracking-[0.15em] block mb-4">
                                {benefit.subtitle}
                            </span>
                            <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer de la sección */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm">
                        <span className="w-2 h-2 bg-[#75CBB3] rounded-full animate-pulse"></span>
                        <span className="text-slate-600 text-sm font-medium">
                            Tecnología biomimética respaldada por investigación científica
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default SystemsCatalogView;
