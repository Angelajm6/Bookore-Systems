import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Arrow, Headline, Kicker } from './ui.jsx';

export default function OfferTabs({ offers, lines = ['One revenue leak.', 'One system to fix it.'], ctaLabel = 'Talk through this offer', ctaTo = '/audit' }) {
  const [active, setActive] = useState(offers[0].id);
  const offer = offers.find((o) => o.id === active) || offers[0];
  return <section className="offers" id="offers">
    <div className="shell">
      <div className="offers-head" data-reveal><div><Kicker>THREE FOCUSED OFFERS</Kicker><Headline lines={lines} /></div><p>Choose the moment costing you the most. We build the focused system around the tools and team you already have.</p></div>
      <div className="offer-tabs" role="tablist">{offers.map((o, i) => <button key={o.id} role="tab" aria-selected={active === o.id} className={active === o.id ? 'active' : ''} onClick={() => setActive(o.id)}><span>0{i + 1}</span>{o.title}</button>)}</div>
      <article className="offer-demo" key={offer.id}>
        <div className="offer-copy" data-reveal>
          <Kicker>{offer.eyebrow}</Kicker><h3>{offer.title}</h3><p>{offer.description}</p>
          <p className="offer-meta"><span>BEST FOR</span>{offer.idealFor}</p>
          <p className="offer-meta"><span>YOU LEAVE WITH</span>{offer.deliverable}</p>
          <p className="offer-meta guard"><span>GUARDRAIL</span>{offer.guardrail}</p>
          <Link className="text-link" to={ctaTo}>{ctaLabel} <Arrow /></Link>
        </div>
        <div className="board" data-reveal style={{ '--delay': '100ms' }}>
          <div className="board-head"><span>BOOKORE / WORKFLOW</span><i>● ACTIVE</i></div>
          <div className="board-input"><span>TRIGGER</span><strong>✦ {offer.trigger}</strong><b>JUST NOW</b></div>
          <div className="board-flow">{offer.steps.map((step, i) => <div className="board-step" key={step} style={{ '--i': i }}><span>0{i + 1}</span><strong>{step}</strong><i>✓</i></div>)}</div>
          <div className="board-result"><span>OUTCOME</span><strong>{offer.result}</strong><b>↗</b></div>
        </div>
        <div className="board-side" data-reveal style={{ '--delay': '180ms' }}>
          <div className="board-head"><span>WHAT'S INCLUDED</span><b>•••</b></div>
          {offer.includes.map((item, i) => <div className="side-line" key={item} style={{ '--i': i }}><i />{item}</div>)}
        </div>
      </article>
    </div>
  </section>;
}
