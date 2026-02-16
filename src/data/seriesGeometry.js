import { sizeGroups } from './ranaData.jsx';



export const sizeSystems = [
    { key: "us_men", label: "US Men" },
    { key: "us_women", label: "US Women" },
    { key: "big_kid", label: "Big Kid" },
    { key: "eu", label: "EU" },
    { key: "bra", label: "BRA" },
    { key: "uk_men", label: "UK Men" },
    { key: "uk_women", label: "UK Women" },
    { key: "mex", label: "MEX / CM" },
    { key: "jp", label: "JP (cm)" },
    { key: "kr", label: "KR (mm)" },
    { key: "cn", label: "CN" },
    { key: "ind", label: "India" },
];

export const sizeConversionData = {
    S1: { cmRange: [22.0, 23.8], us_men: { trim: ["3.5"], core: ["4"] }, us_women: { trim: ["5"], core: ["5.5"] }, big_kid: { trim: ["3.5Y"], core: ["4Y"] }, eu: { trim: ["34", "35"], core: ["36"] }, bra: { trim: ["32", "33"], core: ["34"] }, uk_men: { trim: ["2.5"], core: ["3"] }, uk_women: { trim: ["4"], core: ["4.5"] }, mex: { trim: ["22"], core: ["23"] }, kr: { trim: ["210", "215"], core: ["220"] }, jp: { trim: ["21.0", "21.5"], core: ["22.0"] }, cn: { trim: ["34", "35"], core: ["36"] }, ind: { trim: ["2.5"], core: ["3"] } },
    S2: { cmRange: [23.8, 25.8], us_men: { trim: ["4.5", "5", "5.5", "6"], core: ["6.5"] }, us_women: { trim: ["6", "6.5", "7", "7.5"], core: ["8"] }, big_kid: { trim: ["4.5Y", "5Y", "5.5Y", "6Y"], core: ["6.5Y"] }, eu: { trim: ["37", "38"], core: ["39"] }, bra: { trim: ["35", "36"], core: ["37"] }, uk_men: { trim: ["3.5", "4", "4.5", "5"], core: ["5.5"] }, uk_women: { trim: ["5", "5.5", "6", "6.5"], core: ["7"] }, mex: { trim: ["24"], core: ["25"] }, kr: { trim: ["225", "230", "235"], core: ["240"] }, jp: { trim: ["22.5", "23.0", "23.5"], core: ["24.0"] }, cn: { trim: ["37", "38"], core: ["39"] }, ind: { trim: ["3.5", "4", "4.5", "5"], core: ["5.5"] } },
    S3: { cmRange: [25.8, 27.2], us_men: { trim: ["7", "7.5", "8"], core: ["8.5"] }, us_women: { trim: ["8.5", "9", "9.5"], core: ["10"] }, big_kid: { trim: [], core: ["7Y"] }, eu: { trim: ["40"], core: ["41"] }, bra: { trim: ["38"], core: ["39"] }, uk_men: { trim: ["6", "6.5", "7"], core: ["7.5"] }, uk_women: { trim: ["7.5", "8", "8.5"], core: ["9"] }, mex: { trim: ["26"], core: ["27"] }, kr: { trim: ["245", "250"], core: ["255"] }, jp: { trim: ["24.5", "25.0"], core: ["25.5"] }, cn: { trim: ["40"], core: ["41"] }, ind: { trim: ["6", "6.5", "7"], core: ["7.5"] } },
    S4: { cmRange: [27.2, 28.6], us_men: { trim: ["9", "9.5"], core: ["10"] }, us_women: { trim: ["10.5", "11"], core: ["11.5"] }, big_kid: { trim: [], core: [] }, eu: { trim: ["42"], core: ["43"] }, bra: { trim: ["40"], core: ["41"] }, uk_men: { trim: ["8", "8.5"], core: ["9"] }, uk_women: { trim: ["9.5", "10"], core: ["10.5"] }, mex: { trim: [], core: ["28"] }, kr: { trim: ["260", "265"], core: ["270"] }, jp: { trim: ["26.0", "26.5"], core: ["27.0"] }, cn: { trim: ["42"], core: ["43"] }, ind: { trim: ["8", "8.5"], core: ["9"] } },
    S5: { cmRange: [28.6, 29.8], us_men: { trim: ["10.5", "11"], core: ["11.5"] }, us_women: { trim: ["12", "12.5"], core: ["13"] }, big_kid: { trim: [], core: [] }, eu: { trim: ["44"], core: ["45"] }, bra: { trim: ["42"], core: ["43"] }, uk_men: { trim: ["9.5", "10"], core: ["10.5"] }, uk_women: { trim: ["11", "11.5"], core: ["12"] }, mex: { trim: [], core: ["29"] }, kr: { trim: ["275"], core: ["280"] }, jp: { trim: ["27.5"], core: ["28.0"] }, cn: { trim: ["44"], core: ["45"] }, ind: { trim: ["9.5", "10"], core: ["10.5"] } },
    S6: { cmRange: [29.8, 31.2], us_men: { trim: ["12", "12.5"], core: ["13"] }, us_women: { trim: ["13.5", "14"], core: ["14.5"] }, big_kid: { trim: [], core: [] }, eu: { trim: ["46"], core: ["47"] }, bra: { trim: ["44"], core: ["45"] }, uk_men: { trim: ["11", "11.5"], core: ["12"] }, uk_women: { trim: ["12.5", "13"], core: ["13.5"] }, mex: { trim: ["30"], core: ["31"] }, kr: { trim: ["285", "290"], core: ["295"] }, jp: { trim: ["28.5", "29.0"], core: ["29.5"] }, cn: { trim: ["46"], core: ["47"] }, ind: { trim: ["11", "11.5"], core: ["12"] } },
};

