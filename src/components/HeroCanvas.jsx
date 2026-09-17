import React, { useEffect, useRef, useState } from 'react';
import { Spark } from './ui.jsx';

const scenarios = [
  { tag: 'CONSTRUCTION', source: 'Website form', trigger: 'New inquiry · Kitchen remodel', action: 'Qualified. Reply drafted with a site-visit link.', outcome: 'Site visit booked', when: 'Thu 10:00' },
  { tag: 'ANY QUOTE-LED BUSINESS', source: 'CRM', trigger: 'Quote sent 8 days ago · $28,400', action: 'Stale quote flagged. Follow-up drafted from the proposal.', outcome: 'Quote decided', when: 'Won' },
  { tag: 'MEDSPA', source: 'Instagram DM · 6:42 PM', trigger: 'Inquiry · Lip filler consult', action: 'Intent classified. Reply drafted with booking link.', outcome: 'Consult booked', when: 'Thu 16:00' },
  { tag: 'RETENTION', source: 'Booking system', trigger: 'Past client · 12 weeks since visit', action: 'Return window matched. Personal note drafted.', outcome: 'Client rebooked', when: 'Next week' }
];

const phases = [['fire', 900], ['think', 1500], ['approve', 1100], ['done', 1700], ['rest', 500]];

export default function HeroCanvas() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('fire');
  const [typed, setTyped] = useState('');
  const [count, setCount] = useState(14);
  const ref = useRef(null);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduce) { setPhase('done'); setTyped(scenarios[0].action); return; }
    let i = 0; let timer;
    const run = () => {
      const [name, ms] = phases[i];
      setPhase(name);
      if (name === 'done') setCount((c) => c + 1);
      if (name === 'rest') { setIndex((x) => (x + 1) % scenarios.length); }
      i = (i + 1) % phases.length;
      timer = setTimeout(run, ms);
    };
    run();
    return () => clearTimeout(timer);
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;
    if (phase !== 'think') { if (phase === 'fire' || phase === 'rest') setTyped(''); return; }
    const text = scenarios[index].action; let n = 0;
    const t = setInterval(() => { n += 1; setTyped(text.slice(0, n)); if (n >= text.length) clearInterval(t); }, 22);
    return () => clearInterval(t);
  }, [phase, index, reduce]);

  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const b = el.getBoundingClientRect();
    el.style.setProperty('--px', (((e.clientX - b.left) / b.width) - .5).toFixed(3));
    el.style.setProperty('--py', (((e.clientY - b.top) / b.height) - .5).toFixed(3));
  };
  const onLeave = () => { ref.current?.style.setProperty('--px', 0); ref.current?.style.setProperty('--py', 0); };
  const s = scenarios[index];
  const stage = ['fire', 'think', 'approve', 'done', 'rest'].indexOf(phase);

  return <div className={'canvas phase-' + phase} ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} aria-hidden="true">
    <div className="canvas-grid" />
    <div className="canvas-head"><span>BOOKORE / LIVE BOARD</span><i>● {s.tag}</i></div>

    <div className="node node-trigger" key={'t' + index}>
      <span>TRIGGER · {s.source.toUpperCase()}</span>
      <strong>{s.trigger}</strong>
      <b>JUST NOW</b>
    </div>

    <svg className="wire wire-in" viewBox="0 0 160 120" preserveAspectRatio="none">
      <path d="M0 20 C 80 20, 80 60, 160 60" className="wire-path" />
      <path d="M0 20 C 80 20, 80 60, 160 60" className="wire-glow" />
    </svg>

    <div className="node node-core">
      <div className="core-ring" /><div className="core-ring ring-two" />
      <div className="core"><Spark /></div>
      <span>BOOKORE</span>
    </div>

    <svg className="wire wire-out" viewBox="0 0 160 120" preserveAspectRatio="none">
      <path d="M0 60 C 80 60, 80 20, 160 20" className="wire-path" />
      <path d="M0 60 C 80 60, 80 20, 160 20" className="wire-glow" />
    </svg>

    <div className="node node-action">
      <span>RECOMMENDED ACTION</span>
      <strong className="typed">{typed}{phase === 'think' && <i className="caret" />}</strong>
      <div className="approve"><b>✓</b>APPROVED BY A PERSON</div>
    </div>

    <div className="node node-outcome" key={'o' + index}>
      <span>OUTCOME</span>
      <strong>{s.outcome}</strong>
      <b>{s.when}</b>
    </div>

    <div className="canvas-foot">
      <div className="progress">{['Trigger', 'Draft', 'Approve', 'Done'].map((l, i) => <span key={l} className={i <= Math.min(stage, 3) ? 'on' : ''}>{l}</span>)}</div>
      <div className="counter"><b key={count}>{count}</b> actions completed today</div>
    </div>
  </div>;
}
