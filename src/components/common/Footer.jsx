import React from 'react';
import { Mail, MapPin, Globe, Sparkles } from 'lucide-react';

const Footer = ({ navigate }) => (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
            {/* Main Footer Grid */}
            <div className="grid lg:grid-cols-6 gap-12 mb-16">
                {/* Logo & Info Column */}
                <div className="lg:col-span-2">
                    <img src="https://ranawalk.com/images/logos%20rana/Logo-Rana-Walk-negativo_vertical.png" alt="Rana Walk" className="h-20 w-auto mb-8" />
                    <p className="text-[#75CBB3] font-bold italic text-lg mb-4">"Name it, leap forward."</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Ingeniería desde Costa Rica para USA, Latam y el mundo.
                    </p>
                    <div className="flex items-center gap-3 text-slate-400 hover:text-[#75CBB3] transition-colors">
                        <Mail size={16} />
                        <a href="mailto:leap@ranawalk.com" className="text-sm font-bold">leap@ranawalk.com</a>
                    </div>
                </div>

                {/* Institucional */}
                <div>
                    <h4 className="font-black text-[#75CBB3] mb-6 uppercase text-[10px] tracking-[0.3em]">Institucional</h4>
                    <ul className="space-y-3 text-sm font-medium text-slate-400">
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('home')}>Inicio</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('about')}>Nosotros</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systems')}>Sistemas</li>
                        <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2" onClick={() => navigate('consultor')}>
                            AI Consultant <Sparkles size={12} className="text-[#75CBB3]" />
                        </li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('contact')}>Contacto</li>
                    </ul>
                </div>

                {/* Validación & Ciencia */}
                <div>
                    <h4 className="font-black text-[#75CBB3] mb-6 uppercase text-[10px] tracking-[0.3em]">Validación & Ciencia</h4>
                    <ul className="space-y-3 text-sm font-medium text-slate-400">
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('about')}>Costa Rica MedTech Hub</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('about')}>R&D Team</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('tech')}>Protocolos de Carga</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('tech')}>Fichas de Tecnología</li>
                    </ul>
                </div>

                {/* Sistemas Biomiméticos */}
                <div>
                    <h4 className="font-black text-[#75CBB3] mb-6 uppercase text-[10px] tracking-[0.3em]">Sistemas Biomiméticos</h4>
                    <ul className="space-y-3 text-sm font-medium text-slate-400">
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'goliath')}>
                            <span className="text-white font-bold">GOLIATH</span>
                            <span className="text-slate-500 text-xs block">Poder y Estabilidad</span>
                        </li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'velox')}>
                            <span className="text-white font-bold">VELOX</span>
                            <span className="text-slate-500 text-xs block">Agilidad y Energía</span>
                        </li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'orbis')}>
                            <span className="text-white font-bold">ORBIS</span>
                            <span className="text-slate-500 text-xs block">Inteligencia Postural</span>
                        </li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'leopard')}>
                            <span className="text-white font-bold">LEOPARD</span>
                            <span className="text-slate-500 text-xs block">Flexibilidad Adaptable</span>
                        </li>
                    </ul>
                </div>

                {/* Soporte & Legal */}
                <div>
                    <h4 className="font-black text-[#75CBB3] mb-6 uppercase text-[10px] tracking-[0.3em]">Soporte & Legal</h4>
                    <ul className="space-y-3 text-sm font-medium text-slate-400">
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('support')}>Centro de Ayuda</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('distributors')}>Distribución B2B</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('legal')}>Términos de Uso</li>
                        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('legal')}>Privacidad de Datos</li>
                    </ul>
                </div>
            </div>

            {/* Presencia Industrial */}
            <div className="border-t border-white/5 pt-12 mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                            <MapPin size={20} className="text-[#75CBB3]" />
                        </div>
                        <div>
                            <h5 className="text-[10px] font-black text-[#75CBB3] uppercase tracking-widest mb-1">HQ & R&D Center</h5>
                            <p className="text-white font-bold">Costa Rica MedTech Hub, San José</p>
                            <p className="text-slate-500 text-sm">Centroamérica</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                            <Globe size={20} className="text-[#75CBB3]" />
                        </div>
                        <div>
                            <h5 className="text-[10px] font-black text-[#75CBB3] uppercase tracking-widest mb-1">Ecosistema de Distribución</h5>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {['USA', 'Europa', 'Brasil', 'Latam', 'Global'].map((region) => (
                                    <span key={region} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400">
                                        {region}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span>© 2026 Rana Walk®</span>
                    <span className="text-slate-700">|</span>
                    <span>Desarrollado con el respaldo tecnológico de <span className="text-[#75CBB3]">Grizzly</span></span>
                </div>
                <p className="text-[#75CBB3] font-bold italic text-sm">"Name it, leap forward."</p>
            </div>
        </div>
    </footer>
);

export default Footer;
