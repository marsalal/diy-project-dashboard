---
name: weekly-diy-dashboard
description: Builds and updates the website after each execution of the scheduled task to show the latest status of each DIY project that has been discussed and listed
---
# Context
The `DIY` project on the ChatGPT mobile app is your source of truth. 

# Set project's priority

1. Projects must have a priority where it's considered the following:
 * ROI (changing switches has a bigger ROI than a concrete pad because the fix is immediate and fixes the problem)

# Set project's tags
Available tags:

* Complexity (hard, medium, easy). Based on the project's tasks, tools, and hours estimated to take
* Rental, if I need to rent equipment like a concrete mixer or a floor polisher

# Update project's status

1. Validate the `DYI` project on the ChatGPT mobile app to inspect if new projects have been added or discussed.
	1.1 If there's a new project, add it to the `data/projects.json`. Set it a new priority and add all details (materials, project instructions, etc)
	1.2 If nothing new has been added to the pipeline, skip it
2. Keep the top 3 projects visible. Current one and the 2 next in the pipeline. Use tags to define priority based on: complexity, ROI, tools available (I might be waiting the delivery of a new router for instance)
3. When building the UI or updating the UI, keep a UI/UX first approach in mind ALWAYS. 
4. Use English as the language to display text in the weekly-diy-dashboard
5. Use CRC as your currency. 
6. Validate any links you want to add to provide more context (YouTube tutorials, Amazon links) and make sure they are not broken.
7. Calculate progress and material quantities for each active project
8. Update dashboard data.
9. Push and verify deployment.
10. Send the formatted email.
