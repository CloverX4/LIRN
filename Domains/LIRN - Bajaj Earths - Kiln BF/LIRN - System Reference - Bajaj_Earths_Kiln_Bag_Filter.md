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
</style>

<div style="text-align: center; padding: 30px 0 15px 0; border-bottom: 3px solid #1565C0; margin-bottom: 30px;">
  <strong style="font-size: 1.8em; color: #1565C0; letter-spacing: 3px;">LIRN Solutions</strong><br>
  <span style="font-size: 0.95em; color: #546E7A; letter-spacing: 1px;">Process Engineering &amp; Industrial Consulting</span>
</div>

<h1 style="font-size: 1.3em; font-weight: 600; color: #37474F; border-bottom: 1px solid #CFD8DC; padding-bottom: 6px;">System Reference Document</h1>

<div style="display: flex; justify-content: space-between; margin-bottom: 2px;"><span><strong>Prepared for:</strong> Bajaj Earths</span><span><strong>Date:</strong> 12 April 2026</span></div>
<div style="margin: 0;"><strong>Process:</strong> Calcium Bentonite Ore Thermal Activation (Coal-Fired Rotary Kiln, 10 TPH)</div>
<div style="background: #F5F7FA; border-left: 4px solid #1565C0; padding: 6px 16px; margin: 6px 0; border-radius: 0 6px 6px 0;">
  <span style="font-size: 0.85em; color: #546E7A;">Equipment specs, gas volumes, duct sizing, and pressure loss calculations for the kiln-bag filter system.</span>
</div>
<div style="margin: 15px 0;">

<p style="font-size: 1.05em; font-weight: bold; color: #263238; margin-bottom: 10px; letter-spacing: 0.5px;">Contents</p>

<table style="width: 100%; border: none; border-collapse: collapse;">
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">1</span> <a href="#1-process-overview" class="toc-link">Process Overview</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">2</span> <a href="#2-equipment-specifications" class="toc-link">Equipment Specifications</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">2.1</span> <a href="#21-rotary-kiln" class="toc-sub">Rotary Kiln</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">2.2</span> <a href="#22-cyclone-separators-2-units-parallel" class="toc-sub">Cyclone Separators</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">2.3</span> <a href="#23-bag-filter-house" class="toc-sub">Bag Filter House</a></td></tr>
<tr><td style="padding: 5px 0 7px 28px; border: none;"><span style="color: #78909C;">2.4</span> <a href="#24-connecting-ductwork" class="toc-sub">Connecting Ductwork</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">3</span> <a href="#3-fan-data" class="toc-link">Fan Data</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">3.1</span> <a href="#31-forced-draft-fan-fd" class="toc-sub">FD Fan</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">3.2</span> <a href="#32-secondary-forced-draft-fan-sfd" class="toc-sub">SFD Fan</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">3.3</span> <a href="#33-induced-draft-fan-id" class="toc-sub">ID Fan</a></td></tr>
<tr><td style="padding: 5px 0 7px 28px; border: none;"><span style="color: #78909C;">3.4</span> <a href="#34-combined-combustion-air-input" class="toc-sub">Combined Air Input</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">4</span> <a href="#4-gas-volume-analysis" class="toc-link">Gas Volume Analysis</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">4.1</span> <a href="#41-combustion-gas-generation" class="toc-sub">Combustion Gas Generation</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">4.2</span> <a href="#42-moisture-load" class="toc-sub">Moisture Load</a></td></tr>
<tr><td style="padding: 5px 0 7px 28px; border: none;"><span style="color: #78909C;">4.3</span> <a href="#43-gas-volume-profile-through-the-system" class="toc-sub">Gas Volume Profile</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">5</span> <a href="#5-duct-velocity-and-capacity-check" class="toc-link">Duct Velocity & Capacity Check</a></td></tr>
<tr><td style="padding: 7px 0; border: none;"><span style="color: #1565C0; font-weight: bold; margin-right: 10px;">6</span> <a href="#6-pressure-loss-estimate" class="toc-link">Pressure Loss Estimate</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">6.1</span> <a href="#61-inlet-duct-cyclone-to-bag-filter-600-mm-z-route" class="toc-sub">Inlet Duct (Z-route)</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">6.2</span> <a href="#62-bag-filter" class="toc-sub">Bag Filter</a></td></tr>
<tr><td style="padding: 5px 0 0 28px; border: none;"><span style="color: #78909C;">6.3</span> <a href="#63-outlet-duct-bag-filter-to-id-fan-600-mm-u-route" class="toc-sub">Outlet Duct (U-route)</a></td></tr>
<tr><td style="padding: 5px 0 7px 28px; border: none;"><span style="color: #78909C;">6.4</span> <a href="#64-system-summary" class="toc-sub">System Summary</a></td></tr>
<tr><td style="padding: 10px 0 0 0; border-top: 1px solid #E0E0E0;"><span style="color: #78909C; font-weight: bold; margin-right: 10px;">7</span> <a href="#7-system-diagram" class="toc-link">System Diagram</a></td></tr>
</table>

