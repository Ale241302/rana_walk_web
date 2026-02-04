import React from 'react';
import { Users, Truck, Package, ShoppingBag, Search, Filter, Mail, Phone, MapPin, Calendar, Eye, Edit, Trash2, MoreVertical, Navigation } from 'lucide-react';

// Datos quemados
const clientsData = [
    { id: 1, name: 'Pedro García', email: 'pedro@email.com', phone: '+506 8888-1111', location: 'San José', orders: 12, totalSpent: 450000, status: 'active' },
    { id: 2, name: 'Ana Martínez', email: 'ana@email.com', phone: '+506 8888-2222', location: 'Heredia', orders: 8, totalSpent: 280000, status: 'active' },
    { id: 3, name: 'Luis Rodríguez', email: 'luis@email.com', phone: '+506 8888-3333', location: 'Cartago', orders: 5, totalSpent: 175000, status: 'inactive' },
    { id: 4, name: 'Carmen López', email: 'carmen@email.com', phone: '+506 8888-4444', location: 'Alajuela', orders: 15, totalSpent: 520000, status: 'active' },
];

const distributorsData = [
    { id: 1, name: 'Distribuciones ABC', contact: 'Miguel Torres', email: 'miguel@abc.com', phone: '+506 7777-1111', region: 'Zona Norte', clients: 45, sales: 2500000, status: 'active' },
    { id: 2, name: 'Comercial XYZ', contact: 'Sandra Mora', email: 'sandra@xyz.com', phone: '+506 7777-2222', region: 'Zona Sur', clients: 32, sales: 1800000, status: 'active' },
    { id: 3, name: 'Ventas del Valle', contact: 'José Ramírez', email: 'jose@valle.com', phone: '+506 7777-3333', region: 'GAM', clients: 78, sales: 4200000, status: 'active' },
];

const productsData = [
    { id: 1, name: 'Sistema GOLIATH', sku: 'RW-GOL-001', price: 85000, stock: 150, category: 'Sistemas', status: 'active' },
    { id: 2, name: 'Sistema VELOX', sku: 'RW-VEL-002', price: 78000, stock: 200, category: 'Sistemas', status: 'active' },
    { id: 3, name: 'Sistema ORBIS', sku: 'RW-ORB-003', price: 72000, stock: 180, category: 'Sistemas', status: 'active' },
    { id: 4, name: 'Sistema LEOPARD', sku: 'RW-LEO-004', price: 82000, stock: 120, category: 'Sistemas', status: 'active' },
];

const ordersData = [
    { id: 'ORD-001', client: 'Pedro García', distributor: 'Distribuciones ABC', subDistributor: null, date: '2024-01-25', total: 170000, status: 'completed', paymentStatus: 'paid', tracking: 'RW12345CR' },
    { id: 'ORD-002', client: 'Ana Martínez', distributor: 'Comercial XYZ', subDistributor: 'Ventas Norte', date: '2024-01-24', total: 78000, status: 'shipped', paymentStatus: 'paid', tracking: 'RW12346CR' },
    { id: 'ORD-003', client: 'Carmen López', distributor: 'Ventas del Valle', subDistributor: 'Comercial Pacífico', date: '2024-01-23', total: 235000, status: 'processing', paymentStatus: 'pending', tracking: null },
    { id: 'ORD-004', client: 'Luis Rodríguez', distributor: null, subDistributor: null, date: '2024-01-21', total: 140000, status: 'pending', paymentStatus: 'pending', tracking: null },
];

