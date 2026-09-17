import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow, BookButton, Headline, Kicker } from '../components/ui.jsx';
import { SignalBand } from '../components/Marquee.jsx';
import OfferTabs from '../components/OfferTabs.jsx';
import LiveDemo from '../components/LiveDemo.jsx';
import Faq from '../components/Faq.jsx';
import Footer from '../components/Footer.jsx';

/* One template, one data file per industry. */
export default function Vertical({ data }) {
  return <>
    <section className="page-hero shell vertical-hero">
      <Kicker spark>{data.kicker}</Kicker>
      <h1><span className="line"><span>{data.headline[0]}</span></span><span className="line"><span><em>{data.headline[1]}</em></span></span></h1>
      <p className="hero-copy">{data.intro}</p>
      <div className="hero-actions"><BookButton label={data.ctaLabel} /><a className="text-link" href="#offers">See the systems <Arrow /></a></div>
      <div className="vertical-cards" aria-hidden="true">
        {data.offers.map((o, i) => <div className="vcard" key={o.id} style={{ '--i': i }}><span>{o.eyebrow}</span><strong>{o.result}</strong><b>0{i + 1}</b></div>)}
      </div>
    </section>

    <SignalBand items={data.offers.map((o) => o.result.toUpperCase())} />

    <section className="problem">
      <div className="shell problem-grid">
        <Kicker>THE REAL PROBLEM</Kicker>
        <div data-reveal><Headline lines={data.problem.headline} /><p className="large-copy">{data.problem.copy}</p></div>
      </div>
    </section>

    <OfferTabs offers={data.offers} />
    <LiveDemo demos={data.demos} prefix={data.slug} ctaLabel="Discuss this offer" ctaTo="/audit" />

    <section className="vertical-note shell" data-reveal>
      <p>Each offer is a focused implementation, not a replacement platform. We begin with an audit, agree on the workflow and safeguards, then build around your current tools and team. <Link to="/audit">How the audit works <Arrow /></Link></p>
    </section>

    <Faq items={data.faqs} />
    <Footer cta={data.ctaLabel} />
  </>;
}
