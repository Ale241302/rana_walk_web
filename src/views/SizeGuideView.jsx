import React, { useState } from 'react';
import RanaWalkSizeChart from '../data/rana-walk-size-chart2';
import InteractiveSizeChart from '../data/rana-walk-size-chart_2';
import { Ruler, Activity } from 'lucide-react';

export default function SizeGuideView() {
    const [activeTab, setActiveTab] = useState('interactive');

    return (
        <div className="min-h-screen bg-white transition-colors duration-300">
            {/* Tab Navigation */}
            <div className="bg-white border-b border-slate-200 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-center gap-8 h-16">
                        <button
                            onClick={() => setActiveTab('interactive')}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-widest uppercase transition-colors ${activeTab === 'interactive'
                                ? 'text-[#013A57] border-b-2 border-[#75CBB3]'
                                : 'text-slate-600 hover:text-slate-900 group'
                                }`}
                        >
                            <Activity className={`w-4 h-4 ${activeTab !== 'interactive' && 'group-hover:text-[#75CBB3] transition-colors'}`} />
                            Tabla Detallada
                        </button>
                        <button
                            onClick={() => setActiveTab('visual')}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-widest uppercase transition-colors ${activeTab === 'visual'
                                ? 'text-[#013A57] border-b-2 border-[#75CBB3]'
                                : 'text-slate-600 hover:text-slate-900 group'
                                }`}
                        >
                            <Ruler className={`w-4 h-4 ${activeTab !== 'visual' && 'group-hover:text-[#75CBB3] transition-colors'}`} />
                            Tablas de Demanda
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative">
                {activeTab === 'interactive' && <InteractiveSizeChart />}
                {activeTab === 'visual' && <RanaWalkSizeChart />}
            </div>
        </div>
    );
}