</div>

<div class="page-break"></div>

## 1. Process Overview

The facility processes raw calcium bentonite ore through a coal-fired rotary kiln to produce thermally activated bentonite powder. The ore is fed at 35% moisture content and dried down to 5%, yielding a fine powder grade suitable for use as bleaching earth in edible oil refineries.

The gas handling train downstream of the kiln consists of twin cyclone separators for coarse particulate recovery, a pulse-jet bag filter house for fine dust collection, and an induced draft (ID) fan that maintains negative pressure across the entire system. Combustion air is supplied by a forced draft (FD) fan and a secondary forced draft (SFD) fan feeding the furnace.

The key operating parameters are summarized below.

| Parameter                  | Value              |
|----------------------------|--------------------|
| Material                   | Calcium Bentonite Ore |
| Feed Rate                  | 10 TPH             |
| Input Moisture             | 35%                |
| Output Moisture            | 5%                 |
| Fuel                       | Coal (GCV 4,200 kcal/kg) |
| Coal Consumption           | 500 - 600 kg/hr    |
| Target Kiln Inlet Gas Temp | 750 °C             |
| Gas Temp at Bag Filter     | 120 - 150 °C       |
| Ambient Temperature        | ~30 °C             |

<div class="page-break"></div>

## 2. Equipment Specifications

### 2.1 Rotary Kiln

The kiln is a conventional direct-fired rotary dryer. Hot combustion gases enter at the feed end and travel co-current with the material.

| Parameter | Value |
|-----------|-------|
| Shell Diameter  | 2,250 mm |
| Shell Length    | 24,400 mm (80 ft) |

### 2.2 Cyclone Separators (2 units, parallel)

Two cyclone separators operate in parallel downstream of the kiln to remove coarse entrained particles before the gas reaches the bag filter. Each unit is a conventional tangential-entry design with the following dimensions.

| Parameter | Value |
|-----------|-------|
| Cylindrical Diameter | 2,000 mm |
| Cylindrical Height | 1,500 mm |
| Conical Height | 4,500 mm |
| Inlet | 1,200 x 600 mm (rectangular, tangential entry) |
| Gas Outlet | 1,200 mm dia (top) |

### 2.3 Bag Filter House

The bag filter house provides final particulate removal before the cleaned gas is discharged to atmosphere through the ID fan and stack. It uses pulse-jet cleaning on a timed cycle.

| Parameter | Value |
|-----------|-------|
| Housing Dimensions | 9,000 (L) x 2,500 (W) x 2,500 mm (H) |
| Collection Hopper | Conical, 1,500 mm depth |
| Number of Bags | 400 (10 rows x 40 bags per row) |
| Individual Bag Size | 200 mm dia x 2,000 mm length |
| Total Filtration Area | 502.7 m² |
| Gas Inlet Connections | 4 x 500 mm dia (bottom entry) |
| Gas Outlet | 1,700 x 350 mm (rectangular, top) |
| Pulse Cleaning | 10 bags per group, 5 bar compressed air, 60 sec timer interval |

<div class="page-break"></div>

### 2.4 Connecting Ductwork

The ductwork connecting the cyclone outlet to the bag filter inlet and the bag filter outlet to the ID fan inlet is the critical section of this system. The table below summarizes each duct segment, its cross-sectional area, and the routing geometry.

| Section | Shape | Dimension | Area (m²) | Route |
|---------|-------|-----------|-----------|-------|
| Cyclone Outlet | Round | 1,200 mm dia | 1.131 | — |
| Cyclone to Bag Filter | Round | **600 mm dia** | **0.283** | Z-route: 15 m total, 2 x 90° bends, 5 m vertical drop |
| Bag Filter Inlets | Round | 4 x 500 mm dia | 0.785 (combined) | — |
| Bag Filter Outlet | Rectangular | 1,700 x 350 mm | 0.595 | — |
| Bag Filter to ID Fan | Round | **600 mm dia** | **0.283** | U-route: 9 m total, 2 x 90° bends, 2.5 m vertical drop |
| ID Fan Inlet | Round | 1,500 mm dia | 1.767 | — |

