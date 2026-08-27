# Bookore construction demo environment

For the sales talk track, implementation sequence, and first-version scope, see [OFFER-DELIVERY-PLAYBOOK.md](./OFFER-DELIVERY-PLAYBOOK.md).

## What is functional now

The website includes three interactive, fictional demos:

| Demo | Interaction | Outcome |
| --- | --- | --- |
| Lead-to-Site-Visit | Review project lead → approve outreach → simulate site visit | Site visit booked |
| Estimate Follow-Up | Review stale estimate → approve follow-up → simulate decision | Estimate won |
| Project Handoff | Review sold job → approve handoff action → simulate handoff | Production-ready project |

The demo state is stored only in the visitor’s browser and can be reset at any time. It contains no customer records, messaging credentials, pricing logic, or contractual commitments.

## Demo talk track

“Bookore does not replace the team’s CRM, estimate, or judgment. It turns a high-value operational moment into one visible action with an owner and a due date. The team reviews the context and approves every client-facing message or project commitment. Then the outcome is captured so the company can see what moved.”

## Required before a live connection

1. Confirm the CRM, estimating, and project-management sources and data owner.
2. Agree on one service line, one owner, one message channel, and one measurable outcome.
3. Test the action queue with fictional records.
4. Approve templates, qualification rules, sales escalation, and handoff checklist.
5. Require human approval during the pilot and review results after two weeks.
