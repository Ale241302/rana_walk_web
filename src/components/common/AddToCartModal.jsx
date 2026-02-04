import React, { useState } from 'react';
import { X, Users } from 'lucide-react';
import { sizeGroups } from '../../data/ranaData';

// Datos de distribuidores y sub distribuidores
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
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedDistributor, setSelectedDistributor] = useState('');

    if (!isOpen) return null;

    const getAvailableSizes = (group) => {
        if (unit === 'US') return gender === 'Masculino' ? group.US_Men : group.US_Women;
        if (unit === 'EU') return group.EU;
        if (unit === 'BRA') return group.BRA;
        if (unit === 'MEX') return group.MEX;
        return [];
    };

    const handleConfirm = () => {
        if (!size) {
            alert('Por favor selecciona una talla');
            return;
        }
        const selectedDist = selectedDistributor ? distributorsAndSubDistributors.find(d => d.id === parseInt(selectedDistributor)) : null;
        onConfirm({
            systemId: system.id,
            systemName: system.name,
            image: system.image,
            price: 59.90,
            unit,
            gender,
            size,
            quantity,
            distributor: selectedDist ? { id: selectedDist.id, name: selectedDist.name, type: selectedDist.type, region: selectedDist.region } : null
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fadeIn">
                <div className="bg-[#013A57] p-6 text-white flex justify-between items-center">
                    <h3 className="font-bold text-lg">Configura tu {system.name}</h3>
                    <button onClick={onClose}><X className="w-5 h-5 hover:text-[#75CBB3]" /></button>
                </div>

                <div className="p-8 space-y-6">
                    <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Unidad de Medida</label>
                        <div className="grid grid-cols-4 gap-2">
                            {['US', 'BRA', 'EU', 'MEX'].map(u => (
                                <button
                                    key={u}
                                    onClick={() => { setUnit(u); setSize(''); }}
                                    className={`py-2 rounded-lg text-sm font-bold border ${unit === u ? 'bg-[#013A57] text-white border-[#013A57]' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-[#013A57]'}`}
                                >
                                    {u}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Género</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['Masculino', 'Femenino'].map(g => (
                                <button
                                    key={g}
                                    onClick={() => { setGender(g); setSize(''); }}
                                    className={`py-2 rounded-lg text-sm font-bold border ${gender === g ? 'bg-[#013A57] text-white border-[#013A57]' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-[#013A57]'}`}
                                >
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Talla ({unit})</label>
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-[#013A57] focus:outline-none focus:border-[#75CBB3]"
                        >
                            <option value="">Selecciona tu talla</option>
                            {sizeGroups.map(group => {
                                const sizes = getAvailableSizes(group);
                                return (
                                    <option key={group.id} value={group.id}>
                                        {group.id} ({sizes.join(', ')})
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Cantidad</label>
                        <div className="flex items-center gap-4">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#013A57] font-bold hover:bg-slate-200">-</button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                className="w-20 text-center font-bold text-xl text-[#013A57] bg-transparent border-b-2 border-slate-200 focus:border-[#75CBB3] outline-none"
                            />
                            <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#013A57] font-bold hover:bg-slate-200">+</button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#75CBB3]" />
                            Seleccionar Distribuidor <span className="text-slate-300 font-normal">(Opcional)</span>
                        </label>
                        <select
                            value={selectedDistributor}
                            onChange={(e) => setSelectedDistributor(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-[#013A57] focus:outline-none focus:border-[#75CBB3]"
                        >
                            <option value="">Sin preferencia de distribuidor</option>
                            <optgroup label="Distribuidores">
                                {distributorsAndSubDistributors.filter(d => d.type === 'distributor').map(d => (
                                    <option key={d.id} value={d.id}>{d.name} - {d.region}</option>
                                ))}
                            </optgroup>
                            <optgroup label="Sub Distribuidores">
                                {distributorsAndSubDistributors.filter(d => d.type === 'sub-distributor').map(d => (
                                    <option key={d.id} value={d.id}>{d.name} - {d.region}</option>
                                ))}
                            </optgroup>
                        </select>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-400 hover:border-slate-300 hover:text-slate-600">Cancelar</button>
                        <button onClick={handleConfirm} className="flex-[2] py-3 rounded-xl bg-[#75CBB3] text-[#013A57] font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
                            ACEPTAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCartModal;
