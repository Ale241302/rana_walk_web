import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingCart, Sparkles, User, ChevronDown, LogOut, Users, Truck, Package, ShoppingBag, Info, UserCircle, Globe } from 'lucide-react';
import { roleMenuOptions } from '../../data/usersData';

const languages = [
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w40/br.png' },
];

const Navbar = ({ currentView, navigate, cartCount, onOpenCart, user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(() => {
        // Detectar idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        const supported = languages.find(l => l.code === browserLang);
        return supported || languages[0]; // Default: Español
    });
    const userMenuRef = useRef(null);
    const langMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const links = [
        { id: 'home', label: 'Inicio' },
        { id: 'systems', label: 'Sistemas Biomecánicos' },
        { id: 'tech', label: 'Tecnologías' },
        { id: 'distributors', label: 'Distribuidores' },
        { id: 'contact', label: 'Contacto' }
    ];

    const getMenuIcon = (id) => {
        const icons = {
            myClients: <Users className="w-4 h-4" />,
            myDistributors: <Truck className="w-4 h-4" />,
            myProducts: <Package className="w-4 h-4" />,
            orders: <ShoppingBag className="w-4 h-4" />,
            adminOrders: <ShoppingBag className="w-4 h-4" />,
            distProducts: <Package className="w-4 h-4" />,
            mySubDistributors: <Users className="w-4 h-4" />,
            myInfo: <Info className="w-4 h-4" />,
            distOrders: <ShoppingBag className="w-4 h-4" />,
            myOrders: <ShoppingBag className="w-4 h-4" />,
            clientProfile: <UserCircle className="w-4 h-4" />,
        };
        return icons[id] || <Package className="w-4 h-4" />;
    };

    const menuOptions = user ? roleMenuOptions[user.role] || [] : [];

    const handleUserIconClick = () => {
        if (user) {
            setIsUserMenuOpen(!isUserMenuOpen);
        } else {
            navigate('login');
        }
    };

    const handleMenuItemClick = (view) => {
        navigate(view);
        setIsUserMenuOpen(false);
    };

    const handleLogout = () => {
        setIsUserMenuOpen(false);
        onLogout();
    };

    const handleLangChange = (lang) => {
        setCurrentLang(lang);
        setIsLangMenuOpen(false);
        // Aquí se podría agregar lógica para cambiar el idioma de la app
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/5 h-20' : 'bg-transparent h-24'}`}>
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
                    <img
                        src={(currentView === 'home' || isScrolled)
                            ? "https://ranawalk.com/images/logos%20rana/Logo-Rana-Walk-negativo_vertical.png"
                            : "https://ranawalk.com/images/logos%20rana/Logo-Rana-Walk-full-color_vertical.png"}
                        alt="Rana Walk"
                        className="h-16 w-auto transition-all duration-300"
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

                <div className="flex items-center gap-4">
                    {/* Language Selector */}
                    <div className="relative" ref={langMenuRef}>
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all hover:bg-white/10 ${(currentView === 'home' || isScrolled) ? 'text-white' : 'text-[#013A57]'}`}
                        >
                            <img src={currentLang.flag} alt={currentLang.name} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                            <ChevronDown className={`w-3 h-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isLangMenuOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-fadeIn">
                                <div className="p-2">
                                    {languages.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLangChange(lang)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${currentLang.code === lang.code ? 'bg-[#75CBB3]/20 text-[#75CBB3]' : 'text-white hover:bg-white/10'}`}
                                        >
                                            <img src={lang.flag} alt={lang.name} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                                            <span className="font-bold text-xs uppercase tracking-wider">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* User Menu */}
                    <div className="relative" ref={userMenuRef}>
                        <div
                            className="relative group cursor-pointer flex items-center gap-2"
                            onClick={handleUserIconClick}
                        >
                            {user ? (
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black ${(currentView === 'home' || isScrolled) ? 'bg-[#75CBB3] text-[#013A57]' : 'bg-[#013A57] text-white'}`}>
                                    {user.avatar || user.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            ) : (
                                <User className={`w-5 h-5 group-hover:text-[#75CBB3] transition-colors ${(currentView === 'home' || isScrolled) ? 'text-white' : 'text-[#013A57]'}`} />
                            )}
                            {user && (
                                <ChevronDown className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''} ${(currentView === 'home' || isScrolled) ? 'text-white' : 'text-[#013A57]'}`} />
                            )}
                        </div>

                        {/* Dropdown Menu */}
                        {isUserMenuOpen && user && (
                            <div className="absolute right-0 top-full mt-3 w-64 bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-fadeIn">
                                {/* User Info Header */}
                                <div className="p-4 border-b border-white/10 bg-gradient-to-r from-[#013A57] to-[#066383]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#75CBB3] rounded-full flex items-center justify-center text-[#013A57] font-black text-sm">
                                            {user.avatar}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">{user.name}</p>
                                            <p className="text-[10px] text-[#75CBB3] font-bold uppercase tracking-wider">{user.roleName}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Menu Options */}
                                <div className="p-2">
                                    {menuOptions.map(option => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleMenuItemClick(option.view)}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all text-left"
                                        >
                                            <span className="text-[#75CBB3]">{getMenuIcon(option.id)}</span>
                                            <span className="font-bold text-xs uppercase tracking-widest">{option.label}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Logout */}
                                <div className="p-2 border-t border-white/10">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span className="font-bold text-xs uppercase tracking-widest">Cerrar Sesión</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

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
                    {user ? (
                        <>
                            <div className="py-4 border-b border-white/5">
                                <p className="text-[#75CBB3] font-black text-sm uppercase mb-4">{user.roleName}: {user.name}</p>
                                {menuOptions.map(option => (
                                    <button key={option.id} onClick={() => { navigate(option.view); setIsOpen(false); }} className="text-left font-bold text-slate-400 text-lg uppercase tracking-widest py-2 flex items-center gap-3 hover:text-white transition-colors">
                                        <span className="text-[#75CBB3]">{getMenuIcon(option.id)}</span> {option.label}
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => { onLogout(); setIsOpen(false); }} className="text-left font-black text-red-400 text-xl uppercase tracking-widest py-2 flex items-center gap-4">
                                <LogOut className="w-6 h-6" /> Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <button onClick={() => { navigate('login'); setIsOpen(false) }} className="text-left font-black text-white text-2xl uppercase tracking-widest py-2 border-b border-white/5 pb-4 flex items-center gap-4">
                            Iniciar Sesión <User className="w-6 h-6" />
                        </button>
                    )}
                    <button onClick={() => { navigate('consultor'); setIsOpen(false) }} className="text-left font-black text-[#75CBB3] text-2xl uppercase tracking-widest py-2 border-b border-white/5 pb-4 flex items-center gap-4">
                        Consultor IA <Sparkles className="w-6 h-6" />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
