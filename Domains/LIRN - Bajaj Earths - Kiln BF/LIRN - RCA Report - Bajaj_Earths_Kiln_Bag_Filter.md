<style>
  @media print {
    .page-break { page-break-before: always; }
    h2 { page-break-after: avoid; }
    table { page-break-inside: avoid; }
  }
  h1 { border-bottom: 1px solid #CFD8DC !important; }
  .toc-link { color: #263238; text-decoration: none; border-bottom: 1px dashed #90A4AE; padding-bottom: 1px; }
  .toc-link:hover { color: #1565C0; border-bottom-color: #1565C0; }
  .toc-sub { color: #546E7A; text-decoration: none; border-bottom: 1px dashed #B0BEC5; padding-bottom: 1px; }
  .toc-sub:hover { color: #1565C0; border-bottom-color: #1565C0; }
  .toc-app { color: #546E7A; text-decoration: none; border-bottom: 1px dashed #B0BEC5; padding-bottom: 1px; }
  .toc-app:hover { color: #1565C0; border-bottom-color: #1565C0; }
</style>

<div style="text-align: center; padding: 30px 0 15px 0; border-bottom: 3px solid #1565C0; margin-bottom: 30px;">
  <strong style="font-size: 1.8em; color: #1565C0; letter-spacing: 3px;">LIRN Solutions</strong><br>
  <span style="font-size: 0.95em; color: #546E7A; letter-spacing: 1px;">Process Engineering &amp; Industrial Consulting</span>
</div>

<h1 style="font-size: 1.3em; font-weight: 600; color: #37474F; border-bottom: 1px solid #CFD8DC; padding-bottom: 6px;">Root Cause Analysis Report</h1>

<div style="display: flex; justify-content: space-between;"><span><strong>Prepared for:</strong> Bajaj Earths</span><span><strong>Date:</strong> 12 April 2026</span></div>

**Subject:** Recurring Furnace Backfire & Visible Stack Emissions  
**Process:** Calcium Bentonite Ore Thermal Activation (Coal-Fired Rotary Kiln, 10 TPH)

<div style="background: #F5F7FA; border-left: 4px solid #1565C0; padding: 12px 18px; margin: 20px 0; border-radius: 0 6px 6px 0;">
  <strong style="color: #1565C0; font-size: 0.85em; letter-spacing: 0.5px;">REFERENCE DOCUMENT</strong><br>
  <span style="font-size: 0.9em; color: #546E7A;">All equipment specifications, gas volume calculations, and duct sizing data referenced in this report are detailed in the companion: <strong style="color: #1565C0;">LIRN - System Reference - Bajaj Earths Kiln Bag Filter</strong>.</span>
</div>

<div style="margin: 35px 0;">

<p style="font-size: 1.1em; font-weight: bold; color: #263238; margin-bottom: 18px; letter-spacing: 0.5px;">Contents</p>

<table style="width: 100%; border: none; border-collapse: collapse;">
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">1</span> <a href="#1-executive-summary" class="toc-link">Executive Summary</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">2</span> <a href="#2-system-layout" class="toc-link">System Layout</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">3</span> <a href="#3-problem-statement" class="toc-link">Problem Statement</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">4</span> <a href="#4-root-cause-analysis" class="toc-link">Root Cause Analysis</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">4.1</span> <a href="#41-primary--furnace-backfire-undersized-ductwork-strangling-system-draft" class="toc-sub">Primary — Furnace Backfire</a></td></tr>
<tr><td style="padding: 5px 0 7px 28px; border: none;"><span style="color: #78909C;">4.2</span> <a href="#42-secondary--stack-emissions-premature-dust-cake-removal" class="toc-sub">Secondary — Stack Emissions</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">5</span> <a href="#5-before--after--corrective-action-impact" class="toc-link">Before &amp; After — Corrective Action Impact</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">6</span> <a href="#6-recommendations" class="toc-link">Recommendations</a></td></tr>
<tr><td style="padding: 10px 0 0 0; border-top: 1px solid #E0E0E0;"><span style="color: #78909C; font-weight: bold; margin-right: 6px;">A</span> <a href="#appendix-a-calculated-gas-volume-at-each-process-stage" class="toc-app">Appendix — Calculated Gas Volume at Each Stage</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #78909C; font-weight: bold; margin-right: 6px;">B</span> <a href="#appendix-b-pressure-loss-calculation-detail" class="toc-app">Appendix — Pressure Loss Detail</a></td></tr>
</table>

</div>

<div class="page-break"></div>

## 1. Executive Summary

The calcium bentonite ore processing plant is experiencing two operational failures: **cyclic furnace backfire every 2-3 minutes** and **visible fine dust emissions from the exhaust stack**.

Our investigation identifies a single structural root cause driving both issues: **two 600 mm diameter duct sections** (connecting the cyclone to the bag filter inlet, and the bag filter to the ID fan outlet) are severely undersized for the gas volume generated by the process. These restrictions consume **85% of the ID fan's total draft capacity as friction loss**, leaving near-zero negative pressure at the furnace. This causes cyclic positive-pressure blowback (backfire). The restricted flow also contributes to inadequate dust cake formation in the bag filter, allowing fine particles to pass through to the stack.

**Primary corrective action:** Enlarge both 600 mm duct sections to 1,000-1,200 mm diameter. This structural modification recovers **~142 mm WG of draft pressure**, eliminates backfire, enables proper bag filter operation, and unlocks ~74% energy savings on the ID fan.

<div class="page-break"></div>

## 2. System Layout

<img src="LIRN%20-%20System%20Diagram%20-%20Bajaj_Earths_Kiln_Bag_Filter.svg" style="width: 100%;" />


<div class="page-break"></div>

## 3. Problem Statement

### 3.1 Observed Symptoms

| # | Symptom | Details |
|:-:|---------|---------|
| 1 | **Furnace Backfire** | Hot gas erupts from furnace inlet every 2-3 minutes; subsides for ~1 minute; cycle repeats continuously |
| 2 | **Visible Stack Emissions** | Fine calcium bentonite dust visible in exhaust; product loss and environmental concern |
| 3 | **Low Bag Filter DP** | Differential pressure across bags measured at **20 mm WG** (expected: 80-130 mm WG) |
| 4 | **High Outlet Vacuum** | -70 mm WG measured at bag filter outlet vs. atmosphere |

### 3.2 Troubleshooting Already Performed

| Action Taken | Result | Conclusion |
|-------------|--------|------------|
| Reduced ID fan VFD frequency | Backfire frequency **increased** | Confirms draft deficiency, not excess flow |
| Stopped pulse cleaning for 8 hours | **No change** in backfire pattern | Rules out pulse-induced pressure waves as cause |
| Inspected all bag collars and bags | All intact, no leaks found | Rules out bag or seal failure |
| Reduced FD fan | Not viable; combustion requires 750°C kiln inlet temperature | FD airflow cannot be reduced |

<div class="page-break"></div>

## 4. Root Cause Analysis

### 4.1 PRIMARY — Furnace Backfire: Undersized Ductwork Strangling System Draft

#### The Problem

The gas path between the cyclone and the ID fan passes through **two 600 mm diameter duct sections** that are severely undersized relative to the upstream and downstream connections they serve.

| Duct Section | Route | Upstream Connection | Restriction | Area Reduction |
|-------------|-------|---------------------|-------------|:--------------:|
| Cyclone → Bag Filter | Z-route: 15 m, 2x90° bends, 5 m drop | 1,200 mm dia (1.131 m²) | **600 mm dia (0.283 m²)** | **75%** |
| Bag Filter → ID Fan | U-route: 9 m, 2x90° bends, 2.5 m drop | 1,700x350 mm rect (0.595 m²) | **600 mm dia (0.283 m²)** | **52%** |

#### How This Causes Backfire

The ID fan's role is to create **negative pressure (vacuum)** throughout the system, pulling hot gas from the furnace forward through the kiln, cyclone, bag filter, and out the stack. For stable furnace operation, the furnace must maintain negative draft (typically -10 to -30 mm WG) so that combustion gas always flows forward.

The ID fan (rated 89,097 m³/h at 902 RPM) has more than enough capacity for this. However, **the 600 mm ducts act as a bottleneck that consumes almost all the fan's pressure capability before it can reach the furnace:**

**Pressure Loss Budget, Current System:**

| Component | Pressure Loss (mm WG) | Share of ID Fan Capacity |
|-----------|:---------------------:|:------------------------:|
| **600 mm inlet duct** (Z-route: 15 m, 2x90° bends, 5 m drop) | **~90** | **47%** |
| **600 mm outlet duct** (U-route: 9 m, 2x90° bends, 2.5 m drop) | **~80** | **42%** |
| Bag filter (across bags) | 20 | 11% |
| **Total system loss** | **~190** | **100%** |
| **ID fan total pressure capacity** | **~190** | — |
| **Remaining for furnace draft** | **~0** | **0%** |

With zero draft remaining at the furnace, the system operates at the threshold of positive pressure. Meanwhile, gas generation is continuous:

- Coal combustion produces ~3,300 m³/h of flue gas
- Moisture evaporation adds ~4,050 m³/h of steam (at 135°C)
- Combined with input air, **~27,000 m³/h** of gas arrives at the bag filter stage

But the 600 mm ducts can only pass **~23,000 m³/h**, leaving a **4,000 m³/h deficit**. The excess gas accumulates, pressure builds backward through the cyclone and kiln to the furnace, the furnace goes positive pressure, and **hot gas erupts backward as backfire**. This relieves the overpressure, vacuum momentarily recovers, and the cycle restarts every 2-3 minutes.

#### Why Reducing ID Fan Speed Made It Worse

The 600 mm ducts impose a hard ceiling on gas throughput regardless of fan speed. Reducing the VFD frequency below 47 Hz lowers the fan's pressure capability, meaning it has *even less* vacuum to overcome the duct friction. Less gas gets through, pressure builds faster, and backfire becomes more frequent. **The bottleneck is the duct, not the fan.**

At its current 47 Hz, the ID fan delivers only **~23,000 m³/h actual flow (just 26% of its rated 89,097 m³/h capacity)** because it is operating against an excessively high system resistance curve imposed by the undersized ducts.

### 4.2 SECONDARY — Stack Emissions: Premature Dust Cake Removal

In bag filtration, the bag fabric itself is a coarse filter. The actual fine-particle filtration is performed by the **dust cake**, the accumulated layer of material on the bag surface. A mature dust cake typically produces a differential pressure of 80-130 mm WG.

The current system uses a **60-second pulse cleaning timer**, which strips the dust cake before it can mature:

| Indicator | Measured | Expected (Healthy) | Interpretation |
|-----------|:--------:|:------------------:|---------------|
| Bag filter DP | **20 mm WG** | 80-130 mm WG | No mature dust cake present |
| Bag integrity | All intact | N/A | Fabric is fine; issue is bare fabric cannot catch fines |
| Stack emissions | Visible dust | Clear | Fine bentonite passes through uncaked bags |

The duct restriction is also a contributing factor: the restricted flow creates uneven gas distribution across the bag house, further degrading filtration efficiency.

<div class="page-break"></div>

## 5. Before & After — Corrective Action Impact

### 5.1 Duct Modification Impact (P1 + P2)

| Parameter | CURRENT (600 mm) | AFTER FIX (1,000-1,200 mm) | Change |
|-----------|:-----------------:|:---------------------------:|:------:|
| Inlet duct diameter | 600 mm | 1,000-1,200 mm | +67-100% |
| Inlet duct cross-section | 0.283 m² | 0.785-1.131 m² | +177-300% |
| Inlet gas velocity | 26.5 m/s | 6.6-9.6 m/s | -64-75% |
| **Inlet duct pressure loss** | **~90 mm WG** | **~8-13 mm WG** | **-86-91%** |
| Outlet duct diameter | 600 mm | 800-1,000 mm | +33-67% |
| Outlet duct cross-section | 0.283 m² | 0.503-0.785 m² | +78-177% |
| Outlet gas velocity | 26.5 m/s | 9.6-14.9 m/s | -44-64% |
| **Outlet duct pressure loss** | **~80 mm WG** | **~10-15 mm WG** | **-81-88%** |
| **Total duct friction** | **~170 mm WG** | **~18-28 mm WG** | **-84-89%** |
| **Available furnace draft** | **~0 mm WG** | **~62-72 mm WG** | **Stable operation** |
| **Backfire** | **Every 2-3 min** | **Eliminated** | — |

### 5.2 Pulse Cleaning Adjustment Impact (P3)

| Parameter | CURRENT | AFTER FIX |
|-----------|:-------:|:---------:|
| Trigger mode | Timer (60 sec) | DP-triggered at 120-130 mm WG |
| Fallback timer | None | 300-600 sec (if no DP sensor) |
| Pulse pressure | 5 bar | Test at 3-3.5 bar |
| Bag filter DP | **20 mm WG** | **80-130 mm WG** (healthy cake) |
| Stack emissions | Visible dust | Below visible threshold |

### 5.3 Overall System Comparison

| Parameter | Current | Proposed | 
|-----------|:-------:|:--------:|
| Inlet duct loss | 90 mm WG (47%) | 13 mm WG (7%) |
| Bag filter DP | 20 mm WG (11%) | 100 mm WG (53%) |
| Outlet duct loss | 80 mm WG (42%) | 15 mm WG (8%) |
| **Total system loss** | **190 mm WG** | **128 mm WG** |
| **Furnace draft** | **~0 mm WG (BACKFIRE)** | **~62 mm WG (STABLE)** |
| ID fan VFD | 47 Hz | 25-32 Hz |
| ID fan power | 100% | ~26% **(74% saving)** |
| Gas throughput | ~23,000 m³/h (choked) | ~27,000 m³/h (full flow) |
| **Stack emissions** | **VISIBLE DUST** | **CLEAN** |

<div class="page-break"></div>

## 6. Recommendations

| Priority | Action | Addresses | Details |
|:--------:|--------|-----------|---------|
| **P1** | **Enlarge inlet duct** (Cyclone → Bag Filter) | Backfire | Replace 600 mm with 1,000-1,200 mm dia for full 15 m Z-route. The cyclone outlet is already 1,200 mm; this undoes an unnecessary restriction. **Recovers ~77 mm WG draft.** |
| **P2** | **Enlarge outlet duct** (Bag Filter → ID Fan) | Draft balance | Replace 600 mm with 800-1,000 mm dia for full 9 m U-route. **Recovers ~65 mm WG draft.** |
| **P3** | **Switch pulse cleaning to DP-triggered** | Emissions | Set DP trigger at 120-130 mm WG threshold. If DP sensor unavailable, extend timer to 300-600 sec as interim. Test reducing pulse pressure from 5 bar to 3-3.5 bar. |
| **P4** | **Reduce ID fan VFD frequency** | Energy savings | After P1+P2 commissioning, reduce from 47 Hz to 25-32 Hz. Power savings: (32/47)³ = 0.31, approximately **69-74% energy reduction.** |

**Implementation sequence:** P1 and P2 should be executed together during a single planned shutdown. P3 can be configured during P1+P2 commissioning. P4 is tuned incrementally during post-modification start-up.

---

<div class="page-break"></div>

## Appendix A: Calculated Gas Volume at Each Process Stage

### A.1 Gas Generation Sources

| Source | Calculation | Volume (m³/h) |
|--------|------------|:--------------:|
| Combustion air input (FD + SFD) | 14,227 + 1,160 | **15,387** |
| Coal combustion flue gas | 550 kg/hr × ~6 m³/kg (products at temperature) | **~3,300** |
| Moisture evaporation (steam) | 3,158 kg/hr water evaporated → steam at 135°C | **~4,050** |

> **Coal parameters:** 550 kg/hr average feed, GCV 4,200 kcal/kg, heat input 2,310,000 kcal/hr.  
> **Theoretical air requirement:** ~5.5 m³/kg coal. Actual air supply: 15,387 m³/h. Excess air ratio: ~5:1.  
> **Moisture evaporated:** Feed rate 10 TPH × (35% input − 5% output) = 3,158 kg/hr water removed.

### A.2 Gas Volume at Each Stage

Gas volume increases with temperature per ideal gas law: V_hot = V_cold × (T_hot + 273) / (T_cold + 273)

| Stage | Temp (°C) | Gas Volume (m³/h) | Notes |
|-------|:---------:|:-----------------:|-------|
| FD + SFD air input | ~30 | 15,387 | Ambient air, measured at fans |
| Furnace exit / Kiln inlet | ~750 | ~63,000-68,000 | Combustion gas + heated excess air + early steam |
| Kiln outlet | ~350 | ~38,000-42,000 | After heat transfer to bentonite material |
| Cyclone inlet | ~200 | ~30,000-34,000 | Further cooling through ductwork |
| **Cyclone outlet / Bag filter inlet** | **~135** | **~25,000-28,000** | **Design flow for the bag filter circuit** |

### A.3 Duct Velocity at Each Cross-Section

Calculated at ~27,000 m³/h (mid-range gas volume at bag filter stage):

| Location | Size | Area (m²) | Velocity (m/s) | Limit | Status |
|----------|:----:|:---------:|:--------------:|:-----:|:------:|
| Cyclone outlet | 1,200 mm dia | 1.131 | 6.6 | 18 m/s | OK |
| **Inlet duct** | **600 mm dia** | **0.283** | **26.5** | **18 m/s** | **CHOKED** |
| Bag filter inlets | 4 × 500 mm dia | 0.785 | 9.6 | 18 m/s | OK |
| Bag filtration (A/C) | 502.7 m² total | — | 0.90 m/min | 1.5 m/min | OK |
| BF rectangular outlet | 1,700 × 350 mm | 0.595 | 12.6 | 18 m/s | OK |
| **Outlet duct** | **600 mm dia** | **0.283** | **26.5** | **18 m/s** | **CHOKED** |
| ID fan inlet | 1,500 mm dia | 1.767 | 4.2 | 18 m/s | OK |

> *Recommended maximum duct velocity for mineral dust-laden gas: 15-18 m/s. Both 600 mm sections exceed this by 47-77%.*

## Appendix B: Pressure Loss Calculation Detail

### B.1 Inlet Duct — 600 mm Z-Route (Cyclone → Bag Filter)

Route: 1,200 mm cyclone outlet → contraction to 600 mm → 15 m total run with 2 × 90° bends → 5 m altitude drop → expansion to 4 × 500 mm bag filter inlets.

| Component | Basis | Loss (mm WG) |
|-----------|-------|:------------:|
| Contraction 1,200 → 600 mm | K ≈ 0.3 at 26.5 m/s | 15-20 |
| Straight run: 15 m at 26.5 m/s | f ≈ 0.02, D = 0.6 m | 25-35 |
| 90° bend × 2 | K ≈ 0.5 each at 26.5 m/s | 36-44 |
| Expansion to 4 × 500 mm | K ≈ 0.15 | 5-8 |
| **Subtotal** | | **81-107** |
| **Value used in analysis** | | **~90** |

### B.2 Outlet Duct — 600 mm U-Route (Bag Filter → ID Fan)

Route: 1,700 × 350 mm rectangular BF outlet → contraction to 600 mm → 9 m total run with 2 × 90° bends → 2.5 m altitude drop → expansion to 1,500 mm ID fan inlet.

| Component | Basis | Loss (mm WG) |
|-----------|-------|:------------:|
| Contraction rect → 600 mm | K ≈ 0.25 at 26.5 m/s | 12-18 |
| Straight run: 9 m at 26.5 m/s | f ≈ 0.02, D = 0.6 m | 15-22 |
| 90° bend × 2 | K ≈ 0.5 each at 26.5 m/s | 36-44 |
| Expansion to 1,500 mm | K ≈ 0.15 | 5-8 |
| **Subtotal** | | **68-92** |
| **Value used in analysis** | | **~80** |

### B.3 ID Fan Operating Point

| Parameter | Value |
|-----------|:-----:|
| Rated airflow | 89,097 m³/h |
| Rated RPM | 960 |
| Current VFD frequency | 47 Hz |
| Operating RPM | 960 × (47/50) = **902 RPM** |
| Total pressure at 902 RPM | ~190 mm WG |
| Actual system throughput | ~23,000 m³/h |
| Fan capacity utilization | **26% of rated** |

<div style="text-align: center; margin-top: 40px; color: #90A4AE; font-size: 0.85em; letter-spacing: 1px;">
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&ensp; End of Report &ensp;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
</div>

<div style="font-size: 0.72em; color: #78909C; font-style: italic; line-height: 1.7; margin-top: 30px;">

- This document has been prepared by LIRN Solutions exclusively for Bajaj Earths and may not be reproduced or disclosed to third parties without prior written consent.
- Findings and recommendations are based on client-provided data, site observations, and standard engineering methods. LIRN Solutions does not independently warrant the accuracy of client-supplied data.
- This report supports operational decision-making and does not constitute detailed engineering design. Implementation should be carried out under qualified engineering supervision with site-specific validation.
- LIRN Solutions has exercised reasonable professional care in preparing this report. Liability is limited to the professional fees received for this engagement.
- The analysis reflects plant conditions at the time of assessment. Recommendations may require revision if operating parameters or equipment configuration change materially.

</div>