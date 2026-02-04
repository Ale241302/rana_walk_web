import React from 'react';
import { Package, Users, User, ShoppingBag, MapPin, Phone, Mail, Calendar, Building, Award, TrendingUp, Edit, Eye, Globe, Share2, Instagram, Facebook, Linkedin, Store, Clock } from 'lucide-react';

// Datos quemados para Distribuidor
const distProductsData = [
    { id: 1, name: 'Sistema GOLIATH', sku: 'RW-GOL-001', price: 85000, stock: 45, sold: 120, commission: 12750 },
    { id: 2, name: 'Sistema VELOX', sku: 'RW-VEL-002', price: 78000, stock: 60, sold: 95, commission: 11700 },
    { id: 3, name: 'Sistema ORBIS', sku: 'RW-ORB-003', price: 72000, stock: 55, sold: 80, commission: 10800 },
    { id: 4, name: 'Sistema LEOPARD', sku: 'RW-LEO-004', price: 82000, stock: 35, sold: 65, commission: 12300 },
];

const subDistributorsData = [
    { id: 1, name: 'Ventas Norte', contact: 'Roberto Vega', email: 'roberto@norte.com', phone: '+506 6666-1111', region: 'Guanacaste', sales: 850000, status: 'active' },
    { id: 2, name: 'Comercial Pacífico', contact: 'Laura Solís', email: 'laura@pacifico.com', phone: '+506 6666-2222', region: 'Puntarenas', sales: 620000, status: 'active' },
    { id: 3, name: 'Distribuidora Central', contact: 'Marcos Arias', email: 'marcos@central.com', phone: '+506 6666-3333', region: 'San José Centro', sales: 1200000, status: 'active' },
];

const distOrdersData = [
    { id: 'ORD-D001', client: 'Tienda Deportiva XYZ', date: '2024-01-25', total: 255000, items: 3, status: 'completed' },
    { id: 'ORD-D002', client: 'Calzado Premium', date: '2024-01-24', total: 170000, items: 2, status: 'shipped' },
    { id: 'ORD-D003', client: 'SportZone', date: '2024-01-23', total: 340000, items: 4, status: 'processing' },
    { id: 'ORD-D004', client: 'Almacén del Pie', date: '2024-01-22', total: 85000, items: 1, status: 'pending' },
];

