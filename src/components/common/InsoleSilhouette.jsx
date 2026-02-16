import React, { useMemo, useState } from 'react';
import { getSizeCutLines } from '../../data/seriesGeometry';

/**
 * InsoleSilhouette — Image-based insole view with mm/inch rulers,
 * parabolic cut arcs per talla, and dimensional data.
 */
const InsoleSilhouette = ({ series, trimInfo, trimLevel, trimMessage, selectedLength, sizeGroupId, unit, gender }) => {
    const trimColors = {
        exact: '#22c55e',
        safe: '#22c55e',
        warning: '#eab308',
        blocked: '#ef4444',
    };
    const trimColor = trimColors[trimLevel] || '#22c55e';

    const msgStyles = {
        success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        info: 'bg-sky-50 text-sky-700 border-sky-200',
        warning: 'bg-amber-50 text-amber-700 border-amber-200',
        error: 'bg-red-50 text-red-700 border-red-200',
    };

    const [hoveredLine, setHoveredLine] = useState(null);

    // Get all size-to-length mappings for this series using new data source
    const sizeCutLines = useMemo(() => {
        if (!series) return [];

        // Use the new helper to get lines (label, lengthMm, offset)
        const rawLines = getSizeCutLines(series.id, unit, gender);
        const maxL = series.length_max_mm;

        return rawLines.map(line => {
            // Map offset → vertical position % on the insole
            // The insole image: toe at ~3% from top, heel at ~97%
            // offset=0 means max length (at tip), larger offset = line further from tip (downward)
            const posPercent = (line.offset / maxL) * 100;

            return {
                ...line,
                posPercent
            };
        });
    }, [series, unit, gender]);

    if (!series) {
        return (
            <div className="flex flex-col items-center justify-center h-full gap-3">
                <img
                    src="https://ranawalk.com/images/1000467066.png"
                    alt="Plantilla Rana Walk"
                    className="w-32 opacity-30"
                />
                <span className="text-slate-400 text-sm italic">Selecciona una talla para ver tu plantilla</span>
            </div>
        );
    }

    const maxL = series.length_max_mm;

    // Insole width profile: maps vertical position (%) to width (% of container)
    // Scaled to match the full-width insole image (object-fill)
    const insoleWidthProfile = [
        [0, 12],    // toe tip — very narrow
        [3, 38],   // toe beginning
        [5, 52],
        [8, 65],
        [10, 73],
        [13, 80],
        [16, 86],
        [20, 92],
        [25, 97],
        [28, 100],  // approaching forefoot max
        [32, 103],  // forefoot — widest zone
        [38, 100],
        [45, 88],
        [50, 78],   // waist — narrowest
        [55, 72],
        [60, 70],
        [65, 72],
        [70, 76],
        [75, 80],
        [80, 82],   // heel
        [85, 78],
        [90, 68],
        [95, 54],
        [100, 25],
    ];

    // Interpolate width at a given position %
    const getInsoleWidthAt = (posPct) => {
        if (posPct <= insoleWidthProfile[0][0]) return insoleWidthProfile[0][1];
        if (posPct >= insoleWidthProfile[insoleWidthProfile.length - 1][0]) return insoleWidthProfile[insoleWidthProfile.length - 1][1];
        for (let i = 0; i < insoleWidthProfile.length - 1; i++) {
            const [x0, w0] = insoleWidthProfile[i];
            const [x1, w1] = insoleWidthProfile[i + 1];
            if (posPct >= x0 && posPct <= x1) {
                const t = (posPct - x0) / (x1 - x0);
                return w0 + t * (w1 - w0);
            }
        }
        return 60;
    };

    // Parabolic arc — curves DOWNWARD (∩), width adapts to insole silhouette
    const buildParabolicArc = (widthPct) => {
        const left = (100 - widthPct) / 2;
        const right = 100 - left;
        const center = 50;
        const sag = 18;
        return `M ${left} ${sag} Q ${center} 0 ${right} ${sag}`;
    };

    return (
        <div className="flex flex-col items-center h-full gap-4">
            <style>
                {`
                @keyframes waveText {
                    0% { color: #64748b; transform: scale(1); }
                    50% { color: #75CBB3; transform: scale(1.2); }
                    100% { color: #64748b; transform: scale(1); }
                }
                @keyframes waveLine {
                    0% { background-color: #cbd5e1; }
                    50% { background-color: #75CBB3; box-shadow: 0 0 4px #75CBB3; }
                    100% { background-color: #cbd5e1; }
                }
                `}
            </style>
            {/* Serie badge */}
            <div className="flex items-center gap-3 flex-shrink-0">
                <span className="px-4 py-1.5 rounded-full bg-[#013A57] text-white font-black text-lg tracking-wider shadow-md">
                    {series.id}
                </span>
                <span className="text-base text-[#013A57] font-bold">
                    {maxL} mm / {(maxL / 25.4).toFixed(2)}"
                </span>
            </div>

            {/* Main visual: left ruler + insole + right ruler */}
            <div className="flex items-stretch justify-center flex-1 min-h-0 w-full">
                {/* LEFT RULER — mm */}
                <div className="flex flex-col justify-between h-[580px] w-9 flex-shrink-0 relative">
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-slate-200" />
                    {(() => {
                        const step = maxL > 300 ? 20 : maxL > 260 ? 15 : 10;
                        const ticks = [];
                        for (let mm = 0; mm <= maxL; mm += step) {
                            // 0mm = heel (bottom), maxL = toe (top)
                            const topPct = ((maxL - mm) / maxL) * 100;
                            // Animation delay logic: 0mm (bottom) starts first, maxL (top) starts last
                            // We use series.id in key to force re-render and restart animation
                            const delay = `${(mm / maxL) * 0.8}s`;

                            ticks.push(
                                <div key={`${series.id}-mm-${mm}`} className="absolute right-0 flex items-center" style={{ top: `${topPct}%`, transform: 'translateY(-50%)' }}>
                                    <span
                                        className="text-[11px] font-mono font-semibold mr-0.5"
                                        style={{
                                            animation: `waveText 0.8s ease-out both`,
                                            animationDelay: delay,
                                            color: '#64748b' // initial slate-500
                                        }}
                                    >
                                        {mm}
                                    </span>
                                    <div
                                        className="w-1.5 h-px"
                                        style={{
                                            animation: `waveLine 0.8s ease-out both`,
                                            animationDelay: delay,
                                            backgroundColor: '#cbd5e1' // initial slate-300
                                        }}
                                    />
                                </div>
                            );
                        }
                        return ticks;
                    })()}
                </div>

                {/* INSOLE IMAGE + cut lines */}
                <div className="relative mx-1 flex-shrink-0" style={{ width: '220px', height: '580px' }}>
                    <img
                        src="https://ranawalk.com/images/1000467066.png"
                        alt={`Plantilla ${series.id}`}
                        className="w-full h-full object-fill drop-shadow-lg transform scale-[1.02]"
                    />

                    {/* Parabolic cut arcs */}
                    {sizeCutLines.map((line, idx) => {
                        // Match PDF/Chart colors
                        const PDF_ORANGE = '#F97316';
                        const PDF_GREEN = '#16A34A';
                        const PDF_NAVY = '#013A57';

                        const isSelected = line.lengthMm === selectedLength;
                        const isHovered = hoveredLine === idx;
                        const isExact = line.isCore; // or line.offset === 0

                        // Logic:
                        // - Selected: Bright Orange/Green based on type
                        // - Hovered: Navy (standard interactive)
                        // - Default: Muted version of the semantic color to guide user
                        let strokeColor;
                        if (isSelected) {
                            strokeColor = isExact ? PDF_GREEN : PDF_ORANGE;
                        } else if (isHovered) {
                            strokeColor = PDF_NAVY;
                        } else {
                            // Subtle hint:
                            strokeColor = '#94a3b8';
                        }

                        // Intelligent width: match insole silhouette at this position, but wider for exact
                        const arcWidth = isExact ? 60 : Math.max(15, getInsoleWidthAt(line.posPercent) + 8);

                        // Build path: straight line for exact match, parabolic arc for trim
                        const pathD = isExact
                            ? (() => {
                                const left = (100 - arcWidth) / 2;
                                const right = 100 - left;
                                return `M ${left} 11 L ${right} 11`;
                            })()
                            : buildParabolicArc(arcWidth);

                        return (
                            <div
                                key={idx}
                                className="absolute left-0 right-0 cursor-pointer"
                                style={{
                                    top: isExact ? '-2%' : `${line.posPercent}%`,
                                    zIndex: isHovered || isSelected ? 20 : 10,
                                    transition: 'transform 0.15s ease',
                                    transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                                }}
                                onMouseEnter={() => setHoveredLine(idx)}
                                onMouseLeave={() => setHoveredLine(null)}
                            >
                                <svg
                                    viewBox="0 0 100 22"
                                    className="w-full overflow-visible"
                                    style={{ height: isHovered ? '20px' : '16px', transition: 'height 0.15s ease' }}
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d={pathD}
                                        fill="none"
                                        stroke={strokeColor}
                                        strokeWidth={isSelected ? '2.5' : (isHovered ? '2' : '1')}
                                        strokeDasharray={!isExact ? "3,2" : "none"} // Dashed for trim lines (scissors)
                                        opacity={isSelected || isHovered ? 1 : 0.6}
                                    />
                                </svg>

                                {/* Hover tooltip */}
                                {isHovered && (
                                    <div
                                        className="absolute left-1/2 bg-[#013A57] text-white text-[9px] font-bold px-2 py-1 rounded-md shadow-lg whitespace-nowrap pointer-events-none"
                                        style={{ transform: 'translateX(-50%)', top: '100%', zIndex: 30 }}
                                    >
                                        <div>✂ Cortar a: {line.lengthMm} mm / {line.lengthIn}"</div>
                                        {line.offset > 0 && (
                                            <div className="text-[#75CBB3]">Recorte: {line.offset.toFixed(1)} mm</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}


                </div>

                {/* RIGHT RULER — inches + talla labels */}
                <div className="flex flex-col justify-between h-[580px] w-12 flex-shrink-0 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
                    {(() => {
                        const maxIn = maxL / 25.4;
                        const ticks = [];
                        for (let inch = 0; inch <= maxIn; inch += 0.5) {
                            const mm = inch * 25.4;
                            const topPct = ((maxL - mm) / maxL) * 100;
                            // Same logic: delay based on mm height (0 is bottom)
                            // mm goes from 0 to maxL. 
                            const delay = `${(mm / maxL) * 0.8}s`;

                            if (topPct >= 0 && topPct <= 100) {
                                ticks.push(
                                    <div key={`${series.id}-in-${inch}`} className="absolute left-0 flex items-center" style={{ top: `${topPct}%`, transform: 'translateY(-50%)' }}>
                                        <div
                                            className="w-1.5 h-px"
                                            style={{
                                                animation: `waveLine 0.8s ease-out both`,
                                                animationDelay: delay,
                                                backgroundColor: '#cbd5e1'
                                            }}
                                        />
                                        <span
                                            className="text-[11px] font-mono font-semibold ml-0.5"
                                            style={{
                                                animation: `waveText 0.8s ease-out both`,
                                                animationDelay: delay,
                                                color: '#64748b'
                                            }}
                                        >
                                            {inch.toFixed(1)}"
                                        </span>
                                    </div>
                                );
                            }
                        }
                        return ticks;
                    })()}

                    {/* Talla labels alongside right ruler */}
                    {sizeCutLines.map((line, idx) => {
                        const isSelected = line.lengthMm === selectedLength;
                        const isHovered = hoveredLine === idx;
                        const lineColor = isSelected ? trimColor : (isHovered ? '#013A57' : '#94a3b8');
                        const isExactLabel = isSelected && line.offset === 0;
                        return (
                            <div
                                key={`lbl-${idx}`}
                                className="absolute left-1 whitespace-nowrap font-bold cursor-pointer"
                                style={{
                                    top: isExactLabel ? '-1.5%' : `${line.posPercent}%`,
                                    transform: 'translateY(-50%)',
                                    fontSize: isHovered ? '9px' : '7px',
                                    color: lineColor,
                                    transition: 'all 0.15s ease',
                                    zIndex: isHovered ? 20 : 5,
                                }}
                                onMouseEnter={() => setHoveredLine(idx)}
                                onMouseLeave={() => setHoveredLine(null)}
                            >
                                {unit === 'US' ? (gender === 'Masculino' ? 'US ' : 'USW ') : (unit + ' ')}
                                {line.label}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Width annotation */}


            {/* Dimensions info */}
            <div className="w-full space-y-0.5 flex-shrink-0">
                <div className="flex justify-between text-xs px-1">
                    <span className="text-slate-400">Largo serie</span>
                    <span className="text-[#013A57] font-bold">{maxL} mm</span>
                </div>
                {selectedLength && (
                    <div className="flex justify-between text-xs px-1">
                        <span className="text-slate-400">Largo talla</span>
                        <span className="text-[#013A57] font-bold">{selectedLength} mm ({(selectedLength / 25.4).toFixed(2)}")</span>
                    </div>
                )}
                {trimInfo && trimInfo.requires_trim && (
                    <div className="flex justify-between text-xs px-1">
                        <span className="text-slate-400">Recorte</span>
                        <span className="font-bold" style={{ color: trimColor }}>
                            {trimInfo.trim_offset_mm.toFixed(1)} mm
                        </span>
                    </div>
                )}
                {trimMessage && trimMessage.text && (
                    <div className={`text-[10px] px-2 py-1 rounded-lg border font-semibold text-center ${msgStyles[trimMessage.type] || ''}`}>
                        {trimMessage.text}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InsoleSilhouette;