The two **600 mm diameter sections** (bolded) represent a 75% reduction in cross-sectional area compared to the 1,200 mm cyclone outlet they connect from. These are the restriction points identified in the RCA Report.

<div class="page-break"></div>

## 3. Fan Data

### 3.1 Forced Draft Fan (FD)

The FD fan supplies primary combustion air to the furnace. It is driven through a VFD and currently operates well below rated capacity.

| Parameter | Rated | Current Operating (VFD) |
|-----------|-------|--------------------------|
| Airflow | 18,720 m³/h | 14,227 m³/h |
| RPM | 2,900 | 2,204 |
| VFD Frequency | 50 Hz | 38 Hz |

### 3.2 Secondary Forced Draft Fan (SFD)

The SFD fan provides additional air to the furnace for combustion stability and excess air control.

| Parameter | Rated | Current Operating (VFD) |
|-----------|-------|--------------------------|
| Airflow | 2,000 m³/h | 1,160 m³/h |
| RPM | 2,900 | 1,682 |
| VFD Frequency | 50 Hz | 29 Hz |

### 3.3 Induced Draft Fan (ID)

The ID fan is the sole source of negative pressure that pulls gas through the kiln, cyclones, ductwork, and bag filter. It operates near its rated speed but the actual system throughput is severely limited by the duct restrictions downstream.

| Parameter | Rated | Current Operating (VFD) |
|-----------|-------|--------------------------|
| Airflow Capacity | 64,735 - 94,763 m³/h | ~89,097 m³/h (theoretical at current RPM) |
| RPM | 960 | 902 |
| VFD Frequency | 50 Hz | 47 Hz |

### 3.4 Combined Combustion Air Input

| Source | Volume (at ~30 °C) |
|--------|-------------------|
| FD Fan | 14,227 m³/h |
| SFD Fan | 1,160 m³/h |
| **Total Air into Furnace** | **15,387 m³/h** |

<div class="page-break"></div>

## 4. Gas Volume Analysis

This section traces the gas volume through each stage of the system, from combustion air input to the bag filter inlet. As the gas cools along its path, its volume contracts. Understanding this profile is essential for evaluating whether the ductwork at each stage is adequately sized.

### 4.1 Combustion Gas Generation

Coal combustion at the furnace generates flue gas that mixes with the excess air and moisture driven off from the bentonite ore. The volumes below are calculated from stoichiometric relationships and measured coal feed rates.

| Parameter | Value |
|-----------|-------|
| Average Coal Feed Rate | 550 kg/hr |
| Coal GCV | 4,200 kcal/kg |
| Gross Heat Input | 2,310,000 kcal/hr |
| Theoretical Air Requirement (~5.5 m³/kg coal) | ~3,025 m³/h |
| Actual Air Supplied (FD + SFD) | 15,387 m³/h |
| Excess Air Ratio | ~5:1 |
| Flue Gas Volume from Combustion | ~3,300 m³/h |

### 4.2 Moisture Load

The bentonite ore releases a significant volume of moisture as it dries. This moisture becomes steam in the gas stream and adds substantially to the total gas volume the downstream equipment must handle.

| Parameter | Value |
|-----------|-------|
| Water in Raw Feed (35% of 10 TPH) | 3,500 kg/hr |
| Residual Water in Product (5%) | ~342 kg/hr |
| Net Water Evaporated | ~3,158 kg/hr |
| Equivalent Steam Volume at ~400 °C (kiln avg) | ~5,900 m³/h |
| Equivalent Steam Volume Cooled to 135 °C | ~4,050 m³/h |

### 4.3 Gas Volume Profile Through the System

The total gas volume at each process stage is estimated by combining the combustion products, excess air, and evaporated moisture, then applying the ideal gas law correction for temperature at each point.

| Stage | Temperature | Estimated Volume (m³/h) |
|-------|-------------|--------------------------|
| FD + SFD Air Input | ~30 °C | 15,387 |
| Furnace Exit / Kiln Inlet | 750 °C | ~63,000 - 68,000 |
| Kiln Outlet | ~350 °C | ~38,000 - 42,000 |
| Cyclone Inlet | ~200 °C | ~30,000 - 34,000 |
| Cyclone Outlet / Bag Filter Inlet | 135 °C | ~25,000 - 28,000 |

By the time the gas reaches the bag filter, its volume has cooled to approximately **25,000 - 28,000 m³/h**. This is the flow rate that the connecting ductwork between the cyclone, bag filter, and ID fan must accommodate.

<div class="page-break"></div>

## 5. Duct Velocity and Capacity Check

