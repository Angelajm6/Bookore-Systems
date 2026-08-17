import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/angela-bookoresystems/30min?month=2026-08';

function Arrow() { return <span className="arrow" aria-hidden="true">→</span>; }
function Spark() { return <span className="spark" aria-hidden="true">✦</span>; }

const services = [
  {
    number: '01',
    title: 'Consult Conversion System',
    text: 'Turn high-intent inquiries into clear, personal paths to booked consultations.',
    outcome: 'More consultations booked'
  },
  {
    number: '02',
    title: 'Capacity Recovery System',
    text: 'Give your team a focused way to recover valuable cancellations before the opportunity disappears.',
    outcome: 'More appointments recovered'
  },
  {
    number: '03',
    title: 'Client Return System',
    text: 'Prioritize the right past clients and make returning for their next treatment feel timely and personal.',
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
    eyebrow: 'OFFER 01 / CONVERSION',
    title: 'Consult Conversion System',
    description: 'A clear, personal path from new inquiry to consultation—without asking your front desk to chase every lead.',
    trigger: 'New treatment inquiry',
    steps: ['Capture the inquiry', 'Identify intent and urgency', 'Route the right next action', 'Keep the consult moving'],
    result: 'More qualified consultations booked',
    preview: ['New injectable inquiry', 'Interested in lip filler', 'Consultation not yet booked', 'Front desk action ready'],
    idealFor: 'Medspas where promising inquiries go quiet before a consultation is booked.',
    includes: ['Inquiry capture and routing', 'Lead-priority rules', 'Approved response templates', 'Front-desk conversion view']
  },
  {
    id: 'recovery',
    eyebrow: 'OFFER 02 / CAPACITY',
    title: 'Capacity Recovery System',
    description: 'A focused system for turning cancellations into recoverable appointments instead of empty space on the calendar.',
    trigger: 'High-value appointment cancelled',
    steps: ['Spot the open capacity', 'Match an appropriate client', 'Prepare approved outreach', 'Track the recovered booking'],
    result: 'More of your calendar working for you',
    preview: ['Friday 3:30 PM opened', 'Two clients on waitlist', 'Best-fit client identified', 'Recovery message ready'],
    idealFor: 'Medspas losing valuable appointment time to late cancellations and no-shows.',
    includes: ['Cancellation detection', 'Waitlist and client matching', 'Approved recovery outreach', 'Recovered-capacity tracking']
  },
  {
    id: 'retention',
    eyebrow: 'OFFER 03 / RETENTION',
    title: 'Client Return System',
    description: 'A provider-approved rebooking queue that helps your front desk bring the right clients back at the right time.',
    trigger: 'Provider-approved treatment cadence due',
    steps: ['Identify clients who are due', 'Prioritize by opportunity', 'Prepare relevant follow-up', 'Measure returning revenue'],
    result: 'More returning clients and repeat revenue',
    preview: ['Treatment cycle due', '42 days since last visit', 'Rebooking opportunity', 'Follow-up approved'],
    idealFor: 'Medspas with strong past clients but inconsistent rebooking and follow-through.',
    includes: ['Due-date and cadence rules', 'Rebooking priority queue', 'Approved follow-up templates', 'Return-revenue reporting']
  }
];

