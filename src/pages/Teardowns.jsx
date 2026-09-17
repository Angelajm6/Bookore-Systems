import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Arrow, BookButton, Headline, Kicker } from '../components/ui.jsx';
import Footer from '../components/Footer.jsx';
import teardowns from '../data/teardowns.js';

export function TeardownIndex() {
  return <>
    <section className="page-hero shell">
      <Kicker spark>TEARDOWNS</Kicker>
      <h1><span className="line"><span>How we would automate</span></span><span className="line"><span><em>a business like yours.</em></span></span></h1>
      <p className="hero-copy">Public breakdowns of real business shapes, anonymised. Each one is the audit output in miniature: what happens today, where AI saves time, where it multiplies, and what we would build first.</p>
    </section>
    <section className="shell teardown-list">
      {teardowns.map((t, i) => <Link className="teardown-row" to={'/teardowns/' + t.slug} key={t.slug} data-reveal style={{ '--delay': `${i * 70}ms` }} data-spot>
        <div className="teardown-row-meta"><span>{t.industry.toUpperCase()}</span><span>{t.band}</span></div>
        <div><strong>{t.title}</strong><p>{t.summary}</p></div>
        <em>Read <Arrow /></em>
      </Link>)}
    </section>
    <Footer lines={['Want yours', 'done for real?']} cta="Book the audit call" />
  </>;
}

export function TeardownPage() {
  const { slug } = useParams();
  const t = teardowns.find((x) => x.slug === slug);
  if (!t) return <Navigate to="/teardowns" replace />;
  const index = teardowns.indexOf(t);
  const next = teardowns[(index + 1) % teardowns.length];
  return <>
    <article className="teardown">
      <section className="page-hero shell">
        <div className="teardown-row-meta"><Link to="/teardowns">← Teardowns</Link><span>{t.industry.toUpperCase()}</span><span>{t.band}</span></div>
        <h1 className="teardown-title"><span className="line"><span>{t.title}</span></span></h1>
        <p className="hero-copy">{t.summary}</p>
      </section>

      <section className="shell teardown-body">
        <div className="td-block" data-reveal><Kicker>01 / THE BUSINESS</Kicker><ul className="td-list">{t.business.map((b) => <li key={b}>{b}</li>)}</ul></div>
        <div className="td-block" data-reveal><Kicker>02 / WHAT HAPPENS TODAY</Kicker><ol className="td-steps">{t.today.map((b, i) => <li key={b}><span>0{i + 1}</span>{b}</li>)}</ol></div>
        <div className="td-block" data-reveal><Kicker>03 / WHERE AI SAVES TIME</Kicker>
          <table className="td-table"><thead><tr><th>Step</th><th>How</th><th>Hours / week</th></tr></thead><tbody>{t.saveTime.map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td><b>{c}</b></td></tr>)}</tbody></table>
        </div>
        <div className="td-block" data-reveal><Kicker>04 / WHERE AI MULTIPLIES</Kicker>
          <table className="td-table"><thead><tr><th>What already works</th><th>How to multiply it</th><th>Guardrail</th></tr></thead><tbody>{t.tenX.map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td><i className="tag">{c}</i></td></tr>)}</tbody></table>
        </div>
        <div className="td-block td-first" data-reveal><Kicker>05 / WHAT I WOULD BUILD FIRST</Kicker><p className="large-copy">{t.first}</p></div>
        <div className="td-block" data-reveal><Kicker>06 / THE SPEC</Kicker><dl className="td-spec">{t.spec.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div>
        <div className="td-block" data-reveal><Kicker>07 / COST AND TIMELINE</Kicker><p className="large-copy">{t.cost}</p></div>
        <div className="td-cta" data-reveal>
          <div><Headline as="h3" lines={['Want this map', 'for your business?']} /><p>The audit does exactly this, with your real numbers.</p></div>
          <BookButton label="Book the audit call" />
        </div>
        <Link className="td-next" to={'/teardowns/' + next.slug}><span>NEXT TEARDOWN</span><strong>{next.title}</strong><em>Read <Arrow /></em></Link>
      </section>
    </article>
    <Footer lines={['Want yours', 'done for real?']} cta="Book the audit call" />
  </>;
}