Using the estimated system flow of ~25,000 m³/h at the bag filter stage, the table below evaluates the gas velocity at each duct segment against the generally accepted industrial maximum of 20 - 22 m/s for particulate-laden gas.

| Location | Cross-Section (m²) | Velocity (m/s) | Capacity at 22 m/s | Assessment |
|----------|---------------------|-----------------|----------------------|------------|
| Cyclone Outlet (1,200 mm) | 1.131 | 6.1 | ~89,500 m³/h | Adequate |
| **Inlet Duct (600 mm)** | **0.283** | **24.5** | **~22,400 m³/h** | **Exceeds limit** |
| 4x Bag Filter Inlets | 0.785 | 8.8 | ~62,100 m³/h | Adequate |
| Bag Filter (Air-to-Cloth ratio) | 502.7 m² | 0.83 m/min | — | Adequate |
| BF Rectangular Outlet | 0.595 | 11.7 | ~47,100 m³/h | Adequate |
| **Outlet Duct (600 mm)** | **0.283** | **24.5** | **~22,400 m³/h** | **Exceeds limit** |
| ID Fan Inlet (1,500 mm) | 1.767 | 3.9 | ~139,900 m³/h | Adequate |

Both 600 mm duct sections operate above the acceptable velocity threshold. Every other segment in the gas train has comfortable margin. The restriction is isolated to these two points.

<div class="page-break"></div>

## 6. Pressure Loss Estimate

The following pressure loss budget quantifies how much of the ID fan's available draft is consumed by each section of ductwork. Losses are estimated using standard friction and fitting loss correlations for the measured duct geometry and calculated gas velocities.

### 6.1 Inlet Duct (Cyclone to Bag Filter, 600 mm, Z-route)

| Component | Estimated Loss (mm WG) |
|-----------|------------------------|
| Contraction from 1,200 mm to 600 mm | 15 - 20 |
| Straight run, 15 m at 24.5 m/s | 25 - 35 |
| 90° bends (2 nos.) | 36 - 44 |
| Expansion into 4 x 500 mm bag filter inlets | 5 - 8 |
| **Inlet Duct Subtotal** | **81 - 107** |

### 6.2 Bag Filter

| Component | Estimated Loss (mm WG) |
|-----------|------------------------|
| Bag filter housing (clean to loaded) | ~20 |

### 6.3 Outlet Duct (Bag Filter to ID Fan, 600 mm, U-route)

| Component | Estimated Loss (mm WG) |
|-----------|------------------------|
| Contraction from rectangular outlet to 600 mm | 12 - 18 |
| Straight run, 9 m at 24.5 m/s | 15 - 22 |
| 90° bends (2 nos.) | 36 - 44 |
| Expansion into 1,500 mm ID fan inlet | 5 - 8 |
| **Outlet Duct Subtotal** | **68 - 92** |

### 6.4 System Summary

| Item | Pressure (mm WG) |
|------|-------------------|
| Total Duct and Filter Loss | 169 - 219 |
| ID Fan Available Static Pressure | ~180 - 200 |
| **Remaining Draft for Furnace** | **0 - 31** |

The ductwork and bag filter together consume nearly the entire draft capacity of the ID fan. Under worst-case conditions (loaded bags, higher-than-average gas flow), the remaining draft available to maintain furnace negative pressure approaches zero, triggering the cyclic backfire events documented in the RCA Report.

<div class="page-break"></div>

## 7. System Diagram

The complete gas path from combustion air input through the kiln, cyclone separators, bag filter house, and ID fan is illustrated in the accompanying diagram.

Refer to: **LIRN - System Diagram - Bajaj Earths Kiln Bag Filter**

<div style="text-align: center; margin-top: 40px; color: #90A4AE; font-size: 0.85em; letter-spacing: 1px;">
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&ensp; End of Document &ensp;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
</div>

<div style="font-size: 0.72em; color: #78909C; font-style: italic; line-height: 1.7; margin-top: 30px;">

- This document has been prepared by LIRN Solutions exclusively for Bajaj Earths and may not be reproduced or disclosed to third parties without prior written consent.
- Equipment data, operating parameters, and calculations are based on client-provided information and standard engineering methods. LIRN Solutions does not independently warrant the accuracy of client-supplied data.
- This document serves as a technical reference and does not constitute detailed engineering design. Equipment modifications should be carried out under qualified engineering supervision.
- LIRN Solutions has exercised reasonable professional care in preparing this document. Liability is limited to the professional fees received for this engagement.
- Data reflects plant conditions at the time of assessment and may require revision if operating parameters or equipment configuration change materially.

</div>
