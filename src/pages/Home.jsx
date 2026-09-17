import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Arrow, BookButton, Headline, Kicker } from '../components/ui.jsx';
import HeroCanvas from '../components/HeroCanvas.jsx';
import { SignalBand, ToolStrip } from '../components/Marquee.jsx';
import Method from '../components/Method.jsx';
import LiveDemo from '../components/LiveDemo.jsx';
import Faq from '../components/Faq.jsx';
import Footer from '../components/Footer.jsx';
import { aiModes, ladder, stack, homeFaqs, auditPage } from '../data/home.js';
import teardowns from '../data/teardowns.js';
import construction from '../data/construction.js';
import medspa from '../data/medspa.js';

const verticals = { construction, medspa };

function AiModes() {
  const [mode, setMode] = useState('save');
  const m = aiModes[mode];
  return <section className="modes" id="ai">
    <div className="shell">
      <div className="modes-head" data-reveal><div><Kicker>WHERE AI ACTUALLY PAYS</Kicker><Headline lines={['Two questions.', 'Two very different answers.']} /></div><p>Most “AI strategy” conflates them. The audit answers both, in writing, before anything gets built.</p></div>
      <div className="mode-switch" role="tablist" aria-label="Two ways we apply AI" data-reveal>
        <div className="mode-thumb" style={{ transform: mode === 'save' ? 'translateX(0)' : 'translateX(100%)' }} />
        {Object.values(aiModes).map((x) => <button key={x.id} role="tab" aria-selected={mode === x.id} className={mode === x.id ? 'active' : ''} onClick={() => setMode(x.id)}>{x.label}</button>)}
      </div>
      <div className="mode-body" key={mode}>
        <div className="mode-intro">
          <h3>{m.question}</h3>
          <p>{m.answer}</p>
          <div className="mode-stat"><b>{m.stat[0]}</b><span>{m.stat[1]}</span></div>
        </div>
        <div className="mode-grid">
          {m.items.map(([title, copy], i) => <div className="mode-card" key={title} style={{ '--i': i }} data-spot><span>0{i + 1}</span><strong>{title}</strong><p>{copy}</p></div>)}
        </div>
      </div>
    </div>
  </section>;
}

function Ladder() {
  const [active, setActive] = useState(0);
  return <section className="ladder" id="build">
    <div className="shell">
      <div className="ladder-head" data-reveal><div><Kicker>WHAT WE BUILD</Kicker><Headline lines={['From a single workflow', 'to the whole operation.']} /></div><p>Four depths, one method. Hover a rung.</p></div>
      <div className="rungs" data-reveal>
        {ladder.map((r, i) => <div className={'rung' + (active === i ? ' active' : '')} key={r.number} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} tabIndex={0} style={{ '--i': i }}>
          <div className="rung-top"><span>{r.number}</span><i style={{ width: r.depth + '%' }} /></div>
          <strong>{r.name}</strong>
          <p className="rung-line">{r.line}</p>
          <div className="rung-more"><p>{r.example}</p><em>{r.tools}</em></div>
        </div>)}
      </div>
      <p className="ladder-note" data-reveal>Start where the leak is. Most clients enter at rung one or two and move deeper once the first system pays for itself.</p>
    </div>
  </section>;
}

function DemoTabs() {
  const [v, setV] = useState('construction');
  const data = verticals[v];
  return <div className="demo-tabs-wrap" id="demos">
    <div className="shell demo-industry" data-reveal>
      <Kicker>DON'T TAKE OUR WORD FOR IT</Kicker>
      <Headline lines={['Run one', 'yourself.']} />
      <div className="industry-switch" role="tablist">
        {Object.values(verticals).map((x) => <button key={x.slug} role="tab" aria-selected={v === x.slug} className={v === x.slug ? 'active' : ''} onClick={() => setV(x.slug)}>{x.name}</button>)}
        <Link className="text-link" to={'/' + v}>All {data.name.toLowerCase()} systems <Arrow /></Link>
      </div>
    </div>
    <LiveDemo demos={[data.demos[v === 'construction' ? 1 : 0]]} prefix={'home-' + v} showOffer={false} tabs={false} headingKicker={data.name.toUpperCase() + ' / LIVE DEMO'} />
  </div>;
}

