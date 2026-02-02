import React, { useState } from 'react';
import { X, User, Mail, Lock, Sparkles } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, onLogin, initialMode = 'login' }) => {
    const [mode, setMode] = useState(initialMode);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={onClose}></div>

            <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden text-white animate-fadeIn">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#75CBB3]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#75CBB3]/5 rounded-full -ml-16 -mb-16 blur-3xl"></div>

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
                        {mode === 'login' ? 'Bienvenido' : 'Registro'}
                    </h2>
                    <p className="text-slate-400 text-sm italic">
                        {mode === 'login' ? 'Accede a tu perfil de bio-ingeniería' : 'Únete al ecosistema Rana Walk®'}
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        {mode === 'register' && (
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-[#75CBB3] transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Nombre completo"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3] transition-colors"
                                />
                            </div>
                        )}
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-[#75CBB3] transition-colors" />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3] transition-colors"
                            />
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-[#75CBB3] transition-colors" />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3] transition-colors"
                            />
                        </div>
                        {mode === 'register' && (
                            <div className="flex items-center gap-2 px-2">
                                <input type="checkbox" className="accent-[#75CBB3]" id="terms_modal" required />
                                <label htmlFor="terms_modal" className="text-[10px] text-slate-400 uppercase tracking-widest leading-none cursor-pointer">Acepto términos y condiciones</label>
                            </div>
                        )}
                    </div>

                    <button type="submit" className="w-full py-4 bg-[#75CBB3] text-[#013A57] rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg hover:shadow-[#75CBB3]/20 flex items-center justify-center gap-2">
                        {mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
                    </button>

                    <div className="text-center">
                        <button
                            type="button"
                            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors"
                        >
                            {mode === 'login' ? '¿No tienes cuenta? Regístrate →' : '¿Ya tienes cuenta? Inicia Sesión →'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;
