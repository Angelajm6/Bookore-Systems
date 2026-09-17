# Bookore Systems — site revamp plan (hub + vertical pages)

Status: draft for review, not implemented. Written 2026-09-17.

Goal: reposition Bookore from "construction systems" to an automation and AI operations partner for owner-led service businesses, without losing the construction and medspa work already built. Broad on what we build, narrow on who we build it for and how.

Related files: [OFFER-DELIVERY-PLAYBOOK.md](./OFFER-DELIVERY-PLAYBOOK.md) (method), [SYSTEMS-IMPLEMENTATION.md](./SYSTEMS-IMPLEMENTATION.md) (stack), [DEMO-ENVIRONMENT.md](./DEMO-ENVIRONMENT.md) (demos).

---

## 1. Positioning

| Element | Decision |
| --- | --- |
| Who | Owner-led service businesses at roughly $1M to $20M revenue, 5 to 50 staff, running on a CRM plus manual follow-through. |
| Promise | Do more of what already works, with less manual work, without handing control to a black box. |
| What we build | Anything on the spectrum from a follow-up automation to a CRM install to an AI workflow, delivered through one method. |
| Stance | Human in the loop. People approve every customer-facing message and every commitment. |
| Front door | A paid AI Operations Audit. The free 30-minute call sells the audit; the audit sells the build. |
| Ladder | Audit → Build Sprint → Automation Retainer. |

One-line version for bios, decks, and Upwork-style replies:

> Bookore builds the automation and AI systems behind owner-led service businesses. We find where AI removes manual work and where it multiplies what already works, then build it around the tools you already use.

---

## 2. Site map

```text
/                 Hub. Buyer + outcome. Capability ladder. Method. Demos. Audit CTA.
/audit            Paid product page. Deliverables, sample output, price, book.
/systems          Capability catalogue, one card per system type (optional in v1).
/construction     Vertical page. Current site condensed to one page + its demos.
/medspa           Vertical page. Medspa offers + demos from commit 90bc0a9.
/teardowns        Index of public "how I would automate this business" breakdowns.
/teardowns/<slug> One teardown.
/about            Short. Who Angela is, how the team works, tool stack.
```

Nav: Audit · Systems · Industries (dropdown: Construction, Medspa) · Teardowns · About · [Book an audit]

Rules:
- One CTA on every page: **Book a 30-minute audit call**. Vertical pages keep their existing "Revenue Leak Audit" wording as the call name, since it already converts in that language.
- Every vertical page is one file of data (offers, demos, FAQs) plugged into a shared template. Adding a vertical later is a data file, not a rebuild.
- Home never names an industry above the fold. Industries appear as proof lower down.

---

## 3. Homepage copy

Existing style conventions kept: uppercase kicker, two-line headline with the second line in `<em>`, one short supporting paragraph.

### Hero

Kicker: `AUTOMATION & AI SYSTEMS FOR OWNER-LED BUSINESSES`

H1: Do more of what works.<br />**Without doing it by hand.**

Copy: Bookore builds the automation and AI systems behind growing service businesses. We find the work that should never be manual and the wins that deserve to be multiplied, then build both around the tools your team already uses.

Buttons: [Book a 30-minute audit call] [See a system run →]

Hero visual: keep the existing workflow card, but make it industry-neutral. Trigger "New inquiry", steps "Capture → Qualify → Route → Follow up", result "Next step booked".

### Signal band

`LESS MANUAL WORK ✦ MORE OF WHAT WORKS ✦ PEOPLE STAY IN CONTROL ✦`

### Problem

Kicker: `THE REAL BOTTLENECK`

H2: Most growing businesses don't have a lead problem.<br />**They have a follow-through problem.**

Copy: Inquiries wait. Quotes go quiet. Sold work gets re-explained. None of it is anyone's fault. It is what happens when a business outgrows the manual steps that used to be fine.

### Two ways we apply AI

Kicker: `WHERE AI ACTUALLY PAYS`

H2: Two questions.<br />**Two very different answers.**

Two columns:

**Where should AI save time?**
Manual, repetitive, rule-based work that a person should never do twice.
- Lead capture, enrichment, and routing
- Follow-up reminders and drafts
- Data entry between tools
- Reporting and weekly summaries