const liveDemos = [
  {
    id: 'consult',
    label: 'Consult Conversion',
    eyebrow: 'OFFER 01 / CONVERSION',
    offer: 'Consult Conversion System',
    offerPromise: 'Turn high-intent inquiries into booked consultations.',
    offerIncludes: ['Map your inquiry-to-consult journey', 'Build priority and routing rules', 'Create your approved response playbook', 'Launch a simple front-desk action view'],
    heading: <>A consult is too valuable<br /><em>to become a loose end.</em></>,
    intro: 'Give a busy front desk one clear next step—while keeping a person in control of every client-facing action.',
    profile: { tag: 'NEW INQUIRY', signal: 'HIGH INTENT', initials: 'MC', name: 'Maya Chen', source: 'New client · Instagram DM', details: [['INTEREST', 'Lip filler consultation'], ['INQUIRY RECEIVED', 'Today, 6:42 PM']] },
    events: [['INQUIRY CAPTURED', 'Maya asked about availability and pricing.'], ['PRIORITY IDENTIFIED', 'New high-intent inquiry with no booking.']],
    recommendation: 'Offer Maya a 15-minute consultation this week.',
    supporting: 'Suggested message uses your approved tone and booking link.',
    button: 'Approve & send message',
    sentLabel: 'MESSAGE SENT',
    sentCopy: '“Hi Maya—thanks for reaching out. I can help you find the right time for a consultation this week.”',
    sentSupporting: 'The front desk can see the response and book directly from the conversation.',
    sentButton: 'Simulate consultation booking',
    outcome: 'Maya booked a consultation for Thursday at 4:00 PM.',
    outcomeSupporting: 'The system records the result for your conversion view.',
    metricLabel: 'high-intent inquiry',
    bookedLabel: 'consultation booked'
  },
  {
    id: 'recovery',
    label: 'Capacity Recovery',
    eyebrow: 'OFFER 02 / CAPACITY',
    offer: 'Capacity Recovery System',
    offerPromise: 'Turn last-minute openings into recoverable appointments.',
    offerIncludes: ['Identify cancellations worth recovering', 'Match eligible clients or waitlist demand', 'Prepare approved recovery outreach', 'Track recovered appointment value'],
    heading: <>A cancelled slot can still<br /><em>be a booked treatment.</em></>,
    intro: 'Turn a last-minute opening into a focused recovery task instead of hoping the front desk notices in time.',
    profile: { tag: 'OPEN CAPACITY', signal: 'TIME SENSITIVE', initials: 'FR', name: 'Friday · 3:30 PM', source: '90-minute injectable appointment', details: [['CANCELLED', 'Today, 10:14 AM'], ['WINDOW', 'Within 72 hours']] },
    events: [['OPEN SLOT DETECTED', 'A high-value appointment has been cancelled.'], ['BEST-FIT CLIENT FOUND', 'Nina is on the waitlist and matches this service window.']],
    recommendation: 'Invite Nina to take Friday’s 3:30 PM appointment.',
    supporting: 'The team sees an eligible client and approved message—not a list to manually search.',
    button: 'Approve recovery outreach',
    sentLabel: 'RECOVERY MESSAGE SENT',
    sentCopy: '“Hi Nina—a Friday afternoon appointment just opened. Would you like me to hold it for you?”',
    sentSupporting: 'Nina can confirm through your normal booking flow.',
    sentButton: 'Simulate slot recovery',
    outcome: 'Friday’s 3:30 PM appointment has been recovered.',
    outcomeSupporting: 'The open capacity is now attributed to the recovery system.',
    metricLabel: 'open high-value slot',
    bookedLabel: 'appointment recovered'
  },
  {
    id: 'retention',
    label: 'Client Return',
    eyebrow: 'OFFER 03 / RETENTION',
    offer: 'Client Return System',
    offerPromise: 'Bring valuable past clients back before they drift away.',
    offerIncludes: ['Define provider-approved return windows', 'Prioritize the right clients', 'Build your rebooking outreach queue', 'Measure returning client momentum'],
    heading: <>Returning clients deserve<br /><em>timely follow-through.</em></>,
    intro: 'Give the front desk a provider-approved rebooking queue before a valuable client quietly drifts away.',
    profile: { tag: 'REBOOKING DUE', signal: 'READY TO REVIEW', initials: 'EP', name: 'Elena Park', source: 'Returning client · 6 visits', details: [['LAST VISIT', '12 weeks ago'], ['APPROVED CADENCE', 'Review due this month']] },
    events: [['CLIENT DUE IDENTIFIED', 'Elena is within the practice’s provider-approved follow-up window.'], ['OPPORTUNITY PRIORITIZED', 'Strong visit history with no future appointment on the books.']],
    recommendation: 'Invite Elena to schedule her next treatment review.',
    supporting: 'The queue uses practice-approved cadence rules—not clinical recommendations.',
    button: 'Approve rebooking outreach',
    sentLabel: 'REBOOKING MESSAGE SENT',
    sentCopy: '“Hi Elena—we’d love to help you plan your next visit whenever the timing feels right.”',
    sentSupporting: 'The outreach stays personal, approved, and easy for the team to track.',
    sentButton: 'Simulate rebooking',
    outcome: 'Elena has booked her next treatment review.',
    outcomeSupporting: 'The return is measured as retained revenue—not just another sent text.',
    metricLabel: 'rebooking opportunity',
    bookedLabel: 'returning client booked'
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSystem, setActiveSystem] = useState('consult');
  const [activeLiveDemo, setActiveLiveDemo] = useState('consult');
  const [liveDemoStep, setLiveDemoStep] = useState('review');
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
          <div><p className="section-kicker">THREE FOCUSED OFFERS</p><h2>One revenue leak.<br /><em>One system to fix it.</em></h2></div>
          <p>Choose the moment costing you the most. We build the focused system around the tools and team you already have.</p>
        </div>
        <div className="system-tabs" role="tablist" aria-label="Example systems">
          {systems.map((system, i) => <button key={system.id} role="tab" aria-selected={activeSystem === system.id} className={activeSystem === system.id ? 'active' : ''} onClick={() => setActiveSystem(system.id)}><span>0{i + 1}</span>{system.title}</button>)}
        </div>
        {systems.map((system) => activeSystem === system.id && <article className="system-demo" key={system.id}>
          <div className="system-copy" data-reveal>
            <p className="section-kicker">{system.eyebrow}</p><h3>{system.title}</h3><p>{system.description}</p><p className="system-ideal"><span>BEST FOR</span>{system.idealFor}</p>
            <a className="text-link" href="#book">Talk through this offer <Arrow /></a>
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
            <div className="preview-top"><span>WHAT'S INCLUDED</span><b>•••</b></div>
            {system.includes.map((item, i) => <div className="preview-line" key={item}><i className={i === system.includes.length - 1 ? 'complete' : ''}></i>{item}</div>)}
          </div>
        </article>)}
        <p className="systems-note" data-reveal>Every offer starts with your existing booking flow, front desk, and client experience—not a disruptive replacement platform.</p>
      </div>
    </section>

    <section className="consult-demo-section" aria-labelledby="consult-demo-heading">
      <div className="shell">
        {liveDemos.filter((demo) => demo.id === activeLiveDemo).map((demo) => <React.Fragment key={demo.id}>
          <div className="consult-demo-head" data-reveal><div><p className="section-kicker">SEE THE OFFER IN ACTION</p><h2 id="consult-demo-heading">{demo.heading}</h2></div><p>{demo.intro}</p></div>
          <div className="live-demo-tabs" role="tablist" aria-label="Live system demos">{liveDemos.map((item, i) => <button key={item.id} role="tab" aria-selected={activeLiveDemo === item.id} className={activeLiveDemo === item.id ? 'active' : ''} onClick={() => { setActiveLiveDemo(item.id); setLiveDemoStep('review'); }}><span>0{i + 1}</span>{item.label}</button>)}</div>
          <div className="offer-strip" data-reveal>
            <div><span>THE OFFER</span><strong>{demo.offer}</strong></div>
            <p>{demo.offerPromise}</p>
            <ul>{demo.offerIncludes.map((item) => <li key={item}>{item}</li>)}</ul>
            <a className="button button-primary" href="#book">Talk through this offer <Arrow /></a>
          </div>
          <div className="consult-demo-grid">
            <div className="lead-profile" data-reveal><div className="profile-head"><span>{demo.profile.tag}</span><i>● {demo.profile.signal}</i></div><div className="profile-person"><div className="profile-avatar">{demo.profile.initials}</div><div><strong>{demo.profile.name}</strong><span>{demo.profile.source}</span></div></div>{demo.profile.details.map(([label, value]) => <div className="profile-detail" key={label}><span>{label}</span><strong>{value}</strong></div>)}<div className="profile-detail"><span>STATUS</span><strong className={liveDemoStep === 'booked' ? 'status-booked' : ''}>{liveDemoStep === 'booked' ? 'Outcome recorded' : 'Needs team action'}</strong></div></div>
            <div className="consult-workflow" data-reveal style={{ '--delay': '100ms' }}><div className="workflow-top"><span>BOOKORE / {demo.label.toUpperCase()}</span><b>DEMO DATA</b></div>{demo.events.map(([label, value], i) => <div className={'workflow-event ' + (liveDemoStep !== 'review' ? 'complete' : '')} key={label}><div className="workflow-icon">0{i + 1}</div><div><span>{label}</span><strong>{value}</strong></div><i>✓</i></div>)}{liveDemoStep === 'review' && <div className="workflow-action"><span>RECOMMENDED NEXT STEP</span><strong>{demo.recommendation}</strong><p>{demo.supporting}</p><button onClick={() => setLiveDemoStep('sent')}>{demo.button} <Arrow /></button></div>}{liveDemoStep === 'sent' && <div className="workflow-action sent"><span>{demo.sentLabel}</span><strong>{demo.sentCopy}</strong><p>{demo.sentSupporting}</p><button onClick={() => setLiveDemoStep('booked')}>{demo.sentButton} <Arrow /></button></div>}{liveDemoStep === 'booked' && <div className="workflow-action booked"><span>OUTCOME CAPTURED</span><strong>{demo.outcome}</strong><p>{demo.outcomeSupporting}</p><button onClick={() => setLiveDemoStep('review')}>Run the demo again <Arrow /></button></div>}</div>
            <div className="consult-metrics" data-reveal style={{ '--delay': '180ms' }}><span>FRONT-DESK VIEW</span><div><b>{liveDemoStep === 'review' ? '1' : '0'}</b><strong>{demo.metricLabel}{liveDemoStep === 'review' ? '' : ' waiting'}</strong></div><div><b>{liveDemoStep === 'booked' ? '1' : '—'}</b><strong>{demo.bookedLabel}</strong></div><p>One prioritized action is more useful than another full inbox.</p></div>
          </div>
        </React.Fragment>)}
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
