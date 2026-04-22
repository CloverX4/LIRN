export type Product = {
  cat: string
  name: string
  spec: string
  href: string
}

export const products: Product[] = [
  {
    cat: 'Thermal',
    name: 'Rotary Kilns & Dryers',
    spec: 'Direct & indirect fired',
    href: '/fabrications/thermal/rotary-kiln',
  },
  {
    cat: 'Dust Collection',
    name: 'Bag Filter Houses',
    spec: 'Pulse-jet & shaker types',
    href: '/fabrications/dust-collection/bag-filter-house',
  },
  {
    cat: 'Separation',
    name: 'Cyclone Separators',
    spec: 'Single & multi-cyclone',
    href: '/fabrications/cyclones',
  },
  {
    cat: 'Material Handling',
    name: 'Belt Conveyors',
    spec: 'Flat & troughed belt',
    href: '/fabrications/conveyors/belt-conveyor',
  },
  {
    cat: 'Material Handling',
    name: 'Screw Conveyors',
    spec: 'Horizontal & inclined',
    href: '/fabrications/conveyors/screw-conveyor',
  },
  {
    cat: 'Material Handling',
    name: 'Bucket Elevators',
    spec: 'Centrifugal & continuous',
    href: '/fabrications/conveyors/bucket-elevator',
  },
  {
    cat: 'Size Reduction',
    name: 'Hammer Crushers',
    spec: 'Mineral processing grade',
    href: '/fabrications/crushers/hammer-crusher',
  },
  {
    cat: 'Structural',
    name: 'Trusses & Sheds',
    spec: 'Heavy industrial structures',
    href: '/fabrications/trusses',
  },
  {
    cat: 'Gas Handling',
    name: 'Industrial Ducts',
    spec: 'Custom duct fabrication',
    href: '/fabrications/dust-collection/industrial-ducts',
  },
  {
    cat: 'Storage',
    name: 'Storage Tanks',
    spec: 'Mild steel & SS',
    href: '/fabrications/storage-tanks',
  },
  {
    cat: 'Material Handling',
    name: 'Chain Conveyors',
    spec: 'En-masse & drag chain',
    href: '/fabrications/conveyors/chain-conveyor',
  },
  {
    cat: 'Thermal',
    name: 'Rotary Dryers',
    spec: 'Co-current & counter-current',
    href: '/fabrications/thermal/rotary-dryer',
  },
]