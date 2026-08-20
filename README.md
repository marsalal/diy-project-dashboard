# DIY Project Dashboard

A public, read-only dashboard for tracking active home projects, recent completions, estimated progress, quantified materials, tools, labor, and Costa Rica cost ranges.

## Live dashboard

https://marsalal.github.io/diy-project-dashboard/

## Current focus

- **Current project:** Guanacaste slab tables
- **Recommended next project:** Concrete pad and garden transition
- **Active projects:** 4
- **Recently completed:** Smart-switch replacement

## How updates work

The weekly automation reviews the approved DIY planner context. When project content changes, it updates `data/projects.json`, records the change here and in `CHANGELOG.md`, validates the repository, and pushes a new deployment. No deployment commit is created when the dashboard data has not meaningfully changed.

## Latest changes

### 2026-08-20 — Guanacaste table flattening plan

- Made the guanacaste slab tables the current project after the latest implementation discussion.
- Replaced the unavailable industrial-planer path with a reusable router-sled plan using the available M18 router.
- Added the surfacing bit, sled materials, shallow-pass method, revised labor, progress, tools, and next steps.
- Kept the pour-ready concrete pad as the recommended next project.

### 2026-08-15 — Concrete pad prepared for pour

- Recorded the final 1.90 × 1.52 m pad dimensions and approximately 0.32 m³ pour target.
- Advanced the pad to 65% after excavation, formwork, staking, compacted base, and mesh placement.
- Added the remaining post-rain checks, mesh adjustments, pour, finish, and curing tasks.

### 2026-08-03 — Project studio redesign

- Reworked the dashboard into a responsive studio layout with Overview, Projects, Materials, and History views.
- Applied a cool neutral Material-inspired palette with graphite, blue-gray, soft gray, and clay accents.
- Added a priority-ordered project flow and one combined cross-project materials list.
- Preserved every detailed planning field in expandable project sections.

### 2026-08-03 — Priority and history navigation

- Added a validated priority model using ROI, complexity, tool readiness, and explicit ranking reasons.
- Added a mobile-first top-three priority view: the current project followed by the next two ranked projects.
- Added a keyboard-accessible project-history drawer with completion dates and concise summaries.
- Added priority tags to every expandable active-project card.

### 2026-08-03 — Initial public dashboard

- Created the dependency-free dashboard and accessible expandable project cards.
- Added four active projects with progress, tasks, labor, costs, tools, and quantified materials.
- Marked the smart-switch replacement as completed.
- Identified the concrete pad as the current project and the guanacaste tables as the recommended next project.
- Added automated validation and GitHub Pages deployment workflows.
- Added repository hygiene and security documentation.
- Published the validated dashboard through free GitHub Pages at the URL above.

## Repository boundaries

Only dashboard-related source, data, validation, documentation, and deployment files belong here. Conversation exports, email addresses, credentials, local filesystem paths, unrelated project files, generated dependencies, logs, and caches must not be committed.

## Cost and safety notice

Prices are planning estimates in Costa Rican colones and should be reconfirmed before purchase. Structural, electrical, and other safety-sensitive decisions should be verified for the actual site conditions and applicable local requirements.
