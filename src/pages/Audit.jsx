import React from 'react';
import { BookButton, Headline, Kicker } from '../components/ui.jsx';
import Footer from '../components/Footer.jsx';
import Faq from '../components/Faq.jsx';
import { auditPage, homeFaqs } from '../data/home.js';

export default function Audit() {
  return <>
    <section className="page-hero shell">
      <Kicker spark>AI OPERATIONS AUDIT</Kicker>
      <h1><span className="line"><span>Find out where AI pays</span></span><span className="line"><span><em>in your business.</em></span></span></h1>
      <p className="hero-copy">A two-week, written review of your operations. We look at how leads, quotes, jobs, and customers move through your tools and your people, then map exactly where automation saves time and where AI can multiply what already works.</p>
      <div className="hero-actions"><BookButton label="Book the audit call" /><div className="price-pill"><b>{auditPage.price}</b><span>{auditPage.priceNote}</span></div></div>
    </section>

    <section className="deliverables shell">
      <div className="section-head" data-reveal><div><Kicker>WHAT YOU GET</Kicker><Headline lines={['Five things,', 'all in writing.']} /></div><p>Everything is yours to keep and hand to any builder. Most clients build with us. Some don’t. The map is useful either way.</p></div>
      <div className="deliverable-list">
        {auditPage.deliverables.map(([name, copy], i) => <div className="deliverable" key={name} data-reveal style={{ '--delay': `${i * 70}ms` }} data-spot><span>0{i + 1}</span><div><strong>{name}</strong><p>{copy}</p></div><b>↗</b></div>)}
      </div>
    </section>

    <section className="timeline-section">
      <div className="shell">
        <div className="section-head" data-reveal><div><Kicker>HOW IT RUNS</Kicker><Headline lines={['Fourteen days,', 'start to decision.']} /></div><p>You spend roughly three hours in total. We spend the rest.</p></div>
        <div className="timeline" data-reveal>
          <div className="timeline-line"><i /></div>
          {auditPage.timeline.map(([day, name, copy], i) => <div className="timeline-step" key={name} style={{ '--i': i }}><span>{day}</span><div className="timeline-dot" /><strong>{name}</strong><p>{copy}</p></div>)}
        </div>
      </div>
    </section>

    <section className="fit shell">
      <div className="fit-grid">
        <div data-reveal><Kicker>WHO IT'S FOR</Kicker><Headline lines={['Roughly $1M+ revenue,', 'with a manual-work problem.']} /><p className="large-copy">Businesses with at least one person whose week is mostly manual follow-up. If you are earlier than that, book the call anyway and we will point you at the single workflow to build first.</p></div>
        <div className="fit-card" data-reveal style={{ '--delay': '100ms' }}>
          <span>SAMPLE OPPORTUNITY MAP ROW</span>
          <table>
            <thead><tr><th>Workflow</th><th>Type</th><th>Effort</th><th>Impact</th></tr></thead>
            <tbody>
              <tr><td>Stale quote follow-up</td><td><i className="tag save">SAVE TIME</i></td><td>Low</td><td>High</td></tr>
              <tr><td>Past-client reactivation</td><td><i className="tag scale">10×</i></td><td>Medium</td><td>High</td></tr>
              <tr><td>Monday pipeline summary</td><td><i className="tag save">SAVE TIME</i></td><td>Low</td><td>Medium</td></tr>
              <tr><td>Proposal first draft</td><td><i className="tag scale">10×</i></td><td>Medium</td><td>Medium</td></tr>
            </tbody>
          </table>
          <em>Real maps run 15 to 30 rows, ranked.</em>
        </div>
      </div>
    </section>

    <Faq items={homeFaqs.slice(1)} lines={['Before you', 'book.']} />
    <Footer lines={['Know where AI pays.', 'Then build.']} cta="Book the audit call" />
  </>;
}