// ── Datos geométricos por serie (extraídos de planos mecánicos S1–S6) ──
export const seriesData = [
    {
        id: 'S1',
        length_max_mm: 238,
        width_B_mm: 87,    // antepié
        width_A_mm: 67.9,  // cintura
        width_C_mm: 61.7,  // talón
        control_ratios: { xc: 0.15, xa: 0.50, xb: 0.70 },
        // Trim limits
        trim_max_mm: 10.38, // ~4.36% of 238
        safe_trim_mm: 4,
        warning_trim_mm: 8,
    },
    {
        id: 'S2',
        length_max_mm: 258,
        width_B_mm: 93,
        width_A_mm: 72.3,
        width_C_mm: 65.7,
        control_ratios: { xc: 0.15, xa: 0.50, xb: 0.70 },
        trim_max_mm: 20, // 258 - 238
        safe_trim_mm: 8,
        warning_trim_mm: 16,
    },
    {
        id: 'S3',
        length_max_mm: 272,
        width_B_mm: 96,
        width_A_mm: 75.4,
        width_C_mm: 68.5,
        control_ratios: { xc: 0.15, xa: 0.50, xb: 0.70 },
        trim_max_mm: 14, // 272 - 258
        safe_trim_mm: 6,
        warning_trim_mm: 11,
    },
    {
        id: 'S4',
        length_max_mm: 286, // 28.6 cm -> 286 mm (PDF)
        width_B_mm: 99,
        width_A_mm: 78.2,
        width_C_mm: 71.1,
        control_ratios: { xc: 0.15, xa: 0.50, xb: 0.70 },
        trim_max_mm: 14, // 286 - 272
        safe_trim_mm: 5,
        warning_trim_mm: 10,
    },
    {
        id: 'S5',
        length_max_mm: 298,
        width_B_mm: 103,
        width_A_mm: 81.1,
        width_C_mm: 73.7,
        control_ratios: { xc: 0.15, xa: 0.50, xb: 0.70 },
        trim_max_mm: 13, // 298 - 285
        safe_trim_mm: 5,
        warning_trim_mm: 10,
    },
    {
        id: 'S6',
        length_max_mm: 312, // 31.2 cm -> 312 mm (PDF)
        width_B_mm: 106,
        width_A_mm: 85.7,
        width_C_mm: 77.9,
        control_ratios: { xc: 0.15, xa: 0.50, xb: 0.70 },
        trim_max_mm: 14, // 312 - 298
        safe_trim_mm: 10,
        warning_trim_mm: 20,
    },
];

