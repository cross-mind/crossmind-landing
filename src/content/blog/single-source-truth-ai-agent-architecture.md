---
title: "Single Source of Truth: An Information Architecture Principle for Multi-Agent Systems"
description: "How we solved cross-agent information consistency in CrossMind through SSOT hierarchy and conflict resolution protocols."
pubDate: 2026-03-09
author: "Nova Yu"
tags: ["AI Agents", "System Design", "Architecture", "Information Theory"]
draft: false
---

When an AI agent claims a task is blocked, but production logs show it completed two days ago — that's not a bug. It's an architecture problem.

This happened at CrossMind. Our launch coordinator agent reported "demo video not uploaded" while our deployment agent had already pushed it to production 48 hours earlier. Both were reading from workspace files. Both were technically correct — they just weren't reading from the same source of truth.

## The Real Problem: Information Scatter

In multi-agent systems, the same fact often exists in multiple locations:

- Agent A's execution log: "Demo video deployed Mar 8, 01:20 UTC"
- Agent B's task checklist: "Demo video: NOT uploaded (blocker)"
- Production URL: `https://crossmind.io/product-tour.mp4` (200 OK, 14.9MB)
- Local repository: `repos/public/product-tour.mp4` (exists, modified Mar 8)
- Planning artifact: `story1-demo-script.md` (script only, not deployed file)

When sources conflict and no single authority is designated, agents guess. Sometimes they guess wrong.

## Why This Happens Systematically

**Task isolation by design.** Each agent operates in its own execution context with local state files (`plan.md`, `next-action.md`, `dashboard.yaml`). When Agent A updates a fact, it records the change in its local context — but doesn't propagate to Agent B's context.

**No pull verification protocol.** When Agent B needs a fact, it reads from its local cache rather than checking the authoritative source. If that cache is stale, the decision is wrong.

**Absence of SSOT designation.** Without explicit rules for "which file is truth for which fact type," agents default to reading whatever file is most convenient — often the one in their own task directory.

This isn't about agents being careless. It's about the workspace lacking an information architecture that answers: *When multiple sources disagree, which one is authoritative?*

## Single Source of Truth (SSOT) Principle

Every fact type must have **one designated authoritative source**. All other locations are derived views — useful for context, but not for decision-making.

### SSOT Mapping Table

We document fact-to-source mappings explicitly:

| Fact Type | SSOT Location | Update Owner | Verification Method |
|-----------|---------------|--------------|---------------------|
| Launch materials deployment | `task-628eefe3/plan.md` (changelog) | Launch agent | Check changelog section |
| Production URL status | Live production URLs | Deployment agent | `curl -I` checks |
| Waitlist signups | `artifacts/waitlist-leads.yaml` | Growth agents | Read YAML rows |
| Content performance | `artifacts/performance-tracker.yaml` | Content agent | Read YAML metrics |
| Git commit patterns | `git log` (immutable) | Git system | `git log --since` |
| File deployment status | `repos/` filesystem | Deployment agent | `ls -lh` timestamp checks |

**Rule:** Before using a fact in decision-making, check this table. Go to the SSOT location — not your local cache.

### SSOT Hierarchy (Conflict Resolution Protocol)

When multiple sources claim different values for the same fact, trust in this priority order:

1. **Production reality** (`curl` checks, live URLs, database queries)
   Ground truth. Cannot be wrong. If `curl -I https://crossmind.io/product-tour.mp4` returns 200, the video *is* live, regardless of what any file says.

2. **Immutable system records** (`git log`, deployment logs, file timestamps)
   System-generated, not manually edited. Example: `ls -lh product-tour.mp4` shows "Mar 8 01:28" → file has existed since Mar 8.

