import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow, BookButton, Headline, Kicker } from '../components/ui.jsx';
import Method from '../components/Method.jsx';
import Footer from '../components/Footer.jsx';
import { ladder } from '../data/home.js';
import construction from '../data/construction.js';
import medspa from '../data/medspa.js';

const catalogue = [
  { rung: ladder[0], systems: [['Inquiry response & qualification', 'Every new lead answered, scored, and routed in minutes.'], ['Quote & proposal follow-up', 'Stale quotes flagged, next touch drafted, outcome recorded.'], ['Appointment reminders & recovery', 'Reminders that reduce no-shows and recover cancelled slots.'], ['Past-customer reactivation', 'The right people hear from you at the right moment.']] },
  { rung: ladder[1], systems: [['CRM setup or cleanup', 'HubSpot, Notion, or Airtable with stages and owners the team uses.'], ['Pipeline & action views', 'One next action per record, visible to whoever owns it.'], ['Reporting & scorecards', 'Weekly numbers delivered, with a note about what changed.'], ['Client onboarding provisioning', 'Workspace, channels, folders, and kickoff created on signature.']] },
  { rung: ladder[2], systems: [['AI drafting with approval', 'Replies, follow-ups, and proposals drafted, approved by a person.'], ['Classification & routing', 'Intent, urgency, and fit detected from the message itself.'], ['Transcript to structured output', 'Calls and voice notes turned into scopes, notes, and tasks.'], ['Content per segment', 'One idea, many audiences, every version reviewed.']] },
  { rung: ladder[3], systems: [['Human-review action queue', 'A queue on top of your CRM showing one recommended action per record.'], ['Internal dashboards & tools', 'Small, fast apps for the workflow nothing off the shelf covers.'], ['Agents with guardrails', 'Multi-step agents for research, prep, and drafting, never for sending.'], ['Integrations & data plumbing', 'The connector that makes two systems finally agree.']] }
];

export default function Systems() {
  return <>
    <section className="page-hero shell">
      <Kicker spark>SYSTEMS</Kicker>
      <h1><span className="line"><span>Everything we build,</span></span><span className="line"><span><em>by depth.</em></span></span></h1>
      <p className="hero-copy">Four rungs. Most businesses enter at the first or second and move deeper once the first system pays for itself. Every one runs on the same method and the same rule: people approve.</p>
      <div className="hero-actions"><BookButton /><Link className="text-link" to="/teardowns">See worked examples <Arrow /></Link></div>
    </section>

    <section className="catalogue shell">
      {catalogue.map(({ rung, systems }, i) => <div className="cat-rung" key={rung.number} data-reveal style={{ '--delay': `${i * 60}ms` }}>
        <div className="cat-rung-head"><span>{rung.number}</span><div><strong>{rung.name}</strong><p>{rung.line}</p><em>{rung.tools}</em></div><i style={{ '--depth': rung.depth + '%' }} /></div>
        <div className="cat-grid">{systems.map(([name, copy], j) => <div className="cat-card" key={name} data-spot style={{ '--i': j }}><strong>{name}</strong><p>{copy}</p></div>)}</div>
      </div>)}
    </section>

    <section className="shell industry-links">
      <div className="section-head" data-reveal><div><Kicker>PACKAGED BY INDUSTRY</Kicker><Headline lines={['Three offers,', 'ready to install.']} /></div><p>Where we have built the same system enough times to package it.</p></div>
      <div className="industry-grid">
        {[construction, medspa].map((v, i) => <Link className="industry-card" to={'/' + v.slug} key={v.slug} data-reveal style={{ '--delay': `${i * 80}ms` }} data-spot>
          <span>{v.name.toUpperCase()}</span>
          <strong>{v.headline[0]} <em>{v.headline[1]}</em></strong>
          <ul>{v.offers.map((o) => <li key={o.id}>{o.title}</li>)}</ul>
          <em className="go">See the systems <Arrow /></em>
        </Link>)}
      </div>
    </section>

    <Method />
    <Footer />
  </>;
}
