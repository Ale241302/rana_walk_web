import { useState } from "react";

const SIZES = [
  {
    id: "S1",
    range: "22.0–23.8 cm",
    demand: "5%",
    exactFit: "US Men 4",
    systems: {
      "US Men": "3.5–4",
      "US Women": "5–5.5",
      "EU": "34–36",
      "UK Men": "2.5–3",
      "UK Women": "4–4.5",
      "BRA": "32–34",
      "MEX/CM": "22–23.5",
      "JP (cm)": "22–23.5",
      "KR (mm)": "220–238",
    },
  },
  {
    id: "S2",
    range: "23.8–25.8 cm",
    demand: "10%",
    exactFit: "US Men 6.5",
    systems: {
      "US Men": "4.5–6.5",
      "US Women": "6–8",
      "EU": "37–39",
      "UK Men": "3.5–5.5",
      "UK Women": "5–7",
      "BRA": "35–37",
      "MEX/CM": "24–25.5",
      "JP (cm)": "24–25.5",
      "KR (mm)": "238–258",
    },
  },
  {
    id: "S3",
    range: "25.8–27.2 cm",
    demand: "20%",
    exactFit: "US Men 8.5",
    systems: {
      "US Men": "7–8.5",
      "US Women": "8.5–10",
      "EU": "40–41",
      "UK Men": "6–7.5",
      "UK Women": "7.5–9",
      "BRA": "38–39",
      "MEX/CM": "26–27",
      "JP (cm)": "26–27",
      "KR (mm)": "258–272",
    },
  },
  {
    id: "S4",
    range: "27.2–28.6 cm",
    demand: "25%",
    exactFit: "US Men 10",
    systems: {
      "US Men": "9–10",
      "US Women": "10.5–11.5",
      "EU": "42–43",
      "UK Men": "8–9",
      "UK Women": "9.5–10.5",
      "BRA": "40–41",
      "MEX/CM": "27–28.5",
      "JP (cm)": "27–28.5",
      "KR (mm)": "272–286",
    },
  },
  {
    id: "S5",
    range: "28.6–29.8 cm",
    demand: "30%",
    exactFit: "US Men 11.5",
    systems: {
      "US Men": "10.5–11.5",
      "US Women": "12–13",
      "EU": "44–45",
      "UK Men": "9.5–10.5",
      "UK Women": "11–12",
      "BRA": "42–43",
      "MEX/CM": "28.5–29.5",
      "JP (cm)": "28.5–29.5",
      "KR (mm)": "286–298",
    },
  },
  {
    id: "S6",
    range: "29.8–31.2 cm",
    demand: "10%",
    exactFit: "US Men 13",
    systems: {
      "US Men": "12–13",
      "US Women": "13.5–14.5",
      "EU": "46–47",
      "UK Men": "11–12",
      "UK Women": "12.5–13.5",
      "BRA": "44–45",
      "MEX/CM": "30–31",
      "JP (cm)": "30–31",
      "KR (mm)": "298–312",
    },
  },
];

const ALL_SYSTEMS = [
  "US Men",
  "US Women",
  "EU",
  "UK Men",
  "UK Women",
  "BRA",
  "MEX/CM",
  "JP (cm)",
  "KR (mm)",
];

const CONVERSIONS = [
  { from: "BRA", to: "EU", rule: "EU − 2" },
  { from: "UK Men", to: "US Men", rule: "US Men − 1" },
  { from: "UK Women", to: "US Women", rule: "US Women − 1" },
  { from: "India", to: "UK Men", rule: "UK Men equiv." },
  { from: "KR / JP / CN", to: "Mondopoint", rule: "Longitud del pie" },
];

/* Exact colors from ranawalkreact.muitowork.com (matching the other chart) */
const C = {
  navy: "#013A57",
  mint: "#75CBB3",
  teal: "#066383",
  white: "#FFFFFF",
  bg: "#FFFFFF",
  inputBg: "#EDF5F2",
  cardBorder: "#E2EAE7",
  textBody: "#5A6F7E",
  textLight: "#8FA3AD",
  trimOrange: "#E07A3A",
  coreGreen: "#3DA87B",
  mintLight: "#E8F5F0",
};

