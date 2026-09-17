import React from 'react';
import { BookButton, Headline, Kicker } from '../components/ui.jsx';
import { ToolStrip } from '../components/Marquee.jsx';
import Footer from '../components/Footer.jsx';
import { stack } from '../data/home.js';

const principles = [
  ['People approve', 'Nothing customer-facing is sent, quoted, or committed without a person saying yes. We design for the approval step, not around it.'],
  ['Start at the leak', 'The first system is the one that touches the most revenue with the least new tooling. Excitement about the tech comes second.'],
  ['Build on what you have', 'Your CRM, your inbox, your booking tool. We add the connective tissue, not another platform to manage.'],
  ['Everything in writing', 'Opportunity maps, specs, and scorecards you keep. If you leave, the system still runs and the documentation still explains it.']
];

export default function About() {
  return <>
    <section className="page-hero shell">
      <Kicker spark>ABOUT</Kicker>
      <h1><span className="line"><span>A small team that builds</span></span><span className="line"><span><em>what it recommends.</em></span></span></h1>
      <p className="hero-copy">Bookore Systems is run by Angela Jaume. We started building revenue systems for contractors and medspas, and kept finding the same shape underneath: a business that outgrew its manual follow-through. Now we build that layer for any owner-led service business.</p>
      <div className="hero-actions"><BookButton /></div>
    </section>

    <section className="shell principles">
      <div className="section-head" data-reveal><div><Kicker>HOW WE WORK</Kicker><Headline lines={['Four rules', 'we don’t bend.']} /></div></div>
      <div className="principle-grid">
        {principles.map(([name, copy], i) => <div className="principle" key={name} data-reveal style={{ '--delay': `${i * 70}ms` }} data-spot><span>0{i + 1}</span><strong>{name}</strong><p>{copy}</p></div>)}
      </div>
    </section>

    <ToolStrip tools={stack} />
    <Footer lines={['Let’s find', 'your first system.']} />
  </>;
}
