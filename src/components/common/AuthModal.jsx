import React, { useState } from 'react';
import { X, User, Shield, Truck, UserCircle } from 'lucide-react';
import { usersData } from '../../data/usersData';

const AuthModal = ({ isOpen, onClose, onLogin, initialMode = 'login' }) => {
    const [mode, setMode] = useState(initialMode);

    if (!isOpen) return null;

    const handleUserSelect = (user) => {
        onLogin(user);
        onClose();
    };

    const getRoleIcon = (role) => {
        const icons = {
            admin: <Shield className="w-8 h-8" />,
            distributor: <Truck className="w-8 h-8" />,
            client: <UserCircle className="w-8 h-8" />,
        };
        return icons[role] || <User className="w-8 h-8" />;
    };

    const getRoleColor = (role) => {
        const colors = {
            admin: 'from-purple-500 to-indigo-600',
            distributor: 'from-blue-500 to-cyan-600',
            client: 'from-emerald-500 to-teal-600',
        };
        return colors[role] || 'from-slate-500 to-slate-600';
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={onClose}></div>

            <div className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden text-white animate-fadeIn">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#75CBB3]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#75CBB3]/5 rounded-full -ml-16 -mb-16 blur-3xl"></div>

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
                        Seleccionar Usuario
                    </h2>
                    <p className="text-slate-400 text-sm italic">
                        Elige un perfil para acceder al sistema
                    </p>
                </div>

                <div className="space-y-4">
                    {usersData.map(user => (
                        <button
                            key={user.id}
                            onClick={() => handleUserSelect(user)}
                            className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#75CBB3]/50 transition-all group flex items-center gap-5 text-left"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getRoleColor(user.role)} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                {getRoleIcon(user.role)}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-black text-white uppercase tracking-tight text-lg group-hover:text-[#75CBB3] transition-colors">
                                    {user.name}
                                </h3>
                                <p className="text-slate-400 text-xs mb-1">{user.email}</p>
                                <span className="inline-block px-3 py-1 bg-[#75CBB3]/20 text-[#75CBB3] rounded-full text-[10px] font-black uppercase tracking-wider">
                                    {user.roleName}
                                </span>
                            </div>
                            <div className="text-slate-500 group-hover:text-[#75CBB3] transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                        Usuarios de demostración con roles predefinidos
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
