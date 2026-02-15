import React, { useState, useCallback } from "react";
import { sizeConversionData, sizeSystems } from '../../data/seriesGeometry';

/* Exact colors from ranawalkreact.muitowork.com */
const C = {
    navy: "#013A57",
    mint: "#75CBB3",
    teal: "#066383",
    heroBg: "#0B1829",
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

const sizeKeys = ["S1", "S2", "S3", "S4", "S5", "S6"];
const sectionBreaks = new Set(["eu", "jp"]);
function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

function ScissorsIcon({ sz = 10, color = C.trimOrange }) {
    return <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none"><circle cx="4" cy="4" r="2.2" stroke={color} strokeWidth="1.3" fill="none" /><circle cx="4" cy="12" r="2.2" stroke={color} strokeWidth="1.3" fill="none" /><line x1="6" y1="5.5" x2="14" y2="12" stroke={color} strokeWidth="1.3" strokeLinecap="round" /><line x1="6" y1="10.5" x2="14" y2="4" stroke={color} strokeWidth="1.3" strokeLinecap="round" /></svg>;
}
function CheckIcon({ sz = 10, color = C.coreGreen }) {
    return <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.5 12L13 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function SizeChip({ value, type, isHL }) {
    if (type === "trim") return <span style={{ display: "inline-flex", alignItems: "center", gap: 2, padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600, background: "#FEF3EC", color: C.trimOrange, border: "1px solid #F5D5C0" }}><ScissorsIcon sz={8} />{value}</span>;
    return <span style={{ display: "inline-flex", alignItems: "center", gap: 2, padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600, background: isHL ? C.mintLight : "#F0F9F5", color: C.coreGreen, border: "1px solid #BFE5D4" }}><CheckIcon sz={8} />{value}</span>;
}

function EditModal({ sizeKey, systemKey, data, onSave, onClose }) {
    const sysLabel = sizeSystems.find(s => s.key === systemKey)?.label || systemKey;
    const [trimText, setTrimText] = useState(data.trim.join(", "));
    const [coreText, setCoreText] = useState(data.core.join(", "));
    const parse = t => t.split(",").map(s => s.trim()).filter(s => s);
    return <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(1,58,87,0.55)", backdropFilter: "blur(6px)" }} onClick={onClose}>
        <div onClick={e => e.stopPropagation()} style={{ background: C.white, borderRadius: 16, padding: 32, width: 420, maxWidth: "92vw", boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div><div style={{ fontSize: 22, fontWeight: 800, color: C.navy }}>{sizeKey}</div><div style={{ fontSize: 13, color: C.textLight, marginTop: 2 }}>{sysLabel}</div></div>
                <button onClick={onClose} style={{ background: C.inputBg, border: "none", borderRadius: 8, color: C.textLight, width: 34, height: 34, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>{"\u2715"}</button>
            </div>
            <div style={{ marginBottom: 18 }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: C.coreGreen, letterSpacing: 1, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}><CheckIcon sz={12} /> Exact Fit</label>
                <input value={coreText} onChange={e => setCoreText(e.target.value)} style={{ width: "100%", background: C.inputBg, border: `1px solid ${C.cardBorder}`, borderRadius: 10, padding: "12px 16px", color: C.navy, fontSize: 14, fontWeight: 600, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: C.trimOrange, letterSpacing: 1, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}><ScissorsIcon sz={12} /> Trim to Fit</label>
                <input value={trimText} onChange={e => setTrimText(e.target.value)} style={{ width: "100%", background: C.inputBg, border: `1px solid #F5D5C0`, borderRadius: 10, padding: "12px 16px", color: C.navy, fontSize: 14, fontWeight: 600, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => { onSave(sizeKey, systemKey, { core: parse(coreText), trim: parse(trimText) }); onClose(); }} style={{ flex: 1, padding: "13px 0", borderRadius: 10, border: "none", background: C.navy, color: C.white, fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}>Save</button>
                <button onClick={onClose} style={{ padding: "13px 24px", borderRadius: 10, border: `1px solid ${C.cardBorder}`, background: "transparent", color: C.textLight, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Cancel</button>
            </div>
        </div>
    </div>;
}

function CmEditor({ sizeKey, range, onSave, onClose }) {
    const [a, setA] = useState(String(range[0])); const [b, setB] = useState(String(range[1]));
    return <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(1,58,87,0.55)", backdropFilter: "blur(6px)" }} onClick={onClose}>
        <div onClick={e => e.stopPropagation()} style={{ background: C.white, borderRadius: 16, padding: 32, width: 360, boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 4 }}>{sizeKey}</div>
            <div style={{ fontSize: 13, color: C.textLight, marginBottom: 22 }}>Insole length range (cm)</div>
            <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
                {[["From", a, setA], ["To", b, setB]].map(([l, v, fn]) => <div key={l} style={{ flex: 1 }}><label style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: C.textLight, display: "block", marginBottom: 6 }}>{l}</label><input value={v} onChange={e => fn(e.target.value)} style={{ width: "100%", background: C.inputBg, border: `1px solid ${C.cardBorder}`, borderRadius: 10, padding: "12px", color: C.navy, fontSize: 16, fontWeight: 700, outline: "none", textAlign: "center", boxSizing: "border-box" }} /></div>)}
            </div>
            <button onClick={() => { onSave(sizeKey, [parseFloat(a), parseFloat(b)]); onClose(); }} style={{ width: "100%", padding: "13px 0", borderRadius: 10, border: "none", background: C.navy, color: C.white, fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}>Save Range</button>
        </div>
    </div>;
}

export default function SizeConversionChart() {
    const [sizeData, setSizeData] = useState(deepClone(sizeConversionData));
    const [activeSize, setActiveSize] = useState(null);
    const [searchSys, setSearchSys] = useState("us_men");
    const [searchVal, setSearchVal] = useState("");
    const [found, setFound] = useState(null);
    const [hoverRow, setHoverRow] = useState(null);
    const [editModal, setEditModal] = useState(null);
    const [rangeModal, setRangeModal] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const handleSearch = useCallback(val => {
        setSearchVal(val);
        if (!val.trim()) { setFound(null); setActiveSize(null); return; }
        const v = val.trim().toLowerCase();
        for (const sk of sizeKeys) {
            const sys = sizeData[sk][searchSys]; if (!sys) continue;
            if (sys.core.some(s => s.toLowerCase() === v)) { setFound({ size: sk, type: "core" }); setActiveSize(sk); return; }
            if (sys.trim.some(s => s.toLowerCase() === v)) { setFound({ size: sk, type: "trim" }); setActiveSize(sk); return; }
        }
        setFound(null);
    }, [searchSys, sizeData]);

    const saveSizes = (sk, sys, d) => setSizeData(p => { const n = deepClone(p); n[sk][sys] = d; return n; });
    const saveRange = (sk, r) => setSizeData(p => { const n = deepClone(p); n[sk].cmRange = r; return n; });
    const isHL = sk => activeSize === sk;
    const fmtInch = ([lo, hi]) => `${(lo / 2.54).toFixed(1)}″–${(hi / 2.54).toFixed(1)}″`;
    const fmtCm = ([lo, hi]) => `${lo.toFixed(1)}–${hi.toFixed(1)}`;

    return <div style={{ background: C.bg, fontFamily: "'Inter','Segoe UI','Helvetica Neue',sans-serif", color: C.navy }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>

            {/* Section Label — site pattern */}
            <div style={{ textAlign: "center", marginBottom: 10 }}>
                <span style={{ display: "inline-block", padding: "6px 20px", borderRadius: 40, border: `1.5px solid ${C.mint}`, background: C.white, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: C.navy, fontWeight: 600 }}>Size Conversion Chart</span>
            </div>

            {/* Title — site pattern: navy + mint keyword */}
            <h1 style={{ textAlign: "center", fontSize: 38, fontWeight: 800, margin: "16px 0 0", color: C.navy, lineHeight: 1.2 }}>
                Find Your <span style={{ color: C.mint }}>Perfect Fit</span>
            </h1>

            {/* Mint decorative line — site pattern */}
            <div style={{ display: "flex", justifyContent: "center", margin: "16px 0 20px" }}>
                <div style={{ width: 48, height: 3, borderRadius: 2, background: C.mint }} />
            </div>

            {/* Subtitle */}
            <p style={{ textAlign: "center", fontSize: 15, color: C.textBody, maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
                Insole length range across 12 international sizing systems.
                Each Rana Walk{"\u00AE"} insole covers a range of sizes with precision trim guides.
            </p>

            {/* Search — site input style */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", background: C.inputBg, border: `1px solid ${C.cardBorder}`, borderRadius: 12, padding: "5px 8px", gap: 6 }}>
                    <span style={{ fontSize: 12, color: C.textBody, padding: "0 6px", fontWeight: 500 }}>I wear</span>
                    <select value={searchSys} onChange={e => { setSearchSys(e.target.value); setSearchVal(""); setFound(null); setActiveSize(null); }} style={{ background: C.white, border: `1px solid ${C.cardBorder}`, borderRadius: 8, color: C.navy, padding: "8px 10px", fontSize: 12, fontWeight: 600, cursor: "pointer", outline: "none" }}>
                        {sizeSystems.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                    </select>
                    <input type="text" placeholder="size..." value={searchVal} onChange={e => handleSearch(e.target.value)} style={{ background: C.white, border: `1px solid ${C.cardBorder}`, borderRadius: 8, color: C.navy, padding: "8px 12px", fontSize: 13, fontWeight: 600, width: 60, outline: "none", textAlign: "center" }} />
                </div>
                {found && <div style={{ display: "flex", alignItems: "center", gap: 8, animation: "fadeIn .3s ease" }}>
                    <span style={{ color: C.textLight, fontSize: 18 }}>{"\u2192"}</span>
                    <div style={{ background: C.navy, color: C.white, padding: "8px 20px", borderRadius: 10, fontWeight: 800, fontSize: 18, letterSpacing: 1.5 }}>{found.size}</div>
                    {found.type === "trim"
                        ? <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 12px", borderRadius: 8, background: "#FEF3EC", border: "1px solid #F5D5C0" }}><ScissorsIcon sz={11} /><span style={{ fontSize: 11, color: C.trimOrange, fontWeight: 700 }}>Trim insole</span></div>
                        : <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 12px", borderRadius: 8, background: C.mintLight, border: "1px solid #BFE5D4" }}><CheckIcon sz={11} /><span style={{ fontSize: 11, color: C.coreGreen, fontWeight: 700 }}>Exact fit</span></div>}
                </div>}
                {searchVal && !found && <span style={{ color: "#D32F2F", fontSize: 12, fontWeight: 600 }}>Size not found</span>}
                <button onClick={() => setEditMode(!editMode)} style={{
                    padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", transition: "all .2s",
                    border: editMode ? `1.5px solid ${C.mint}` : `1.5px solid ${C.cardBorder}`,
                    background: editMode ? C.mintLight : C.white,
                    color: editMode ? C.teal : C.textLight
                }}>{editMode ? "\u2713 Editing" : "\u270E Edit"}</button>
            </div>

            {/* Legend */}
            <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: C.coreGreen, fontWeight: 600 }}><CheckIcon sz={11} /> Exact fit (no trimming)</div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: C.trimOrange, fontWeight: 600 }}><ScissorsIcon sz={11} /> Trim along guides</div>
            </div>

            {/* Size pills */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
                {sizeKeys.map(sk => <button key={sk} onClick={() => setActiveSize(activeSize === sk ? null : sk)}
                    style={{
                        padding: "10px 22px", borderRadius: 10, cursor: "pointer", fontWeight: 800, fontSize: 15, letterSpacing: 1.5, transition: "all .2s",
                        border: isHL(sk) ? `2px solid ${C.navy}` : `2px solid ${C.cardBorder}`,
                        background: isHL(sk) ? C.navy : C.white,
                        color: isHL(sk) ? C.mint : C.teal,
                        boxShadow: isHL(sk) ? `0 4px 16px ${C.navy}30` : "none"
                    }}>{sk}</button>)}
            </div>

            {/* TABLE — card style like site */}
            <div style={{ background: C.white, border: `1px solid ${C.cardBorder}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px rgba(1,58,87,0.06)" }}>
                {/* Header */}
                <div style={{ display: "grid", gridTemplateColumns: "110px repeat(6, 1fr)", borderBottom: `2px solid ${C.mint}50`, background: C.inputBg }}>
                    <div style={{ padding: "14px 14px", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: C.textLight, fontWeight: 700, display: "flex", alignItems: "flex-end" }}>System</div>
                    {sizeKeys.map(sk => <div key={sk} onClick={() => editMode ? setRangeModal(sk) : setActiveSize(activeSize === sk ? null : sk)}
                        style={{
                            padding: "10px 6px", textAlign: "center", cursor: "pointer", borderLeft: `1px solid ${C.cardBorder}40`,
                            background: isHL(sk) ? C.navy + "0C" : "transparent", position: "relative", transition: "all .15s"
                        }}>
                        <div style={{ fontSize: 17, fontWeight: 900, color: isHL(sk) ? C.navy : C.teal, letterSpacing: 1.5 }}>{sk}</div>
                        <div style={{ fontSize: 8, color: C.textLight, marginTop: 2, letterSpacing: 0.5 }}>{sizeData[sk].cmRange[0]}–{sizeData[sk].cmRange[1]} cm</div>
                        {editMode && <div style={{ position: "absolute", top: 3, right: 3, width: 14, height: 14, borderRadius: 4, background: C.mintLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: C.teal }}>{"\u270E"}</div>}
                    </div>)}
                </div>

                {/* INCH row at top */}
                <div style={{ display: "grid", gridTemplateColumns: "110px repeat(6, 1fr)", background: C.navy + "08", borderBottom: `2px solid ${C.navy}15` }}>
                    <div style={{ padding: "11px 14px", display: "flex", alignItems: "center" }}><span style={{ fontSize: 11, fontWeight: 800, color: C.navy, letterSpacing: 1 }}>INCH</span></div>
                    {sizeKeys.map(sk => <div key={sk} style={{ padding: "9px 4px", textAlign: "center", borderLeft: `1px solid ${C.cardBorder}20` }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: C.navy }}>{fmtInch(sizeData[sk].cmRange)}</span>
                    </div>)}
                </div>

                {/* Rows */}
                {sizeSystems.map((sys, idx) => <div key={sys.key}>
                    {sectionBreaks.has(sys.key) && <div style={{ height: 1, background: C.mint + "30" }} />}
                    <div onMouseEnter={() => setHoverRow(sys.key)} onMouseLeave={() => setHoverRow(null)}
                        style={{
                            display: "grid", gridTemplateColumns: "110px repeat(6, 1fr)",
                            borderBottom: `1px solid ${C.cardBorder}40`,
                            background: hoverRow === sys.key ? C.inputBg + "80" : "transparent", transition: "background .1s"
                        }}>
                        <div style={{ padding: "10px 14px", display: "flex", alignItems: "center" }}><span style={{ fontSize: 11, fontWeight: 700, color: C.navy }}>{sys.label}</span></div>
                        {sizeKeys.map(sk => {
                            const d = sizeData[sk][sys.key]; if (!d) return <div key={sk} style={{ borderLeft: `1px solid ${C.cardBorder}20` }} />;
                            const hl = isHL(sk); const has = d.core.length > 0 || d.trim.length > 0;
                            return <div key={sk} onClick={() => editMode && setEditModal({ sizeKey: sk, systemKey: sys.key })}
                                style={{
                                    padding: "8px 4px", textAlign: "center", borderLeft: `1px solid ${C.cardBorder}20`,
                                    background: hl ? C.navy + "06" : "transparent", cursor: editMode ? "pointer" : "default", position: "relative"
                                }}>
                                {has ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
                                    {d.trim.map(s => <SizeChip key={`t${s}`} value={s} type="trim" />)}
                                    {d.core.map(s => <SizeChip key={`c${s}`} value={s} type="core" isHL={hl} />)}
                                </div> : <span style={{ color: C.cardBorder, fontSize: 10 }}>{"\u2014"}</span>}
                                {editMode && <div style={{ position: "absolute", top: 1, right: 1, width: 11, height: 11, borderRadius: 3, background: C.mintLight, fontSize: 6, color: C.teal, display: "flex", alignItems: "center", justifyContent: "center" }}>{"\u270E"}</div>}
                            </div>;
                        })}
                    </div>
                </div>)}

                {/* CM row at bottom */}
                <div style={{ height: 2, background: C.navy + "18" }} />
                <div style={{ display: "grid", gridTemplateColumns: "110px repeat(6, 1fr)", background: C.teal + "08" }}>
                    <div style={{ padding: "11px 14px", display: "flex", alignItems: "center" }}><span style={{ fontSize: 11, fontWeight: 800, color: C.teal, letterSpacing: 1 }}>CM</span></div>
                    {sizeKeys.map(sk => <div key={sk} style={{ padding: "9px 4px", textAlign: "center", borderLeft: `1px solid ${C.cardBorder}20` }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: C.teal }}>{fmtCm(sizeData[sk].cmRange)}</span>
                    </div>)}
                </div>
            </div>

            {/* Notes — card style */}
            <div style={{ marginTop: 28, padding: "20px 24px", background: C.white, border: `1px solid ${C.cardBorder}`, borderRadius: 14 }}>
                <div style={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: C.teal, fontWeight: 700, marginBottom: 10 }}>Reference Notes</div>
                <div style={{ fontSize: 12, color: C.textBody, lineHeight: 2 }}>
                    <div>{"\u2022"} cm values = insole/last length. <span style={{ color: C.coreGreen, fontWeight: 600 }}>{"\u2713"} Green</span> = exact fit. <span style={{ color: C.trimOrange, fontWeight: 600 }}>{"\u2702"} Orange</span> = trim along guides.</div>
                    <div>{"\u2022"} KR/JP/CN = Mondopoint (foot length). Foot cm {"\u2248"} insole cm {"\u2212"} 1.3. IN = UK Men equivalent.</div>
                    <div>{"\u2022"} BRA = EU {"\u2212"} 2 | UK Men = US Men {"\u2212"} 1 | UK Women = US Women {"\u2212"} 1</div>
                </div>
            </div>

            {/* Footer */}
            <div style={{ textAlign: "center", marginTop: 24, paddingBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                <span style={{ fontSize: 10, color: C.textLight, letterSpacing: 2, fontWeight: 600 }}>RANA WALK{"\u00AE"}</span>
                <span style={{ width: 4, height: 4, borderRadius: 4, background: C.mint, display: "inline-block" }} />
                <span style={{ fontSize: 10, color: C.textLight, letterSpacing: 1 }}>LeapCore{"\u2122"}</span>
                <span style={{ width: 4, height: 4, borderRadius: 4, background: C.mint, display: "inline-block" }} />
                <span style={{ fontSize: 10, color: C.textLight, letterSpacing: 1 }}>PORON{"\u00AE"} XRD{"\u00AE"}</span>
            </div>
        </div>

        {editModal && <EditModal sizeKey={editModal.sizeKey} systemKey={editModal.systemKey} data={sizeData[editModal.sizeKey][editModal.systemKey]} onSave={saveSizes} onClose={() => setEditModal(null)} />}
        {rangeModal && <CmEditor sizeKey={rangeModal} range={sizeData[rangeModal].cmRange} onSave={saveRange} onClose={() => setRangeModal(null)} />}

        <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}*{box-sizing:border-box;}select option{background:${C.white};color:${C.navy};}input::placeholder{color:${C.textLight};}`}</style>
    </div>;
}
