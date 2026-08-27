# Notion CRM — construction pivot specification

Use this as the migration checklist for the existing Notion CRM. Keep historical records; rename/restructure active views and templates so the CRM supports the construction sales-to-production journey.

## CRM flow

```text
Lead → Qualified → Site visit scheduled → Estimate in progress → Estimate sent
→ Negotiation / decision → Won or lost → Production handoff → Active project
```

## 1. Leads database

Rename the primary pipeline database **Leads & Projects**. One record represents a prospective job until it is won; relate it to the Project database once sold.

| Property | Type | Notes |
| --- | --- | --- |
| Project / opportunity | Title | `Client — project type — city` |
| Pipeline stage | Status | New, Contacted, Qualified, Site visit scheduled, Estimate in progress, Estimate sent, Decision, Won, Lost, Nurture |
| Company / homeowner | Relation | Link to Contacts |
| Primary contact | Relation | Link to Contacts |
| Project type | Select | Remodel, new build, repair, service, trade-specific; tailor to ICP |
| Service area | Select | City/region or in/out of service area |
| Lead source | Select | Referral, web, call, partner, paid, repeat client, other |
| Estimated value | Number/currency | Expected contract value, not a quoted price unless confirmed |
| Budget fit | Select | Unknown, fit, below minimum, needs review |
| Target start | Date | Customer's desired start window |
| Owner | Person | Sales/estimator accountable for next step |
| Next action | Text | Specific action, never just “follow up” |
| Next action date | Date | Drives the action view |
| Last meaningful contact | Date | Used for stale-lead views |
| Site visit | Date | Scheduled date/time |
| Estimate | Relation | Link to Estimates |
| Project | Relation | Link when won |
| Lost reason | Select | Price, timing, scope, no response, service area, competitor, not a fit, other |
| Notes | Text | Keep commercial context concise |

### Required views

- **Sales today:** `Owner = me`, active stages, next action due today or overdue; sort by due date then estimated value.
- **New leads to qualify:** Stage = New/Contacted, sort by created time.
- **Site visits:** Stage = Site visit scheduled, calendar by Site visit.
- **Estimate pipeline:** Stages = Estimate in progress/Estimate sent/Decision; group by stage, sort by next action.
- **Stalled leads:** Active stage and last meaningful contact older than the company’s response rule.
- **Won handoffs:** Stage = Won and linked Project is empty or handoff incomplete.

## 2. Contacts database

Retain one Contact database and relate it to all leads/projects. Add: `Contact type` (homeowner, commercial client, architect, GC, trade partner, referral partner), `Preferred channel`, `Communication consent`, `Service area`, `Related leads`, `Related projects`, and `Last contact date`.

## 3. Estimates database

Create or rename an Estimates database. One record represents one commercial proposal/estimate revision, not a message thread.

| Property | Type |
| --- | --- |
| Estimate name | Title |
| Opportunity | Relation to Leads & Projects |
| Estimate status | Status: Draft, Internal review, Sent, Follow-up due, Negotiating, Accepted, Declined, Expired |
| Amount | Number/currency |
| Sent date | Date |
| Expiry date | Date |
| Follow-up due | Date |
| Estimate owner | Person |
| Scope version | Text/select |
| Client decision | Select: pending, accepted, declined, deferred |
| Win/loss reason | Select |
| Proposal link | URL/files |

Views: **Send this week**, **Follow-up due**, **Decision needed**, **Accepted—create handoff**, **Expired/lost review**.

## 4. Projects database

Use projects only after work is sold (or explicitly mark a record as preconstruction).

| Property | Type | Notes |
| --- | --- | --- |
| Project | Title | Customer + job name |
| Opportunity | Relation | Source lead |
| Status | Status | Handoff, Preconstruction, Scheduled, Active, On hold, Complete, Closed |
| Contract value | Number/currency | Signed amount |
| Sales owner | Person | Original owner |
| Project manager | Person | Production owner |
| Contract signed | Date | Trigger for handoff |
| Kickoff date | Date | Target kickoff |
| Scope/contract | Files/URL | Authoritative scope link |
| Open client decisions | Relation | Decisions database or tasks |
| Handoff complete | Checkbox | Only true after checklist review |
| Handoff exception | Text | What blocks production |

Views: **Needs handoff**, **Open decisions**, **Kickoffs this month**, **Active projects**, **Completed**.

## 5. Actions database

This is the shared operational queue used by all three Bookore offers.

| Property | Type |
| --- | --- |
| Action | Title |
| Offer | Select: Lead-to-Site-Visit, Estimate Follow-Up, Project Handoff |
| Status | Status: Needs review, Approved, Sent, Scheduled, Won, Lost, Deferred, Complete, Not eligible, Error |
| Lead / Project | Relation to Leads & Projects |
| Estimate | Relation to Estimates |
| Trigger | Text |
| Priority reason | Text |
| Recommended action | Text |
| Approved draft | Text |
| Owner | Person |
| Due date | Date |
| Outcome | Select |
| Outcome date | Date |
| Attributed value | Number/currency |

Views: **My actions today**, **Needs approval**, **Estimate follow-up due**, **Handoff blockers**, **Completed outcomes**.

## Templates

**New lead:** capture project type, source, location, desired timing, budget/fit, owner, and next action before leaving the record.

**Site visit:** confirm date, attendees, project goals, existing conditions, decision makers, and next action after the visit.

**Estimate sent:** save proposal link, amount, sent/expiry date, follow-up due date, and owner.

**Sold-project handoff:** attach signed scope, record allowances/selections, assign PM, confirm kickoff target, list open decisions, then check `Handoff complete` only when reviewed together.

## Migration sequence

1. Duplicate current views before editing records.
2. Rename medspa-specific stages/properties; preserve historical values in an `Archived legacy value` text property if needed.
3. Add new statuses and relations before moving active records.
4. Move active opportunities to the appropriate construction stage; assign owner and next action/date to each.
5. Build the five required action views and the four templates above.
6. Pilot the Lead-to-Site-Visit queue with fictional records before connecting automation.
