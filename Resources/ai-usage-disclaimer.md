# AI Collaboration & Ethics Policy

*Last updated: August 2026*

I use AI tools — primarily Claude Code, along with Gemini and GitHub Copilot — as part of my day-to-day development work. Given that I build fintech infrastructure that handles real money, real bank data, and real KYC/AML compliance flows, I think transparency about *how* I use AI matters as much as the code itself. This page explains where AI fits into my process, what stays off-limits, and how I keep quality and accountability in my own hands.

## 1. Where AI fits into my workflow

I treat AI as an accelerant, not a replacement for engineering judgment. In practice, that means:

- **Scaffolding & boilerplate** — generating first drafts of CRUD endpoints, config files, test scaffolding, and repetitive integration code.
- **Code review support** — using AI-assisted static analysis (alongside Snyk, CodeQL, OWASP ZAP) to catch vulnerabilities and anti-patterns before they reach production.
- **Debugging & research** — working through undocumented or legacy third-party APIs faster by using AI to reason through logs, error traces, and documentation gaps.
- **Documentation** — drafting API docs, README files, and internal runbooks that I then edit for accuracy.

I do **not** use AI to make final architecture decisions on high-stakes systems (payment flows, compliance pipelines, auth/security logic) without personally reviewing and testing the outcome. AI proposes; I dispose.

## 2. Boundaries around sensitive and confidential information

This is the part I hold hardest, given the nature of my client work:

- **No client secrets, credentials, or PII in prompts.** API keys, database dumps, customer financial records, KYC documents, and access tokens never get pasted into an AI tool — full stop.
- **No proprietary client code in public/consumer AI tools** unless the client has explicitly approved it and the tool's data-handling terms meet their compliance requirements (many of my clients operate under regulatory obligations that don't allow this at all).
- **Anonymized/synthetic data only for prompting.** If I need AI's help reasoning through a data-shape problem, I use dummy schemas and fabricated sample records, never production data.
- **NDAs govern, not defaults.** Where a client contract restricts AI tool usage, that contract wins — regardless of what I'd otherwise choose to do.

## 3. How I maintain quality control

AI-assisted output goes through the same bar as anything I ship myself:

- **I read every line before it's committed.** No unreviewed AI output goes into a pull request.
- **Automated + manual testing.** Unit tests, integration tests, and security scans run on AI-assisted code exactly as they would on hand-written code — arguably more, since I'm calibrating trust in newer tools.
- **I verify, not assume, correctness.** Especially for anything touching money movement, currency conversion, or compliance logic, I trace the logic manually rather than trusting that it "looks right."
- **I own the bugs.** If AI-assisted code ships with a defect, that's a mistake in *my* process, not an excuse. I don't attribute failures to the tool.

## 4. Ethical issues specific to my field

Working at the intersection of fintech and AI raises a few risks I stay deliberately alert to:

- **Compliance accuracy** — KYC/AML and payment logic has real regulatory and financial consequences if AI-generated code is subtly wrong (off-by-one errors in currency handling, missed edge cases in fraud checks, etc.).
- **Security surface area** — AI-generated code can introduce plausible-looking but insecure patterns (weak validation, injection risks, improper secret handling). I treat AI output as untrusted input until reviewed.
- **Data minimization** — even anonymized prompts can leak structural information about a client's systems. I keep prompts as minimal and abstracted as possible.
- **Overreliance** — the speed AI offers can tempt shortcuts on edge-case testing. I try to notice when I'm trusting the model's confidence more than the evidence.

## 5. How I decide what's okay

When a new situation doesn't fit neatly into the rules above, I ask myself, roughly in this order:

1. **Would this violate a client NDA, contract, or regulatory obligation?** If yes, it's off the table — no further discussion needed.
2. **Could this expose real user or financial data, even indirectly?** If there's meaningful risk, I don't do it, or I anonymize first.
3. **Am I still the one accountable for correctness?** If AI assistance would mean I can no longer honestly vouch for the code, I slow down and review more, or skip the assist.
4. **Would my client be surprised to learn I did this?** If the honest answer is "yes, and they wouldn't be happy," that's a signal to ask first or not do it.

## 6. Who's affected, and how I think about them

- **Clients** — trust me with production financial infrastructure. They deserve to know their systems weren't built on unreviewed or leaked context.
- **End users** — the people whose money and personal data flow through systems I build. Their security and privacy come before my development speed.
- **Collaborators/employers** — anyone I work alongside should be able to trust that "I built this" means I understand and stand behind it, AI-assisted or not.
- **Future maintainers** — code should be as legible and well-documented whether AI helped write it or not; no one downstream should hit a wall of code nobody can explain.

## 7. Disclosure — what I tell people, and when

**General baseline:** I disclose that AI tools (Claude Code, Gemini, Copilot) are part of my standard workflow, openly and by default — it's listed on my homepage under my toolset. I don't treat AI assistance as something to hide or something that needs a disclaimer on every commit, the same way I wouldn't caveat every use of an IDE autocomplete or a linter.

**Where I go further:**

- **Client work** — new clients are told upfront, before any contract is signed, which AI tools are part of my process and what my data-handling boundaries are (Section 2). If a client wants zero AI involvement in their codebase, that's a term we set explicitly.
- **Security-critical or compliance-critical deliverables** — I note in the handoff/documentation which components had AI involvement in drafting, so reviewers know where to apply extra scrutiny.
- **Written content representing my own views** (this page included) — drafted with AI assistance, edited and approved by me; the judgments and commitments here are mine.

**Attribution template I use for project documentation:**

> *AI Assistance Disclosure: Portions of this codebase were drafted with the assistance of Claude Code / GitHub Copilot / Gemini and reviewed, tested, and approved by [Shardul Patel] before deployment. Architecture decisions, security review, and final sign-off were performed by a human.*

## 8. When detailed disclosure becomes necessary

A brief, standing disclosure (like this page) is enough for routine work. I move to explicit, case-by-case disclosure when:

- The client operates under regulatory regimes that require documenting tooling used in system development (common in fintech/compliance work).
- The deliverable is security- or compliance-critical, where knowing *what* was AI-assisted changes how it should be reviewed.
- Someone directly asks — I answer specifically and honestly, not with a generic policy link.
- I'm publishing something (an article, a case study) where the reader would reasonably want to know how much of the reasoning or writing is mine versus AI-drafted.

---

*Questions about how I work with AI on a specific project? Reach out at [shardulpatel010@gmail.com](mailto:shardulpatel010@gmail.com).*
