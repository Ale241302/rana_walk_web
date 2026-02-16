import React, { useState, useMemo } from 'react';
import { X, Users, Ruler } from 'lucide-react';
import { sizeConversionData, seriesData, getSizeCutLines, getTrimLevel, getTrimMessage, getAlternativeSeries } from '../../data/seriesGeometry';
import InsoleSilhouette from './InsoleSilhouette';

// Iconos de género personalizados
const MaleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="4" r="3" />
        <path d="M12 8c-2 0-4 1-4 3v6h2v7h4v-7h2v-6c0-2-2-3-4-3z" />
    </svg>
);

const FemaleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="4" r="3" />
        <path d="M12 8c-2 0-3.5 1-4 2l-1 5h3v9h4v-9h3l-1-5c-.5-1-2-2-4-2z" />
    </svg>
);

// Datos de puntos de ventas
const distributorsAndSubDistributors = [
    { id: 1, name: 'Distribuciones ABC', type: 'distributor', region: 'Zona Norte' },
    { id: 2, name: 'Comercial XYZ', type: 'distributor', region: 'Zona Sur' },
    { id: 3, name: 'Ventas del Valle', type: 'distributor', region: 'GAM' },
    { id: 4, name: 'Ventas Norte', type: 'sub-distributor', region: 'Guanacaste', parentId: 1 },
    { id: 5, name: 'Comercial Pacífico', type: 'sub-distributor', region: 'Puntarenas', parentId: 2 },
    { id: 6, name: 'Distribuidora Central', type: 'sub-distributor', region: 'San José Centro', parentId: 3 },
];

