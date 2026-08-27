# Bookore Systems — construction implementation blueprints

These systems support construction sales and operations. They use operational data and company-approved business rules; they do not price projects, approve scope, or make contract commitments.

| Layer | Role | Start with |
| --- | --- | --- |
| Source systems | Lead, estimate, contract, project events | Existing CRM, estimating tool, or controlled export |
| Automation | Routing, reminders, retries, logging | n8n |
| Review queue | Approval and accountability | Notion CRM or client CRM |
| Messaging | Approved outreach | Existing email/SMS tool |
| Reporting | Pipeline and handoff outcomes | CRM view or spreadsheet |

**Operating rule:** AI can classify and draft from approved templates; the team approves client-facing action and all commercial decisions.

## 01 — Lead-to-Site-Visit

**Trigger:** New inquiry from a web form, referral, call, inbox, or lead source; or an inquiry remains unanswered after the company response target.

```text
New lead → normalize project type, location, budget/timing signals
→ apply fit and duplicate rules → create sales action → human review
→ approved outreach → site visit scheduled or disposition recorded
```

**Queue fields:** lead, source, project type, service area, timing, fit reason, last action, suggested action/draft, owner, due date, site-visit status, outcome.

**Scorecard:** response time, qualified leads, site visits, conversion by source, follow-up completion, loss reasons.

## 02 — Estimate Follow-Up

**Trigger:** Estimate sent with no next step after the company-defined follow-up window.

```text
Estimate event → validate active status and amount → evaluate age and next-step date
→ create prioritized sales action → human review → approved outreach
→ proposal is won, lost, deferred, or remains active
```

**Queue fields:** estimate number, client/project, value, sent date, expiry date, last contact, next action, priority reason, owner, draft, outcome, win/loss reason.

**Scorecard:** active estimate value, aging, first-follow-up time, follow-up completion, win rate, won value, win/loss reasons.

## 03 — Project Handoff

**Trigger:** Contract signed, deposit received, or estimate marked won.

```text
Sold-job event → create handoff record → link contract, scope, allowance, and documents
→ assign production owner and due dates → identify incomplete items
→ sales/production review → project is production-ready or escalated
```

**Queue fields:** project/client, contract value, sold date, signed scope, documents, allowances/selections, open decisions, project manager, kickoff date, checklist status, exception reason.

**Scorecard:** sold-to-ready time, complete handoffs, unresolved decisions, kickoff delays, rework/surprise reasons.

## Launch checklist

- [ ] Confirm data owner and permitted access for every source.
- [ ] Define fit, qualification, estimate, and handoff rules with sales and operations.
- [ ] Prepare approved message templates and escalation language.
- [ ] Test with fictional lead, estimate, and sold-job records.
- [ ] Require approval for every pilot message.
- [ ] Set an accountable owner and exception path for every action.
- [ ] Review results after two weeks and tune the rules.
