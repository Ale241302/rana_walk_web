import React from 'react';
import { ArrowRight, ShieldCheck, Linkedin, Instagram, Sparkles } from 'lucide-react';

const Footer = ({ navigate }) => (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16 mb-20">
                <div className="col-span-1 lg:col-span-1">
                    <img src="https://ranawalk.com/images/logos%20rana/Logo-Rana-Walk-negativo_vertical.png" alt="Rana Walk" className="h-20 w-auto mb-8" />
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                        Ingeniería de bio-mimetismo podal diseñada en el Life Sciences Hub de Costa Rica. Domina el impacto y la carga.
                    </p>
                    <div className="flex items-center gap-3 mb-8 p-3 bg-white/5 rounded-xl border border-white/10 w-fit">
                        <div className="w-10 h-10 bg-[#75CBB3] rounded-lg flex items-center justify-center">
                            <ShieldCheck className="text-[#013A57]" size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#75CBB3]">Validación Técnica</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Life Sciences Hub Costa Rica</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#75CBB3]/20 group transition-all cursor-pointer border border-white/10">
                            <Linkedin size={18} className="text-slate-400 group-hover:text-[#75CBB3]" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#75CBB3]/20 group transition-all cursor-pointer border border-white/10">
                            <Instagram size={18} className="text-slate-400 group-hover:text-[#75CBB3]" />
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-black text-[#75CBB3] mb-8 uppercase text-[10px] tracking-[0.3em]">Navegación</h4>
                    <ul className="space-y-4 text-sm font-bold text-slate-400">
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('home')}>Inicio</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('about')}>Nosotros</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systems')}>Sistemas</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('contact')}>Contacto</li>
                        <li className="text-[#75CBB3] hover:brightness-125 cursor-pointer transition-all flex items-center gap-2" onClick={() => navigate('consultor')}>AI Consultant <Sparkles size={14} /></li>
                    </ul>
                    <div className="mt-8 pt-8 border-t border-white/5">
                        <div className="flex items-center gap-3 text-white/40">
                            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-black text-[10px]">LSH</div>
                            <div className="text-[10px] leading-tight font-bold uppercase tracking-widest">
                                Life Sciences Hub<br /><span className="text-[#75CBB3]">Validation Team</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-black text-[#75CBB3] mb-8 uppercase text-[10px] tracking-[0.3em]">Sistemas Bio-Miméticos</h4>
                    <ul className="space-y-4 text-sm font-bold text-slate-400">
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'goliath')}>GOLIATH</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'velox')}>VELOX</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'orbis')}>ORBIS</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'leopard')}>LEOPARD</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-black text-[#75CBB3] mb-8 uppercase text-[10px] tracking-[0.3em]">Soporte & Legal</h4>
                    <ul className="space-y-4 text-sm font-bold text-slate-400">
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('support')}>Centro de Ayuda</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('distributors')}>Distribución B2B</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('legal')}>Términos de Uso</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('legal')}>Privacidad de Datos</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-black text-[#75CBB3] mb-8 uppercase text-[10px] tracking-[0.3em]">Presencia Industrial</h4>
                    <div className="space-y-6">
                        <div>
                            <span className="text-[10px] font-black text-slate-500 uppercase block mb-1">HQ & R&D</span>
                            <p className="text-sm font-bold">Costa Rica, Central America</p>
                            <p className="text-[10px] text-slate-500">Life Sciences Hub</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-slate-500 uppercase block mb-1">Distribution</span>
                            <p className="text-sm font-bold">USA | Latam | Global</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
                <p>© 2026 RANA WALK®</p>
                <p className="text-center md:text-right max-w-xl opacity-60 leading-relaxed">
                    AVISO LEGAL: LOS SISTEMAS RANA WALK NO SON DISPOSITIVOS MÉDICOS. ESTÁN DISEÑADOS PARA EL BIENESTAR FUNCIONAL Y LA SALUD BIOMECÁNICA.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
