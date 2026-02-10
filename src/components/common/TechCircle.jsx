import React, { useState } from 'react';
import { Activity, Zap, Wind, Shield, Layers, ArrowRight } from 'lucide-react';

const TechCircle = () => {
    const [activeTech, setActiveTech] = useState(0);

    const technologies = [
        {
            id: 0,
            name: "LeapCore™",
            icon: <Layers className="w-8 h-8" />,
            color: "text-blue-500",
            bg: "bg-blue-500",
            model: "Elefante / Megafauna",
            benefit: "Soporte Estructural Masivo",
            desc: "Imita la estructura ósea de la megafauna para soportar grandes cargas sin deformación.",
            detail: "Soporte hasta 110kg"
        },
        {
            id: 1,
            name: "ThinBoom™",
            icon: <Zap className="w-8 h-8" />,
            color: "text-yellow-500",
            bg: "bg-yellow-500",
            model: "Tendón de Felino",
            benefit: "Retorno de Energía",
            desc: "Reproduce la elasticidad del tendón de Aquiles para devolver energía en cada paso.",
            detail: "+80% Retorno"
        },
        {
            id: 2,
            name: "NanoSpread™",
            icon: <Wind className="w-8 h-8" />,
            color: "text-cyan-500",
            bg: "bg-cyan-500",
            model: "Piel de Reptil",
            benefit: "Termorregulación",
            desc: "Canales capilares que disipan el calor y la humedad eficientemente.",
            detail: "-5°C Temperatura"
        },
        {
            id: 3,
            name: "ShockSphere™",
            icon: <Shield className="w-8 h-8" />,
            color: "text-purple-500",
            bg: "bg-purple-500",
            model: "Pájaro Carpintero",
            benefit: "Protección de Impacto",
            desc: "Disipación de ondas de choque para proteger articulaciones y cerebro.",
            detail: "90% Absorción"
        },
        {
            id: 4,
            name: "Arch System",
            icon: <Activity className="w-8 h-8" />,
            color: "text-[#75CBB3]",
            bg: "bg-[#75CBB3]",
            model: "Arco Humano",
            benefit: "Estabilidad Dinámica",
            desc: "Soporte adaptable que mantiene la alineación correcta del pie durante la fatiga.",
            detail: "Alineación Total"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Ambience */}
            <div className={`absolute inset-0 opacity-10 transition-colors duration-700 ${technologies[activeTech].bg}`}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Info Display */}
                    <div className="order-2 lg:order-1 space-y-8 animate-fadeIn">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                            <span className={`w-2 h-2 rounded-full ${technologies[activeTech].bg}`}></span>
                            <span className="text-xs font-bold uppercase tracking-widest">{technologies[activeTech].model}</span>
                        </div>

                        <div>
                            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-none">
                                {technologies[activeTech].name}
                            </h2>
                            <h3 className={`text-2xl font-bold ${technologies[activeTech].color} mb-6`}>
                                {technologies[activeTech].benefit}
                            </h3>
                            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                                {technologies[activeTech].desc}
                            </p>
                        </div>

                        <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-3xl font-black mb-1">{technologies[activeTech].detail.split(' ')[0]}</div>
                                <div className="text-[10px] uppercase tracking-widest text-slate-400">{technologies[activeTech].detail.split(' ').slice(1).join(' ')}</div>
                            </div>
                            <button className="ml-auto w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Circular Interactive Menu */}
                    <div className="order-1 lg:order-2 flex justify-center py-10">
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">

                            {/* Central Hub */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-800 border-4 border-slate-700 flex flex-col items-center justify-center z-10 shadow-2xl relative overflow-hidden">
                                    <div className={`absolute inset-0 opacity-20 ${technologies[activeTech].bg} blur-xl transition-colors duration-500`}></div>
                                    <span className="font-black text-2xl tracking-tighter relative z-10">RANA</span>
                                    <span className="text-[#75CBB3] text-sm font-bold uppercase tracking-widest relative z-10">WALK</span>
                                </div>
                            </div>

                            {/* Orbiting Icons */}
                            {technologies.map((tech, index) => {
                                // Calculate position on circle
                                const angle = (index * (360 / technologies.length)) - 90; // -90 to start top
                                const radius = 160; // radius in px (md)
                                const x = radius * Math.cos(angle * (Math.PI / 180));
                                const y = radius * Math.sin(angle * (Math.PI / 180));

                                const isActive = activeTech === index;

                                return (
                                    <button
                                        key={tech.id}
                                        onClick={() => setActiveTech(index)}
                                        onMouseEnter={() => setActiveTech(index)}
                                        className={`absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-20
                                            ${isActive
                                                ? `bg-white ${tech.color} border-white shadow-[0_0_30px_rgba(255,255,255,0.3)] scale-125`
                                                : 'bg-slate-800 border-slate-700 text-slate-500 hover:bg-slate-700 hover:text-white'
                                            }`}
                                        style={{
                                            transform: `translate(${x}px, ${y}px) ${isActive ? 'scale(1.2)' : 'scale(1)'}`
                                        }}
                                    >
                                        {tech.icon}
                                    </button>
                                );
                            })}

                            {/* Orbit Lines */}
                            <div className="absolute inset-0 rounded-full border border-dashed border-white/5 pointer-events-none scale-[0.7]"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechCircle;
