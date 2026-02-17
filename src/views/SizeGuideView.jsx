import React from 'react';
import InteractiveSizeChart from '../data/rana-walk-size-chart_2';

export default function SizeGuideView() {
    return (
        <div className="min-h-screen bg-white transition-colors duration-300">
            {/* Content */}
            <div className="relative">
                <InteractiveSizeChart />
            </div>
        </div>
    );
}
