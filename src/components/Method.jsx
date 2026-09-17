import React from 'react';
import { Headline, Kicker } from './ui.jsx';
import { method } from '../data/home.js';

export default function Method({ lines = ['One method.', 'Any workflow.'] }) {
  return <section className="method" id="method">
    <div className="shell">
      <div className="method-head" data-reveal><div><Kicker>OUR PROCESS</Kicker><Headline lines={lines} /></div><p>Same five phases whether we are wiring one follow-up or rebuilding the operation. Start where the leak is, not where the tech is exciting.</p></div>
      <div className="method-track" data-reveal>
        <div className="method-line"><i /></div>
        {method.map(([name, copy], i) => <div className="method-step" key={name} style={{ '--i': i }}><span>0{i + 1}</span><div className="method-dot" /><strong>{name}</strong><p>{copy}</p></div>)}
      </div>
      <p className="method-guard" data-reveal><b>✦</b> Nothing is sent, quoted, or committed without a person approving it. That is a design rule, not a setting.</p>
    </div>
  </section>;
}