**Where should AI 10x activity?**
Things that already work, that you would do far more of if a person didn't have to do each one.
- Personalised outreach at volume
- Quote and proposal preparation
- Reactivating past customers
- Content and offers per segment

Line under both: The audit answers both questions for your business, in writing, before anything gets built.

### Capability ladder

Kicker: `WHAT WE BUILD`

H2: From a single workflow<br />**to the whole operation.**

Four rungs, shown left to right as increasing depth:

| Rung | Name | One-liner | Example |
| --- | --- | --- | --- |
| 01 | Follow-up & lead response | The first system most businesses need. | Inquiry answered, qualified, and booked in minutes. |
| 02 | CRM & pipeline setup | One place where every lead, quote, and job lives. | HubSpot or Notion CRM with stages, owners, and reporting. |
| 03 | AI workflows | Agents and models doing the reading, drafting, and sorting. | Quote follow-up drafted from the estimate, approved by a person. |
| 04 | Custom internal tools | Built with Claude Code when no off-the-shelf tool fits. | A review queue that sits on top of your existing CRM. |

Closing line: Same method at every rung. Start where the leak is, not where the tech is exciting.

### Method

Kicker: `OUR PROCESS`

H2: One method.<br />**Any workflow.**

Reuse the five phases from the delivery playbook:

| Phase | You receive |
| --- | --- |
| Audit | An opportunity map: where to save time, where to multiply, in priority order. |
| Design | A one-page workflow spec your team approves before anything is built. |
| Build | A working system tested on fictional records first. |
| Pilot | A daily action view and a weekly scorecard. |
| Improve | A review of rules and results, then the next system or a clean handoff. |

Guardrail line: Nothing is sent, quoted, or committed without a person approving it. That is a design rule, not a setting.

### Proof: live demos

Kicker: `FUNCTIONAL SYSTEM DEMOS`

H2: Don't take our word for it.<br />**Run one.**

Tabs: Construction · Medspa. Each tab shows one existing interactive demo (Estimate Follow-Up for construction, Consult Conversion for medspa) with a link to the full vertical page. The demo component already exists; only the tab data changes.

### Tool stack strip

`BUILT WITH` Claude Code · n8n · Make · Zapier · HubSpot · Notion · Airtable · Twilio

Buyers search and filter on these names. Keep it as plain text logos or wordmarks.

### Audit product block

Kicker: `YOUR FIRST STEP`

H2: Know where AI pays<br />**before you spend on it.**

Copy: The AI Operations Audit is a two-week review of how your business actually runs. You get a written map of where automation removes manual work, where AI multiplies what already works, and the order to build in. Whether you build with us or not.

Bullets:
- 30-minute call, then access to your tools and two team interviews
- Opportunity map with effort, impact, and a recommended first build
- Written spec for the first system, ready to hand to any builder

Button: [Book the audit call]

### Teardowns teaser

Kicker: `TEARDOWNS`

H2: How we would automate<br />**a business like yours.**

Three latest teardown cards, then "See all teardowns".

### FAQ

- **Who is Bookore for?** Owner-led service businesses with a team of 5 to 50 where slow follow-through costs real revenue. We have built for contractors, medspas, and other appointment and quote-led businesses.
- **Do we need to switch CRM?** No. We build around what you use. If you have no CRM, we set one up as part of the build.
- **What tools do you use?** Claude Code for custom logic and agents, n8n, Make, or Zapier for orchestration, and your existing CRM and messaging tools. We pick per system, not per preference.
- **Will AI send messages on its own?** Not unless you decide it should after a pilot. By default every customer-facing message is approved by a person.
- **What does the audit cost?** [Price]. It is credited against the first build sprint.
- **Can you just build one automation?** Yes. Many clients start with a single follow-up workflow. The audit is optional for a scoped single build.

### Footer

H2: Less manual work.<br />**More of what works.**

Button: [Book a 30-minute audit call]

---

## 4. /audit page copy

Kicker: `AI OPERATIONS AUDIT`

H1: Find out where AI pays<br />**in your business.**

Copy: A two-week, written review of your operations. We look at how leads, quotes, jobs, and customers move through your tools and your people, then map exactly where automation saves time and where AI can multiply what already works.

