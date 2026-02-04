import React from 'react';
import { ShoppingBag, User, MapPin, Phone, Mail, Calendar, Package, Truck, CheckCircle, Clock, Edit, LogOut, ChevronRight, Navigation, Users } from 'lucide-react';

// Datos quemados para Cliente
const clientOrdersData = [
    {
        id: 'CLI-001',
        date: '2024-01-25',
        items: [{ name: 'Sistema GOLIATH', qty: 1, price: 85000 }],
        total: 85000,
        status: 'delivered',
        tracking: 'RW12345CR',
        distributor: { name: 'Distribuciones ABC', contact: 'Miguel Torres', phone: '+506 7777-1111', email: 'miguel@abc.com', region: 'Zona Norte' }
    },
    {
        id: 'CLI-002',
        date: '2024-01-20',
        items: [{ name: 'Sistema VELOX', qty: 1, price: 78000 }, { name: 'Plantilla LeapCore™', qty: 2, price: 45000 }],
        total: 168000,
        status: 'shipped',
        tracking: 'RW12346CR',
        distributor: { name: 'Comercial XYZ', contact: 'Sandra Mora', phone: '+506 7777-2222', email: 'sandra@xyz.com', region: 'Zona Sur' }
    },
    {
        id: 'CLI-003',
        date: '2024-01-15',
        items: [{ name: 'Sistema ORBIS', qty: 1, price: 72000 }],
        total: 72000,
        status: 'processing',
        tracking: null,
        distributor: { name: 'Ventas del Valle', contact: 'José Ramírez', phone: '+506 7777-3333', email: 'jose@valle.com', region: 'GAM' }
    },
    {
        id: 'CLI-004',
        date: '2024-01-10',
        items: [{ name: 'Sistema LEOPARD', qty: 1, price: 82000 }],
        total: 82000,
        status: 'delivered',
        tracking: 'RW12340CR',
        distributor: null // Venta directa de Rana Walk
    },
];

