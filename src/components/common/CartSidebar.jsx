import React from 'react';
import { ShoppingCart, X, Trash } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
    if (!isOpen) return null;

    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="fixed inset-0 z-[200] flex justify-end">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col animate-slideInRight">

                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <ShoppingCart className="w-6 h-6 text-[#75CBB3]" />
                        <h2 className="text-2xl font-black text-[#013A57]">Tu Carrito</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X className="w-6 h-6 text-slate-400" /></button>
                </div>

                <div className="flex-grow overflow-y-auto space-y-6 pr-2">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-60">
                            <ShoppingCart className="w-16 h-16 mb-4" />
                            <p>Tu carrito está vacío.</p>
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50 relative group hover:border-[#75CBB3]/50 transition-colors">
                                <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0 border border-slate-200">
                                    {item.image && <img src={item.image} alt={item.systemName} className="w-full h-full object-cover" />}
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-black text-[#013A57]">{item.systemName}</h4>
                                        <button onClick={() => onRemoveItem(index)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash className="w-4 h-4" /></button>
                                    </div>
                                    <p className="text-xs font-bold text-[#75CBB3] mb-2 uppercase tracking-wider">{item.gender} • {item.unit} Rana {item.size}</p>
                                    <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100">
                                        <span className="text-xs font-bold text-slate-400">Cant: {item.quantity}</span>
                                        <span className="text-sm font-black text-[#013A57]">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="pt-6 border-t border-slate-100 mt-4">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-slate-500 font-bold">Total</span>
                            <span className="text-3xl font-black text-[#013A57]">${total.toFixed(2)}</span>
                        </div>
                        <button className="w-full py-4 bg-[#013A57] text-white rounded-xl font-black uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg shadow-[#013A57]/20">
                            Pagar Ahora
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
