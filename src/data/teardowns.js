export default [
  {
    slug: 'design-build-estimate-follow-up',
    industry: 'Construction',
    band: '$3M revenue · 14 staff',
    title: 'How I would automate a $3M design-build firm’s estimate follow-up',
    summary: 'Twenty-two open estimates, one estimator, and a follow-up process that lives in his head. The leak is worth roughly one lost project a month.',
    business: ['Residential design-build, one office, three crews.', 'Tools: HubSpot (barely used), Buildertrend, Gmail, a shared spreadsheet.', 'Team: owner sells, one estimator quotes, one PM runs production.', 'The leak: estimates over $15k get one follow-up, then silence. Roughly 40% never get a decision.'],
    today: ['Estimator sends the proposal PDF from Gmail.', 'He sets a mental reminder to “check in next week”.', 'Owner asks about it in the Monday meeting. Nobody has the thread open.', 'By day 12, the client has gone with someone who called back.'],
    saveTime: [['Log every sent estimate to HubSpot automatically', 'Gmail → n8n → HubSpot deal', '1.5'], ['Flag estimates with no reply after 5 days', 'HubSpot scheduled search', '0.5'], ['Draft the follow-up from the proposal context', 'Claude + approved templates', '2'], ['Monday pipeline summary posted to Slack', 'n8n + Slack', '1']],
    tenX: [['Referral asks after a signed contract', 'Trigger at deposit, personalised draft, owner approves', 'Never auto-sent'], ['Past-client seasonal offers', 'Segment by project type and year, one draft per segment', 'Owner picks the segment'], ['Site-visit-to-estimate turnaround', 'Voice notes transcribed into a scope draft', 'Estimator edits before it leaves']],
    first: 'The estimate follow-up queue. It touches the biggest leak, needs no new tools, and gives the owner a Monday view in the first week.',
    spec: [['Trigger', 'Estimate sent, or deal enters “Estimate sent” stage'], ['Steps', 'Log deal → wait 5 days → check reply → draft follow-up → queue for approval → record outcome'], ['Owner', 'Estimator approves drafts; owner sees the queue'], ['Outcome', 'Won, lost with reason, or deferred with date'], ['Stays human', 'Every message to a client, every scope change']],
    cost: 'Audit $2,500 credited against a build sprint of roughly $6,500. Live in three weeks, pilot for four.'
  },
  {
    slug: 'medspa-inquiry-to-consult',
    industry: 'Medspa',
    band: '$1.8M revenue · 9 staff',
    title: 'How I would automate a two-location medspa’s inquiry-to-consult path',
    summary: 'Inquiries arrive in five channels and get answered in one. Instagram DMs after 6 PM wait until morning, and by then a third have booked elsewhere.',
    business: ['Two locations, injectables and skin, eight providers.', 'Tools: Zenoti for booking, Instagram, website form, phone, a shared iPad for DMs.', 'Team: two front-desk staff cover both locations’ inboxes in gaps between clients.', 'The leak: after-hours inquiries, and inquiries that ask a question the front desk cannot answer without a provider.'],
    today: ['A DM lands at 6:42 PM asking about lip filler pricing.', 'The iPad is at the other location. Nobody sees it until 9:15 AM.', 'The reply is a generic “call us to book”.', 'The client has already booked a consult across town.'],
    saveTime: [['Route every channel into one inquiry queue', 'Meta API + form + n8n → Notion or Zenoti', '4'], ['Classify intent and treatment interest', 'Claude classification with an approved treatment list', '1'], ['Draft the first reply with the right booking link', 'Approved templates per treatment', '3'], ['Nightly summary of unanswered inquiries', 'n8n + email', '0.5']],
    tenX: [['Consult reminders with prep info', 'Triggered 48h and 2h before, per treatment', 'Provider-approved content only'], ['Waitlist recovery for cancellations', 'Match open slot to waitlist by treatment and duration', 'Front desk approves the outreach'], ['Post-treatment review requests', 'Triggered at day 7 for satisfied clients', 'Never for clinical follow-up']],
    first: 'The inquiry queue with after-hours drafts. It is the biggest leak, and the front desk feels the relief on day one.',
    spec: [['Trigger', 'New inquiry from any connected channel'], ['Steps', 'Capture → classify → draft reply → queue → front desk approves → booked or nurture'], ['Owner', 'Front desk lead'], ['Outcome', 'Consult booked, question answered, or not a fit'], ['Stays human', 'Every reply, every pricing conversation, anything clinical']],
    cost: 'Audit $2,500 credited against a build sprint of roughly $7,500. Live in three weeks. HIPAA-style handling scoped before build.'
  },
  {
    slug: 'agency-client-onboarding',
    industry: 'Professional services',
    band: '$2.4M revenue · 18 staff',
    title: 'How I would automate a marketing agency’s client onboarding and reporting',
    summary: 'Every new client takes an account manager eleven hours of setup before any work starts. Monthly reporting takes another six per client. Both are pure process.',
    business: ['Paid media and content agency, 22 retained clients.', 'Tools: HubSpot, Notion, Slack, Google Workspace, a reporting tool nobody trusts.', 'Team: three account managers, each owning seven or eight clients.', 'The leak: account managers spend a third of their week on setup and reporting instead of on clients.'],
    today: ['Contract signed. AM creates a Notion workspace by copying last client’s and editing.', 'AM creates Slack channel, Drive folders, kickoff deck, and asks for access to six platforms by email.', 'Month end: AM pulls numbers from four dashboards into a slide template by hand.', 'Client asks a question about the report. AM rebuilds the number to answer.'],
    saveTime: [['Provision workspace, channel, folders, and kickoff on contract signed', 'HubSpot → n8n → Notion, Slack, Drive', '8 per client'], ['Access-request checklist sent and tracked', 'Notion database with reminders', '1 per client'], ['Monthly report first draft from live data', 'Data pulls + Claude narrative draft', '4 per client'], ['Weekly “what changed” note to each client', 'Same data, shorter draft', '1 per client']],
    tenX: [['Upsell prompts from performance data', 'Flag accounts beating targets, draft the expansion note', 'AM decides whether to send'], ['Case-study drafts from strong months', 'Triggered by a results threshold', 'Client approval before publishing'], ['Proposal drafts from the discovery call', 'Transcript → structured proposal draft', 'Partner edits every proposal']],
    first: 'Onboarding provisioning. It is deterministic, saves the most hours, and proves the pattern before touching reporting.',
    spec: [['Trigger', 'HubSpot deal moves to “Closed won”'], ['Steps', 'Create Notion space from template → Slack channel → Drive tree → kickoff doc → access checklist → notify AM'], ['Owner', 'Account manager'], ['Outcome', 'Client ready for kickoff within an hour of signature'], ['Stays human', 'Kickoff call, scope decisions, anything the client reads']],
    cost: 'Audit $2,500 credited against a build sprint of roughly $9,000 covering onboarding and the reporting draft. Ongoing retainer from month two.'
  }
];
