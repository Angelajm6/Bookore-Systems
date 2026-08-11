import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/angela-bookoresystems/30min?month=2026-08';

function Arrow() { return <span className="arrow" aria-hidden="true">→</span>; }
function Spark() { return <span className="spark" aria-hidden="true">✦</span>; }

const services = [
  {
    number: '01',
    title: 'Booking Leak Audit',
    text: 'Find the moments between first inquiry and repeat treatment where high-value revenue is quietly slipping away.',
    outcome: 'A clear priority'
  },
  {
    number: '02',
    title: 'Conversion Systems',
    text: 'Connect your inbox, booking platform, and front-desk workflow so every promising inquiry has a clear next step.',
    outcome: 'More consultations booked'
  },
  {
    number: '03',
    title: 'Retention Systems',
    text: 'Give your team timely, relevant prompts to recover cancellations and bring the right clients back when they are due.',
    outcome: 'More repeat revenue'
  }
];

const faqs = [
  ['Who is Bookore for?', 'We work with premium medspas and other high-ticket, appointment-led businesses where a missed inquiry, cancelled consultation, or missed rebooking has a meaningful cost.'],
  ['What happens in a Booking Leak Audit?', 'We map your journey from first inquiry to booked treatment and identify where leads, consultations, and returning clients lose momentum. You leave with the highest-impact system to install first.'],
  ['Do we need to replace our booking or CRM platform?', 'No. We build around the tools your front desk already uses. The goal is to make the gaps between your systems visible and easier to act on—not add another platform for your team to manage.'],
  ['How do you handle client and patient information?', 'We begin with operational workflows, approved messaging, and the minimum information needed to run them. Any workflow involving protected health information is scoped with the appropriate privacy, access, and vendor requirements.']
];

