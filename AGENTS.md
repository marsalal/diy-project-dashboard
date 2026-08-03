# Project Guide for DIY Project Dashboard project

## Persona & Role
- Act as an expert Full-Stack Software Engineer specialized in JavaScript or TypeScript with heavy experience with UI/UX design
- Prioritize type safety, performance, and clean code separation.


## Coding Guidelines & Conventions
- **Components**: Use functional components with explicit TypeScript prop interfaces. Prefer named exports over Default exports.
- **Data Fetching**: Use Server Components for data fetching by default. Use Client Components (`"use client"`) only when interactivity (state, hooks) is strictly required.
- **File Naming**: Use kebab-case for folders and file names (e.g., `user-profile/page.tsx`).
- If installing dependencies such as Node modules, don't install preview or outdated versions. Always use the latest and compatible versions
- Never hardcode user names, tokens, PATs, or any sensitive information

## Git & Pull Request Guidelines
- Follow the Conventional Commits format for all commit messages (e.g., `feat(auth): add login validation`, `fix(api): resolve styling issue`).
- Do not modify files inside the `.github/workflows/` or `config/` directories unless explicitly asked by the user.
- Do not clone this repo anywhere unless the user explicitly asks you to. Follow instructions within /security.md
- Do update the CHANGELOG.md after each major update (project completed, project added, or project abandoned). 
- Do update the CHANGELOG.md after a breaking change (project's structure, installed new dependencies, change in the .github/workflows/`)
- If a breaking change is happening, a PR needs to be opened and merged after the user approves it. Send a notification to the ChatGPT mobile app asking for the PR review and approval