// ── Funciones de cálculo ──

/**
 * Selecciona la primera serie cuyo length_max_mm >= ceil(length_mm).
 * Frontera inclusiva: si cae exacto en el umbral, se asigna a esa serie.
 */
export function getSeriesForLength(length_mm) {
    const effective = Math.ceil(length_mm);
    const series = seriesData.find(s => s.length_max_mm >= effective);
    return series || seriesData[seriesData.length - 1]; // fallback S6
}

/**
 * Calcula info de trim para una serie y longitud seleccionada.
 */
export function getTrimInfo(series, selected_length_mm) {
    const trim_offset_mm = series.length_max_mm - Math.ceil(selected_length_mm);
    const requires_trim = trim_offset_mm > 0;
    const trim_ratio = requires_trim ? trim_offset_mm / series.length_max_mm : 0;
    return { trim_offset_mm, requires_trim, trim_ratio };
}

/**
 * Determina el nivel de recorte: "safe", "warning" o "blocked".
 */
export function getTrimLevel(series, offset) {
    if (offset <= 0) return 'exact';
    if (offset <= series.safe_trim_mm) return 'safe';
    if (offset <= series.warning_trim_mm) return 'warning';
    return 'blocked';
}

/**
 * Dado un sizeGroup id (ej. "S3"), un valor de talla, el sistema y género,
 * devuelve la longitud en mm correspondiente.
 */
export function getLengthFromSizeGroup(sizeGroupId, sizeValue, unit, gender) {
    const group = sizeGroups.find(g => g.id === sizeGroupId);
    if (!group) return null;

    // Para CM e IN no hay índice de talla individual, devolver el largo medio
    if (unit === 'CM' || unit === 'IN') {
        const lengths = group.Length_mm;
        return parseFloat(lengths[Math.floor(lengths.length / 2)]);
    }

    // Buscar el índice de la talla en el array correspondiente
    let sizeArray;
    if (unit === 'US') {
        sizeArray = gender === 'Masculino' ? group.US_Men : group.US_Women;
    } else if (unit === 'EU') {
        sizeArray = group.EU;
    } else if (unit === 'BRA') {
        sizeArray = group.BRA;
    } else if (unit === 'MEX') {
        sizeArray = group.MEX;
    }

    if (!sizeArray) return parseFloat(group.Length_mm[0]);

    // Encontrar el índice de la talla seleccionada
    const idx = sizeArray.indexOf(sizeValue);
    if (idx === -1) {
        // Fallback: usar el largo medio del grupo
        return parseFloat(group.Length_mm[Math.floor(group.Length_mm.length / 2)]);
    }

    // Mapear índice proporcional a longitudes (pueden tener diferente cantidad)
    const lengthIdx = Math.min(
        Math.round((idx / Math.max(sizeArray.length - 1, 1)) * (group.Length_mm.length - 1)),
        group.Length_mm.length - 1
    );
    return parseFloat(group.Length_mm[lengthIdx]);
}

/**
 * Encuentra la serie vecina recomendada cuando el trim es bloqueado.
 */
export function getAlternativeSeries(currentSeriesId) {
    const idx = seriesData.findIndex(s => s.id === currentSeriesId);
    if (idx > 0) return seriesData[idx - 1];
    return null;
}

/**
 * Mensajes de trim por nivel.
 */
export function getTrimMessage(level, alternativeSeries) {
    switch (level) {
        case 'exact':
            return { text: 'La talla seleccionada para la plantilla es compatible', type: 'success' };
        case 'safe':
            return { text: 'Compatibilidad confirmada por línea de corte.', type: 'info' };
        case 'warning':
            return { text: 'La talla seleccionada debe ser recortada en la plantilla de la forma indicada', type: 'warning' };
        case 'blocked':
            return {
                text: `Excede recorte seguro${alternativeSeries ? `. Se recomienda serie ${alternativeSeries.id}.` : '.'}`,
                type: 'error'
            };
        default:
            return { text: '', type: '' };
    }
}

