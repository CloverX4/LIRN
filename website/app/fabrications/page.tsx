'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { products } from '@/data/products'
import InquiryModal from '@/components/sections/InquiryModal'

// Extract unique categories
const categories = Array.from(new Set(products.map((p) => p.cat))).sort()

// Map categories to paths
const categoryMap: Record<string, string> = {
  Thermal: 'thermal',
  'Dust Collection': 'dust-collection',
  Separation: 'cyclones',
  'Material Handling': 'conveyors',
  'Size Reduction': 'crushers',
  Structural: 'trusses',
  'Gas Handling': 'gas-handling',
  Storage: 'storage-tanks',
  Mixing: 'mixing',
}

export default function FabricationsPage() {
  const [search, setSearch] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<typeof products[number] | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  const query = search.toLowerCase().trim()
  const suggestions = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.cat.toLowerCase().includes(query) ||
          p.spec.toLowerCase().includes(query)
      )
    : []

  // For the grid view: show results if there's a query but no specific product selected
  const filteredProducts = query && !selectedProduct ? suggestions : null

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section style={{ paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            LIRN FABRICATIONS
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Industrial Equipment & Systems
          </h1>
          <p style={{ fontSize: '16px', color: '#5a6e58', maxWidth: '700px', lineHeight: 1.75, marginBottom: '2rem' }}>
            Twelve years of process equipment fabrication for thermal processing, dust collection, material handling and separation. Built to spec, pressure-tested, installed with commissioning support.
          </p>

          {/* Search combobox */}
          <div style={{ maxWidth: '480px' }} ref={searchRef}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setSelectedProduct(null)
                  setDropdownOpen(true)
                }}
                onFocus={() => { if (query) setDropdownOpen(true) }}
                placeholder="Search equipment — e.g. kiln, conveyor, cyclone..."
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 40px',
                  border: '1px solid #c8bfa8',
                  borderRadius: dropdownOpen && suggestions.length > 0 ? '4px 4px 0 0' : '4px',
                  background: '#fff',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#1a2e1a',
                  outline: 'none',
                }}
                role="combobox"
                aria-expanded={dropdownOpen && suggestions.length > 0}
                aria-haspopup="listbox"
              />
              <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '15px', color: '#5a6e58', pointerEvents: 'none' }}>
                ⌕
              </span>

              {/* Dropdown */}
              {dropdownOpen && suggestions.length > 0 && (
                <div
                  role="listbox"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: '#fff',
                    border: '1px solid #c8bfa8',
                    borderTop: 'none',
                    borderRadius: '0 0 4px 4px',
                    maxHeight: '280px',
                    overflowY: 'auto',
                    zIndex: 60,
                    boxShadow: '0 8px 24px rgba(26,50,37,0.1)',
                  }}
                >
                  {suggestions.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      role="option"
                      onClick={() => {
                        setSearch(product.name)
                        setSelectedProduct(product)
                        setDropdownOpen(false)
                      }}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 16px',
                        textDecoration: 'none',
                        color: 'inherit',
                        borderBottom: '1px solid #eee8d8',
                        transition: 'background 0.15s ease',
                        gap: '0.75rem',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#eee8d8' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#fff' }}
                    >
                      <div>
                        <div style={{ fontSize: '14px', color: '#1a2e1a', fontWeight: 500 }}>{product.name}</div>
                        <div style={{ fontSize: '11px', color: '#5a6e58' }}>{product.spec}</div>
                      </div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#7a8c6a', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                        {product.cat}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {search && !selectedProduct && (
              <div style={{ fontSize: '11px', color: '#5a6e58', marginTop: '0.5rem' }}>
                {suggestions.length} result{suggestions.length !== 1 ? 's' : ''} — select one or scroll down to browse
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Search results */}
      {filteredProducts !== null ? (
        <section style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            {filteredProducts.length} match{filteredProducts.length !== 1 ? 'es' : ''}
          </div>
          {filteredProducts.length === 0 ? (
            <p style={{ fontSize: '14px', color: '#5a6e58' }}>
              No equipment matched your search. Try a different term or{' '}
              <Link href="/contact" style={{ color: '#1a2e1a', fontWeight: 500, borderBottom: '1px solid #c8bfa8' }}>contact us</Link>{' '}
              to discuss your requirement.
            </p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              {filteredProducts.map((product) => (
                <div
                  key={product.href}
                  style={{
                    background: '#fff',
                    border: '1px solid #c8bfa8',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <Link
                    href={product.href}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '2rem 2rem 1rem' }}
                  >
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#7a8c6a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px' }}>{product.cat}</div>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '0.5rem' }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#5a6e58', marginBottom: '1rem' }}>{product.spec}</p>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#c4a96b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      View Specs →
                    </div>
                  </Link>
                  <div style={{ padding: '0 2rem 1.5rem' }}>
                    <InquiryModal equipment={product.name} category={product.cat} specs={product.specs}>
                      <button
                        className="cta-btn"
                        style={{
                          background: '#c4a96b',
                          color: '#1a1a1a',
                          padding: '10px',
                          borderRadius: '3px',
                          border: 'none',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '10px',
                          fontWeight: '600',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          width: '100%',
                        }}
                      >
                        Send Inquiry
                      </button>
                    </InquiryModal>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      ) : (
        /* Categories Grid — default view */
        <section style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {categories.map((cat) => {
              const catPath = categoryMap[cat] || cat.toLowerCase().replace(/\s+/g, '-')
              const itemsInCat = products.filter((p) => p.cat === cat)

              return (
                <Link
                  key={cat}
                  href={`/fabrications/${catPath}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    padding: '2rem',
                    background: '#eee8d8',
                    border: '1px solid #c8bfa8',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#e8e0cc'
                    e.currentTarget.style.borderColor = '#c4a96b'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#eee8d8'
                    e.currentTarget.style.borderColor = '#c8bfa8'
                  }}
                >
                  <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '0.5rem' }}>
                    {cat}
                  </h2>
                  <p style={{ fontSize: '14px', color: '#5a6e58', marginBottom: '1rem' }}>
                    {itemsInCat.length} product{itemsInCat.length !== 1 ? 's' : ''}
                  </p>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#c4a96b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    View Details →
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </main>
  )
}
