import React, { useState } from 'react';
import { CreditCard, Truck, ShieldCheck, ChevronLeft, Gift, Users } from 'lucide-react';

const CheckoutView = ({ cartItems, navigate }) => {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [redemptionCode, setRedemptionCode] = useState('');

    // Obtener distribuidor si algún item lo tiene
    const selectedDistributor = cartItems.find(item => item.distributor)?.distributor;

    return (
        <div className="py-24 animate-fadeIn">
            <div className="container mx-auto px-6 max-w-6xl">
                <button onClick={() => navigate('home')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#013A57] transition-colors mb-10">
                    <ChevronLeft className="w-4 h-4" /> Volver a la tienda
                </button>

                <h1 className="text-4xl font-black text-[#013A57] mb-12 uppercase tracking-tight">Finalizar Compra</h1>

                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    {/* Formulario */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Dirección */}
                        <section>
                            <h3 className="text-xl font-black text-[#013A57] mb-6 uppercase tracking-widest flex items-center gap-3">
                                <Truck className="text-[#75CBB3]" /> Datos de Envío
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nombre completo</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[#013A57] focus:outline-none focus:border-[#75CBB3] transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email de contacto</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[#013A57] focus:outline-none focus:border-[#75CBB3] transition-colors" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Dirección exacta</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[#013A57] focus:outline-none focus:border-[#75CBB3] transition-colors" />
                                </div>
                            </div>
                        </section>

                        {/* Pago */}
                        <section>
                            <h3 className="text-xl font-black text-[#013A57] mb-6 uppercase tracking-widest flex items-center gap-3">
                                <CreditCard className="text-[#75CBB3]" /> Método de Pago
                            </h3>
                            <div className="space-y-4">
                                {/* Tarjeta de Crédito / Débito */}
                                <div
                                    onClick={() => setPaymentMethod('card')}
                                    className={`p-6 border-2 rounded-2xl flex items-center gap-4 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-[#75CBB3] bg-[#75CBB3]/5' : 'border-slate-100 hover:bg-slate-50'}`}
                                >
                                    <div className={`w-4 h-4 rounded-full border-4 ${paymentMethod === 'card' ? 'border-[#75CBB3] bg-white' : 'border-slate-300'}`}></div>
                                    <div className="flex-grow">
                                        <p className="font-bold text-[#013A57] text-sm uppercase tracking-wide">Tarjeta de Crédito / Débito</p>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Procesado por Stripe®</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-5 bg-slate-200 rounded"></div>
                                        <div className="w-8 h-5 bg-slate-200 rounded"></div>
                                    </div>
                                </div>

                                {/* Código de Redención */}
                                <div
                                    onClick={() => setPaymentMethod('redemption')}
                                    className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${paymentMethod === 'redemption' ? 'border-[#75CBB3] bg-[#75CBB3]/5' : 'border-slate-100 hover:bg-slate-50'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-4 h-4 rounded-full border-4 ${paymentMethod === 'redemption' ? 'border-[#75CBB3] bg-white' : 'border-slate-300'}`}></div>
                                        <div className="flex-grow">
                                            <p className="font-bold text-[#013A57] text-sm uppercase tracking-wide flex items-center gap-2">
                                                <Gift className="w-4 h-4 text-[#75CBB3]" /> Código de Redención
                                            </p>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Introduce tu código alfanumérico</p>
                                        </div>
                                    </div>
                                    {paymentMethod === 'redemption' && (
                                        <div className="mt-4 ml-8">
                                            <input
                                                type="text"
                                                value={redemptionCode}
                                                onChange={(e) => setRedemptionCode(e.target.value.toUpperCase())}
                                                placeholder="Ingresa tu código (ej: RANA2024ABC)"
                                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[#013A57] font-bold uppercase tracking-widest focus:outline-none focus:border-[#75CBB3] transition-colors placeholder:text-slate-300 placeholder:font-normal placeholder:normal-case placeholder:tracking-normal"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* PayPal - deshabilitado */}
                                <div className="p-6 border-2 border-slate-100 rounded-2xl flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer opacity-50">
                                    <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                                    <p className="font-bold text-slate-400 text-sm uppercase tracking-wide">PayPal</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Resumen */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl sticky top-32">
                        <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-[#75CBB3]">Resumen del Pedido</h3>

                        {/* Distribuidor Seleccionado */}
                        {selectedDistributor && (
                            <div className="mb-6 p-4 bg-purple-500/20 rounded-xl border border-purple-500/30">
                                <p className="text-[10px] text-purple-300 uppercase font-bold tracking-widest mb-1 flex items-center gap-2">
                                    <Users className="w-3 h-3" /> Punto de Venta Seleccionado
                                </p>
                                <p className="font-bold text-white">{selectedDistributor.name}</p>
                                <p className="text-xs text-purple-300">{selectedDistributor.region} • {selectedDistributor.type === 'distributor' ? 'Punto de Venta' : 'Punto de Venta Asociado'}</p>
                            </div>
                        )}

                        <div className="space-y-6 mb-10">
                            {cartItems.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center text-xs">
                                    <div>
                                        <p className="font-black uppercase">{item.systemName || item.name}</p>
                                        <p className="text-slate-500 font-bold uppercase tracking-tighter">{item.quantity} UNIDAD{item.quantity > 1 ? 'ES' : ''}</p>
                                    </div>
                                    <span className="font-black">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-white/10 pt-6 space-y-4">
                            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span>Envío</span>
                                <span className="text-[#75CBB3]">GRATIS</span>
                            </div>
                            {paymentMethod === 'redemption' && redemptionCode && (
                                <div className="flex justify-between text-xs font-bold text-purple-400 uppercase tracking-widest">
                                    <span>Código</span>
                                    <span>{redemptionCode}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-xl font-black pt-4 border-t border-white/10">
                                <span>TOTAL</span>
                                <span className="text-[#75CBB3]">${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="w-full mt-10 py-5 bg-[#75CBB3] text-[#013A57] rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3">
                            {paymentMethod === 'redemption' ? 'Canjear Código' : 'Pagar Ahora'} <ShieldCheck className="w-5 h-5" />
                        </button>

                        <p className="text-[9px] text-center text-slate-500 uppercase tracking-widest mt-6 leading-relaxed">
                            Pago Seguro Encriptado de 256 bits. Al pagar aceptas nuestros términos de servicio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutView;
