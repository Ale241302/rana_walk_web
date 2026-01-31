import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Sparkles } from 'lucide-react';

const Navbar = ({ currentView, navigate, cartCount, onOpenCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 'home', label: 'Inicio' },
        { id: 'systems', label: 'Sistemas' },
        { id: 'tech', label: 'Ciencia' },
        { id: 'distributors', label: 'B2B' },
        { id: 'support', label: 'Soporte' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/5 h-20' : 'bg-transparent h-24'}`}>
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
                    <img
                        src="https://ranawalk.com/images/logos%20rana/Logo-Rana-Walk-full-color_vertical.png"
                        alt="Rana Walk"
                        className={`h-16 w-auto transition-all duration-300 ${(currentView === 'home' || isScrolled) ? 'brightness-0 invert' : ''}`}
                    />
                </div>

                <div className="hidden lg:flex items-center gap-10">
                    {links.map(l => (
                        <button
                            key={l.id}
                            onClick={() => { navigate(l.id); setIsOpen(false); }}
                            className={`text-[13px] font-black uppercase tracking-[0.2em] transition-all hover:translate-y-[-1px] ${currentView === l.id
                                ? 'text-[#75CBB3]'
                                : (currentView === 'home' || isScrolled)
                                    ? 'text-slate-400 hover:text-white'
                                    : 'text-[#013A57]/60 hover:text-[#75CBB3]'
                                }`}
                        >
                            {l.label}
                        </button>
                    ))}
                    <button onClick={() => { navigate('consultor'); setIsOpen(false) }} className="bg-[#75CBB3]/10 text-[#75CBB3] px-5 py-2.5 rounded-full text-[13px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-[#75CBB3] hover:text-[#013A57] transition-all border border-[#75CBB3]/20">
                        Consultor IA <Sparkles className="w-3.5 h-3.5" />
                    </button>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative group cursor-pointer" onClick={onOpenCart}>
                        <ShoppingCart className={`w-5 h-5 group-hover:text-[#75CBB3] transition-colors ${(currentView === 'home' || isScrolled) ? 'text-white' : 'text-[#013A57]'}`} />
                        {cartCount > 0 && (
                            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[9px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-slate-900">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <button className={`lg:hidden ${(currentView === 'home' || isScrolled) ? 'text-white' : 'text-[#013A57]'}`} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-slate-900 border-t border-white/5 p-10 flex flex-col gap-6 animate-fadeIn min-h-screen">
                    {links.map(l => (
                        <button key={l.id} onClick={() => { navigate(l.id); setIsOpen(false); }} className="text-left font-black text-white text-2xl uppercase tracking-widest py-2 border-b border-white/5 pb-4">{l.label}</button>
                    ))}
                    <button onClick={() => { navigate('consultor'); setIsOpen(false) }} className="text-left font-black text-[#75CBB3] text-2xl uppercase tracking-widest py-2 flex items-center gap-4">
                        Consultor IA <Sparkles className="w-6 h-6" />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
