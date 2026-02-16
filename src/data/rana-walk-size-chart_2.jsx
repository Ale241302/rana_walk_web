import { useState } from "react";

/* Colors from the PDF and Site Theme */
const C = {
  navy: "#013A57",
  mint: "#75CBB3",
  teal: "#066383",
  white: "#FFFFFF",
  bg: "#FFFFFF",
  inputBg: "#F8FAFC", // Light gray/blue for headers
  borderColor: "#E2E8F0",
  textBody: "#475569",
  textHeader: "#1E293B",
  trimOrange: "#F97316", // Bright orange for Trim
  trimBg: "#FFF7ED",
  coreGreen: "#16A34A", // Green for Exact Fit
  coreBg: "#F0FDF4",
  tableHeaderBg: "#013A57", // Dark for table header
};

/* Data Structure matching the PDF content */
const SIZES_DATA = [
  {
    id: "S1",
    rangeCm: "22.0 – 23.8 cm",
    rangeInch: '8.7" – 9.4"',
    desc: "Insole manufactured to the largest size in the range.",
    rows: [
      { system: "US Men", trim: ["3.5"], core: ["4"] },
      { system: "US Women", trim: ["5"], core: ["5.5"] },
      { system: "Big Kid", trim: ["3.5Y"], core: ["4Y"] },
      { system: "EU", trim: ["34", "35"], core: ["36"] },
      { system: "BRA", trim: ["32", "33"], core: ["34"] },
      { system: "UK Men", trim: ["2.5"], core: ["3"] },
      { system: "UK Women", trim: ["4"], core: ["4.5"] },
      { system: "MEX / CM", trim: ["22"], core: ["23"] },
      { system: "JP (cm)", trim: ["21.0", "21.5"], core: ["22.0"] },
      { system: "KR (mm)", trim: ["210", "215"], core: ["220"] },
      { system: "CN", trim: ["34", "35"], core: ["36"] },
      { system: "India", trim: ["2.5"], core: ["3"] },
    ]
  },
  {
    id: "S2",
    rangeCm: "23.8 – 25.8 cm",
    rangeInch: '9.4" – 10.2"',
    desc: "Insole manufactured to the largest size in the range.",
    rows: [
      { system: "US Men", trim: ["4.5", "5", "5.5", "6"], core: ["6.5"] },
      { system: "US Women", trim: ["6", "6.5", "7", "7.5"], core: ["8"] },
      { system: "Big Kid", trim: ["4.5Y", "5Y", "5.5Y", "6Y"], core: ["6.5Y"] },
      { system: "EU", trim: ["37", "38"], core: ["39"] },
      { system: "BRA", trim: ["35", "36"], core: ["37"] },
      { system: "UK Men", trim: ["3.5", "4", "4.5", "5"], core: ["5.5"] },
      { system: "UK Women", trim: ["5", "5.5", "6", "6.5"], core: ["7"] },
      { system: "MEX / CM", trim: ["24"], core: ["25"] },
      { system: "JP (cm)", trim: ["22.5", "23.0", "23.5"], core: ["24.0"] },
      { system: "KR (mm)", trim: ["225", "230", "235"], core: ["240"] },
      { system: "CN", trim: ["37", "38"], core: ["39"] },
      { system: "India", trim: ["3.5", "4", "4.5", "5"], core: ["5.5"] },
    ]
  },
  {
    id: "S3",
    rangeCm: "25.8 – 27.2 cm",
    rangeInch: '10.2" – 10.7"',
    desc: "Insole manufactured to the largest size in the range.",
    rows: [
      { system: "US Men", trim: ["7", "7.5", "8"], core: ["8.5"] },
      { system: "US Women", trim: ["8.5", "9", "9.5"], core: ["10"] },
      { system: "Big Kid", trim: [], core: ["7Y"] }, // explicit empty trim
      { system: "EU", trim: ["40"], core: ["41"] },
      { system: "BRA", trim: ["38"], core: ["39"] },
      { system: "UK Men", trim: ["6", "6.5", "7"], core: ["7.5"] },
      { system: "UK Women", trim: ["7.5", "8", "8.5"], core: ["9"] },
      { system: "MEX / CM", trim: ["26"], core: ["27"] },
      { system: "JP (cm)", trim: ["24.5", "25.0"], core: ["25.5"] },
      { system: "KR (mm)", trim: ["245", "250"], core: ["255"] },
      { system: "CN", trim: ["40"], core: ["41"] },
      { system: "India", trim: ["6", "6.5", "7"], core: ["7.5"] },
    ]
  },
  {
    id: "S4",
    rangeCm: "27.2 – 28.6 cm",
    rangeInch: '10.7" – 11.3"',
    desc: "Insole manufactured to the largest size in the range.",
    rows: [
      { system: "US Men", trim: ["9", "9.5"], core: ["10"] },
      { system: "US Women", trim: ["10.5", "11"], core: ["11.5"] },
      { system: "Big Kid", trim: [], core: [] },
      { system: "EU", trim: ["42"], core: ["43"] },
      { system: "BRA", trim: ["40"], core: ["41"] },
      { system: "UK Men", trim: ["8", "8.5"], core: ["9"] },
      { system: "UK Women", trim: ["9.5", "10"], core: ["10.5"] },
      { system: "MEX / CM", trim: [], core: ["28"] },
      { system: "JP (cm)", trim: ["26.0", "26.5"], core: ["27.0"] },
      { system: "KR (mm)", trim: ["260", "265"], core: ["270"] },
      { system: "CN", trim: ["42"], core: ["43"] },
      { system: "India", trim: ["8", "8.5"], core: ["9"] },
    ]
  },
  {
    id: "S5",
    rangeCm: "28.6 – 29.8 cm",
    rangeInch: '11.3" – 11.7"',
    desc: "Insole manufactured to the largest size in the range.",
    rows: [
      { system: "US Men", trim: ["10.5", "11"], core: ["11.5"] },
      { system: "US Women", trim: ["12", "12.5"], core: ["13"] },
      { system: "Big Kid", trim: [], core: [] },
      { system: "EU", trim: ["44"], core: ["45"] },
      { system: "BRA", trim: ["42"], core: ["43"] },
      { system: "UK Men", trim: ["9.5", "10"], core: ["10.5"] },
      { system: "UK Women", trim: ["11", "11.5"], core: ["12"] },
      { system: "MEX / CM", trim: [], core: ["29"] },
      { system: "JP (cm)", trim: ["27.5"], core: ["28.0"] },
      { system: "KR (mm)", trim: ["275"], core: ["280"] },
      { system: "CN", trim: ["44"], core: ["45"] },
      { system: "India", trim: ["9.5", "10"], core: ["10.5"] },
    ]
  },
  {
    id: "S6",
    rangeCm: "29.8 – 31.2 cm",
    rangeInch: '11.7" – 12.3"',
    desc: "Insole manufactured to the largest size in the range.",
    rows: [
      { system: "US Men", trim: ["12", "12.5"], core: ["13"] },
      { system: "US Women", trim: ["13.5", "14"], core: ["14.5"] },
      { system: "Big Kid", trim: [], core: [] },
      { system: "EU", trim: ["46"], core: ["47"] },
      { system: "BRA", trim: ["44"], core: ["45"] },
      { system: "UK Men", trim: ["11", "11.5"], core: ["12"] },
      { system: "UK Women", trim: ["12.5", "13"], core: ["13.5"] },
      { system: "MEX / CM", trim: ["30"], core: ["31"] },
      { system: "JP (cm)", trim: ["28.5", "29.0"], core: ["29.5"] },
      { system: "KR (mm)", trim: ["285", "290"], core: ["295"] },
      { system: "CN", trim: ["46"], core: ["47"] },
      { system: "India", trim: ["11", "11.5"], core: ["12"] },
    ]
  },
];

