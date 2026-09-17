export const stack = ['Claude Code', 'n8n', 'Make', 'Zapier', 'HubSpot', 'Notion', 'Airtable', 'Twilio', 'Slack', 'Google Workspace', 'OpenAI', 'Supabase'];

export const aiModes = {
  save: {
    id: 'save',
    label: 'Save time',
    question: 'Where should AI save time?',
    answer: 'Manual, repetitive, rule-based work that a person should never have to do twice.',
    stat: ['12–20', 'hours back per week, per role'],
    items: [
      ['Lead capture, enrichment, and routing', 'Every inquiry lands in the right place with the right context, before anyone opens it.'],
      ['Follow-up reminders and drafts', 'The next touch is written and waiting for approval, instead of remembered at 11 PM.'],
      ['Data entry between tools', 'What happens in one system shows up in the others. Nobody copies fields.'],
      ['Reporting and weekly summaries', 'Monday’s numbers are ready on Sunday night, with a note about what changed.']
    ]
  },
  scale: {
    id: 'scale',
    label: '10x what works',
    question: 'Where should AI multiply activity?',
    answer: 'Things that already work, that you would do far more of if a person did not have to do each one.',
    stat: ['10–100×', 'more of the activity that already converts'],
    items: [
      ['Personalised outreach at volume', 'Every past client, referral partner, or stale quote gets a message that reads like you wrote it.'],
      ['Quote and proposal preparation', 'The first draft is ready when the call ends. Your expert edits instead of starting from blank.'],
      ['Reactivating past customers', 'The right people hear from you at the right moment, with a reason to come back.'],
      ['Content and offers per segment', 'One idea becomes twelve versions, one for each audience, ready for review.']
    ]
  }
};

export const ladder = [
  { number: '01', name: 'Follow-up & lead response', line: 'The first system most businesses need.', example: 'An inquiry is answered, qualified, and booked in minutes, not days.', tools: 'n8n · your CRM · email or SMS', depth: 25 },
  { number: '02', name: 'CRM & pipeline setup', line: 'One place where every lead, quote, and job lives.', example: 'HubSpot or Notion with stages, owners, and reporting the team actually uses.', tools: 'HubSpot · Notion · Airtable', depth: 50 },
  { number: '03', name: 'AI workflows', line: 'Models doing the reading, drafting, and sorting.', example: 'A quote follow-up drafted from the estimate, approved by a person in one click.', tools: 'Claude · n8n · Make', depth: 75 },
  { number: '04', name: 'Custom internal tools', line: 'Built with Claude Code when nothing off the shelf fits.', example: 'A review queue that sits on top of your existing CRM and shows one next action per record.', tools: 'Claude Code · Supabase · React', depth: 100 }
];

export const method = [
  ['Audit', 'An opportunity map: where to save time, where to multiply, in priority order.'],
  ['Design', 'A one-page workflow spec your team approves before anything is built.'],
  ['Build', 'A working system, tested on fictional records first.'],
  ['Pilot', 'A daily action view and a weekly scorecard.'],
  ['Improve', 'A review of rules and results, then the next system or a clean handoff.']
];

export const homeFaqs = [
  ['Who is Bookore for?', 'Owner-led service businesses with a team of 5 to 50 where slow follow-through costs real revenue. We have built for contractors, medspas, and other appointment and quote-led businesses.'],
  ['Do we need to switch CRM?', 'No. We build around what you use. If you have no CRM, we set one up as part of the build.'],
  ['What tools do you use?', 'Claude Code for custom logic and agents, n8n, Make, or Zapier for orchestration, and your existing CRM and messaging tools. We pick per system, not per preference.'],
  ['Will AI send messages on its own?', 'Not unless you decide it should after a pilot. By default every customer-facing message is approved by a person.'],
  ['What does the audit cost?', '$2,500, credited in full against the first build sprint started within 60 days.'],
  ['Can you just build one automation?', 'Yes. Many clients start with a single follow-up workflow. The audit is optional for a scoped single build.']
];

export const auditPage = {
  deliverables: [
    ['Opportunity map', 'Every candidate workflow scored on effort, impact, and risk. Split into “save time” and “10x”.'],
    ['Priority build order', 'The first three systems, in sequence, with what each needs.'],
    ['First-system spec', 'One-page workflow specification, ready to build. With us or with anyone.'],
    ['Stack recommendation', 'Which tools to keep, add, or drop, and why.'],
    ['Readout call', '60 minutes with the owner and whoever runs operations.']
  ],
  timeline: [
    ['Day 0', '30-minute call', 'We confirm fit, scope, and which parts of the business to look at.'],
    ['Days 1–3', 'Access and interviews', 'Read-only access to your CRM and inbox tooling, plus two 30-minute team interviews.'],
    ['Days 4–10', 'Mapping', 'We trace how leads, quotes, jobs, and customers actually move, and score every opportunity.'],
    ['Day 10', 'Written map delivered', 'Opportunity map, build order, and the first-system spec land in your inbox.'],
    ['Day 14', 'Readout and decision', 'We walk through it together. You decide what to build, and with whom.']
  ],
  price: '$2,500',
  priceNote: 'Credited in full against a build sprint started within 60 days.'
};