// ── Nuevas funciones para SizeConversionData (Soporte Visualizador) ──

function getStepSize(systemKey) {
    if (systemKey.includes('us_') || systemKey.includes('uk_') || systemKey === 'big_kid' || systemKey === 'ind') return 4.23; // ~1/6 inch roughly or half size
    if (systemKey === 'eu' || systemKey === 'bra') return 6.67;
    return 5.0; // CM, JP, KR, MEX (usually 5mm steps)
}

/**
 * Genera las líneas de corte para InsoleSilhouette usando la nueva data.
 */
export function getSizeCutLines(seriesId, unit, gender) {
    const data = sizeConversionData[seriesId];
    if (!data) return [];

    // Map unit/gender to systemKey
    let systemKey = 'us_men';
    if (unit === 'US') systemKey = gender === 'Masculino' ? 'us_men' : 'us_women';
    else if (unit === 'EU') systemKey = 'eu';
    else if (unit === 'BRA') systemKey = 'bra';
    else if (unit === 'UK') systemKey = gender === 'Masculino' ? 'uk_men' : 'uk_women';
    else if (unit === 'MEX') systemKey = 'mex';
    else if (unit === 'CM' || unit === 'JP') systemKey = 'jp';
    else if (unit === 'KR') systemKey = 'kr';
    else systemKey = 'us_men'; // fallback

    const sysData = data[systemKey];
    if (!sysData) return [];

    const lines = [];
    const maxMm = data.cmRange[1] * 10;
    const step = getStepSize(systemKey);

    // Core sizes at offset 0 (or close to it? For now assume max length)
    // Actually, "Core" means it fits the insole AS IS. So offset 0.
    sysData.core.forEach(label => {
        lines.push({
            label: label,
            lengthMm: maxMm,
            lengthIn: (maxMm / 25.4).toFixed(2),
            offset: 0,
            posPercent: 4, // Top/Toe position
            isCore: true
        });
    });

    // Trim sizes
    // We assume they step down from the Max Length.
    // If we have multiple trim sizes, `Trim 1` (largest) is -1 step, `Trim 2` is -2 steps?
    // We need to parse the sizes to sort them if possible?
    // Or assume the array order in `defaultSizeData` (which seems sorted small -> large).
    // e.g. S2 trim: ["4.5", "5", "5.5", "6"]. Core: 6.5.
    // 6 is closest to 6.5. So 6 should be -1 step.
    // 4.5 should be -4 steps.
    // So we iterate backwards?

    // Sort trim sizes? They are strings. "3.5", "4", "10.5".
    // Numeric sort works for most.
    const sortedTrim = [...sysData.trim].sort((a, b) => parseFloat(a) - parseFloat(b));
    // Reverse so largest is first (closest to Core)
    sortedTrim.reverse();

    sortedTrim.forEach((label, idx) => {
        // Distance from Core start?
        // If Core starts at MaxMm.
        // Largest Trim is 1 step down.
        const stepsDown = idx + 1;
        const offset = stepsDown * step;
        const lengthMm = maxMm - offset;

        // Clamp to range min?
        // data.cmRange[0] * 10.

        // position percent logic from InsoleSilhouette
        // const posPercent = 4 + (offset / maxL) * 45;
        // Re-use logic in InsoleSilhouette or pre-calc here.
        // We leave posPercent calculation to InsoleSilhouette or do it here if we pass maxL.
        // Let's pass abstract offset.
        lines.push({
            label: label,
            lengthMm: parseFloat(lengthMm.toFixed(1)),
            lengthIn: (lengthMm / 25.4).toFixed(2),
            offset: parseFloat(offset.toFixed(1)),
            isCore: false
        });
    });

    return lines;
}

