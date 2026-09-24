# DIY Project Dashboard

A public, read-only dashboard for tracking active home projects, recent completions, estimated progress, quantified materials, tools, labor, and Costa Rica cost ranges.

## Live dashboard

https://marsalal.github.io/diy-project-dashboard/

## Current focus

- **Current project:** Cement wall hole repair
- **Recommended next project:** Concrete pad drainage correction
- **Active projects:** 7
- **Recently completed (last 14 days):** Blackout blind chain repair

## How updates work

The weekly automation reviews the approved DIY planner context. When project content changes, it updates `data/projects.json`, records the change here and in `CHANGELOG.md`, validates the repository, and pushes a new deployment. No deployment commit is created when the dashboard data has not meaningfully changed.

## Latest changes

### 2026-09-24 — Wall holes added and pad drainage diagnosed

- Added the cement wall hole repair as current, with hole count, depth, substrate condition, and any retained anchors explicitly pending measurement.
- Recorded the concrete pad's almost-one-month cured condition and localized upper-right ponding, raised progress to 87%, and made its drainage correction recommended next.
- Added the 1–2% target drainage slope and thickness-based repair decision: 3–10 mm, 10–30 mm, or greater than 30 mm.
- Warned against applying a thin conventional cement-and-sand skim to cured concrete and deferred material quantity until the depression is mapped.
- Synchronized the Current focus section with the September 18 history update: the blackout repair is completed and the Adirondack project is archived as won't do.

### 2026-09-17 — Jacuzzi sealant selected

- Made the jacuzzi perimeter joint repair current after the latest in-store material-selection activity and moved the blackout chain repair to recommended next.
- Identified one cartridge of white Ceys Stop Moho 100% sanitary silicone at approximately ₡4.100 as sufficient for the two photographed sides; purchase remains unconfirmed.
- Lowered the jacuzzi planning range to ₡4.100–₡15.000 and clarified that backer rod is conditional on exposing cavities approximately 8–10 mm or deeper.
- Kept progress at 10% because removal, cleaning, sealing, curing, and functional verification have not yet been confirmed.

### 2026-09-10 — Four household repairs added

- Added the blackout blind chain repair as current after diagnosing a derailed bead chain with the clutch apparently intact.
- Added the jacuzzi perimeter joint repair as recommended next, using manual removal tools and a loaded-tub sanitary-silicone method that does not depend on the delayed multi-tool.
- Added the rusted metal door-frame base repair with corrosion removal, substrate inspection, anticorrosive coating, water-source correction, and flexible joint sealing.
- Added the recurring drywall movement-joint repair with a fastening check that determines flexible-sealant versus paper-tape repair.
- Re-ranked all eight active projects by recency, moisture or corrosion risk, readiness, dependencies, cost, and impact; the two Milwaukee-dependent projects remain paused.
- Added current Costa Rica planning-price references for bathroom silicone, rust treatment, anticorrosive coating, and paintable sealant.

### 2026-09-03 — Milwaukee-dependent projects paused

- Paused the Guanacaste table and office WPC wall projects indefinitely because their required Milwaukee router and multi-tool are in a shipment retained in customs.
- Marked those projects' tool readiness false and deferred additional material purchases until the tools arrive or an explicit alternative is selected.
- Kept the concrete pad and garden transition current for its cured-surface assessment.
- Recommended the Adirondack garden corner next because it is the highest-readiness project not blocked by the delayed shipment.
- Updated the 14-day completion summary to none; the August 1 smart-switch replacement remains in project history.

### 2026-08-27 — Concrete pad poured and curing

- Recorded the completed hand pour of the approximately 0.289 m³ concrete pad and raised progress to 85%.
- Marked the fresh surface finish as irregular, with the final repair decision deferred until the slab has cured and can be measured.
- Added curing, form removal, hardness, flatness, drainage, edge, and crack checks as the immediate work.
- Recorded approximately 1½ cement bags and surplus gravel remaining, and removed unverified pre-pour quantity assumptions.
- Restored the concrete pad as current and kept the router-sled table project as recommended next.

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