export default function Home() {
  return <>
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy-col">
          <Kicker spark>AUTOMATION & AI SYSTEMS FOR OWNER-LED BUSINESSES</Kicker>
          <h1><span className="line"><span>Do more of</span></span><span className="line"><span>what works.</span></span><span className="line"><span><em>Without doing it by hand.</em></span></span></h1>
          <p className="hero-copy">Bookore builds the automation and AI systems behind growing service businesses. We find the work that should never be manual and the wins that deserve to be multiplied, then build both around the tools your team already uses.</p>
          <div className="hero-actions"><BookButton /><a className="text-link" href="#demos">See a system run <Arrow /></a></div>
          <div className="hero-proof"><span>BUILT FOR</span><b>Contractors</b><b>Medspas</b><b>Agencies</b><b>Any quote-led business</b></div>
        </div>
        <HeroCanvas />
      </div>
    </section>

    <SignalBand items={['LESS MANUAL WORK', 'MORE OF WHAT WORKS', 'PEOPLE STAY IN CONTROL']} />

    <section className="problem" id="approach">
      <div className="shell problem-grid">
        <Kicker>THE REAL BOTTLENECK</Kicker>
        <div data-reveal>
          <Headline lines={['Most growing businesses don’t have a lead problem.', 'They have a follow-through problem.']} />
          <p className="large-copy">Inquiries wait. Quotes go quiet. Sold work gets re-explained. None of it is anyone’s fault. It is what happens when a business outgrows the manual steps that used to be fine.</p>
          <p className="large-copy muted">The fix is not more reminders. It is a system that surfaces one clear next action, drafts it, and waits for a person to say yes.</p>
        </div>
      </div>
    </section>

    <AiModes />
    <Ladder />
    <Method />
    <DemoTabs />
    <ToolStrip tools={stack} />

    <section className="audit-block shell" id="audit">
      <div className="audit-glow" aria-hidden="true" />
      <div className="audit-copy" data-reveal>
        <Kicker>YOUR FIRST STEP</Kicker>
        <Headline lines={['Know where AI pays', 'before you spend on it.']} />
        <p>The AI Operations Audit is a two-week review of how your business actually runs. You get a written map of where automation removes manual work, where AI multiplies what already works, and the order to build in. Whether you build with us or not.</p>
        <div className="audit-actions"><BookButton light label="Book the audit call" /><Link className="text-link" to="/audit">What's in the audit <Arrow /></Link></div>
      </div>
      <div className="audit-panel" data-reveal style={{ '--delay': '120ms' }}>
        <div className="panel-title">✦ THE AUDIT INCLUDES</div>
        {auditPage.deliverables.map(([item], i) => <div className="audit-item" key={item} style={{ '--i': i }}><span>0{i + 1}</span>{item}<b>↗</b></div>)}
        <div className="audit-price"><span>{auditPage.price}</span>{auditPage.priceNote}</div>
      </div>
    </section>

    <section className="teardown-teaser shell">
      <div className="teaser-head" data-reveal><div><Kicker>TEARDOWNS</Kicker><Headline lines={['How we would automate', 'a business like yours.']} /></div><Link className="text-link" to="/teardowns">All teardowns <Arrow /></Link></div>
      <div className="teaser-grid">
        {teardowns.map((t, i) => <Link className="teaser-card" to={'/teardowns/' + t.slug} key={t.slug} data-reveal style={{ '--delay': `${i * 80}ms` }} data-spot>
          <div className="teaser-meta"><span>{t.industry.toUpperCase()}</span><span>{t.band}</span></div>
          <strong>{t.title}</strong>
          <p>{t.summary}</p>
          <em>Read the teardown <Arrow /></em>
        </Link>)}
      </div>
    </section>

    <Faq items={homeFaqs} />
    <Footer />
  </>;
}