function ScissorsIcon({ sz = 14, color = C.trimOrange }) {
  return (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="4" cy="4" r="2.2" stroke={color} strokeWidth="1.3" fill="none" />
      <circle cx="4" cy="12" r="2.2" stroke={color} strokeWidth="1.3" fill="none" />
      <line x1="6" y1="5.5" x2="14" y2="12" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="6" y1="10.5" x2="14" y2="4" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ sz = 14, color = C.coreGreen }) {
  return (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <path d="M3 8.5L6.5 12L13 4" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RanaWalkDetailedChart() {
  return (
    <div style={{ minHeight: "100vh", background: "#F5F7FA", fontFamily: "'Inter', sans-serif", color: C.navy, padding: "40px 16px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Main Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: C.navy, marginBottom: 8, letterSpacing: "-0.02em" }}>
            CONVERSIÓN DE TALLAS
          </h1>
          <div style={{ fontSize: 16, color: C.textBody, fontWeight: 500 }}>
            Desglose detallado por talla — Referencia de longitud de plantilla
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 24, flexWrap: "wrap", fontSize: 13 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: C.trimBg, padding: "8px 16px", borderRadius: 20, border: `1px solid ${C.trimOrange}30` }}>
              <ScissorsIcon />
              <strong style={{ color: C.trimOrange }}>TRIM TO FIT (RECORTAR)</strong>
              <span style={{ color: C.textBody }}>— Tallas más pequeñas en el rango.</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: C.coreBg, padding: "8px 16px", borderRadius: 20, border: `1px solid ${C.coreGreen}30` }}>
              <CheckIcon />
              <strong style={{ color: C.coreGreen }}>EXACT FIT (AJUSTE EXACTO)</strong>
              <span style={{ color: C.textBody }}>— Talla más grande en el rango.</span>
            </div>
          </div>
        </div>

        {/* Size Tables */}
        {SIZES_DATA.map((size) => (
          <div key={size.id} style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.borderColor}`, overflow: "hidden", marginBottom: 40, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>

            {/* Table Header / Size Title */}
            <div style={{ padding: "24px 32px", borderBottom: `1px solid ${C.borderColor}`, background: C.white }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
                <h2 style={{ fontSize: 32, fontWeight: 800, color: C.navy, margin: 0 }}>{size.id}</h2>
                <div style={{ fontSize: 20, fontWeight: 600, color: C.teal }}>
                  {size.rangeCm} <span style={{ color: C.textBody, margin: "0 8px", opacity: 0.5 }}>|</span> {size.rangeInch}
                </div>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: C.textBody, lineHeight: 1.5 }}>
                {size.desc} <span style={{ color: C.trimOrange, fontWeight: 600 }}>✂ Naranja = recortar</span>. <span style={{ color: C.coreGreen, fontWeight: 600 }}>✓ Verde = ajuste exacto</span>.
              </p>
            </div>

            {/* The Table */}
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
                <thead>
                  <tr style={{ background: C.tableHeaderBg }}>
                    <th style={{ padding: "14px 24px", textAlign: "left", fontSize: 13, fontWeight: 700, color: C.white, textTransform: "uppercase", letterSpacing: "0.05em", width: "30%" }}>Sistema</th>
                    <th style={{ padding: "14px 24px", textAlign: "center", fontSize: 13, fontWeight: 700, color: C.trimOrange, textTransform: "uppercase", letterSpacing: "0.05em", width: "35%" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><ScissorsIcon color={C.trimOrange} sz={12} /> Trim (Recortar)</span>
                    </th>
                    <th style={{ padding: "14px 24px", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#4ADE80", textTransform: "uppercase", letterSpacing: "0.05em", width: "35%" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><CheckIcon color="#4ADE80" sz={12} /> Exact Fit (Sin corte)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {size.rows.map((row, idx) => {
                    const isEven = idx % 2 === 0;
                    const hasTrim = row.trim && row.trim.length > 0;
                    const hasCore = row.core && row.core.length > 0;

                    return (
                      <tr key={row.system} style={{ background: isEven ? C.white : "#F8FAFC", borderBottom: `1px solid ${C.borderColor}` }}>
                        <td style={{ padding: "12px 24px", fontSize: 14, fontWeight: 700, color: C.navy }}>{row.system}</td>

                        {/* Trim Column */}
                        <td style={{ padding: "12px 24px", textAlign: "center" }}>
                          {hasTrim ? (
                            <span style={{ fontSize: 15, fontWeight: 600, color: C.trimOrange }}>
                              {row.trim.join(", ")}
                            </span>
                          ) : (
                            <span style={{ color: "#CBD5E1" }}>—</span>
                          )}
                        </td>

                        {/* Core Column */}
                        <td style={{ padding: "12px 24px", textAlign: "center", background: hasCore ? "#F0FDF4" : "transparent" }}>
                          {hasCore ? (
                            <span style={{ fontSize: 16, fontWeight: 800, color: C.coreGreen }}>
                              {row.core.join(", ")}
                            </span>
                          ) : (
                            <span style={{ color: "#CBD5E1" }}>—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Footer Notes */}
        <div style={{ marginTop: 40, padding: "24px", background: C.white, borderRadius: 12, border: `1px solid ${C.borderColor}` }}>
          <h3 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: C.textBody, marginBottom: 16, fontWeight: 700 }}>Notas de Referencia</h3>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13, color: C.textBody, lineHeight: 1.8, listStyleType: "disc" }}>
            <li>Los valores en <strong>cm</strong> corresponden a la longitud de la plantilla/horma. Cada plantilla se fabrica al tamaño más grande de su rango.</li>
            <li><strong>KR / JP / CN</strong> = Mondopoint (longitud del pie). <em>Pie cm ≈ plantilla cm − 1.3 cm</em>. India = Equivalente a UK Men.</li>
            <li><strong>Fórmulas base:</strong> BRA = EU − 2 | UK Men = US Men − 1 | UK Women = US Women − 1</li>
          </ul>
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: `1px solid ${C.borderColor}`, textAlign: "center", fontSize: 11, color: "#94A3B8", letterSpacing: "0.05em" }}>
            RANA WALK® • LeapCore™ • PORON® XRD®
          </div>
        </div>

      </div>
    </div>
  );
}
