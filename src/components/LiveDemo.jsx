import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Arrow, Headline, Kicker } from './ui.jsx';

const storageKey = 'bookore-demo-status-v2';
function readStatus() { try { return JSON.parse(window.localStorage.getItem(storageKey)) || {}; } catch { return {}; } }

/* The interactive human-in-the-loop demo. Works for any vertical's demo data. */
export default function LiveDemo({ demos, prefix, showOffer = true, ctaLabel = 'Discuss this offer', ctaTo = '/audit', headingKicker = 'FUNCTIONAL SYSTEM DEMOS', tabs = true }) {
  const [active, setActive] = useState(demos[0].id);
  const [status, setStatus] = useState(readStatus);
  useEffect(() => { setActive(demos[0].id); }, [demos]);
  useEffect(() => { try { window.localStorage.setItem(storageKey, JSON.stringify(status)); } catch {} }, [status]);
  const key = (id) => prefix + ':' + id;
  const step = status[key(active)] || 'review';
  const set = (id, value) => setStatus((s) => ({ ...s, [key(id)]: value }));
  const resetAll = () => setStatus((s) => Object.fromEntries(Object.entries(s).filter(([k]) => !k.startsWith(prefix + ':'))));
  const demo = demos.find((d) => d.id === active) || demos[0];

  return <section className="live-demo" aria-labelledby="live-demo-heading">
    <div className="shell">
      <div className="live-head" data-reveal><div><Kicker>{headingKicker}</Kicker><Headline lines={demo.heading} className="live-heading" /></div><p>{demo.intro}</p></div>
      {tabs && <div className="live-tabs" role="tablist" aria-label="Live system demos">
        {demos.map((item, i) => <button key={item.id} role="tab" aria-selected={active === item.id} className={active === item.id ? 'active' : ''} onClick={() => setActive(item.id)}><span>0{i + 1}</span>{item.label}</button>)}
        <button className="demo-reset" type="button" onClick={resetAll}>Reset demo data</button>
      </div>}
      {showOffer && <div className="offer-strip" data-reveal>
        <div><span>THE OFFER</span><strong>{demo.offer}</strong></div>
        <p>{demo.offerPromise}</p>
        <ul>{demo.offerIncludes.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="offer-cta"><span>FIRST STEP</span><Link className="button button-primary" to={ctaTo}>{ctaLabel} <Arrow /></Link></div>
      </div>}
      <div className="live-grid" key={demo.id}>
        <div className="lead-profile" data-reveal>
          <div className="profile-head"><span>{demo.profile.tag}</span><i>● {demo.profile.signal}</i></div>
          <div className="profile-person"><div className="profile-avatar">{demo.profile.initials}</div><div><strong>{demo.profile.name}</strong><span>{demo.profile.source}</span></div></div>
          {demo.profile.details.map(([label, value]) => <div className="profile-detail" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          <div className="profile-detail"><span>STATUS</span><strong className={step === 'booked' ? 'status-booked' : ''}>{step === 'booked' ? 'Outcome recorded' : 'Needs team action'}</strong></div>
        </div>
        <div className="workflow" data-reveal style={{ '--delay': '90ms' }}>
          <div className="workflow-top"><span>BOOKORE / {demo.label.toUpperCase()}</span><b>DEMO DATA</b></div>
          {demo.events.map(([label, value], i) => <div className={'workflow-event' + (step !== 'review' ? ' complete' : '')} key={label}><div className="workflow-icon">0{i + 1}</div><div><span>{label}</span><strong>{value}</strong></div><i>✓</i></div>)}
          {step === 'review' && <div className="workflow-action" key="review"><span>RECOMMENDED NEXT STEP</span><strong>{demo.recommendation}</strong><p>{demo.supporting}</p><button onClick={() => set(demo.id, 'sent')}>{demo.button} <Arrow /></button></div>}
          {step === 'sent' && <div className="workflow-action sent" key="sent"><span>{demo.sentLabel}</span><strong>{demo.sentCopy}</strong><p>{demo.sentSupporting}</p><button onClick={() => set(demo.id, 'booked')}>{demo.sentButton} <Arrow /></button></div>}
          {step === 'booked' && <div className="workflow-action booked" key="booked"><span>OUTCOME CAPTURED</span><strong>{demo.outcome}</strong><p>{demo.outcomeSupporting}</p><button onClick={() => set(demo.id, 'review')}>Run it again <Arrow /></button></div>}
        </div>
        <div className="metrics" data-reveal style={{ '--delay': '160ms' }}>
          <span>{demo.viewLabel || 'TEAM VIEW'}</span>
          <div><b>{step === 'review' ? '1' : '0'}</b><strong>{demo.metricLabel}{step === 'review' ? '' : ' waiting'}</strong></div>
          <div><b className={step === 'booked' ? 'pop' : ''}>{step === 'booked' ? '1' : '—'}</b><strong>{demo.bookedLabel}</strong></div>
          <div className="demo-state"><span>DEMO STATUS</span><strong>{step === 'review' ? 'Ready for approval' : step === 'sent' ? 'Outreach approved' : 'Outcome recorded'}</strong></div>
          <p>Fictional data, saved in this browser only.</p>
        </div>
      </div>
    </div>
  </section>;
}
