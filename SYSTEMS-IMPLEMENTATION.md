# Bookore Systems — implementation blueprints

These three systems are designed for premium, appointment-led medspas. They use operational data and provider-approved business rules; they do not make clinical recommendations.

## Standard implementation stack

| Layer | Recommended role | Start with |
| --- | --- | --- |
| Practice system | Booking, client record, availability, appointment status | Client's current booking platform or CRM |
| Automation | Events, routing, retries, logs | n8n |
| Review queue | Front-desk approval and accountability | Airtable or the client CRM |
| Messaging | Approved SMS/email delivery | Existing platform, Podium, or Twilio |
| Intelligence | Classification and approved draft creation | OpenAI API with structured outputs |

Every system follows the same rule: **AI can prioritize and draft; the team approves client-facing action.**

## 01 — Consult-to-Booked

**Business outcome:** More qualified consultations booked.

### Trigger

- New inquiry enters from website, Instagram, call/text platform, referral form, or booking request.
- Or: an inquiry remains unbooked after the practice-defined response window.

### Workflow

```text
New inquiry → normalize source and service interest → identify approved priority signals
→ create a front-desk action → draft approved response → human review
→ send through existing channel → booking confirmed or intentionally marked lost
```

### Approval queue fields

- Inquiry ID and source
- Name / preferred channel
- Service interest captured from the inquiry
- Arrival time and last team action
- Booking status
- Priority reason
- Recommended action
- Draft message
- Assigned owner
- Outcome: booked / not now / lost / needs provider review

### Recordable demo path

1. Maya’s Instagram inquiry arrives.
2. The system recognizes a new, unbooked, high-intent consultation request.
3. A staff member reviews one suggested response.
4. The message is approved and sent.
5. The consultation is booked and attribution is recorded.

### Scorecard

- Median time to first meaningful response
- Inquiry-to-consultation booking rate
- Follow-up completion rate
- Booked consultations attributable to the system
- Lost reason distribution

## 02 — Cancellation Recovery

**Business outcome:** More recovered capacity and fewer expensive open slots.

### Trigger

- An appointment is cancelled or rescheduled.
- An opening appears inside the practice’s defined recovery window.

### Workflow

```text
Cancellation event → validate open slot and service constraints → select eligible waitlist / overdue clients
→ rank candidates by practice-approved rules → create a recovery action → human review
→ send approved outreach → slot booked or expiry recorded
```

### Candidate rules

- Client has opted in to communication.
- Requested or eligible service matches the appointment slot.
- Provider, location, and time window are compatible.
- Exclude clients with an unresolved account, active complaint, or a practice-defined exclusion flag.

### Approval queue fields

- Cancelled appointment and open slot
- Service, provider, location, duration
- Best-fit candidate(s)
- Reason each candidate is eligible
- Outreach draft
- Owner and expiry time
- Outcome: recovered / declined / no response / slot released

### Recordable demo path

1. A Friday 3:30 PM injectable appointment cancels.
2. The system matches Nina from the waitlist.
3. The front desk reviews the prepared outreach.
4. Nina accepts and the appointment is recovered.
5. The recovered appointment is attributed to the system.

### Scorecard

- Eligible cancelled-slot value
- Recovery outreach completion rate
- Recovered appointment rate
- Recovered revenue
- Time from cancellation to first recovery action

## 03 — Treatment Retention

**Business outcome:** More returning clients and repeat revenue.

### Trigger

- A client reaches a provider-approved follow-up or treatment cadence window.
- A client has no future booking and meets the practice’s re-engagement criteria.

### Workflow

```text
Daily cadence review → apply provider-approved timing and eligibility rules → exclude future-booked clients
→ create a prioritized rebooking queue → human review → approved outreach
→ booking recorded or a no-contact / defer outcome applied
```

### Approval queue fields

- Client ID
- Last visit date and service category
- Provider-approved cadence window
- Future booking status
- Communication consent
- Priority reason
- Suggested approved outreach
- Owner and next-review date
- Outcome: booked / deferred / declined / do not contact

### Recordable demo path

1. Elena reaches a practice-approved review window.
2. She has strong history but no future booking.
3. The system creates a focused action for the front desk.
4. A staff member approves the outreach.
5. Elena books, and the return is tracked as retained revenue.

### Scorecard

- Eligible clients due for follow-up
- Follow-up completion rate
- Returning-client booking rate
- Retained revenue
- Client communication opt-out rate

## Shared safety and launch checklist

- [ ] Confirm client communication consent and channel-specific rules.
- [ ] Define exactly which fields are operationally necessary.
- [ ] Obtain the appropriate privacy, access, and vendor agreements before handling protected health information.
- [ ] Document provider-approved cadences and exclusions.
- [ ] Test with fictional data before connecting client records.
- [ ] Require human approval for every initial client-facing message.
- [ ] Set a retry policy, owner, and escalation path for every failed workflow.
- [ ] Review results with the client after the first two weeks and refine the rules.
