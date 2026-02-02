import React, { useState } from 'react';
import { User, Mail, Lock, LogOut, ChevronRight, MapPin, Package } from 'lucide-react';

export const LoginView = ({ navigate, onLogin }) => (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-6 animate-fadeIn">
        <div className="max-w-md w-full bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#75CBB3]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center mb-10">
                <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Bienvenido</h2>
                <p className="text-slate-400 text-sm italic">Accede a tu perfil de bio-ingeniería</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                <div className="space-y-4">
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                        <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3] transition-colors" />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                        <input type="password" placeholder="Contraseña" className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3] transition-colors" />
                    </div>
                </div>

                <button type="submit" className="w-full py-4 bg-[#75CBB3] text-[#013A57] rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg">
                    Iniciar Sesión
                </button>

                <div className="text-center">
                    <button type="button" onClick={() => navigate('register')} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors">
                        ¿No tienes cuenta? Regístrate →
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export const RegisterView = ({ navigate, onRegister }) => (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-6 animate-fadeIn">
        <div className="max-w-md w-full bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#75CBB3]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center mb-10">
                <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Registro</h2>
                <p className="text-slate-400 text-sm italic">Únete al ecosistema Rana Walk®</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onRegister(); }}>
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                    <input type="text" placeholder="Nombre completo" className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3] transition-colors" />
                </div>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                    <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3] transition-colors" />
                </div>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                    <input type="password" placeholder="Contraseña" className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3] transition-colors" />
                </div>

                <div className="flex items-center gap-2 px-2">
                    <input type="checkbox" className="accent-[#75CBB3]" id="terms" required />
                    <label htmlFor="terms" className="text-[10px] text-slate-400 uppercase tracking-widest leading-none">Acepto términos y condiciones</label>
                </div>

                <button type="submit" className="w-full py-4 bg-[#75CBB3] text-[#013A57] rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg">
                    Crear Cuenta
                </button>

                <div className="text-center pt-2">
                    <button type="button" onClick={() => navigate('login')} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors">
                        ¿Ya tienes cuenta? Inicia Sesión →
                    </button>
                </div>
            </form>
        </div>
    </div>
);

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