const StatusBadge = ({ status }) => {
    const styles = { delivered: 'bg-emerald-500/20 text-emerald-400', shipped: 'bg-blue-500/20 text-blue-400', processing: 'bg-purple-500/20 text-purple-400', pending: 'bg-amber-500/20 text-amber-400' };
    const labels = { delivered: 'Entregado', shipped: 'Enviado', processing: 'Procesando', pending: 'Pendiente' };
    const icons = { delivered: <CheckCircle className="w-3 h-3" />, shipped: <Truck className="w-3 h-3" />, processing: <Clock className="w-3 h-3" />, pending: <Clock className="w-3 h-3" /> };
    return <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1 w-fit ${styles[status]}`}>{icons[status]}{labels[status]}</span>;
};

// Vista de Mis Pedidos (Cliente)
export const MyOrdersView = () => {
    const handleTrack = (orderId, tracking) => {
        if (tracking) {
            alert(`Rastreando pedido ${orderId}\nNúmero de tracking: ${tracking}`);
        } else {
            alert(`El pedido ${orderId} aún no tiene número de rastreo asignado.`);
        }
    };

    return (
        <div className="py-12 animate-fadeIn">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-10">
                    <h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><ShoppingBag className="text-[#75CBB3]" /> Mis Pedidos</h1>
                    <p className="text-slate-500">Historial y seguimiento de tus compras</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Total</p><p className="text-3xl font-black text-[#013A57]">{clientOrdersData.length}</p></div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Entregados</p><p className="text-3xl font-black text-emerald-500">{clientOrdersData.filter(o => o.status === 'delivered').length}</p></div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">En Camino</p><p className="text-3xl font-black text-blue-500">{clientOrdersData.filter(o => o.status === 'shipped').length}</p></div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Total Gastado</p><p className="text-3xl font-black text-[#75CBB3]">₡{(clientOrdersData.reduce((s, o) => s + o.total, 0) / 1000).toFixed(0)}K</p></div>
                </div>
                <div className="space-y-4">
                    {clientOrdersData.map(order => (
                        <div key={order.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 hover:shadow-xl transition-all">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#75CBB3]/20 rounded-xl flex items-center justify-center"><Package className="w-6 h-6 text-[#75CBB3]" /></div>
                                    <div><p className="font-black text-[#013A57]">{order.id}</p><p className="text-sm text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" />{order.date}</p></div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <StatusBadge status={order.status} />
                                    <button
                                        onClick={() => handleTrack(order.id, order.tracking)}
                                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase transition-colors"
                                    >
                                        <Navigation className="w-4 h-4" />Rastrear
                                    </button>
                                </div>
                            </div>

                            {/* Información del Distribuidor Asignado */}
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-4 border border-blue-100">
                                <p className="text-[10px] text-blue-400 uppercase font-black tracking-widest mb-2 flex items-center gap-2">
                                    <Users className="w-3 h-3" /> Distribuidor Asignado
                                </p>
                                {order.distributor ? (
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                        <div>
                                            <p className="font-black text-[#013A57] text-lg">{order.distributor.name}</p>
                                            <p className="text-sm text-slate-500">{order.distributor.contact} • {order.distributor.region}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <a href={`tel:${order.distributor.phone}`} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg text-sm font-bold text-[#013A57] hover:bg-[#75CBB3]/20 transition-colors border border-slate-200">
                                                <Phone className="w-4 h-4 text-[#75CBB3]" />{order.distributor.phone}
                                            </a>
                                            <a href={`mailto:${order.distributor.email}`} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg text-sm font-bold text-[#013A57] hover:bg-[#75CBB3]/20 transition-colors border border-slate-200">
                                                <Mail className="w-4 h-4 text-[#75CBB3]" />{order.distributor.email}
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#75CBB3] rounded-full flex items-center justify-center text-white font-black text-sm">RW</div>
                                        <div>
                                            <p className="font-black text-[#013A57]">Rana Walk® Oficial</p>
                                            <p className="text-sm text-slate-500">Venta directa • Costa Rica</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-4 mb-4">
                                {order.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                                        <div><p className="font-bold text-[#013A57]">{item.name}</p><p className="text-xs text-slate-400">Cantidad: {item.qty}</p></div>
                                        <p className="font-black text-[#75CBB3]">₡{item.price.toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <div>{order.tracking && <p className="text-sm text-slate-500">Tracking: <span className="font-bold text-[#013A57]">{order.tracking}</span></p>}</div>
                                <div className="text-right"><p className="text-[10px] text-slate-400 uppercase font-bold">Total</p><p className="text-xl font-black text-[#75CBB3]">₡{order.total.toLocaleString()}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// Vista de Mi Perfil (Cliente)
export const ClientProfileView = ({ user, onLogout }) => (
    <div className="py-12 animate-fadeIn">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-10"><h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><User className="text-[#75CBB3]" /> Mi Perfil</h1><p className="text-slate-500">Gestiona tu información personal</p></div>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Sidebar */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white text-center">
                    <div className="w-24 h-24 bg-[#75CBB3] rounded-full mx-auto mb-6 flex items-center justify-center text-[#013A57] text-3xl font-black">JC</div>
                    <h2 className="text-xl font-black uppercase mb-1">Juan Cliente</h2>
                    <p className="text-slate-400 text-xs mb-6">Cliente Rana Walk®</p>
                    <div className="space-y-2">
                        <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 text-white font-bold text-xs uppercase hover:bg-white/10 transition-all"><span className="flex items-center gap-3"><ShoppingBag className="w-4 h-4 text-[#75CBB3]" />Mis Pedidos</span><ChevronRight className="w-4 h-4" /></button>
                        <button className="w-full flex items-center justify-between p-4 bg-transparent rounded-xl text-slate-400 font-bold text-xs uppercase hover:text-white transition-all"><span className="flex items-center gap-3"><MapPin className="w-4 h-4" />Direcciones</span><ChevronRight className="w-4 h-4" /></button>
                        <button onClick={onLogout} className="w-full flex items-center gap-3 p-4 text-red-400 font-bold text-xs uppercase mt-8 hover:text-red-300 transition-all"><LogOut className="w-4 h-4" />Cerrar Sesión</button>
                    </div>
                </div>
                {/* Content */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                        <h3 className="text-lg font-black text-[#013A57] uppercase mb-6 flex items-center gap-2"><User className="text-[#75CBB3]" />Información Personal</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Nombre</p><p className="font-bold text-[#013A57]">Juan Cliente</p></div>
                            <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Email</p><p className="font-bold text-[#013A57] flex items-center gap-2"><Mail className="w-4 h-4 text-[#75CBB3]" />cliente@ranawalk.com</p></div>
                            <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Teléfono</p><p className="font-bold text-[#013A57] flex items-center gap-2"><Phone className="w-4 h-4 text-[#75CBB3]" />+506 8888-9999</p></div>
                            <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Miembro desde</p><p className="font-bold text-[#013A57] flex items-center gap-2"><Calendar className="w-4 h-4 text-[#75CBB3]" />Enero 2024</p></div>
                        </div>
                        <button className="mt-6 bg-[#75CBB3] text-[#013A57] px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2"><Edit className="w-4 h-4" />Editar</button>
                    </div>
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                        <h3 className="text-lg font-black text-[#013A57] uppercase mb-6 flex items-center gap-2"><MapPin className="text-[#75CBB3]" />Dirección Principal</h3>
                        <div className="bg-slate-50 rounded-2xl p-6"><p className="font-bold text-[#013A57] mb-2">Casa</p><p className="text-slate-600">Ave. Principal 123, Rohrmoser<br />San José, Costa Rica<br />CP: 10109</p></div>
                        <button className="mt-4 text-[#75CBB3] font-bold text-xs uppercase flex items-center gap-2">+ Agregar dirección</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