const AddToCartModal = ({ isOpen, onClose, onConfirm, system }) => {
    const [unit, setUnit] = useState('US');
    const [gender, setGender] = useState('Masculino');
    const [size, setSize] = useState('');  // stores "seriesId:label" e.g. "S3:8.5"
    const [quantity, setQuantity] = useState(1);
    const [selectedDistributor, setSelectedDistributor] = useState('');

    // ── Build flat list of individual tallas for the current unit/gender ──
    const individualSizes = useMemo(() => {
        const items = [];
        const seriesKeys = Object.keys(sizeConversionData);

        for (const sId of seriesKeys) {
            // Get valid sizes (cut lines) for this series/unit/gender using shared logic
            const lines = getSizeCutLines(sId, unit, gender);

            lines.forEach(line => {
                let label = line.label;
                if (unit === 'CM') label = `${(line.lengthMm / 10).toFixed(1)} cm`;
                else if (unit === 'IN') label = `${line.lengthIn}"`;

                // Composite value: "S1:Label"
                // Using label as unique ID per series
                items.push({
                    value: `${sId}:${line.label}`, // Keep original label in value for lookup
                    label: `${sId} - ${label}`,
                    seriesId: sId,
                    lineData: line,
                    lengthMm: line.lengthMm
                });
            });
        }

        // Sort by length? (Small to Large)
        return items.sort((a, b) => a.lengthMm - b.lengthMm);
    }, [unit, gender]);

    // ── Cálculo reactivo de serie y trim ──
    const seriesCalc = useMemo(() => {
        if (!size) return null;

        // Parse composite value: "S1:Label"
        const [seriesId, label] = size.split(':');

        // Find the selected item to get details
        const selectedItem = individualSizes.find(i => i.value === size);
        if (!selectedItem) return null;

        const { lineData, lengthMm } = selectedItem;

        // Get generic series data (geometry)
        const series = seriesData.find(s => s.id === seriesId);
        if (!series) return null;

        const selectedLength = lengthMm;

        // Calculate trim info directly from lineData
        // lineData has offset.
        const trimOffset = lineData.offset;
        const requiresTrim = !lineData.isCore; // or trimOffset > 0

        const trimInfo = {
            trim_offset_mm: trimOffset,
            requires_trim: requiresTrim,
            trim_ratio: requiresTrim ? trimOffset / series.length_max_mm : 0
        };

        const trimLevel = getTrimLevel(series, trimOffset);
        const alternative = trimLevel === 'blocked' ? getAlternativeSeries(series.id) : null;
        const trimMessage = getTrimMessage(trimLevel, alternative);

        return {
            series,
            selectedLength,
            trimInfo,
            trimLevel,
            trimMessage
        };
    }, [size, individualSizes]);

    if (!isOpen) return null;

    // Extract seriesId from composite size value
    const selectedGroupId = size ? size.split(':')[0] : null;

    const handleConfirm = () => {
        if (!size) {
            alert('Por favor selecciona una talla');
            return;
        }
        const selectedItem = individualSizes.find(s => s.value === size);
        const selectedDist = selectedDistributor ? distributorsAndSubDistributors.find(d => d.id === parseInt(selectedDistributor)) : null;
        onConfirm({
            systemId: system.id,
            systemName: system.name,
            image: system.image,
            price: 59.90,
            unit,
            gender,
            size: selectedItem?.label || size,
            sizeGroupId: selectedGroupId,
            lengthMm: seriesCalc?.selectedLength || null,
            quantity,
            series: seriesCalc?.series?.id || null,
            trimInfo: seriesCalc?.trimInfo || null,
            distributor: selectedDist ? { id: selectedDist.id, name: selectedDist.name, type: selectedDist.type, region: selectedDist.region } : null
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[95vh] relative z-10 overflow-hidden animate-fadeIn flex flex-col">
                {/* Header */}
                <div className="bg-[#013A57] px-5 py-3 text-white flex justify-between items-center shrink-0">
                    <div>
                        <h3 className="font-bold text-lg">Configura tu {system.name}</h3>
                        <p className="text-xs text-[#75CBB3]/80 mt-0.5">Selecciona tu talla y visualiza tu plantilla</p>
                    </div>
                    <button onClick={onClose}><X className="w-5 h-5 hover:text-[#75CBB3] transition-colors" /></button>
                </div>

                {/* Two-column body */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 flex-1 overflow-hidden">
                    {/* ── LEFT COLUMN: Selectors ── */}
                    <div className="flex flex-col h-full border-r border-slate-100 bg-white">
                        <div className="flex-1 overflow-y-auto p-5 space-y-3">
                            {/* Unit selector */}
                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Unidad de Medida</label>
                                <div className="grid grid-cols-6 gap-2">
                                    {['US', 'BRA', 'EU', 'MEX', 'CM', 'IN'].map(u => (
                                        <button
                                            key={u}
                                            onClick={() => { setUnit(u); setSize(''); }}
                                            className={`py-2 rounded-lg text-sm font-bold border transition-all ${unit === u ? 'bg-[#013A57] text-white border-[#013A57]' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-[#013A57]'}`}
                                        >
                                            {u}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Género</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => { setGender('Masculino'); setSize(''); }}
                                        className={`py-3 rounded-lg font-bold border flex items-center justify-center gap-2 transition-all ${gender === 'Masculino' ? 'bg-[#013A57] text-white border-[#013A57]' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-[#013A57]'}`}
                                        title="Masculino"
                                    >
                                        <MaleIcon className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={() => { setGender('Femenino'); setSize(''); }}
                                        className={`py-3 rounded-lg font-bold border flex items-center justify-center gap-2 transition-all ${gender === 'Femenino' ? 'bg-[#013A57] text-white border-[#013A57]' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-[#013A57]'}`}
                                        title="Femenino"
                                    >
                                        <FemaleIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Size selector — individual tallas */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Talla ({unit})</label>
                                    <a
                                        href="/?view=sizeGuide"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-bold text-[#75CBB3] hover:text-[#013A57] uppercase tracking-wider transition-colors flex items-center gap-1"
                                    >
                                        <Ruler size={12} /> Guía de tallas
                                    </a>
                                </div>
                                <select
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-bold text-[#013A57] focus:outline-none focus:border-[#75CBB3] transition-colors"
                                >
                                    <option value="">Selecciona tu talla</option>
                                    {individualSizes.map(item => (
                                        <option key={item.value} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Cantidad</label>
                                <div className="flex items-center gap-4">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#013A57] font-bold hover:bg-slate-200 transition-colors">-</button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                        className="w-20 text-center font-bold text-xl text-[#013A57] bg-transparent border-b-2 border-slate-200 focus:border-[#75CBB3] outline-none"
                                    />
                                    <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#013A57] font-bold hover:bg-slate-200 transition-colors">+</button>
                                </div>
                            </div>

                            {/* Distributors */}
                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Users className="w-4 h-4 text-[#75CBB3]" />
                                    Seleccionar Punto de Venta <span className="text-slate-300 font-normal">(Opcional)</span>
                                </label>
                                <select
                                    value={selectedDistributor}
                                    onChange={(e) => setSelectedDistributor(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-bold text-[#013A57] focus:outline-none focus:border-[#75CBB3] transition-colors"
                                >
                                    <option value="">Sin preferencia de punto de venta</option>
                                    <optgroup label="Puntos de Venta">
                                        {distributorsAndSubDistributors.filter(d => d.type === 'distributor').map(d => (
                                            <option key={d.id} value={d.id}>{d.name} - {d.region}</option>
                                        ))}
                                    </optgroup>
                                    <optgroup label="Puntos de Venta Asociados">
                                        {distributorsAndSubDistributors.filter(d => d.type === 'sub-distributor').map(d => (
                                            <option key={d.id} value={d.id}>{d.name} - {d.region}</option>
                                        ))}
                                    </optgroup>
                                </select>
                            </div>
                        </div> {/* This closes the overflow-y-auto div */}

                        {/* Action buttons (fixed footer) */}
                        <div className="p-5 pt-4 flex gap-3 shrink-0 border-t border-slate-100 bg-white">
                            <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-all">Cancelar</button>
                            <button onClick={handleConfirm} className="flex-[2] py-3 rounded-xl bg-[#75CBB3] text-[#013A57] font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
                                ACEPTAR
                            </button>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN: Insole Visualization ── */}
                    <div className="bg-gradient-to-b from-slate-50 to-white p-3 flex flex-col justify-center overflow-hidden">
                        <div className="text-center mb-3">
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Vista de Plantilla</h4>
                            {seriesCalc && (
                                <p className="text-[10px] text-slate-400 mt-1">
                                    Serie asignada según geometría de {seriesCalc.selectedLength} mm
                                </p>
                            )}
                        </div>
                        <div className="flex-1">
                            <InsoleSilhouette
                                series={seriesCalc?.series || null}
                                trimInfo={seriesCalc?.trimInfo || null}
                                trimLevel={seriesCalc?.trimLevel || 'exact'}
                                trimMessage={seriesCalc?.trimMessage || null}
                                selectedLength={seriesCalc?.selectedLength || null}
                                sizeGroupId={selectedGroupId}
                                unit={unit}
                                gender={gender}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCartModal;
