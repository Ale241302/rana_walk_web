import React, { useState } from 'react';
import { Layers, Zap, Thermometer, Shield } from 'lucide-react';

const BioEcosystem = () => {
    const [activePoint, setActivePoint] = useState(null);

    const points = [
        {
            id: 1,
            name: "Base de Soporte",
            tech: "LeapCore™ + Arch System",
            desc: "Armazón estructural que soporta hasta 110kg sin colapsar.",
            icon: <Layers className="w-5 h-5" />,
            position: "top-[70%] left-[20%]"
        },
        {
            id: 2,
            name: "Zona de Impacto",
            tech: "PORON® XRD®",
            desc: "Absorbe el 90% del impacto seco contra el concreto.",
            icon: <Shield className="w-5 h-5" />,
            position: "top-[85%] left-[50%]"
        },
        {
            id: 3,
            name: "Tendón Reactivo",
            tech: "ThinBoom™",
            desc: "Devuelve hasta el 80% de la energía en cada paso.",
            icon: <Zap className="w-5 h-5" />,
            position: "top-[40%] right-[25%]"
        },
        {
            id: 4,
            name: "Superficie Térmica",
            tech: "NanoSpread™",
            desc: "Regula temperatura en 5°C mediante capilaridad.",
            icon: <Thermometer className="w-5 h-5" />,
            position: "top-[20%] left-[40%]"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#75CBB3]/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#013A57]/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[#75CBB3] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                        Ingeniería de Producto
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black text-[#013A57] mb-6 leading-tight">
                        Ecosistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#013A57] to-[#75CBB3]">Biomecánico</span>
                    </h3>
                    <p className="text-slate-600 text-lg">
                        Una sinfonía de materiales avanzados trabajando en conjunto para proteger tu estructura ósea.
                    </p>
                </div>

                {/* Central "Exploded" View Container */}
                <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center p-8 md:p-12">

                    {/* Placeholder for Product Image */}
                    <div className="relative w-full h-full flex items-center justify-center group">
                        {/* This represents the shoe/insole image area */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <span className="text-9xl font-black text-slate-900 tracking-tighter uppercase select-none">GOLIATH</span>
                        </div>

                        {/* Visual Representation of Layers (abstract) */}
                        <div className="relative z-10 w-full max-w-lg h-40 md:h-60 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full rotate-[-5deg] transform transition-transform duration-700 hover:rotate-0 shadow-inner border border-white">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">[Render 3D: Plantilla en Capas]</p>
                            </div>
                        </div>

                        {/* Interactive Points */}
                        {points.map((p) => (
                            <div
                                key={p.id}
                                className={`absolute ${p.position} z-20 group/point`}
                                onMouseEnter={() => setActivePoint(p.id)}
                                onMouseLeave={() => setActivePoint(null)}
                            >
                                {/* Pulse Effect */}
                                <div className="absolute inset-0 bg-[#75CBB3] rounded-full animate-ping opacity-75"></div>
                                <div className="relative bg-[#013A57] text-white p-3 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform border-2 border-white">
                                    {p.icon}
                                </div>

                                {/* Call-out Card */}
                                <div className={`absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-white p-4 rounded-xl shadow-xl border-l-4 border-[#75CBB3] transition-all duration-300 pointer-events-none z-30 ${activePoint === p.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    <h4 className="font-bold text-[#013A57] text-sm uppercase mb-1">{p.name}</h4>
                                    <div className="text-[#75CBB3] text-xs font-black uppercase tracking-wider mb-2">{p.tech}</div>
                                    <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BioEcosystem;
