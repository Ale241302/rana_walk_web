// ProfileView and other profile related components remain here

import React from 'react';
import { User, LogOut, ChevronRight, MapPin, Package } from 'lucide-react';

export const ProfileView = ({ user, onLogout }) => (
    <div className="py-24 animate-fadeIn">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Sidebar Perfil */}
                <div className="w-full md:w-80 shrink-0">
                    <div className="bg-slate-900 rounded-[2rem] p-8 text-white text-center shadow-xl">
                        <div className="w-24 h-24 bg-[#75CBB3] rounded-full mx-auto mb-6 flex items-center justify-center">
                            <User className="w-12 h-12 text-[#013A57]" />
                        </div>
                        <h2 className="text-xl font-black uppercase tracking-tight mb-2">Felipe Oñate</h2>
                        <p className="text-slate-400 text-xs mb-8 italic">Usuario Pro Bio-Mimetismo</p>

                        <div className="space-y-2">
                            <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all group">
                                <span className="flex items-center gap-3"><Package className="w-4 h-4 text-[#75CBB3]" /> Pedidos</span>
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                            <button className="w-full flex items-center justify-between p-4 bg-transparent rounded-xl text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-white transition-all group">
                                <span className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Direcciones</span>
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                            <button onClick={onLogout} className="w-full flex items-center gap-3 p-4 text-red-400 font-bold text-xs uppercase tracking-widest mt-10 hover:text-red-300 transition-all">
                                <LogOut className="w-4 h-4" /> Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contenido Perfil */}
                <div className="flex-grow space-y-12">
                    <div>
                        <h3 className="text-2xl font-black text-[#013A57] mb-8 uppercase tracking-tight flex items-center gap-3">
                            <Package className="text-[#75CBB3]" /> Historial de Pedidos
                        </h3>
                        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center">
                            <p className="text-slate-400 italic">No tienes pedidos recientes.</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3">
                                <MapPin className="text-[#75CBB3]" /> Direcciones Guardadas
                            </h3>
                            <button className="text-[10px] font-black uppercase tracking-widest text-[#75CBB3] border border-[#75CBB3]/30 px-4 py-2 rounded-lg hover:bg-[#75CBB3] hover:text-[#013A57] transition-all">
                                + Añadir
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border-2 border-[#75CBB3]/20 rounded-2xl p-6 relative group">
                                <div className="absolute top-4 right-4 bg-[#75CBB3] text-[#013A57] text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Predeterminada</div>
                                <h4 className="font-bold text-[#013A57] mb-2 uppercase text-xs tracking-widest">Casa Principal</h4>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">Ave. Principal 123, Rohrmoser<br />San José, Costa Rica</p>
                                <button className="text-[10px] font-black uppercase tracking-widest text-[#013A57] hover:underline">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
