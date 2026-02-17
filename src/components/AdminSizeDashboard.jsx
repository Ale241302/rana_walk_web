import React, { useState, useMemo } from 'react';
import { Ruler, TrendingUp, Package, BarChart3, ChevronDown, Filter } from 'lucide-react';

const SIZES = ["S1", "S2", "S3", "S4", "S5", "S6"];
const ALL_SYSTEMS = ["US Men", "US Women", "EU", "UK Men", "UK Women"];

const MOCK_PRODUCTS = [
    { id: 'all', name: 'Todos los Productos' },
    { id: 'RW-GOL-001', name: 'Sistema GOLIATH' },
    { id: 'RW-VEL-002', name: 'Sistema VELOX' },
    { id: 'RW-ORB-003', name: 'Sistema ORBIS' },
    { id: 'RW-LEO-004', name: 'Sistema LEOPARD' },
];

// Generar datos de ventas aleatorios pero consistentes
const generateSalesData = (productId) => {
    // Seed pseudo-random
    const seed = productId.length;
    return SIZES.map((size, index) => {
        const base = (index + seed) % 3;
        // Tendencia normal: tallas centrales (S3-S4) venden más
        let sales = 0;
        if (size === 'S1') sales = 15 + base * 2;
        if (size === 'S2') sales = 45 + base * 5;
        if (size === 'S3') sales = 120 + base * 10;
        if (size === 'S4') sales = 145 + base * 8;
        if (size === 'S5') sales = 90 + base * 4;
        if (size === 'S6') sales = 25 + base * 3;

        // Variación por producto
        if (productId === 'RW-VEL-002') sales *= 0.8; // Menos volumen
        if (productId === 'RW-GOL-001') sales *= 1.2; // Más volumen

        return {
            id: size,
            sales: Math.round(sales),
            range: {
                "S1": "22.0–23.8 cm",
                "S2": "23.8–25.8 cm",
                "S3": "25.8–27.2 cm",
                "S4": "27.2–28.6 cm",
                "S5": "28.6–29.8 cm",
                "S6": "29.8–31.2 cm"
            }[size],
            systems: {
                "S1": { "US Men": "3.5–4", "EU": "34–36" },
                "S2": { "US Men": "4.5–6.5", "EU": "37–39" },
                "S3": { "US Men": "7–8.5", "EU": "40–41" },
                "S4": { "US Men": "9–10", "EU": "42–43" },
                "S5": { "US Men": "10.5–11.5", "EU": "44–45" },
                "S6": { "US Men": "12–13", "EU": "46–47" },
            }[size]
        };
    });
};

export default function AdminSizeDashboard() {
    const [selectedProduct, setSelectedProduct] = useState('all');
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

    const salesData = useMemo(() => generateSalesData(selectedProduct), [selectedProduct]);
    const totalSales = salesData.reduce((acc, curr) => acc + curr.sales, 0);
    const maxSales = Math.max(...salesData.map(d => d.sales));

    const selectedProductName = MOCK_PRODUCTS.find(p => p.id === selectedProduct)?.name;

    return (
        <div className="animate-fadeIn">
            <div className="container mx-auto">
                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-[#013A57] uppercase tracking-tight flex items-center gap-3 mb-1">
                            <BarChart3 className="text-[#75CBB3]" /> Desglose de Ventas por Talla
                        </h1>
                        <p className="text-slate-500 text-sm">Análisis de movimiento de inventario</p>
                    </div>

                    {/* Product Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                            className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm hover:border-[#75CBB3] transition-colors min-w-[240px] justify-between"
                        >
                            <div className="flex items-center gap-2 overflow-hidden">
                                <Package className="w-4 h-4 text-[#75CBB3]" />
                                <span className="text-sm font-bold text-[#013A57] truncate">{selectedProductName}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isProductMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isProductMenuOpen && (
                            <div className="absolute right-0 top-full mt-2 w-full bg-white rounded-xl border border-slate-100 shadow-xl z-20 overflow-hidden animate-fadeIn">
                                {MOCK_PRODUCTS.map(product => (
                                    <button
                                        key={product.id}
                                        onClick={() => { setSelectedProduct(product.id); setIsProductMenuOpen(false); }}
                                        className={`w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${selectedProduct === product.id ? 'bg-[#75CBB3]/10 text-[#013A57]' : 'text-slate-500 hover:bg-slate-50'
                                            }`}
                                    >
                                        {product.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Left: Summary Cards */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-[#013A57] rounded-3xl p-6 text-white relative overflow-hidden shadow-lg">
                            <div className="relative z-10">
                                <p className="text-[#75CBB3] text-xs font-black uppercase tracking-widest mb-2">Total Unidades</p>
                                <p className="text-4xl font-black">{totalSales}</p>
                                <p className="text-slate-400 text-xs mt-2">En el periodo seleccionado</p>
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#75CBB3] rounded-full opacity-10 blur-xl"></div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-black text-[#013A57] uppercase tracking-wider mb-4 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-[#75CBB3]" /> Top Talla
                            </h3>
                            {salesData.sort((a, b) => b.sales - a.sales).slice(0, 1).map(top => (
                                <div key={top.id}>
                                    <div className="flex items-end gap-2 mb-1">
                                        <span className="text-3xl font-black text-[#013A57]">{top.id}</span>
                                        <span className="text-[#75CBB3] font-bold text-lg mb-1">{Math.round((top.sales / totalSales) * 100)}%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-[#013A57] h-full rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2 font-medium">La talla más vendida del sistema.</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Sales Table */}
                    <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="text-left py-4 px-4 text-xs font-black text-slate-400 uppercase tracking-wider">Talla</th>
                                        <th className="text-left py-4 px-4 text-xs font-black text-slate-400 uppercase tracking-wider">Referencias</th>
                                        <th className="text-left py-4 px-4 text-xs font-black text-slate-400 uppercase tracking-wider w-1/3">Distribución</th>
                                        <th className="text-right py-4 px-4 text-xs font-black text-slate-400 uppercase tracking-wider">Ventas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {salesData.sort((a, b) => a.id.localeCompare(b.id)).map(row => {
                                        const percent = (row.sales / totalSales) * 100;
                                        const isMax = row.sales === maxSales;

                                        return (
                                            <tr key={row.id} className="group hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
                                                <td className="py-4 px-4">
                                                    <span className={`text-lg font-black ${isMax ? 'text-[#75CBB3]' : 'text-[#013A57]'}`}>
                                                        {row.id}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded w-fit">US {row.systems["US Men"]}</span>
                                                        <span className="text-[10px] text-slate-400 font-medium">EU {row.systems["EU"]} • {row.range}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full transition-all duration-500 ${isMax ? 'bg-[#75CBB3]' : 'bg-[#013A57]'}`}
                                                                style={{ width: `${(row.sales / maxSales) * 100}%` }}
                                                            ></div>
                                                        </div>
                                                        <span className="text-xs font-bold text-slate-400 w-8">{Math.round(percent)}%</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-4 text-right">
                                                    <span className="font-bold text-[#013A57]">{row.sales}</span>
                                                    <span className="text-[10px] text-slate-400 block">unidades</span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
