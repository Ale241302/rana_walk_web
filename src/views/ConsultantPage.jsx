import React from 'react';
import { Sparkles, RefreshCw, Zap, Check, ArrowRight, AlertCircle } from 'lucide-react';

const ConsultantPage = ({ query, setQuery, handleConsult, isLoading, response, error, navigate }) => (
    <div className="pt-32 pb-24 px-4 bg-white min-h-screen animate-fadeIn">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-black uppercase tracking-[0.2em] mb-10 shadow-sm border border-emerald-200">
                    <Sparkles size={18} /> CONSULTOR
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-[#013A57]">DATA-DRIVEN <span className="text-emerald-600">SELECTION</span>.</h2>
                <p className="text-slate-500 font-medium text-xl max-w-2xl mx-auto">Nuestro consultor basado en Gemini analizará tus variables de <strong>carga, impacto y tipo de calzado</strong> para recomendarte el sistema de bio-mimetismo ideal.</p>
            </div>

            <div className="bg-slate-900 p-10 md:p-16 rounded-[3rem] shadow-2xl relative border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-[100px] rounded-full"></div>
                <form onSubmit={(e) => { e.preventDefault(); handleConsult(query) }} className="space-y-8 relative z-10">
                    <textarea
                        className="w-full h-56 bg-slate-800 border-none rounded-3xl p-8 text-white text-xl placeholder:text-slate-500 focus:ring-4 focus:ring-emerald-500/20 transition-all shadow-inner leading-relaxed resize-none"
                        placeholder="Ej: Peso 90kg, trabajo en una planta de ensamble 10 horas, uso botas de seguridad pesadas y me duele el talón..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        disabled={isLoading || !query.trim()}
                        className={`w-full py-6 rounded-2xl font-black text-xl uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all shadow-xl ${isLoading || !query.trim() ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-emerald-600 text-white hover:bg-emerald-500 hover:scale-[1.01]'
                            }`}
                    >
                        {isLoading ? <RefreshCw className="animate-spin" /> : <Zap size={24} />}
                        {isLoading ? 'PROCESANDO VARIABLES...' : 'ANALIZAR'}
                    </button>
                </form>
            </div>

            <div className="mt-16">
                {response && (
                    <div className="animate-fadeIn bg-emerald-50 p-12 md:p-16 rounded-[4rem] border border-emerald-100 shadow-xl">
                        <h3 className="font-black text-[#013A57] uppercase tracking-[0.2em] text-sm mb-10 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white"><Check size={18} /></div>
                            Diagnóstico del Consultor ✨
                        </h3>
                        <div className="prose prose-slate max-w-none text-slate-800 text-xl leading-relaxed font-medium whitespace-pre-wrap italic">
                            {response}
                        </div>
                        <div className="mt-12 pt-12 border-t border-emerald-200">
                            <button onClick={() => navigate('systems')} className="font-black text-emerald-700 text-lg flex items-center gap-2 hover:gap-6 transition-all uppercase tracking-widest">
                                Ver especificaciones de mi sistema <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                )}
                {error && (
                    <div className="p-10 bg-red-50 text-red-600 rounded-[3rem] border border-red-100 flex items-center gap-6 shadow-sm">
                        <AlertCircle size={32} /> <span className="font-black text-lg uppercase">{error}</span>
                    </div>
                )}
            </div>
        </div>
    </div>
);
export default ConsultantPage;
