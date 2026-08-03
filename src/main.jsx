import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/angela-bookoresystems/30min?month=2026-08';

function Arrow() { return <span className="arrow" aria-hidden="true">→</span>; }
function Spark() { return <span className="spark" aria-hidden="true">✦</span>; }

const services = [
  {
    number: '01',
    title: 'AI Operations Audit',
    text: 'Find the workflows where AI can create a meaningful, measurable difference—before you invest in tools.',
    outcome: 'A prioritized roadmap'
  },
  {
    number: '02',
    title: 'Workflow Design',
    text: 'Turn scattered, manual processes into clear systems your team can follow without adding operational drag.',
    outcome: 'A better way to work'
  },
  {
    number: '03',
    title: 'AI Implementation',
    text: 'Put practical AI solutions into your team’s existing tools, with documentation and adoption built in.',
    outcome: 'Systems that stick'
  }
];

const faqs = [
  ['Who is Bookore for?', 'We work best with growing B2B SaaS companies and service businesses, typically with 10–100 employees, where small operational improvements have a meaningful impact.'],
  ['What happens in an AI Operations Audit?', 'We begin with a 45-minute discovery call, review your current workflows, then identify the highest-value opportunities and deliver a practical, prioritized roadmap.'],
  ['Do we need to be using AI already?', 'No. The best starting point is a real operational problem. We help you decide where AI is useful—and where a simpler process improvement is the better answer.'],
  ['What does an implementation look like?', 'Each engagement is scoped around an outcome. That may include workflow design, system configuration, documentation, training, and a handoff your team can actually use.']
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <nav className="nav shell">
      <a className="brand" href="#top" aria-label="Bookore Systems home"><img src="/bookore-systems-logo.png" alt="Bookore Systems" /></a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">{menuOpen ? '×' : '☰'}</button>
      <div className={'nav-links ' + (menuOpen ? 'is-open' : '')}>
        <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a className="nav-cta" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Book an audit <Arrow /></a>
      </div>
    </nav>

    <section className="hero shell" id="top">
      <div className="eyebrow"><Spark /> AI OPERATIONS CONSULTANCY</div>
      <h1>Make the work<br /><em>work better.</em></h1>
      <p className="hero-copy">Bookore Systems helps growing teams eliminate repetitive work with practical AI systems, smarter workflows, and documentation that keeps everyone moving.</p>
      <div className="hero-actions">
        <a className="button button-primary" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Book a free AI operations audit <Arrow /></a>
        <a className="text-link" href="#approach">See how we work <Arrow /></a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orb orb-one"></div><div className="orb orb-two"></div><div className="grid-plane"></div>
        <div className="automation-flow"><span className="flow-label">MANUAL WORK</span><div className="flow-track"><i></i><i></i><i></i></div><div className="flow-core"><Spark /></div><div className="flow-output"><span>AI SYSTEM</span><b>✓</b></div></div>
        <div className="system-card card-one"><span>Signal</span><strong>What is slowing us down?</strong><b>01</b></div>
        <div className="system-card card-two"><span>System</span><strong>Make the repeatable effortless.</strong><b>02</b></div>
        <div className="system-card card-three"><span>Momentum</span><strong>Give the team time back.</strong><b>03</b></div>
      </div>
      <div className="scroll-note"><span></span>SCROLL TO EXPLORE</div>
    </section>

    <section className="problem-section" id="approach">
      <div className="shell problem-grid">
        <p className="section-kicker">THE REAL PROBLEM</p>
        <div>
          <h2>Most businesses don’t have an AI problem.<br /><em>They have an operations problem.</em></h2>
          <p className="large-copy">Your team is busy, but too much of that work is repeatable: searching for answers, rebuilding documents, chasing follow-ups, and keeping disconnected tools in sync.</p>
          <p className="large-copy muted">AI should make work simpler—not create another system your team has to manage.</p>
        </div>
      </div>
    </section>

    <section className="services shell" id="services">
      <div className="section-head"><div><p className="section-kicker">WHAT WE DO</p><h2>Build the operating system<br /><em>behind your best work.</em></h2></div><p>We start with the friction your team feels every day and work backwards to a system that solves it.</p></div>
      <div className="service-list">
        {services.map(service => <article className="service-card" key={service.number}>
          <span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><div className="outcome"><span>OUTCOME</span><strong>{service.outcome}</strong></div><span className="service-arrow"><Arrow /></span>
        </article>)}
      </div>
    </section>

    <section className="process-section">
      <div className="shell"><div className="process-top"><p className="section-kicker">OUR PROCESS</p><h2>Clear steps.<br /><em>Useful outcomes.</em></h2></div>
      <div className="steps">
        {['Discover','Design','Build','Train','Improve'].map((step, i) => <div className="step" key={step}><span>0{i + 1}</span><div className="step-dot"></div><strong>{step}</strong><p>{['Understand the work and find the friction.','Map a simpler system around your team.','Implement the right solution, not the shiniest tool.','Make it easy for your team to adopt.','Measure, refine, and keep moving forward.'][i]}</p></div>)}
      </div></div>
    </section>

    <section className="audit shell" id="book">
      <div className="audit-copy"><p className="section-kicker">YOUR FIRST STEP</p><h2>Start with an<br /><em>AI Operations Audit.</em></h2><p>In one focused session, we uncover the operational work getting in your team’s way—and show you where to start.</p><a className="button button-light" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Book your free audit <Arrow /></a></div>
      <div className="audit-panel"><div className="panel-title"><Spark /> YOUR AUDIT INCLUDES</div>{['30-minute discovery call','Workflow & opportunity review','AI Opportunity Score','Prioritized implementation roadmap','Personalized PDF report'].map((item, i) => <div className="audit-item" key={item}><span>0{i+1}</span>{item}<b>↗</b></div>)}<div className="audit-foot">Free for a limited number of early partners <span>●</span></div></div>
    </section>

    <section className="faq shell" id="faq"><p className="section-kicker">FAQ</p><div className="faq-grid"><h2>Questions,<br /><em>answered.</em></h2><div>{faqs.map(([q,a], i) => <div className={'faq-item ' + (openFaq === i ? 'active' : '')} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}>{q}<span>{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p>{a}</p>}</div>)}</div></div></section>

    <footer><div className="shell footer-main"><a className="brand" href="#top" aria-label="Bookore Systems home"><img src="/bookore-systems-logo.png" alt="Bookore Systems" /></a><h2>Better systems.<br /><em>More momentum.</em></h2><a className="button button-primary" href={calendlyUrl} target={calendlyUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Book a free audit <Arrow /></a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Bookore Systems</span><a href="mailto:angela@bookoresystems.com">angela@bookoresystems.com</a><span>Built for better work.</span></div></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />);
