export default function AboutPage() {
  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Hero */}
      <section style={{ paddingBottom: '3rem', borderBottom: '1px solid #c8bfa8', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            ABOUT US
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            From fabrication shop to process engineering firm
          </h1>
          <p style={{ fontSize: '16px', color: '#5a6e58', maxWidth: '700px', lineHeight: 1.75 }}>
            LIRN is a family-run industrial engineering company based in Hyderabad, India. We build equipment, solve process problems, and help operators run efficient plants.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ paddingBottom: '4rem', borderBottom: '1px solid #c8bfa8', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '1.5rem' }}>
            The Beginning
          </h2>

          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            We started as Uma Rajeshwari Fabricators in 2012, a small welding and fabrication shop in Hyderabad. Our founder learned the trade through apprenticeship with established fabricators, working through every equipment type—kilns, dryers, conveyors, dust collectors. He understood not just how to build equipment, but why it had to be built a certain way.
          </p>

          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            For the first five years, we delivered equipment as designed by clients. We built solid machines—few failures, good reputation. But we noticed something: many of our customers had problems that weren't our equipment's fault. Kilns were burning poorly because their dust collection wasn't sized correctly. Conveyors were failing because operators didn't understand maintenance intervals. Plants were running inefficiently not because equipment was bad, but because the system design was wrong.
          </p>

          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            Around 2018, a customer approached us with a furnace backfire problem that previous suppliers couldn't solve. We investigated systematically, calculated pressure drops, proposed a complete system redesign. Not just a new burner—a new duct design, baghouse upgrade, and fan specification. That engagement changed everything. It worked. The plant went from chronic problems to stable operation. The customer asked us to help with their entire process documentation.
          </p>

          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            That's when we realized our real strength wasn't in fabrication—it was in understanding complete systems. We started taking on consulting projects. Root cause analysis. Pressure loss calculations. Process documentation. We realized many plants operate far below their potential simply because their equipment systems don't match.
          </p>

          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.85 }}>
            In 2022, we formalized this transition. We divided into three focused divisions: LIRN Fabrications (equipment manufacturing), LIRN Solutions (process engineering), and LIRN Clay Tech (specialty material supply). We kept the name LIRN—it reflects our evolution from a local fabricator to a firm with wider technical capabilities.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ paddingBottom: '4rem', borderBottom: '1px solid #c8bfa8', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '2rem' }}>
            How We Work
          </h2>

          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ padding: '2rem', background: '#eee8d8', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Engineering First
              </h3>
              <p style={{ fontSize: '14px', color: '#5a6e58', lineHeight: 1.75 }}>
                We solve problems using first-principles engineering. No assumptions, no guesswork. We calculate pressure drops, thermal loads, and structural stresses. We don't propose a "solution" until we understand the actual physics of the problem.
              </p>
            </div>

            <div style={{ padding: '2rem', background: '#eee8d8', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Site Engagement
              </h3>
              <p style={{ fontSize: '14px', color: '#5a6e58', lineHeight: 1.75 }}>
                We don't work from specifications alone. We visit plants. We take measurements. We interview operators. We understand the context—what material is being processed, what the actual operating conditions are, how the current system behaves under load.
              </p>
            </div>

            <div style={{ padding: '2rem', background: '#eee8d8', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Documentation
              </h3>
              <p style={{ fontSize: '14px', color: '#5a6e58', lineHeight: 1.75 }}>
                Every project delivers documentation—P&IDs, equipment specifications, installation procedures, maintenance schedules. This becomes the reference source for future troubleshooting and upgrades.
              </p>
            </div>

            <div style={{ padding: '2rem', background: '#eee8d8', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Commissioning Support
              </h3>
              <p style={{ fontSize: '14px', color: '#5a6e58', lineHeight: 1.75 }}>
                We don't hand off designs to installers and disappear. We oversee commissioning, verify that equipment performs as designed, and train operators on startup, control, and maintenance procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section style={{ paddingBottom: '4rem', borderBottom: '1px solid #c8bfa8', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '2rem' }}>
            What We Believe
          </h2>

          <div style={{ background: '#1a3325', color: '#f7f2ea', padding: '2.5rem', borderRadius: '4px', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#7aaa8a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Complete Systems Matter
            </h3>
            <p style={{ fontSize: '14px', color: '#c8bfa8', lineHeight: 1.75 }}>
              Equipment doesn't fail in isolation. Each piece interacts with everything connected to it. A burner flame depends on furnace draft. Furnace draft depends on ductwork sizing. Ductwork sizing depends on the baghouse capacity. Baghouse capacity depends on filter area and cleaning frequency. A weak link anywhere breaks the system. We design for the whole system, not individual components.
            </p>
          </div>

          <div style={{ background: '#1a3325', color: '#f7f2ea', padding: '2.5rem', borderRadius: '4px', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#7aaa8a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Maintenance Is Preventive
            </h3>
            <p style={{ fontSize: '14px', color: '#c8bfa8', lineHeight: 1.75 }}>
              Most equipment failures are predictable. Bearings fail if never regreased. Belts wear if misaligned. Refractory cracks if not dried properly. We help operators move from reactive ("the equipment broke, now fix it") to preventive ("the bearing has 500 hours left, replace it now"). Preventive maintenance costs a fraction of breakdowns.
            </p>
          </div>

          <div style={{ background: '#1a3325', color: '#f7f2ea', padding: '2.5rem', borderRadius: '4px' }}>
            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#7aaa8a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Operators Understand Their Plants
            </h3>
            <p style={{ fontSize: '14px', color: '#c8bfa8', lineHeight: 1.75 }}>
              The person running the equipment every day often sees problems that engineers miss from visiting occasionally. We listen to operators. We involve them in troubleshooting. We document in ways they understand. Good operations are built on partnerships between engineering and operations, not top-down directives.
            </p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section style={{ paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '1.5rem' }}>
            Who We Are
          </h2>

          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            LIRN is a small team—by design. We stay small so every project gets serious attention. Our founder leads all major engagements. We have field engineers with 5-12 years of experience in equipment fabrication and installation. We have specialists in thermal processes, dust collection, and bleaching earth.
          </p>

          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            Everyone on the team has spent time on furnace platforms, inside baghouses, crawling through ductwork. We understand the actual reality of industrial plants—the constraints, the workarounds, the decades of accumulated modifications that make each plant unique.
          </p>

          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.85 }}>
            We're based in Hyderabad and serve clients across India. Most of our inquiries come through WhatsApp from plant operators and managers who've heard from someone else we've worked with. We prefer it that way—word-of-mouth, personal networks, relationships over generic web marketing.
          </p>
        </div>
      </section>
    </main>
  )
}