const StatusBadge = ({ status }) => {
    const styles = {
        active: 'bg-emerald-500/20 text-emerald-400',
        inactive: 'bg-slate-500/20 text-slate-400',
        pending: 'bg-amber-500/20 text-amber-400',
        completed: 'bg-emerald-500/20 text-emerald-400',
        shipped: 'bg-blue-500/20 text-blue-400',
        processing: 'bg-purple-500/20 text-purple-400',
        paid: 'bg-emerald-500/20 text-emerald-400',
    };
    const labels = { active: 'Activo', inactive: 'Inactivo', pending: 'Pendiente', completed: 'Completado', shipped: 'Enviado', processing: 'Procesando', paid: 'Pagado' };
    return <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${styles[status] || styles.pending}`}>{labels[status] || status}</span>;
};

export const MyClientsView = () => (
    <div className="py-12 animate-fadeIn">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><Users className="text-[#75CBB3]" /> Mis Clientes</h1>
                    <p className="text-slate-500">Gestiona y visualiza todos tus clientes registrados</p>
                </div>
                <button className="mt-4 md:mt-0 bg-[#75CBB3] text-[#013A57] px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs">+ Nuevo Cliente</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Total</p><p className="text-3xl font-black text-[#013A57]">{clientsData.length}</p></div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Activos</p><p className="text-3xl font-black text-emerald-500">{clientsData.filter(c => c.status === 'active').length}</p></div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Pedidos</p><p className="text-3xl font-black text-[#013A57]">{clientsData.reduce((s, c) => s + c.orders, 0)}</p></div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Ventas</p><p className="text-3xl font-black text-[#75CBB3]">₡{(clientsData.reduce((s, c) => s + c.totalSpent, 0) / 1000).toFixed(0)}K</p></div>
            </div>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-slate-900 text-white"><tr><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Cliente</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Contacto</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Ubicación</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Pedidos</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Total</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Estado</th></tr></thead>
                    <tbody>{clientsData.map(c => (<tr key={c.id} className="border-b border-slate-100 hover:bg-slate-50"><td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#75CBB3]/20 rounded-full flex items-center justify-center text-[#013A57] font-black text-sm">{c.name.split(' ').map(n => n[0]).join('')}</div><span className="font-bold text-[#013A57]">{c.name}</span></div></td><td className="px-6 py-4 text-sm text-slate-600">{c.email}</td><td className="px-6 py-4 text-slate-600"><MapPin className="w-4 h-4 inline mr-1 text-[#75CBB3]" />{c.location}</td><td className="px-6 py-4 font-bold">{c.orders}</td><td className="px-6 py-4 font-black text-[#75CBB3]">₡{c.totalSpent.toLocaleString()}</td><td className="px-6 py-4"><StatusBadge status={c.status} /></td></tr>))}</tbody>
                </table>
            </div>
        </div>
    </div>
);

export const MyDistributorsView = () => (
    <div className="py-12 animate-fadeIn">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <div><h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><Truck className="text-[#75CBB3]" /> Mis Distribuidores</h1><p className="text-slate-500">Red de distribuidores autorizados</p></div>
                <button className="mt-4 md:mt-0 bg-[#75CBB3] text-[#013A57] px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs">+ Nuevo Distribuidor</button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {distributorsData.map(d => (
                    <div key={d.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 hover:shadow-xl transition-all">
                        <div className="flex items-start justify-between mb-4"><div><h3 className="text-lg font-black text-[#013A57] uppercase">{d.name}</h3><p className="text-slate-500 text-sm">{d.contact}</p></div><StatusBadge status={d.status} /></div>
                        <div className="space-y-2 mb-4 text-sm text-slate-600"><div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#75CBB3]" />{d.email}</div><div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#75CBB3]" />{d.phone}</div><div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#75CBB3]" />{d.region}</div><div className="flex items-center gap-2"><Users className="w-4 h-4 text-[#75CBB3]" />{d.clients} clientes</div></div>
                        <div className="pt-4 border-t border-slate-100"><p className="text-[10px] text-slate-400 uppercase font-bold">Ventas</p><p className="text-2xl font-black text-[#75CBB3]">₡{(d.sales / 1000000).toFixed(2)}M</p></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const MyProductsView = () => (
    <div className="py-12 animate-fadeIn">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <div><h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><Package className="text-[#75CBB3]" /> Mis Productos</h1><p className="text-slate-500">Catálogo de sistemas Rana Walk®</p></div>
                <button className="mt-4 md:mt-0 bg-[#75CBB3] text-[#013A57] px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs">+ Nuevo Producto</button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {productsData.map(p => (
                    <div key={p.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 hover:shadow-xl transition-all">
                        <div className="w-full h-32 bg-gradient-to-br from-[#75CBB3]/20 to-[#013A57]/10 rounded-2xl mb-4 flex items-center justify-center"><Package className="w-12 h-12 text-[#75CBB3]" /></div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">{p.category}</p>
                        <h3 className="text-lg font-black text-[#013A57] uppercase mb-1">{p.name}</h3>
                        <p className="text-xs text-slate-400 mb-4">SKU: {p.sku}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <div><p className="text-xl font-black text-[#75CBB3]">₡{p.price.toLocaleString()}</p><p className="text-xs text-slate-400">Stock: {p.stock}</p></div>
                            <button className="p-2 bg-slate-50 hover:bg-[#75CBB3]/20 rounded-lg"><Edit className="w-4 h-4 text-slate-600" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const AdminOrdersView = () => {
    const handleTrack = (orderId, tracking) => {
        if (tracking) {
            alert(`Rastreando pedido ${orderId}\nNúmero de tracking: ${tracking}`);
        } else {
            alert(`El pedido ${orderId} aún no tiene número de rastreo asignado.`);
        }
    };

    return (
        <div className="py-12 animate-fadeIn">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                    <div><h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><ShoppingBag className="text-[#75CBB3]" /> Pedidos</h1><p className="text-slate-500">Gestión de pedidos del sistema</p></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Total</p><p className="text-3xl font-black text-[#013A57]">{ordersData.length}</p></div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Pendientes</p><p className="text-3xl font-black text-amber-500">{ordersData.filter(o => o.status === 'pending').length}</p></div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Completados</p><p className="text-3xl font-black text-emerald-500">{ordersData.filter(o => o.status === 'completed').length}</p></div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Ventas</p><p className="text-3xl font-black text-[#75CBB3]">₡{(ordersData.reduce((s, o) => s + o.total, 0) / 1000).toFixed(0)}K</p></div>
                </div>
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-slate-900 text-white"><tr><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Pedido</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Cliente</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Canal</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Fecha</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Total</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Estado</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Pago</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Acciones</th></tr></thead>
                        <tbody>{ordersData.map(o => (<tr key={o.id} className="border-b border-slate-100 hover:bg-slate-50"><td className="px-6 py-4 font-black text-[#013A57]">{o.id}</td><td className="px-6 py-4 font-bold text-slate-700">{o.client}</td><td className="px-6 py-4">{!o.distributor && !o.subDistributor ? <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-slate-500/20 text-slate-400">Propio</span> : o.subDistributor ? <div><span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-blue-500/20 text-blue-400">{o.distributor}</span><p className="text-[9px] text-purple-400 mt-1">vía {o.subDistributor}</p></div> : <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-blue-500/20 text-blue-400">{o.distributor}</span>}</td><td className="px-6 py-4 text-slate-500"><Calendar className="w-4 h-4 inline mr-1" />{o.date}</td><td className="px-6 py-4 font-black text-[#75CBB3]">₡{o.total.toLocaleString()}</td><td className="px-6 py-4"><StatusBadge status={o.status} /></td><td className="px-6 py-4"><StatusBadge status={o.paymentStatus} /></td><td className="px-6 py-4"><button onClick={() => handleTrack(o.id, o.tracking)} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase transition-colors"><Navigation className="w-4 h-4" />Rastrear</button></td></tr>))}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