const StatusBadge = ({ status }) => {
    const styles = { active: 'bg-emerald-500/20 text-emerald-400', pending: 'bg-amber-500/20 text-amber-400', completed: 'bg-emerald-500/20 text-emerald-400', shipped: 'bg-blue-500/20 text-blue-400', processing: 'bg-purple-500/20 text-purple-400' };
    const labels = { active: 'Activo', pending: 'Pendiente', completed: 'Completado', shipped: 'Enviado', processing: 'Procesando' };
    return <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${styles[status]}`}>{labels[status]}</span>;
};

// Vista de Productos del Distribuidor
export const DistProductsView = () => (
    <div className="py-12 animate-fadeIn">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-10">
                <h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><Package className="text-[#75CBB3]" /> Mis Productos</h1>
                <p className="text-slate-500">Inventario y comisiones de tus productos</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Productos</p><p className="text-3xl font-black text-[#013A57]">{distProductsData.length}</p></div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Stock Total</p><p className="text-3xl font-black text-[#013A57]">{distProductsData.reduce((s, p) => s + p.stock, 0)}</p></div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Vendidos</p><p className="text-3xl font-black text-emerald-500">{distProductsData.reduce((s, p) => s + p.sold, 0)}</p></div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Comisiones</p><p className="text-3xl font-black text-[#75CBB3]">₡{(distProductsData.reduce((s, p) => s + p.commission, 0) / 1000).toFixed(0)}K</p></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {distProductsData.map(p => (
                    <div key={p.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 hover:shadow-xl transition-all">
                        <div className="flex items-start gap-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#75CBB3]/20 to-[#013A57]/10 rounded-2xl flex items-center justify-center"><Package className="w-10 h-10 text-[#75CBB3]" /></div>
                            <div className="flex-1">
                                <h3 className="text-lg font-black text-[#013A57] uppercase">{p.name}</h3>
                                <p className="text-xs text-slate-400 mb-2">SKU: {p.sku}</p>
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <div><p className="text-[10px] text-slate-400 uppercase font-bold">Precio</p><p className="font-black text-[#013A57]">₡{p.price.toLocaleString()}</p></div>
                                    <div><p className="text-[10px] text-slate-400 uppercase font-bold">Stock</p><p className="font-black text-[#013A57]">{p.stock}</p></div>
                                    <div><p className="text-[10px] text-slate-400 uppercase font-bold">Comisión</p><p className="font-black text-[#75CBB3]">₡{p.commission.toLocaleString()}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// Vista de Sub Distribuidores
export const MySubDistributorsView = () => (
    <div className="py-12 animate-fadeIn">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <div><h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><Users className="text-[#75CBB3]" /> Mis Sub Distribuidores</h1><p className="text-slate-500">Red de sub distribuidores asociados</p></div>
                <button className="mt-4 md:mt-0 bg-[#75CBB3] text-[#013A57] px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs">+ Nuevo Sub Distribuidor</button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {subDistributorsData.map(d => (
                    <div key={d.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 hover:shadow-xl transition-all">
                        <div className="flex items-start justify-between mb-4"><h3 className="text-lg font-black text-[#013A57] uppercase">{d.name}</h3><StatusBadge status={d.status} /></div>
                        <p className="text-slate-500 text-sm mb-4">{d.contact}</p>
                        <div className="space-y-2 text-sm text-slate-600 mb-4">
                            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#75CBB3]" />{d.email}</div>
                            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#75CBB3]" />{d.phone}</div>
                            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#75CBB3]" />{d.region}</div>
                        </div>
                        <div className="pt-4 border-t border-slate-100"><p className="text-[10px] text-slate-400 uppercase font-bold">Ventas</p><p className="text-2xl font-black text-[#75CBB3]">₡{(d.sales / 1000).toFixed(0)}K</p></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// Vista de Mi Información
export const MyInfoView = ({ user }) => {
    // Datos quemados del distribuidor
    const distributorInfo = {
        name: 'María Distribuidora',
        company: 'Distribuciones Premium S.A.',
        email: 'distribuidor@ranawalk.com',
        phone: '+506 8888-5555',
        level: 'Gold',
        businessType: 'hybrid', // 'physical', 'online', 'hybrid'
        socialMedia: {
            instagram: '@distribuciones_premium',
            facebook: 'Distribuciones Premium CR',
            linkedin: 'distribuciones-premium-sa'
        },
        locations: [
            { id: 1, name: 'Sucursal Escazú', address: 'Centro Comercial Multiplaza, Local 234', city: 'Escazú, San José', phone: '+506 2201-1234', hours: 'Lun-Sáb 10:00 - 20:00' },
            { id: 2, name: 'Sucursal Heredia', address: 'Mall Paseo de las Flores, Local 118', city: 'Heredia Centro', phone: '+506 2262-5678', hours: 'Lun-Dom 10:00 - 21:00' },
            { id: 3, name: 'Sucursal Cartago', address: 'Plaza del Valle, Local 45', city: 'Cartago Centro', phone: '+506 2551-9012', hours: 'Lun-Sáb 09:00 - 19:00' }
        ],
        website: 'www.distribpremium.co.cr',
        stats: { sales: 156, revenue: '₡12.5M', subDist: 3, satisfaction: '98%' }
    };

    const businessTypeLabels = { physical: 'Tiendas Físicas', online: 'Solo En Línea', hybrid: 'Físico + En Línea' };
    const businessTypeColors = { physical: 'bg-blue-500/20 text-blue-400', online: 'bg-purple-500/20 text-purple-400', hybrid: 'bg-emerald-500/20 text-emerald-400' };

    return (
        <div className="py-12 animate-fadeIn">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-10"><h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><User className="text-[#75CBB3]" /> Mi Información</h1><p className="text-slate-500">Detalles de tu cuenta de distribuidor</p></div>

                {/* Header Card */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-6">
                    <div className="bg-gradient-to-r from-[#013A57] to-[#066383] p-8 text-white">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="w-24 h-24 bg-[#75CBB3] rounded-full flex items-center justify-center text-[#013A57] text-3xl font-black shrink-0">MD</div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-black uppercase">{distributorInfo.name}</h2>
                                <p className="text-slate-300">{distributorInfo.company}</p>
                                <div className="flex flex-wrap items-center gap-3 mt-3">
                                    <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm"><Award className="w-4 h-4 text-[#75CBB3]" />Nivel {distributorInfo.level}</span>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${businessTypeColors[distributorInfo.businessType]}`}>{businessTypeLabels[distributorInfo.businessType]}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="p-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Email</p><p className="font-bold text-[#013A57] flex items-center gap-2 text-sm"><Mail className="w-4 h-4 text-[#75CBB3]" />{distributorInfo.email}</p></div>
                            <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Teléfono</p><p className="font-bold text-[#013A57] flex items-center gap-2 text-sm"><Phone className="w-4 h-4 text-[#75CBB3]" />{distributorInfo.phone}</p></div>
                            <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Sitio Web</p><p className="font-bold text-[#013A57] flex items-center gap-2 text-sm"><Globe className="w-4 h-4 text-[#75CBB3]" />{distributorInfo.website}</p></div>
                            <div><p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Empresa</p><p className="font-bold text-[#013A57] flex items-center gap-2 text-sm"><Building className="w-4 h-4 text-[#75CBB3]" />{distributorInfo.company}</p></div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-6 border-t border-slate-100 mb-8">
                            <h3 className="text-lg font-black text-[#013A57] uppercase mb-4 flex items-center gap-2"><Share2 className="text-[#75CBB3]" />Redes Sociales</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <a href="#" className="flex items-center gap-4 p-5 bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all group">
                                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/30">
                                        <Instagram className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] text-pink-400 uppercase font-bold tracking-wider">Instagram</p>
                                        <p className="font-bold text-[#013A57] text-sm truncate">{distributorInfo.socialMedia.instagram}</p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all group">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                        <Facebook className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] text-blue-400 uppercase font-bold tracking-wider">Facebook</p>
                                        <p className="font-bold text-[#013A57] text-sm truncate">{distributorInfo.socialMedia.facebook}</p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 p-5 bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all group">
                                    <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] text-sky-400 uppercase font-bold tracking-wider">LinkedIn</p>
                                        <p className="font-bold text-[#013A57] text-sm truncate">{distributorInfo.socialMedia.linkedin}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="pt-6 border-t border-slate-100">
                            <h3 className="text-lg font-black text-[#013A57] uppercase mb-4 flex items-center gap-2"><TrendingUp className="text-[#75CBB3]" />Estadísticas</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-2xl font-black text-[#013A57]">{distributorInfo.stats.sales}</p><p className="text-[10px] text-slate-400 uppercase font-bold">Ventas</p></div>
                                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-2xl font-black text-[#75CBB3]">{distributorInfo.stats.revenue}</p><p className="text-[10px] text-slate-400 uppercase font-bold">Ingresos</p></div>
                                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-2xl font-black text-[#013A57]">{distributorInfo.stats.subDist}</p><p className="text-[10px] text-slate-400 uppercase font-bold">Sub Dist.</p></div>
                                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-2xl font-black text-emerald-500">{distributorInfo.stats.satisfaction}</p><p className="text-[10px] text-slate-400 uppercase font-bold">Satisfacción</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Physical Locations */}
                {(distributorInfo.businessType === 'physical' || distributorInfo.businessType === 'hybrid') && (
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-black text-[#013A57] uppercase flex items-center gap-2"><Store className="text-[#75CBB3]" />Locales Físicos</h3>
                            <span className="bg-[#75CBB3]/20 text-[#013A57] px-3 py-1 rounded-full text-[10px] font-black uppercase">{distributorInfo.locations.length} Ubicaciones</span>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {distributorInfo.locations.map(loc => (
                                <div key={loc.id} className="bg-slate-50 rounded-2xl p-5 hover:bg-slate-100 transition-all group">
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-10 h-10 bg-[#75CBB3]/20 rounded-xl flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-[#75CBB3]" /></div>
                                        <div><h4 className="font-black text-[#013A57] uppercase text-sm">{loc.name}</h4><p className="text-xs text-slate-500">{loc.city}</p></div>
                                    </div>
                                    <div className="space-y-2 text-sm text-slate-600 pl-[52px]">
                                        <p className="flex items-start gap-2"><Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />{loc.address}</p>
                                        <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-slate-400" />{loc.phone}</p>
                                        <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" />{loc.hours}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <button className="mt-6 bg-[#75CBB3] text-[#013A57] px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:brightness-110 transition-all"><Edit className="w-4 h-4" />Editar Información</button>
            </div>
        </div>
    );
};

// Vista de Pedidos del Distribuidor
export const DistOrdersView = () => (
    <div className="py-12 animate-fadeIn">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-10"><h1 className="text-3xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-2"><ShoppingBag className="text-[#75CBB3]" /> Pedidos</h1><p className="text-slate-500">Gestión de pedidos recibidos</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Total</p><p className="text-3xl font-black text-[#013A57]">{distOrdersData.length}</p></div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Pendientes</p><p className="text-3xl font-black text-amber-500">{distOrdersData.filter(o => o.status === 'pending').length}</p></div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Enviados</p><p className="text-3xl font-black text-blue-500">{distOrdersData.filter(o => o.status === 'shipped').length}</p></div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"><p className="text-slate-400 text-xs font-bold uppercase mb-2">Ventas</p><p className="text-3xl font-black text-[#75CBB3]">₡{(distOrdersData.reduce((s, o) => s + o.total, 0) / 1000).toFixed(0)}K</p></div>
            </div>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-slate-900 text-white"><tr><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Pedido</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Cliente</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Fecha</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Items</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Total</th><th className="text-left px-6 py-4 text-[10px] font-black uppercase">Estado</th></tr></thead>
                    <tbody>{distOrdersData.map(o => (<tr key={o.id} className="border-b border-slate-100 hover:bg-slate-50"><td className="px-6 py-4 font-black text-[#013A57]">{o.id}</td><td className="px-6 py-4 font-bold text-slate-700">{o.client}</td><td className="px-6 py-4 text-slate-500"><Calendar className="w-4 h-4 inline mr-1" />{o.date}</td><td className="px-6 py-4 text-slate-600">{o.items}</td><td className="px-6 py-4 font-black text-[#75CBB3]">₡{o.total.toLocaleString()}</td><td className="px-6 py-4"><StatusBadge status={o.status} /></td></tr>))}</tbody>
                </table>
            </div>
        </div>
    </div>
);
