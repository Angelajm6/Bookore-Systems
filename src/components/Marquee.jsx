import React from 'react';

export function SignalBand({ items }) {
  const row = [...items, ...items];
  return <div className="signal-band" aria-hidden="true"><div className="signal-track">{row.map((t, i) => <React.Fragment key={i}><span>{t}</span><i>✦</i></React.Fragment>)}</div></div>;
}

export function ToolStrip({ tools }) {
  const row = [...tools, ...tools];
  return <section className="tools" aria-label="Tools we build with">
    <div className="shell tools-head"><span>BUILT WITH</span><p>We pick the tool per system, not per preference.</p></div>
    <div className="tools-track"><div className="tools-row">{row.map((t, i) => <span key={i}>{t}</span>)}</div></div>
    <div className="tools-track reverse"><div className="tools-row">{row.map((t, i) => <span key={i}>{t}</span>)}</div></div>
  </section>;
}
