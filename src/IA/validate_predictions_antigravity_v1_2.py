#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Antigravity v1.2 — Prediction Validator (CI-friendly)

This tool validates YOUR engine predictions against the official truth set
(Golden Set + Edge Cases).

Inputs:
  --truth : CSV with columns:
      ID Perfil, Peso, Calce de Zapato, Actividad, Foco de Dolor, Expected
  --pred  : CSV with columns:
      ID Perfil, Predicted
      (Optionally include your input columns; they will be ignored.)

Usage:
  python validate_predictions_antigravity_v1_2.py --truth antigravity_truth_v1_2.csv --pred my_engine_predictions.csv --outdir .

Outputs:
  - validation_report.txt
  - mismatches.csv (only if mismatches exist)

Exit codes:
  0 = all good
  1 = mismatches found
  2 = missing IDs / malformed files
"""

from __future__ import annotations
import argparse
import sys
from pathlib import Path
import pandas as pd


REQUIRED_TRUTH = {"ID Perfil","Expected"}
REQUIRED_PRED = {"ID Perfil","Predicted"}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--truth", required=True)
    ap.add_argument("--pred", required=True)
    ap.add_argument("--outdir", default=".")
    args = ap.parse_args()

    truth_path = Path(args.truth)
    pred_path = Path(args.pred)
    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)

    try:
        truth = pd.read_csv(truth_path)
        pred = pd.read_csv(pred_path)
    except Exception as e:
        print(f"ERROR reading files: {e}")
        sys.exit(2)

    if not REQUIRED_TRUTH.issubset(set(truth.columns)):
        print(f"ERROR: truth file must include columns: {sorted(REQUIRED_TRUTH)}")
        sys.exit(2)
    if not REQUIRED_PRED.issubset(set(pred.columns)):
        print(f"ERROR: pred file must include columns: {sorted(REQUIRED_PRED)}")
        sys.exit(2)

    # Normalize
    truth = truth[["ID Perfil","Expected"]].copy()
    pred = pred[["ID Perfil","Predicted"]].copy()
    truth["ID Perfil"] = truth["ID Perfil"].astype(str).str.strip()
    pred["ID Perfil"] = pred["ID Perfil"].astype(str).str.strip()
    truth["Expected"] = truth["Expected"].astype(str).str.strip()
    pred["Predicted"] = pred["Predicted"].astype(str).str.strip()

    # Join
    merged = truth.merge(pred, on="ID Perfil", how="left", indicator=True)
    missing = merged[merged["_merge"] != "both"].copy()

    report_path = outdir / "validation_report.txt"
    mismatch_path = outdir / "mismatches.csv"

    lines = []
    lines.append("Antigravity v1.2 — Prediction Validation Report")
    lines.append(f"Truth: {truth_path.name} | Rows: {len(truth)}")
    lines.append(f"Pred:  {pred_path.name} | Rows: {len(pred)}")
    lines.append("")

    if len(missing):
        lines.append(f"❌ Missing predictions for {len(missing)} truth IDs (showing first 15):")
        lines.append(missing.head(15)[["ID Perfil","Expected","_merge"]].to_string(index=False))
        report_path.write_text("\n".join(lines), encoding="utf-8")
        print(report_path.read_text(encoding="utf-8"))
        sys.exit(2)

    merged["OK"] = merged["Expected"] == merged["Predicted"]
    mism = merged[~merged["OK"]].copy()

    total = len(merged)
    ok_n = int(merged["OK"].sum())
    bad_n = total - ok_n

    lines.append(f"TOTAL: {total} | OK: {ok_n} | MISMATCH: {bad_n}")
    lines.append("")

    if bad_n:
        lines.append("Top mismatches (first 15):")
        lines.append(mism.head(15)[["ID Perfil","Expected","Predicted"]].to_string(index=False))
        mism.to_csv(mismatch_path, index=False, encoding="utf-8-sig")
        lines.append("")
        lines.append(f"Saved mismatches: {mismatch_path}")
        report_path.write_text("\n".join(lines), encoding="utf-8")
        print(report_path.read_text(encoding="utf-8"))
        sys.exit(1)

    lines.append("All predictions match the truth set. ✅")
    report_path.write_text("\n".join(lines), encoding="utf-8")
    print(report_path.read_text(encoding="utf-8"))
    sys.exit(0)


if __name__ == "__main__":
    main()
