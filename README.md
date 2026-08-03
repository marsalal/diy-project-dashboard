# DIY Project Dashboard

A public, read-only dashboard for tracking active home projects, recent completions, estimated progress, quantified materials, tools, labor, and Costa Rica cost ranges.

## Live dashboard

https://marsalal.github.io/diy-project-dashboard/

## Current focus

- **Current project:** Concrete pad and garden transition
- **Recommended next project:** Guanacaste slab tables
- **Active projects:** 4
- **Recently completed:** Smart-switch replacement

## How updates work

The weekly automation reviews the approved DIY planner context. When project content changes, it updates `data/projects.json`, records the change here and in `CHANGELOG.md`, validates the repository, and pushes a new deployment. No deployment commit is created when the dashboard data has not meaningfully changed.

## Latest changes

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
