export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  cat: string
  name: string
  spec: string
  href: string
  specs: ProductSpec[]
}

export const products: Product[] = [
  {
    cat: 'Thermal',
    name: 'Rotary Kilns & Dryers',
    spec: 'Direct & indirect fired',
    href: '/fabrications/thermal/rotary-kiln',
    specs: [
      { label: 'Diameter Range', value: '1.5m – 3.5m' },
      { label: 'Length Range', value: '15m – 45m' },
      { label: 'Max Temperature', value: '1200°C' },
      { label: 'Rotation Speed', value: '4–12 RPM' },
      { label: 'Residence Time', value: '30–90 min (material dependent)' },
      { label: 'Drive Options', value: 'Belt drive, gear drive, VFD' },
      { label: 'Lining Options', value: 'Refractory brick, ceramic fiber blanket' },
    ],
  },
  {
    cat: 'Dust Collection',
    name: 'Bag Filter Houses',
    spec: 'Pulse-jet & shaker types',
    href: '/fabrications/dust-collection/bag-filter-house',
    specs: [
      { label: 'Collection Area', value: '10 – 500 m²' },
      { label: 'Air Volume', value: '500 – 50,000 m³/hr' },
      { label: 'Max Temperature', value: '250°C standard, 400°C with specialty fabrics' },
      { label: 'Pressure Drop', value: '100–150 mm WC at rated flow' },
      { label: 'Efficiency', value: '99%+ for particles >5 microns' },
      { label: 'Bag Life', value: '18–36 months typical' },
      { label: 'Cleaning Type', value: 'Pulse-jet or mechanical shaker' },
    ],
  },
  {
    cat: 'Separation',
    name: 'Cyclone Separators',
    spec: 'Single & multi-cyclone',
    href: '/fabrications/cyclones/cyclone-separator',
    specs: [
      { label: 'Collection Efficiency', value: '95%+ for particles >5 microns' },
      { label: 'Operating Temperature', value: 'Up to 400°C' },
      { label: 'Pressure Drop', value: '50–100 mm WC' },
      { label: 'Pressure Rating', value: 'Up to 10 bar' },
      { label: 'Inlet Configurations', value: 'Top tangential, side entry, bottom entry' },
      { label: 'Construction', value: 'Mild steel, SS 304/316, wear-lined' },
    ],
  },
  {
    cat: 'Material Handling',
    name: 'Belt Conveyors',
    spec: 'Flat & troughed belt',
    href: '/fabrications/conveyors/belt-conveyor',
    specs: [
      { label: 'Belt Width', value: '0.4m – 2.0m (larger custom)' },
      { label: 'Length', value: 'Up to 200m with intermediate drives' },
      { label: 'Incline Angle', value: 'Up to 35° (cleated), 18° standard' },
      { label: 'Belt Speed', value: '0.5 – 4 m/s' },
      { label: 'Capacity', value: '10 – 2,000 TPH' },
      { label: 'Belt Material', value: 'Rubber, PVC, specialty compounds' },
      { label: 'Drive', value: 'Direct gearbox, VFD, multi-drive' },
    ],
  },
  {
    cat: 'Material Handling',
    name: 'Screw Conveyors',
    spec: 'Horizontal & inclined',
    href: '/fabrications/conveyors/screw-conveyor',
    specs: [
      { label: 'Screw Diameter', value: '150mm – 600mm' },
      { label: 'Length', value: 'Up to 20m per section' },
      { label: 'Capacity', value: 'Up to 200 m³/hr' },
      { label: 'Incline Angle', value: 'Horizontal to 45°' },
      { label: 'Operating Temperature', value: 'Up to 200°C' },
      { label: 'Drive', value: 'Direct gearbox, VFD, chain drive' },
      { label: 'Construction', value: 'Mild steel, SS 304/316, hardened flights' },
    ],
  },
  {
    cat: 'Material Handling',
    name: 'Bucket Elevators',
    spec: 'Centrifugal & continuous',
    href: '/fabrications/conveyors/bucket-elevator',
    specs: [
      { label: 'Elevation Height', value: 'Up to 50m' },
      { label: 'Capacity', value: 'Up to 500 m³/hr' },
      { label: 'Bucket Spacing', value: 'Application-specific (centrifugal or continuous)' },
      { label: 'Operating Temperature', value: 'Up to 150°C standard, 300°C with chain type' },
      { label: 'Drive', value: 'Top-mounted gearbox with backstop' },
      { label: 'Casing', value: 'Mild steel, SS, dust-tight with inspection doors' },
      { label: 'Bucket Material', value: 'Steel, polyethylene, or nylon' },
    ],
  },
  {
    cat: 'Size Reduction',
    name: 'Hammer Crushers',
    spec: 'Mineral processing grade',
    href: '/fabrications/crushers/hammer-crusher',
    specs: [
      { label: 'Capacity', value: '5 – 50 TPH' },
      { label: 'Feed Size', value: 'Up to 600mm' },
      { label: 'Product Size', value: '0–50mm (screen adjustable)' },
      { label: 'Rotor Speed', value: '800–1,500 RPM' },
      { label: 'Power', value: '15–200 kW' },
      { label: 'Reduction Ratio', value: '10:1 to 20:1' },
      { label: 'Options', value: 'Variable speed, auto-lube, wear sensors' },
    ],
  },
  {
    cat: 'Structural',
    name: 'Trusses & Sheds',
    spec: 'Heavy industrial structures',
    href: '/fabrications/trusses/industrial-shed-truss',
    specs: [
      { label: 'Clear Span', value: 'Up to 30m' },
      { label: 'Truss Types', value: 'Pratt, Warren, Howe' },
      { label: 'Wind Rating', value: 'Per IS 875 / international codes' },
      { label: 'Seismic Design', value: 'Zone-specific per IS 1893' },
      { label: 'Material', value: 'High-strength structural steel' },
      { label: 'Coating', value: '3-layer paint or hot-dip galvanized' },
      { label: 'Crane Capacity', value: 'Up to 20T EOT crane compatible' },
    ],
  },
  {
    cat: 'Gas Handling',
    name: 'Industrial Ducts',
    spec: 'Custom duct fabrication',
    href: '/fabrications/gas-handling/industrial-ducts',
    specs: [
      { label: 'Diameter Range', value: '300–2,000mm (custom larger)' },
      { label: 'Service Temperature', value: 'Up to 600°C' },
      { label: 'Pressure Rating', value: 'Up to 5 bar' },
      { label: 'Materials', value: 'Galvanized steel, SS 304/316, carbon steel' },
      { label: 'Connections', value: 'Flanged, welded, quick-lock' },
      { label: 'Wall Thickness', value: '3mm – 12mm (application dependent)' },
    ],
  },
  {
    cat: 'Storage',
    name: 'Storage Tanks',
    spec: 'Mild steel & SS',
    href: '/fabrications/storage-tanks/storage-tank',
    specs: [
      { label: 'Capacity', value: '100 L – 100,000+ L custom' },
      { label: 'Material', value: 'Mild steel (coated), SS 304/316' },
      { label: 'Design Codes', value: 'ASME Section VIII, API-650' },
      { label: 'Orientation', value: 'Vertical or horizontal' },
      { label: 'Pressure', value: 'Atmospheric to 10 bar (vessel dependent)' },
      { label: 'Temperature', value: 'Ambient to 200°C (material dependent)' },
    ],
  },
  {
    cat: 'Material Handling',
    name: 'Chain Conveyors',
    spec: 'En-masse & drag chain',
    href: '/fabrications/conveyors/chain-conveyor',
    specs: [
      { label: 'Capacity', value: 'Up to 1,000 m³/hr' },
      { label: 'Service Temperature', value: 'Up to 1000°C' },
      { label: 'Chain Types', value: 'Forged link, roller, drop-forged rivetless' },
      { label: 'Flight Material', value: 'Mild steel, AR plate, cast alloy' },
      { label: 'Drive', value: 'Shaft-mounted gearbox, VFD optional' },
      { label: 'Trough', value: 'Mild steel, lined, SS options' },
    ],
  },
  {
    cat: 'Thermal',
    name: 'Rotary Dryers',
    spec: 'Co-current & counter-current',
    href: '/fabrications/thermal/rotary-dryer',
    specs: [
      { label: 'Diameter Range', value: '1.0m – 3.0m' },
      { label: 'Length Range', value: '8m – 30m' },
      { label: 'Drying Temperature', value: '50°C – 350°C' },
      { label: 'Rotation Speed', value: '6–15 RPM' },
      { label: 'Throughput', value: '0.5 – 50 TPH' },
      { label: 'Air Volume', value: '2,000 – 20,000 m³/hr' },
      { label: 'Moisture Removal', value: 'Up to 60% initial moisture' },
    ],
  },
  {
    cat: 'Mixing',
    name: 'Industrial Blenders',
    spec: 'Ribbon, paddle & plough-share',
    href: '/fabrications/mixing/industrial-blender',
    specs: [
      { label: 'Types', value: 'Ribbon, paddle, plough-share' },
      { label: 'Capacity', value: '100 L – 20,000 L per batch' },
      { label: 'Throughput', value: '0.5 – 50 TPH (continuous)' },
      { label: 'Drive', value: 'Gearbox with VFD, 5–150 kW' },
      { label: 'Construction', value: 'Mild steel, SS 304/316' },
      { label: 'Discharge', value: 'Bottom butterfly valve, slide gate, or bomb-bay door' },
      { label: 'Mixing Time', value: '3–15 min per batch (material dependent)' },
    ],
  },
]
