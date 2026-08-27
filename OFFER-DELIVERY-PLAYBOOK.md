# Bookore Systems — construction offer delivery playbook

Bookore installs practical revenue and handoff systems for construction companies and specialty contractors. We do not sell an autonomous estimator or replace the CRM, estimating, or project-management platform.

```text
Business event → Bookore identifies the right operational action
→ a team member reviews it → approved outreach or handoff happens
→ the outcome is recorded
```

The contractor retains control of every customer message, estimate, scope decision, and project commitment.

## Repeatable delivery model

| Phase | Client receives | Exit condition |
| --- | --- | --- |
| Audit | Revenue Leak Snapshot | One revenue leak and success measure chosen |
| Design | One-page workflow specification | Sales + operations approve rules and ownership |
| Build | Test queue with fictional records | Every path is safely testable |
| Pilot | Daily action view and weekly scorecard | Team can run it without Bookore |
| Improve | Rules and reporting review | Client chooses optimization or handoff |

Begin with one source, one service line, one channel, and one accountable owner. The first version is intentionally narrow.

## Shared CRM action record

Every offer uses an `Actions` database/table.

| Field | Purpose |
| --- | --- |
| Action ID, created date, offer | Traceability |
| Lead, estimate, or project | Link to the source record |
| Trigger and priority reason | Explainable recommendation |
| Recommended action and draft | One clear decision for the owner |
| Owner, due date, status | Accountability |
| Outcome and outcome date | Reporting |
| Estimate or contract value | Pipeline attribution |

Statuses: `needs review`, `approved`, `sent`, `scheduled`, `won`, `lost`, `deferred`, `complete`, `not eligible`, `expired`, `error`.

## Offer 01 — Lead-to-Site-Visit System

**Outcome:** More qualified site visits from existing project inquiries.

**Best fit:** a builder, remodeler, GC, or trade contractor gets leads from its website, referrals, calls, or paid channels, but response speed and qualification depend on someone remembering to follow up.

**Plain-English pitch:** “When a serious project inquiry comes in, your team gets one clear next action instead of having to remember who to chase.”

### First sellable version

| Scope | First version |
| --- | --- |
| Lead source | One web form, inbox, CRM source, or call-log export |
| Service line | One project type |
| Channel | One approved SMS or email channel |
| Owner | One sales role |
| Follow-up | Initial response plus one approved follow-up |

### Workflow

```text
New inquiry → normalize source, project type, location, and timing
→ check service area / fit / duplicate / current status
→ create one sales action → staff reviews and approves draft
→ site visit is scheduled or outcome is recorded
```

Agree on project types in scope, service area, minimum-job rules, response target, qualification questions, exclusions, approved templates, and escalation rules before building.

**Success measures:** time to first meaningful response, qualified-lead rate, site-visit booking rate, reviewed-on-time rate, and loss reasons.

## Offer 02 — Estimate Follow-Up System

**Outcome:** More estimates reach a clear decision before they go stale.

**Best fit:** a company sends material-value proposals, but sales follow-up is inconsistent and estimating cannot reliably see what is active, stalled, won, or lost.

**Plain-English pitch:** “Every active estimate gets an owner, a due date, and the right next touch—before it disappears in an inbox.”

### First sellable version

| Scope | First version |
| --- | --- |
| Estimate source | One CRM, estimating platform, or controlled export |
| Project type | One service line or ticket size band |
| Follow-up cadence | Two client-approved touchpoints |
| Channel | One approved email or SMS channel |
| Owner | One salesperson or estimator |

### Workflow

```text
Estimate sent → check amount, age, status, and next-step date
→ prioritize active estimates by agreed rules → create a sales action
→ owner approves/edits outreach → reply or decision is recorded
→ estimate is marked won, lost, deferred, or still active
```

Agree on estimate validity period, follow-up windows, priority rules, customer messaging, discount/negotiation escalation, and what counts as a final outcome.

**Success measures:** follow-up completion, time from estimate to first touch, win rate, aging pipeline value, win/loss reasons, and won value attributable to the workflow.

## Offer 03 — Project Handoff System

**Outcome:** A sold job moves from sales to production with scope, ownership, documents, and open decisions visible.

**Best fit:** sales-to-production handoffs rely on inboxes, verbal context, or an incomplete folder—creating rework, delays, missed allowances, and customer surprises.

**Plain-English pitch:** “When a job is sold, production gets a ready-to-start handoff instead of having to reconstruct what was promised.”

### First sellable version

| Scope | First version |
| --- | --- |
| Trigger | Contract signed or deposit received |
| Project type | One service line |
| Handoff owner | One sales owner and one production owner |
| Checklist | Scope, documents, allowance/selection decisions, kickoff date |
| Review | Weekly sales-to-production review |

### Workflow

```text
Sold-job trigger → create project handoff record → link signed scope and documents
→ identify missing decisions / owner / due dates → review by sales and production
→ kickoff-ready handoff recorded or exception escalated
```

Agree on definition of “sold,” required contract and estimate documents, allowance/change-order visibility, client selections, permitting dependencies, project owner, kickoff criteria, and escalation path.

**Success measures:** time from sold to production-ready, handoffs complete at kickoff, open decisions past due, handoff-caused rework, and project-start delay reasons.

## Safe implementation principles

- Build around the client’s existing CRM, estimating, email/SMS, and project-management tools.
- AI may classify an inquiry or prepare a draft from approved templates; it must not price work, approve scope, create a contract, or commit a schedule.
- Require human approval for client-facing messages during the pilot.
- Test with fictional data before connecting live customer or project records.
- Give every action an owner, due date, outcome, and visible error path.
