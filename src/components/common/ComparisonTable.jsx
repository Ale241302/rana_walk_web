import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
    const rows = [
        {
            variable: "Soporte de Arco",
            standard: "Gel blando que cede",
            rana: "Arch System inquebrantable",
            highlight: true
        },
        {
            variable: "Resiliencia",
            standard: "Se aplasta en semanas",
            rana: "PU de bi-densidad con memoria",
        },
        {
            variable: "Potencia de Paso",
            standard: "Absorción pasiva",
            rana: "Retorno de energía activo (ThinBoom™)",
        },
        {
            variable: "Origen",
            standard: "Manufactura masiva",
            rana: "Ingeniería Médica (MedTech Hub)",
            highlight: true
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-black text-3xl md:text-5xl text-[#013A57] mb-4">
                        Rana Walk <span className="text-slate-300">vs</span> Estándar
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        La diferencia entre un accesorio de confort y un equipo de protección biomecánica.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="grid grid-cols-12 bg-[#013A57] text-white py-6 px-4 md:px-8">
                        <div className="col-span-4 font-bold uppercase tracking-widest text-xs opacity-70 flex items-center">Variable</div>
                        <div className="col-span-4 text-center font-bold uppercase tracking-widest text-xs opacity-70">Convencional</div>
                        <div className="col-span-4 text-center font-black uppercase tracking-widest text-xs text-[#75CBB3] flex items-center justify-center gap-2">
                            Rana Walk <Check className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {rows.map((row, idx) => (
                            <div key={idx} className={`grid grid-cols-12 py-6 px-4 md:px-8 items-center ${row.highlight ? 'bg-[#f0fdf9]' : 'hover:bg-slate-50'} transition-colors`}>
                                <div className="col-span-4 font-bold text-[#013A57] text-sm md:text-base">
                                    {row.variable}
                                </div>

                                <div className="col-span-4 flex flex-col items-center text-center px-2">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mb-2">
                                        <X className="w-4 h-4 text-red-500" />
                                    </div>
                                    <span className="text-xs md:text-sm text-slate-500 font-medium leading-tight">
                                        {row.standard}
                                    </span>
                                </div>

                                <div className="col-span-4 flex flex-col items-center text-center px-2 relative">
                                    {row.highlight && (
                                        <div className="absolute inset-y-0 -left-2 -right-2 bg-[#75CBB3]/5 -z-10 rounded hidden md:block"></div>
                                    )}
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mb-2 shadow-sm">
                                        <Check className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="text-xs md:text-sm text-[#013A57] font-bold leading-tight">
                                        {row.rana}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                        Datos validados en pruebas de carga cíclica - Life Sciences Hub, CR.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
