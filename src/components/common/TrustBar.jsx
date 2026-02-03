import React from 'react';
import { ShieldCheck } from 'lucide-react';

const TrustBar = () => (
    <div className="bg-slate-900 py-12 border-y border-white/5">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#75CBB3] mb-10 opacity-60">
                Respaldado por la Ciencia de Materiales y la Ingeniería Global
            </h3>
            <div className="flex flex-wrap justify-center gap-12 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="flex flex-col items-center gap-2 text-white">
                    <div className="font-black text-xl tracking-tighter">
                        ROGERS <span className="text-[#75CBB3]">CORP.</span>
                    </div>
                    <span className="text-[8px] uppercase tracking-widest font-bold">
                        PORON® XRD® Partner
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2 text-white">
                    <div className="font-black text-xl tracking-tighter">
                        LIFE SCIENCES <span className="text-[#75CBB3]">HUB</span>
                    </div>
                    <span className="text-[8px] uppercase tracking-widest font-bold">
                        Costa Rica · R&D
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2 text-white">
                    <div className="font-black text-xl tracking-tighter">
                        LEAPCORE <span className="text-[#75CBB3]">TECH</span>
                    </div>
                    <span className="text-[8px] uppercase tracking-widest font-bold">
                        Structural Resilience
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default TrustBar;
