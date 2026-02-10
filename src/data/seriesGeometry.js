import { sizeGroups } from './ranaData';

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
        length_max_mm: 285,
        width_B_mm: 99,
        width_A_mm: 78.2,
        width_C_mm: 71.1,
        control_ratios: { xc: 0.15, xa: 0.50, xb: 0.70 },
        trim_max_mm: 13, // 285 - 272
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
        length_max_mm: 325,
        width_B_mm: 106,
        width_A_mm: 85.7,
        width_C_mm: 77.9,
        control_ratios: { xc: 0.15, xa: 0.50, xb: 0.70 },
        trim_max_mm: 27, // 325 - 298
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
