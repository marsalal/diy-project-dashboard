---
name: weekly-diy-dashboard
description: Builds and updates the website after each execution of the scheduled task to show the latest status of each DIY project that has been discussed and listed
---
# Context
The `g-p-696f8ee5a9a88191bc64d39076609f07` project on the ChatGPT mobile app is your source of truth. 

# Set project's priority

If `data/projects.json` doesn't have fields to set up priority, add them to each one of the projects at this moment. So we can set a priority based on the criteria below.

1. Projects must have a priority where it's considered the following:
 * ROI (changing switches has a bigger ROI than a concrete pad because the fix is immediate and fixes the problem)

# Safeguards
* Enter the repository.
* Run `git status --porcelain` and stop if it is unexpectedly dirty.
* Run `git pull --ff-only`.
* Read `AGENTS.md`.
* Invoke `weekly-diy-dashboard`.
* Invoke `website-designer` only for an explicitly approved UI change.
* No-op when nothing meaningful changed
* Validation before committing
* Changelog and README updates
* Deployment verification
* Public-data restrictions
* When GitHub or deployment is unavailable, don't force it and send an email to the user informing of the failure

# Update project's status

1. Validate the `DYI` project on the ChatGPT mobile app to inspect if new projects have been added or discussed.
	1.1 If there's a new project, add it to the `data/projects.json`. Set it a new priority and add all details (materials, project instructions, etc)
	1.2 If nothing new has been added to the pipeline, skip it
2. Keep the top 3 projects visible. All remaining active projects shown below
	2.1 Clarify “Top 3 projects” as:
			* current project
			* next two highest-priority projects
3. Use tags to define priority based on: complexity, ROI, tools available (I might be waiting for the delivery of a new router, for instance)
4. When building the UI or updating the UI, keep a UI/UX first approach in mind ALWAYS. 
5. Use English as the language to display text in the weekly-diy-dashboard
6. Use CRC as your currency.
7. Validate any links you want to add to provide more context (YouTube tutorials, Amazon links) and make sure they are not broken.
8. Calculate progress and material quantities for each active project
9. Update dashboard data.
10. Push and verify deployment.
11. Send the formatted email.

# Project History
After a project has been completed, make sure to keep a history of it, so it can be added later in the left panel with 1 sentence to describe it. 
