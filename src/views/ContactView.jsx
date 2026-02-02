import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

const ContactView = () => (
    <div className="py-24 animate-fadeIn">
        <div className="container mx-auto px-6">
            <SectionHeader sub="Hablemos de Bio-Ingeniería" title="¿Cómo podemos ayudarte?" center={false} />

            <div className="grid lg:grid-cols-2 gap-20 items-start">
                <div className="space-y-12">
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Ya sea que tengas dudas técnicas sobre nuestros sistemas o necesites soporte específico para tu tipo de calzado, nuestro equipo de expertos en bio-mimetismo está listo para responder.
                    </p>

                    <div className="space-y-8">
                        <div className="flex gap-6 items-center">
                            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                                <Mail className="text-[#013A57]" />
                            </div>
                            <div>
                                <h4 className="font-black text-[#013A57] uppercase tracking-widest text-xs mb-1">Email Técnico</h4>
                                <p className="text-slate-500 font-bold">tech@ranawalk.com</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                                <Phone className="text-[#013A57]" />
                            </div>
                            <div>
                                <h4 className="font-black text-[#013A57] uppercase tracking-widest text-xs mb-1">Atención Directa</h4>
                                <p className="text-slate-500 font-bold">+506 4000 0000</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                                <MapPin className="text-[#013A57]" />
                            </div>
                            <div>
                                <h4 className="font-black text-[#013A57] uppercase tracking-widest text-xs mb-1">Life Sciences Hub</h4>
                                <p className="text-slate-500 font-bold">San José, Costa Rica</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                    <h3 className="text-2xl font-black text-[#013A57] mb-8 uppercase tracking-tight">Formulario de Contacto</h3>
                    <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nombre</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[#013A57] focus:outline-none focus:border-[#75CBB3] transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email</label>
                                <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[#013A57] focus:outline-none focus:border-[#75CBB3] transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Asunto</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[#013A57] focus:outline-none focus:border-[#75CBB3] transition-colors">
                                <option>Consulta Técnica</option>
                                <option>Soporte de Pedido</option>
                                <option>Garantía</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Mensaje</label>
                            <textarea rows="4" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[#013A57] focus:outline-none focus:border-[#75CBB3] transition-colors resize-none"></textarea>
                        </div>
                        <button className="w-full py-4 bg-[#013A57] text-white rounded-xl font-black uppercase tracking-widest hover:bg-[#75CBB3] hover:text-[#013A57] transition-all flex items-center justify-center gap-3 shadow-lg">
                            Enviar Mensaje <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default ContactView;