3. **Designated SSOT files** (specific agent's `plan.md` for that domain)
   Manually maintained, but explicitly designated as authoritative. Example: `task-628eefe3/plan.md` for launch materials.

4. **Derived views** (other agent files, dashboards, artifacts)
   May lag, may be stale. Use for context only. Example: `task-3c4540d9/next-action.md` is a derived view, not a source.

**Conflict resolution rules:**

```
IF production_reality ≠ SSOT_file:
    → Trust production_reality
    → Flag SSOT_file as stale, needs update

IF SSOT_file ≠ derived_view:
    → Trust SSOT_file
    → Update derived_view with correction
    → Note discrepancy: "Previously X, corrected to Y as of [SSOT timestamp]"

IF derived_view_A ≠ derived_view_B:
    → Ignore both, check SSOT directly
```

### SSOT Read Protocol (Required Before Claims)

Before making any claim about status, blockers, or metrics, agents must:

1. **Identify fact type** — Is this about launch materials? Waitlist? Content performance?
2. **Check SSOT table** — Where is the authoritative source for this fact type?
3. **Read SSOT directly** — Not from local cache or derived views.
4. **Verify production reality** — If the fact is production-checkable (`curl`, `ls`, `git`), verify ground truth.
5. **Resolve conflicts** — If SSOT ≠ cache, trust SSOT and update cache. If production ≠ SSOT, trust production and flag SSOT as stale.
6. **Make decision** — Now use the verified fact for analysis or execution.

## Example: Launch Readiness Analysis (SSOT-Compliant)

**Before (broken workflow):**

```python
# Agent reads its own local cache
def analyze_launch_readiness():
    status = read_file("task-3c4540d9/next-action.md")
    if "demo NOT uploaded" in status:
        report_blocker("Demo video missing")
    # ERROR: Cache was stale (written Mar 7, video deployed Mar 8)
```

**After (SSOT-enforced workflow):**

```python
def analyze_launch_readiness():
    # Step 1: Check SSOT table → Launch materials = task-628eefe3/plan.md
    materials_log = read_file("task-628eefe3/plan.md")

    # Step 2: Verify production reality (highest priority)
    production_check = curl("https://crossmind.io/product-tour.mp4")

    # Step 3: Resolve conflicts
    if production_check == 200:
        # Demo is live, regardless of what local cache says
        if "demo NOT uploaded" in local_cache:
            update_local_cache("Demo live since Mar 8 (verified via production curl)")
            note_correction("Previously reported as blocker, corrected to deployed")
        report_status("Demo video live at production URL")
    else:
        # Actually blocked, report with evidence
        report_blocker("Demo video 404 on production", evidence=production_check)
```

**Result:** Agents always work from fresh, verified facts — not stale cached assumptions.

## Why This Is System Design (Not a Patch)

This isn't about fixing "the demo video bug." It's about establishing **information architecture** for multi-agent workspaces:

- **Conflict resolution:** When sources disagree, which to trust?
- **Verification discipline:** Always check source, never trust cache.
- **Update propagation:** How do changes flow through the system?

The same principle applies to all fact types:

- User growth metrics (waitlist signups, churn rate, conversion funnel)
- Content performance (posts published, views, engagement rates)
- Development velocity (commits per day, PR merge time, deployment frequency)
- Partnership status (conversations initiated, deals closed, blocked items)
- Financial metrics (revenue, burn rate, runway remaining)

**Core insight:** Every fact needs ONE authoritative source. All other locations are derived/cached views that may lag. Before using a fact, check its SSOT. When SSOT conflicts with cache, trust SSOT.

## Implementation Impact

With SSOT protocol enforced across our agent fleet:

| Scenario | Before (Broken) | After (SSOT-Compliant) |
|----------|----------------|------------------------|
| Launch materials status changed | Read stale cache → report wrong status | Check SSOT table → read `task-628eefe3` → correct status |
| Waitlist signup added | Read cached "1 signup" → stale | Check SSOT → read `waitlist-leads.yaml` → fresh count |
| File deployed to production | Assume file exists = deployed → wrong | Check hierarchy: `curl` production URL first → ground truth |
| Cross-agent fact needed | Read random file → guess → error | Check SSOT table → read authoritative source → correct |

## Lessons for Multi-Agent System Builders

If you're building autonomous agents that share workspace state:

1. **Designate SSOT explicitly.** Don't assume agents will "figure out" which file is authoritative. Document it in system prompts and enforce it in execution protocols.

2. **Prioritize production reality.** When in doubt, check the live system (curl, database query, filesystem timestamp) — not workspace files. Production is ground truth.

3. **Build conflict resolution into read operations.** Every time an agent reads a fact for decision-making, it should verify freshness and resolve conflicts automatically.

4. **Prefer pull verification over push updates.** Pushing updates to all dependent agents is complex and fragile. Instead, teach agents to always check SSOT before using a fact — simpler, more robust.

5. **Make staleness visible.** When an agent corrects a stale cached fact, log it explicitly: "Previously reported X, corrected to Y as of [SSOT timestamp]." This creates a feedback loop that improves information hygiene over time.

## Closing Thought

The hardest bugs in AI agent systems aren't hallucinations or prompt failures. They're the ones where the agent is *technically correct* based on the information it read — but that information was stale.

Single Source of Truth isn't just a best practice. It's a forcing function that makes information consistency a system property, not an agent responsibility.

---

*This principle was developed while building CrossMind, an AI cofounder for solo founders. All agents in our system now follow SSOT protocol for cross-task information sharing. See our [technical documentation](https://github.com/cross-mind) for implementation details.*

*Posted Mar 9, 2026 | [CrossMind Blog](https://crossmind.io/blog)*
