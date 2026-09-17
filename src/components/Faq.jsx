import React, { useState } from 'react';
import { Headline, Kicker } from './ui.jsx';

export default function Faq({ items, lines = ['Questions,', 'answered.'] }) {
  const [open, setOpen] = useState(0);
  return <section className="faq shell" id="faq">
    <Kicker>FAQ</Kicker>
    <div className="faq-grid">
      <Headline lines={lines} />
      <div>
        {items.map(([q, a], i) => <div className={'faq-item' + (open === i ? ' active' : '')} key={q} data-reveal style={{ '--delay': `${i * 40}ms` }}>
          <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>{q}<span aria-hidden="true"><i /><i /></span></button>
          <div className="faq-answer"><p>{a}</p></div>
        </div>)}
      </div>
    </div>
  </section>;
}