const systems = [
  {
    id: 'consult',
    eyebrow: 'SYSTEM 01 / CONVERSION',
    title: 'Consult-to-Booked',
    description: 'Turn every promising inquiry into a clear, personal path to a consultation—without asking your front desk to chase every lead.',
    trigger: 'New treatment inquiry',
    steps: ['Capture the inquiry', 'Identify intent and urgency', 'Route the right next action', 'Keep the consult moving'],
    result: 'More qualified consultations booked',
    preview: ['New injectable inquiry', 'Interested in lip filler', 'Consultation not yet booked', 'Front desk action ready']
  },
  {
    id: 'recovery',
    eyebrow: 'SYSTEM 02 / CAPACITY',
    title: 'Cancellation Recovery',
    description: 'Make cancellations less costly by surfacing the right clients, the right open slots, and a clear recovery plan for your team.',
    trigger: 'High-value appointment cancelled',
    steps: ['Spot the open capacity', 'Match an appropriate client', 'Prepare approved outreach', 'Track the recovered booking'],
    result: 'More of your calendar working for you',
    preview: ['Friday 3:30 PM opened', 'Two clients on waitlist', 'Best-fit client identified', 'Recovery message ready']
  },
  {
    id: 'retention',
    eyebrow: 'SYSTEM 03 / RETENTION',
    title: 'Treatment Retention',
    description: 'Bring the right clients back at the right time with a focused rebooking queue your front desk can confidently act on.',
    trigger: 'Provider-approved treatment cadence due',
    steps: ['Identify clients who are due', 'Prioritize by opportunity', 'Prepare relevant follow-up', 'Measure returning revenue'],
    result: 'More returning clients and repeat revenue',
    preview: ['Treatment cycle due', '42 days since last visit', 'Rebooking opportunity', 'Follow-up approved']
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSystem, setActiveSystem] = useState('consult');
  const [consultDemoStep, setConsultDemoStep] = useState('review');
  const heroArtRef = useRef(null);
  const animationFrameRef = useRef(null);
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  const onHeroMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => {
      heroArtRef.current?.style.setProperty('--tilt-x', x);
      heroArtRef.current?.style.setProperty('--tilt-y', y);
    });
  };
  return <main>
    <div className="reading-progress" aria-hidden="true"></div>
    <nav className="nav shell">
      <a className="brand" href="#top" aria-label="Bookore Systems home"><img src="/bookore-systems-logo.png" alt="Bookore Systems" /></a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">{menuOpen ? '×' : '☰'}</button>
      <div className={'nav-links ' + (menuOpen ? 'is-open' : '')}>
        <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
        <a href="#systems" onClick={() => setMenuOpen(false)}>Systems</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a className="nav-cta" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Find your leaks <Arrow /></a>
      </div>
    </nav>

    <section className="hero" id="top" onMouseMove={onHeroMove} onMouseLeave={() => { heroArtRef.current?.style.setProperty('--tilt-x', 0); heroArtRef.current?.style.setProperty('--tilt-y', 0); }}>
      <div className="hero-stamp" aria-hidden="true"><span>BOOKORE / SYSTEMS</span><b>↗</b></div>
      <div className="eyebrow"><Spark /> CONVERSION SYSTEMS FOR PREMIUM MEDSPAS</div>
      <h1>Turn more<br />inquiries into<br /><em>booked treatments.</em></h1>
      <p className="hero-copy">Bookore builds the conversion and retention systems behind premium medspas—so fewer leads go cold, cancellations become recoverable revenue, and your front desk knows exactly where to focus.</p>
      <div className="hero-actions">
        <a className="button button-primary" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Find your booking leaks <Arrow /></a>
        <a className="text-link" href="#systems">See the systems <Arrow /></a>
      </div>
      <div className="hero-art" ref={heroArtRef} aria-hidden="true">
        <div className="orb orb-one"></div><div className="orb orb-two"></div><div className="grid-plane"></div>
        <div className="orbit-label orbit-label-one">FEWER COLD LEADS</div><div className="orbit-label orbit-label-two">MORE BOOKED CARE</div>
        <div className="automation-flow"><span className="flow-label">NEW INQUIRY</span><div className="flow-track"><i></i><i></i><i></i></div><div className="flow-core"><Spark /></div><div className="flow-output"><span>BOOKED</span><b>✓</b></div></div>
        <div className="system-card card-one"><span>Inquiry</span><strong>Who needs a response now?</strong><b>01</b></div>
        <div className="system-card card-two"><span>Consult</span><strong>Keep promising clients moving.</strong><b>02</b></div>
        <div className="system-card card-three"><span>Retention</span><strong>Bring the right clients back.</strong><b>03</b></div>
      </div>
      <div className="scroll-note"><span></span>SCROLL TO EXPLORE</div>
    </section>

    <div className="signal-band" aria-label="Bookore Systems helps premium medspas capture more revenue"><div className="signal-track"><span>MORE BOOKED TREATMENTS</span><i>✦</i><span>FEWER LOST OPPORTUNITIES</span><i>✦</i><span>MORE BOOKED TREATMENTS</span><i>✦</i><span>FEWER LOST OPPORTUNITIES</span></div></div>

    <section className="problem-section" id="approach">
      <div className="shell problem-grid">
        <p className="section-kicker" data-reveal>THE REAL PROBLEM</p>
        <div data-reveal style={{ '--delay': '90ms' }}>
          <h2>Most medspas don’t have a lead problem.<br /><em>They have a follow-through problem.</em></h2>
          <p className="large-copy">An inquiry arrives. A consultation is considered. A cancellation opens up. A client is due back. Your team knows these moments matter—but a busy front desk cannot chase every one by hand.</p>
          <p className="large-copy muted">The right system makes the next best action clear, without turning client care into another inbox to manage.</p>
        </div>
      </div>
    </section>

    <section className="services shell" id="services">
      <div className="section-head" data-reveal><div><p className="section-kicker">WHAT WE BUILD</p><h2>Protect the revenue<br /><em>between the appointments.</em></h2></div><p>We start with the moments where promising clients lose momentum, then build a system your team can actually run.</p></div>
      <div className="service-list">
        {services.map((service, i) => <article className="service-card" data-reveal style={{ '--delay': `${i * 80}ms` }} key={service.number}>
          <span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><div className="outcome"><span>OUTCOME</span><strong>{service.outcome}</strong></div><span className="service-arrow"><Arrow /></span>
        </article>)}
      </div>
    </section>

    <section className="systems-section" id="systems">
      <div className="shell">
        <div className="systems-head" data-reveal>
          <div><p className="section-kicker">SYSTEMS YOU CAN BUY</p><h2>Built around the moments<br /><em>that move revenue.</em></h2></div>
          <p>Each system fits the tools your team already uses and turns a critical revenue moment into a clear, measurable next step.</p>
        </div>
        <div className="system-tabs" role="tablist" aria-label="Example systems">
          {systems.map((system, i) => <button key={system.id} role="tab" aria-selected={activeSystem === system.id} className={activeSystem === system.id ? 'active' : ''} onClick={() => setActiveSystem(system.id)}><span>0{i + 1}</span>{system.title}</button>)}
        </div>
        {systems.map((system) => activeSystem === system.id && <article className="system-demo" key={system.id}>
          <div className="system-copy" data-reveal>
            <p className="section-kicker">{system.eyebrow}</p><h3>{system.title}</h3><p>{system.description}</p>
            <a className="text-link" href="#book">Talk through this system <Arrow /></a>
          </div>
          <div className="demo-board" data-reveal style={{ '--delay': '110ms' }}>
            <div className="demo-board-head"><span>BOOKORE / LIVE WORKFLOW</span><i>● ACTIVE</i></div>
            <div className="demo-input"><span>TRIGGER</span><strong>✦ &nbsp;{system.trigger}</strong><b>JUST NOW</b></div>
            <div className="demo-flow">
              {system.steps.map((step, i) => <div className="demo-step" key={step}><span>0{i + 1}</span><strong>{step}</strong><i>✓</i></div>)}
            </div>
            <div className="demo-result"><span>OUTCOME</span><strong>{system.result}</strong><b>↗</b></div>
          </div>
          <div className="system-preview" data-reveal style={{ '--delay': '190ms' }}>
            <div className="preview-top"><span>EXAMPLE OUTPUT</span><b>•••</b></div>
            {system.preview.map((item, i) => <div className="preview-line" key={item}><i className={i === system.preview.length - 1 ? 'complete' : ''}></i>{item}</div>)}
          </div>
        </article>)}
        <p className="systems-note" data-reveal>These are focused systems—not a one-size-fits-all platform. Every build is shaped around your booking flow, front desk, and client experience.</p>
      </div>
    </section>

    <section className="consult-demo-section" aria-labelledby="consult-demo-heading">
      <div className="shell">
        <div className="consult-demo-head" data-reveal><div><p className="section-kicker">LIVE SYSTEM DEMO</p><h2 id="consult-demo-heading">A consult is too valuable<br /><em>to become a loose end.</em></h2></div><p>This is how the Consult-to-Booked System gives a busy front desk one clear next step—while keeping a person in control.</p></div>
        <div className="consult-demo-grid">
          <div className="lead-profile" data-reveal>
            <div className="profile-head"><span>NEW INQUIRY</span><i>● HIGH INTENT</i></div>
            <div className="profile-person"><div className="profile-avatar">MC</div><div><strong>Maya Chen</strong><span>New client · Instagram DM</span></div></div>
            <div className="profile-detail"><span>INTEREST</span><strong>Lip filler consultation</strong></div>
            <div className="profile-detail"><span>INQUIRY RECEIVED</span><strong>Today, 6:42 PM</strong></div>
            <div className="profile-detail"><span>BOOKING STATUS</span><strong className={consultDemoStep === 'booked' ? 'status-booked' : ''}>{consultDemoStep === 'booked' ? 'Consultation booked' : 'Not yet booked'}</strong></div>
          </div>
          <div className="consult-workflow" data-reveal style={{ '--delay': '100ms' }}>
            <div className="workflow-top"><span>BOOKORE / CONSULT-TO-BOOKED</span><b>DEMO DATA</b></div>
            <div className={'workflow-event ' + (consultDemoStep !== 'review' ? 'complete' : '')}><div className="workflow-icon">01</div><div><span>INQUIRY CAPTURED</span><strong>Maya asked about availability and pricing.</strong></div><i>✓</i></div>
            <div className={'workflow-event ' + (consultDemoStep !== 'review' ? 'complete' : '')}><div className="workflow-icon">02</div><div><span>PRIORITY IDENTIFIED</span><strong>New high-intent inquiry with no booking.</strong></div><i>✓</i></div>
            {consultDemoStep === 'review' && <div className="workflow-action"><span>RECOMMENDED NEXT STEP</span><strong>Offer Maya a 15-minute consultation this week.</strong><p>Suggested message uses your approved tone and booking link.</p><button onClick={() => setConsultDemoStep('sent')}>Approve &amp; send message <Arrow /></button></div>}
            {consultDemoStep === 'sent' && <div className="workflow-action sent"><span>MESSAGE SENT</span><strong>“Hi Maya—thanks for reaching out. I can help you find the right time for a consultation this week.”</strong><p>The front desk can see the response and book directly from the conversation.</p><button onClick={() => setConsultDemoStep('booked')}>Simulate consultation booking <Arrow /></button></div>}
            {consultDemoStep === 'booked' && <div className="workflow-action booked"><span>OUTCOME CAPTURED</span><strong>Maya booked a consultation for Thursday at 4:00 PM.</strong><p>The lead is no longer a loose end. The system records the result for your conversion view.</p><button onClick={() => setConsultDemoStep('review')}>Run the demo again <Arrow /></button></div>}
          </div>
          <div className="consult-metrics" data-reveal style={{ '--delay': '180ms' }}><span>FRONT-DESK VIEW</span><div><b>{consultDemoStep === 'review' ? '1' : '0'}</b><strong>high-intent inquiry{consultDemoStep === 'review' ? '' : ' waiting'}</strong></div><div><b>{consultDemoStep === 'booked' ? '1' : '—'}</b><strong>consultation booked</strong></div><p>One prioritized action is more useful than another full inbox.</p></div>
        </div>
      </div>
    </section>

    <section className="process-section">
      <div className="shell"><div className="process-top" data-reveal><p className="section-kicker">OUR PROCESS</p><div><span className="process-caption">FROM LEAK TO LIFT</span><h2>Clear steps.<br /><em>Measurable momentum.</em></h2></div></div>
      <div className="steps">
        {['Diagnose','Prioritize','Build','Launch','Improve'].map((step, i) => <div className="step" data-reveal style={{ '--delay': `${i * 100}ms` }} key={step}><span>0{i + 1}</span><div className="step-dot"></div><strong>{step}</strong><p>{['Map where inquiries, consultations, and returning clients lose momentum.','Choose the one revenue leak worth solving first.','Connect the right tools and design the decisions around your team.','Train the front desk and put the system into real use.','Review the results, refine the rules, and keep improving.'][i]}</p></div>)}
      </div></div>
    </section>

    <section className="audit shell" id="book">
      <div className="audit-glow" aria-hidden="true"></div>
      <div className="audit-copy" data-reveal><p className="section-kicker">YOUR FIRST STEP</p><h2>Find your<br /><em>booking leaks.</em></h2><p>In one focused session, we map the moments where inquiries, consultations, and returning clients lose momentum—and identify where to start.</p><a className="button button-light" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Book a Booking Leak Audit <Arrow /></a></div>
      <div className="audit-panel" data-reveal style={{ '--delay': '130ms' }}><div className="panel-title"><Spark /> YOUR AUDIT INCLUDES</div>{['45-minute discovery call','Inquiry-to-treatment journey map','Booking-leak snapshot','Highest-impact system recommendation','Clear next-step plan'].map((item, i) => <div className="audit-item" key={item}><span>0{i+1}</span>{item}<b>↗</b></div>)}</div>
    </section>

    <section className="faq shell" id="faq"><p className="section-kicker" data-reveal>FAQ</p><div className="faq-grid"><h2 data-reveal>Questions,<br /><em>answered.</em></h2><div>{faqs.map(([q,a], i) => <div className={'faq-item ' + (openFaq === i ? 'active' : '')} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}>{q}<span>{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p>{a}</p>}</div>)}</div></div></section>

    <footer><div className="shell footer-main"><a className="brand" href="#top" aria-label="Bookore Systems home"><img src="/bookore-systems-logo.png" alt="Bookore Systems" /></a><h2>More booked care.<br /><em>More momentum.</em></h2><a className="button button-primary" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Find your booking leaks <Arrow /></a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Bookore Systems</span><a href="mailto:angela@bookoresystems.com">angela@bookoresystems.com</a><span>Built for better client journeys.</span></div></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />);