**What you get**

| Deliverable | Detail |
| --- | --- |
| Opportunity map | Every candidate workflow scored on effort, impact, and risk. Split into "save time" and "10x". |
| Priority build order | The first three systems, in sequence, with what each needs. |
| First-system spec | One-page workflow specification, ready to build. |
| Stack recommendation | Which tools to keep, add, or drop, and why. |
| Readout call | 60 minutes with the owner and whoever runs operations. |

**How it runs**

1. 30-minute call to confirm fit and scope.
2. Access to your CRM, inbox tooling, and two 30-minute team interviews.
3. Written map delivered by day 10.
4. Readout and build decision by day 14.

**Price:** [$X]. Credited in full against a build sprint started within 60 days.

**Who it is for:** businesses at roughly $1M+ revenue with at least one person whose week is mostly manual follow-up. If you are earlier than that, book the call anyway and we will point you at the single workflow to build first.

Button: [Book the audit call]

---

## 5. Vertical pages

### /construction (from the current site)

Keep, condensed to one page:
- Hero: current H1 "Turn more project leads into signed work." and copy, unchanged.
- The three offers (Lead-to-Site-Visit, Estimate Follow-Up, Project Handoff) as cards, using the existing `systems` data.
- All three interactive demos, using the existing `liveDemos` data.
- Construction FAQ, existing copy.
- CTA: "Book a Revenue Leak Audit".

Drop from the vertical page (moves to home): process section, tool strip, generic "what we build".

### /medspa (from commit 90bc0a9)

Same template. Data to restore from `git show 90bc0a9:src/main.jsx`:
- Hero: "Turn more inquiries into booked treatments."
- Offers: Consult Conversion System, Capacity Recovery System, Client Return System.
- Their three demos and FAQ.

### Template for any future vertical

One data file per vertical exporting: `hero`, `offers[]`, `demos[]`, `faqs[]`, `ctaLabel`. The page component is shared.

---

## 6. Teardown format

Purpose: substitute for case studies until real ones exist, and show the audit output in public. Target one per week. Anonymise or use a fictional but realistic business.

```text
Title: How I would automate a $3M design-build firm's estimate follow-up
1. The business in five lines (revenue band, team, tools, the leak)
2. What happens today (the manual path, step by step)
3. Save-time opportunities (table: step, tool, hours saved per week)
4. 10x opportunities (table: what works, how to multiply it, guardrail)
5. What I would build first, and why
6. The spec (trigger, steps, owner, outcome, what stays human)
7. What it would cost and how long
```

Each teardown ends with the audit CTA. Cross-post the summary to LinkedIn and reuse as the reply to job posts like the one that prompted this plan.

---

## 7. Implementation sequence (when approved)

1. Add a router (react-router-dom) and split `src/main.jsx` into `pages/Home`, `pages/Audit`, `pages/Vertical`, `pages/Teardowns`, plus `data/construction.js` and `data/medspa.js`.
2. Extract the demo and offer-card components so both verticals and the home tabs share them.
3. Build Home with the copy above. Reuse existing CSS classes; new sections are the two-column AI block and the capability ladder.
4. Build `/audit` and `/construction`, restore `/medspa` from git history.
5. Teardowns as markdown files rendered at build time (start with three).
6. Update `index.html` title and meta for the new positioning. Add per-page meta.
7. Vercel: confirm SPA rewrites so deep links work.

Estimated effort: two focused sessions for steps 1 to 4, one for 5 to 7.

---

## 8. Open decisions for Angela

| Decision | Options | Recommendation |
| --- | --- | --- |
| Audit price | $1,500 / $2,500 / $3,500 | $2,500, credited against the sprint. High enough to filter, low enough to say yes on a call. |
| Audit name | AI Operations Audit / Automation Audit / Revenue Leak Audit | "AI Operations Audit" on home and /audit. Keep "Revenue Leak Audit" as the call name on vertical pages. |
| Revenue band in copy | Show numbers or not | Show "$1M+" on /audit only. Keep home qualitative. |
| Retainer on the site | Public or sales-only | Sales-only for now. Mention "ongoing automation support" in the method's Improve phase. |
| Medspa page | Restore or drop | Restore. It costs one data file and doubles the proof. |
