import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/angela-bookoresystems/30min?month=2026-08';
const demoStorageKey = 'bookore-demo-status-v1';

function readDemoStatus() {
  try {
    const saved = window.localStorage.getItem(demoStorageKey);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function Arrow() { return <span className="arrow" aria-hidden="true">→</span>; }
function Spark() { return <span className="spark" aria-hidden="true">✦</span>; }

const services = [
  {
    number: '01',
    title: 'Lead-to-Site-Visit System',
    text: 'Turn serious project inquiries into qualified site visits without asking your team to chase every lead.',
    outcome: 'More qualified site visits'
  },
  {
    number: '02',
    title: 'Estimate Follow-Up System',
    text: 'Keep every active estimate moving until it is won, lost, or needs a real conversation.',
    outcome: 'More estimates decided'
  },
  {
    number: '03',
    title: 'Project Handoff System',
    text: 'Move a sold job from sales to production with the scope, decisions, and next owner already clear.',
    outcome: 'Fewer handoff surprises'
  }
];

const faqs = [
  ['Who is Bookore for?', 'We work with construction companies and specialty contractors where a slow response, stalled estimate, or messy handoff can cost a valuable project.'],
  ['What happens in a Revenue Leak Audit?', 'We map the path from first inquiry to signed scope and handoff, then identify where leads, estimates, and project decisions lose momentum. You leave with the highest-impact system to install first.'],
  ['Do we need to replace our CRM or project-management platform?', 'No. We build around the tools your sales and project teams already use. The goal is to make the gaps between them visible and easier to act on—not add another platform to manage.'],
  ['Will this send messages or make project decisions automatically?', 'Not in the pilot. Bookore can prioritize records and prepare approved drafts, while your team retains control of every client-facing message, estimate decision, and project commitment.']
];

const systems = [
  {
    id: 'lead',
    eyebrow: 'OFFER 01 / PIPELINE',
    title: 'Lead-to-Site-Visit System',
    description: 'A clear path from new project inquiry to a qualified site visit—without asking your team to remember who to chase.',
    trigger: 'New project inquiry',
    steps: ['Capture the lead', 'Qualify scope and fit', 'Route the next action', 'Book the site visit'],
    result: 'More qualified site visits booked',
    idealFor: 'Contractors where promising residential or commercial inquiries go quiet before a site visit is scheduled.',
    includes: ['Lead capture and routing', 'Qualification rules', 'Approved response templates', 'Sales action view'],
    deliverable: 'A ready-to-run lead follow-up workflow',
    guardrail: 'Your team approves every client-facing message.',
    nextStep: 'Start with a Revenue Leak Audit'
  },
  {
    id: 'estimate',
    eyebrow: 'OFFER 02 / CONVERSION',
    title: 'Estimate Follow-Up System',
    description: 'A focused system for keeping active estimates from becoming expensive loose ends.',
    trigger: 'Estimate sent with no next step',
    steps: ['Spot stalled estimates', 'Prioritize by value and age', 'Prepare the next touch', 'Record the decision'],
    result: 'More estimates won or cleanly closed',
    idealFor: 'Construction companies with proposals sitting in inboxes and no consistent follow-up process.',
    includes: ['Estimate-age tracking', 'Follow-up priority rules', 'Approved outreach templates', 'Pipeline reporting'],
    deliverable: 'A structured estimate follow-up queue',
    guardrail: 'Your team approves every client-facing message.',
    nextStep: 'Start with a Revenue Leak Audit'
  },
  {
    id: 'handoff',
    eyebrow: 'OFFER 03 / OPERATIONS',
    title: 'Project Handoff System',
    description: 'A clear, accountable handoff from signed estimate to a production-ready project.',
    trigger: 'Contract signed or deposit received',
    steps: ['Confirm the sold scope', 'Collect open decisions', 'Assign the next owner', 'Launch the project cleanly'],
    result: 'Fewer missed details at handoff',
    idealFor: 'Builders and trades where sales-to-production handoffs create rework, delays, or surprise calls.',
    includes: ['Sold-job checklist', 'Decision and document tracking', 'Owner assignments', 'Handoff status view'],
    deliverable: 'A repeatable sold-job handoff workflow',
    guardrail: 'Your team confirms every scope and commitment.',
    nextStep: 'Start with a Revenue Leak Audit'
  }
];

const liveDemos = [
  {
    id: 'lead',
    label: 'Lead-to-Site-Visit',
    eyebrow: 'OFFER 01 / PIPELINE',
    offer: 'Lead-to-Site-Visit System',
    offerPromise: 'Turn serious project inquiries into qualified site visits.',
    offerIncludes: ['Map your lead-to-site-visit journey', 'Build qualification and routing rules', 'Create approved response templates', 'Launch a simple sales action view'],
    heading: <>A good project lead is too valuable<br /><em>to become a loose end.</em></>,
    intro: 'Give a busy sales team one clear next step while keeping a person in control of every client-facing action.',
    profile: { tag: 'NEW PROJECT LEAD', signal: 'HIGH FIT', initials: 'JP', name: 'Jordan Patel', source: 'Website form · Kitchen remodel', details: [['PROJECT', 'Full kitchen renovation'], ['INQUIRY RECEIVED', 'Today, 9:18 AM']] },
    events: [['LEAD CAPTURED', 'Jordan requested a ballpark and timeline for a kitchen remodel.'], ['PRIORITY IDENTIFIED', 'In-service-area lead with a defined project and no site visit booked.']],
    recommendation: 'Invite Jordan to schedule a site visit this week.',
    supporting: 'Suggested message uses your approved tone and scheduling link.',
    button: 'Approve & send message',
    sentLabel: 'MESSAGE SENT',
    sentCopy: '“Hi Jordan—thanks for reaching out about your kitchen project. Let’s find a time for a site visit so we can scope it properly.”',
    sentSupporting: 'The sales team can see the response and schedule the visit from the same record.',
    sentButton: 'Simulate site visit booking',
    outcome: 'Jordan booked a site visit for Thursday at 10:00 AM.',
    outcomeSupporting: 'The system records the result for your pipeline view.',
    metricLabel: 'qualified project lead',
    bookedLabel: 'site visit booked'
  },
  {
    id: 'estimate',
    label: 'Estimate Follow-Up',
    eyebrow: 'OFFER 02 / CONVERSION',
    offer: 'Estimate Follow-Up System',
    offerPromise: 'Turn active estimates into decisions before they go stale.',
    offerIncludes: ['Identify estimates that need a next touch', 'Prioritize by value and age', 'Prepare approved follow-up', 'Track every decision and reason'],
    heading: <>An estimate is too valuable<br /><em>to disappear in an inbox.</em></>,
    intro: 'Turn a stale proposal into a focused sales action instead of relying on memory and scattered reminders.',
    profile: { tag: 'ESTIMATE FOLLOW-UP', signal: 'TIME SENSITIVE', initials: 'RW', name: 'Riley Williams', source: 'Deck replacement · $28,400 estimate', details: [['ESTIMATE SENT', '8 days ago'], ['NEXT STEP', 'No response recorded']] },
    events: [['ESTIMATE FLAGGED', 'A high-value estimate has passed the agreed follow-up window.'], ['ACTION PREPARED', 'The estimate is active, within the sales cycle, and has no next touch scheduled.']],
    recommendation: 'Ask Riley whether any scope or timing questions are holding up a decision.',
    supporting: 'The team sees the estimate context and an approved draft—not another list to manually search.',
    button: 'Approve follow-up',
    sentLabel: 'FOLLOW-UP SENT',
    sentCopy: '“Hi Riley—just checking in on the deck proposal. Are there any questions about the scope or timing I can help clear up?”',
    sentSupporting: 'Riley can reply through your normal channel, and the salesperson owns the next step.',
    sentButton: 'Simulate signed estimate',
    outcome: 'Riley approved the estimate and the project is ready for handoff.',
    outcomeSupporting: 'The result is recorded as won pipeline—not just a sent message.',
    metricLabel: 'estimate needing follow-up',
    bookedLabel: 'estimate won'
  },
  {
    id: 'handoff',
    label: 'Project Handoff',
    eyebrow: 'OFFER 03 / OPERATIONS',
    offer: 'Project Handoff System',
    offerPromise: 'Move sold work into production with fewer surprises.',
    offerIncludes: ['Confirm the signed scope and assumptions', 'Collect outstanding client decisions', 'Assign owners and due dates', 'Give production a ready-to-start view'],
    heading: <>A signed project deserves<br /><em>a clean start.</em></>,
    intro: 'Give sales and production one shared handoff record before small missing details become expensive field surprises.',
    profile: { tag: 'SOLD PROJECT', signal: 'READY FOR HANDOFF', initials: 'MG', name: 'Morgan Greene', source: 'Primary bath remodel · $46,800 contract', details: [['CONTRACT SIGNED', 'Today, 11:05 AM'], ['OPEN DECISION', 'Tile selection due']] },
    events: [['SCOPE CONFIRMED', 'The signed proposal, allowances, and key assumptions are linked in one record.'], ['HANDOFF PRIORITIZED', 'Production needs an owner, kickoff date, and remaining client decisions.']],
    recommendation: 'Assign the project manager and request Morgan’s tile selection before the kickoff.',
    supporting: 'The queue makes open decisions and ownership visible; it does not change the signed scope.',
    button: 'Approve handoff action',
    sentLabel: 'HANDOFF ACTION CREATED',
    sentCopy: '“Hi Morgan—your project is moving into scheduling. Before kickoff, we need to confirm your tile selection.”',
    sentSupporting: 'The project manager sees the client request, scope, and next internal action in one place.',
    sentButton: 'Simulate production handoff',
    outcome: 'Morgan’s project has been handed to production with its open decision tracked.',
    outcomeSupporting: 'The handoff is measured before work starts—not after a detail is missed.',
    metricLabel: 'sold job needing handoff',
    bookedLabel: 'production-ready project'
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSystem, setActiveSystem] = useState('lead');
  const [activeLiveDemo, setActiveLiveDemo] = useState('lead');
  const [demoStatus, setDemoStatus] = useState(readDemoStatus);
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
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]').forEach((item) => item.classList.add('is-visible'));
    });
    return () => cancelAnimationFrame(frame);
  }, [activeSystem, activeLiveDemo]);
  useEffect(() => {
    window.localStorage.setItem(demoStorageKey, JSON.stringify(demoStatus));
  }, [demoStatus]);
  const setDemoStep = (demoId, step) => setDemoStatus((current) => ({ ...current, [demoId]: step }));
  const resetDemo = (demoId) => setDemoStatus((current) => ({ ...current, [demoId]: 'review' }));
  const resetAllDemos = () => setDemoStatus({});
  const liveDemoStep = demoStatus[activeLiveDemo] || 'review';
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
      <div className="eyebrow"><Spark /> REVENUE SYSTEMS FOR CONSTRUCTION COMPANIES</div>
      <h1>Turn more<br />project leads into<br /><em>signed work.</em></h1>
      <p className="hero-copy">Bookore builds the sales and handoff systems behind construction companies—so fewer leads go cold, estimates get a clear next step, and sold work reaches production without surprises.</p>
      <div className="hero-actions">
        <a className="button button-primary" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Find your revenue leaks <Arrow /></a>
        <a className="text-link" href="#systems">See the systems <Arrow /></a>
      </div>
      <div className="hero-art" ref={heroArtRef} aria-hidden="true">
        <div className="orb orb-one"></div><div className="orb orb-two"></div><div className="grid-plane"></div>
        <div className="orbit-label orbit-label-one">FEWER COLD LEADS</div><div className="orbit-label orbit-label-two">MORE SIGNED WORK</div>
        <div className="automation-flow"><span className="flow-label">NEW PROJECT LEAD</span><div className="flow-track"><i></i><i></i><i></i></div><div className="flow-core"><Spark /></div><div className="flow-output"><span>SIGNED</span><b>✓</b></div></div>
        <div className="system-card card-one"><span>Lead</span><strong>Who needs a response now?</strong><b>01</b></div>
        <div className="system-card card-two"><span>Estimate</span><strong>Keep valuable proposals moving.</strong><b>02</b></div>
        <div className="system-card card-three"><span>Handoff</span><strong>Start sold work without surprises.</strong><b>03</b></div>
      </div>
      <div className="scroll-note"><span></span>SCROLL TO EXPLORE</div>
    </section>

    <div className="signal-band" aria-label="Bookore Systems helps construction companies protect more revenue"><div className="signal-track"><span>MORE SIGNED WORK</span><i>✦</i><span>FEWER LOST OPPORTUNITIES</span><i>✦</i><span>MORE SIGNED WORK</span><i>✦</i><span>FEWER LOST OPPORTUNITIES</span></div></div>

    <section className="problem-section" id="approach">
      <div className="shell problem-grid">
        <p className="section-kicker" data-reveal>THE REAL PROBLEM</p>
        <div data-reveal style={{ '--delay': '90ms' }}>
          <h2>Most contractors don’t have a lead problem.<br /><em>They have a follow-through problem.</em></h2>
          <p className="large-copy">A project inquiry arrives. A site visit is needed. An estimate goes quiet. A job is sold. Your team knows these moments matter—but a busy owner, estimator, or project manager cannot chase every one by hand.</p>
          <p className="large-copy muted">The right system makes the next best action clear, without turning your pipeline into another inbox to manage.</p>
        </div>
      </div>
    </section>

    <section className="services shell" id="services">
      <div className="section-head" data-reveal><div><p className="section-kicker">WHAT WE BUILD</p><h2>Protect the revenue<br /><em>between the inquiry and the jobsite.</em></h2></div><p>We start with the moments where promising projects lose momentum, then build a system your team can actually run.</p></div>
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
            <p className="system-deliverable"><span>YOU LEAVE WITH</span>{system.deliverable}</p>
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
        <p className="systems-note" data-reveal>Each offer is a focused implementation—not a replacement platform. We begin with a Revenue Leak Audit, agree on the workflow and safeguards, then build around your current CRM, estimating process, and project team.</p>
      </div>
    </section>

    <section className="consult-demo-section" aria-labelledby="consult-demo-heading">
      <div className="shell">
        {liveDemos.filter((demo) => demo.id === activeLiveDemo).map((demo) => <React.Fragment key={demo.id}>
          <div className="consult-demo-head" data-reveal><div><p className="section-kicker">FUNCTIONAL SYSTEM DEMOS</p><h2 id="consult-demo-heading">{demo.heading}</h2></div><p>{demo.intro}</p></div>
          <div className="live-demo-tabs" role="tablist" aria-label="Live system demos">{liveDemos.map((item, i) => <button key={item.id} role="tab" aria-selected={activeLiveDemo === item.id} className={activeLiveDemo === item.id ? 'active' : ''} onClick={() => setActiveLiveDemo(item.id)}><span>0{i + 1}</span>{item.label}</button>)}<button className="demo-reset" type="button" onClick={resetAllDemos}>Reset all demo data</button></div>
          <div className="offer-strip" data-reveal>
            <div><span>THE OFFER</span><strong>{demo.offer}</strong></div>
            <p>{demo.offerPromise}</p>
            <ul>{demo.offerIncludes.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="offer-cta"><span>FIRST STEP</span><strong>Revenue Leak Audit</strong><a className="button button-primary" href="#book">Discuss this offer <Arrow /></a></div>
          </div>
          <div className="consult-demo-grid">
            <div className="lead-profile" data-reveal><div className="profile-head"><span>{demo.profile.tag}</span><i>● {demo.profile.signal}</i></div><div className="profile-person"><div className="profile-avatar">{demo.profile.initials}</div><div><strong>{demo.profile.name}</strong><span>{demo.profile.source}</span></div></div>{demo.profile.details.map(([label, value]) => <div className="profile-detail" key={label}><span>{label}</span><strong>{value}</strong></div>)}<div className="profile-detail"><span>STATUS</span><strong className={liveDemoStep === 'booked' ? 'status-booked' : ''}>{liveDemoStep === 'booked' ? 'Outcome recorded' : 'Needs team action'}</strong></div></div>
            <div className="consult-workflow" data-reveal style={{ '--delay': '100ms' }}><div className="workflow-top"><span>BOOKORE / {demo.label.toUpperCase()}</span><b>DEMO DATA</b></div>{demo.events.map(([label, value], i) => <div className={'workflow-event ' + (liveDemoStep !== 'review' ? 'complete' : '')} key={label}><div className="workflow-icon">0{i + 1}</div><div><span>{label}</span><strong>{value}</strong></div><i>✓</i></div>)}{liveDemoStep === 'review' && <div className="workflow-action"><span>RECOMMENDED NEXT STEP</span><strong>{demo.recommendation}</strong><p>{demo.supporting}</p><button onClick={() => setDemoStep(demo.id, 'sent')}>{demo.button} <Arrow /></button></div>}{liveDemoStep === 'sent' && <div className="workflow-action sent"><span>{demo.sentLabel}</span><strong>{demo.sentCopy}</strong><p>{demo.sentSupporting}</p><button onClick={() => setDemoStep(demo.id, 'booked')}>{demo.sentButton} <Arrow /></button></div>}{liveDemoStep === 'booked' && <div className="workflow-action booked"><span>OUTCOME CAPTURED</span><strong>{demo.outcome}</strong><p>{demo.outcomeSupporting}</p><button onClick={() => resetDemo(demo.id)}>Run the demo again <Arrow /></button></div>}</div>
            <div className="consult-metrics" data-reveal style={{ '--delay': '180ms' }}><span>FRONT-DESK VIEW</span><div><b>{liveDemoStep === 'review' ? '1' : '0'}</b><strong>{demo.metricLabel}{liveDemoStep === 'review' ? '' : ' waiting'}</strong></div><div><b>{liveDemoStep === 'booked' ? '1' : '—'}</b><strong>{demo.bookedLabel}</strong></div><div className="demo-state"><span>DEMO STATUS</span><strong>{liveDemoStep === 'review' ? 'Ready for approval' : liveDemoStep === 'sent' ? 'Outreach approved' : 'Outcome recorded'}</strong></div><p>Actions are saved in this browser using fictional demo data.</p></div>
          </div>
        </React.Fragment>)}
      </div>
    </section>

    <section className="process-section">
      <div className="shell"><div className="process-top" data-reveal><p className="section-kicker">OUR PROCESS</p><div><span className="process-caption">FROM LEAK TO LIFT</span><h2>Clear steps.<br /><em>Measurable momentum.</em></h2></div></div>
      <div className="steps">
        {['Diagnose','Prioritize','Build','Launch','Improve'].map((step, i) => <div className="step" data-reveal style={{ '--delay': `${i * 100}ms` }} key={step}><span>0{i + 1}</span><div className="step-dot"></div><strong>{step}</strong><p>{['Map where leads, estimates, and sold jobs lose momentum.','Choose the one revenue leak worth solving first.','Connect the right tools and design the decisions around your team.','Train the sales and project team, then put the system into real use.','Review the results, refine the rules, and keep improving.'][i]}</p></div>)}
      </div></div>
    </section>

    <section className="audit shell" id="book">
      <div className="audit-glow" aria-hidden="true"></div>
      <div className="audit-copy" data-reveal><p className="section-kicker">YOUR FIRST STEP</p><h2>Find your<br /><em>revenue leaks.</em></h2><p>In one focused session, we map the moments where leads, estimates, and sold projects lose momentum—and identify where to start.</p><a className="button button-light" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Book a Revenue Leak Audit <Arrow /></a></div>
      <div className="audit-panel" data-reveal style={{ '--delay': '130ms' }}><div className="panel-title"><Spark /> YOUR AUDIT INCLUDES</div>{['45-minute discovery call','Lead-to-project journey map','Revenue-leak snapshot','Highest-impact system recommendation','Clear next-step plan'].map((item, i) => <div className="audit-item" key={item}><span>0{i+1}</span>{item}<b>↗</b></div>)}</div>
    </section>

    <section className="faq shell" id="faq"><p className="section-kicker" data-reveal>FAQ</p><div className="faq-grid"><h2 data-reveal>Questions,<br /><em>answered.</em></h2><div>{faqs.map(([q,a], i) => <div className={'faq-item ' + (openFaq === i ? 'active' : '')} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}>{q}<span>{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p>{a}</p>}</div>)}</div></div></section>

    <footer><div className="shell footer-main"><a className="brand" href="#top" aria-label="Bookore Systems home"><img src="/bookore-systems-logo.png" alt="Bookore Systems" /></a><h2>More signed work.<br /><em>More momentum.</em></h2><a className="button button-primary" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Find your revenue leaks <Arrow /></a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Bookore Systems</span><a href="mailto:angela@bookoresystems.com">angela@bookoresystems.com</a><span>Built for better project journeys.</span></div></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />);