export default function RanaWalkSizeChart() {
  const [activeSize, setActiveSize] = useState(null);
  const [activeSystem, setActiveSystem] = useState("US Men");
  const [showConversions, setShowConversions] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        color: C.navy,
        fontFamily: "'Inter','Segoe UI','Helvetica Neue',sans-serif",
        padding: "0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div style={{ marginBottom: 10 }}>
            <span style={{ display: "inline-block", padding: "6px 20px", borderRadius: 40, border: `1.5px solid ${C.mint}`, background: C.white, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: C.navy, fontWeight: 600 }}>
              RANA WALK® — Bioingeniería Podal
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 800,
              margin: 0,
              letterSpacing: -0.5,
              lineHeight: 1.1,
              color: C.navy
            }}
          >
            Sistema de Tallas{" "}
            <span style={{ color: C.mint }}>
              Trim to Fit
            </span>
          </h1>
          <div style={{ display: "flex", justifyContent: "center", margin: "16px 0 20px" }}>
            <div style={{ width: 48, height: 3, borderRadius: 2, background: C.mint }} />
          </div>
          <p
            style={{
              color: C.textBody,
              fontSize: 15,
              margin: "0 auto",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            6 tallas · 12 sistemas internacionales · Guías pre-marcadas para
            ajuste exacto. Cada plantilla se fabrica al tamaño más grande de su
            rango.
          </p>
        </div>

        {/* Demand Curve */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: C.textLight,
              marginBottom: 16,
              fontWeight: 700
            }}
          >
            Curva de Demanda
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 8,
              height: 100,
            }}
          >
            {SIZES.map((s) => {
              const pct = parseInt(s.demand);
              const maxPct = 30;
              const h = (pct / maxPct) * 80 + 20;
              const isActive = activeSize === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSize(isActive ? null : s.id)}
                  style={{
                    flex: 1,
                    height: h,
                    background: isActive
                      ? C.navy
                      : C.mintLight,
                    border: isActive
                      ? `2px solid ${C.navy}`
                      : `1px solid ${C.cardBorder}`,
                    borderRadius: 8,
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "0 0 10px 0",
                    boxShadow: isActive ? "0 4px 12px rgba(1,58,87,0.2)" : "none"
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: -24,
                      fontSize: 12,
                      color: isActive ? C.navy : C.textLight,
                      fontWeight: isActive ? 700 : 600,
                    }}
                  >
                    {s.demand}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: isActive ? C.mint : C.teal,
                      letterSpacing: 1,
                    }}
                  >
                    {s.id}
                  </span>
                </button>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <span style={{ fontSize: 11, color: C.trimOrange, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
              ✂ TRIM (recortar)
            </span>
            <span style={{ fontSize: 11, color: C.coreGreen, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
              ✓ AJUSTE EXACTO (sin corte)
            </span>
          </div>
        </div>

        {/* System Selector */}
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: C.textLight,
              marginBottom: 12,
              fontWeight: 700
            }}
          >
            Sistema de Talla
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {ALL_SYSTEMS.map((sys) => (
              <button
                key={sys}
                onClick={() => setActiveSystem(sys)}
                style={{
                  padding: "8px 16px",
                  fontSize: 13,
                  fontFamily: "'Inter', sans-serif",
                  border:
                    activeSystem === sys
                      ? `1.5px solid ${C.mint}`
                      : `1px solid ${C.cardBorder}`,
                  borderRadius: 20,
                  background:
                    activeSystem === sys
                      ? C.mintLight
                      : C.white,
                  color: activeSystem === sys ? C.teal : C.textBody,
                  fontWeight: activeSystem === sys ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {sys}
              </button>
            ))}
          </div>
        </div>

        {/* Main Table */}
        <div
          style={{
            background: C.white,
            border: `1px solid ${C.cardBorder}`,
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 32,
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr 1fr 100px",
              background: C.inputBg,
              borderBottom: `1px solid ${C.cardBorder}`,
              padding: "16px 24px",
              gap: 8,
            }}
          >
            {["Talla", "Rango (cm)", activeSystem, "Ajuste Exacto", "Demanda"].map(
              (h, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 10,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: i === 2 ? C.teal : C.textLight,
                    fontWeight: 700,
                  }}
                >
                  {h}
                </div>
              )
            )}
          </div>

          {/* Table Rows */}
          {SIZES.map((s, idx) => {
            const isActive = activeSize === s.id;
            const isHighDemand = parseInt(s.demand) >= 25;
            return (
              <div key={s.id}>
                <div
                  onClick={() => setActiveSize(isActive ? null : s.id)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr 1fr 1fr 100px",
                    padding: "18px 24px",
                    gap: 8,
                    background: isActive
                      ? C.mintLight
                      : "transparent",
                    borderBottom:
                      idx < SIZES.length - 1 && !isActive
                        ? `1px solid ${C.cardBorder}`
                        : "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    alignItems: "center",
                  }}
                >
                  {/* Size ID */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: 18,
                        color: isActive ? C.teal : C.navy,
                        transition: "color 0.2s",
                      }}
                    >
                      {s.id}
                    </span>
                  </div>

                  {/* Range */}
                  <div style={{ fontSize: 14, color: C.textBody, fontWeight: 500 }}>
                    {s.range}
                  </div>

                  {/* Active System Value */}
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: C.navy,
                    }}
                  >
                    {s.systems[activeSystem]}
                  </div>

                  {/* Exact Fit */}
                  <div style={{ fontSize: 13, color: C.textBody }}>
                    {s.exactFit}
                  </div>

                  {/* Demand */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: 6,
                        background: C.inputBg,
                        borderRadius: 3,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${(parseInt(s.demand) / 30) * 100}%`,
                          height: "100%",
                          background: isHighDemand
                            ? C.coreGreen
                            : C.mint,
                          borderRadius: 3,
                          transition: "width 0.5s ease",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        color: isHighDemand ? C.coreGreen : C.textBody,
                        fontWeight: isHighDemand ? 700 : 500,
                        minWidth: 28,
                        textAlign: "right",
                      }}
                    >
                      {s.demand}
                    </span>
                  </div>
                </div>

                {/* Expanded Detail */}
                {isActive && (
                  <div
                    style={{
                      background: "white",
                      borderTop: `1px solid ${C.mint}40`,
                      borderBottom: `1px solid ${C.cardBorder}`,
                      padding: "20px 24px",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(140px, 1fr))",
                        gap: 12,
                      }}
                    >
                      {Object.entries(s.systems).map(([sys, val]) => (
                        <div
                          key={sys}
                          style={{
                            padding: "12px 14px",
                            background:
                              sys === activeSystem
                                ? C.mintLight
                                : C.inputBg,
                            border:
                              sys === activeSystem
                                ? `1px solid ${C.mint}`
                                : `1px solid ${C.cardBorder}`,
                            borderRadius: 10,
                          }}
                        >
                          <div
                            style={{
                              fontSize: 10,
                              letterSpacing: 1.5,
                              textTransform: "uppercase",
                              color:
                                sys === activeSystem ? C.teal : C.textLight,
                              marginBottom: 4,
                              fontWeight: 700
                            }}
                          >
                            {sys}
                          </div>
                          <div
                            style={{
                              fontSize: 15,
                              fontWeight: 700,
                              color: C.navy,
                            }}
                          >
                            {val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Conversions Toggle */}
        <button
          onClick={() => setShowConversions(!showConversions)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: C.white,
            border: `1px solid ${C.cardBorder}`,
            borderRadius: 12,
            padding: "14px 24px",
            color: C.textBody,
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: 16,
            transition: "all 0.2s",
            width: "100%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
          }}
        >
          <span
            style={{
              transform: showConversions ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
              display: "inline-block",
              color: C.mint
            }}
          >
            ▸
          </span>
          Conversiones Rápidas entre Sistemas
        </button>

        {showConversions && (
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.cardBorder}`,
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 32,
            }}
          >
            {CONVERSIONS.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 40px 1fr 1fr",
                  alignItems: "center",
                  padding: "16px 24px",
                  borderBottom:
                    i < CONVERSIONS.length - 1
                      ? `1px solid ${C.cardBorder}`
                      : "none",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 13, color: C.textBody, fontWeight: 500 }}>{c.from}</span>
                <span
                  style={{
                    fontSize: 12,
                    color: C.mint,
                    textAlign: "center",
                    fontWeight: 800
                  }}
                >
                  →
                </span>
                <span style={{ fontSize: 13, color: C.navy, fontWeight: 600 }}>{c.to}</span>
                <span
                  style={{
                    fontSize: 12,
                    color: C.textLight,
                    fontStyle: "italic",
                    textAlign: "right",
                  }}
                >
                  {c.rule}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Logistics Footer */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
            marginTop: 16,
          }}
        >
          {[
            {
              label: "Compra a Fábrica",
              value: "100 u/talla",
              icon: "🏭",
            },
            {
              label: "Exportación CR→USA",
              value: "60 u/talla",
              icon: "📦",
            },
            {
              label: "Máx. por Envío",
              value: "720 unidades",
              icon: "✈️",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "16px 18px",
                background: C.white,
                border: `1px solid ${C.cardBorder}`,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: C.textLight,
                    marginBottom: 2,
                    fontWeight: 700
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: C.navy,
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          style={{
            marginTop: 32,
            padding: "20px 0",
            borderTop: `1px solid ${C.cardBorder}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 11, color: C.textBody, letterSpacing: 1, fontWeight: 500 }}>
            PIE cm ≈ PLANTILLA cm − 1.3 cm
          </span>
          <span style={{ fontSize: 10, color: C.textLight, letterSpacing: 2, fontWeight: 700 }}>
            RANA WALK® — COSTA RICA MEDTECH HUB
          </span>
        </div>
      </div>
    </div>
  );
}

