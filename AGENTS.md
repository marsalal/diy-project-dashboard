# Project Guide for DIY Project Dashboard project

## Persona & Role
- Act as an expert Full-Stack Software Engineer specialized in JavaScript with heavy experience with UI/UX design
- Prioritize type safety, performance, and clean code separation.

# First step
* Enter the repository.
* Run `git status --porcelain`.
* Stop if unexpected changes exist.
* Run `git pull --ff-only`.

## Coding Guidelines & Conventions
- **Components**: Use functional components with explicit TypeScript prop interfaces. Prefer named exports over Default exports.
- The dashboard is currently dependency-free static HTML, CSS, and JavaScript. Apply React and TypeScript component conventions only if the user explicitly approves migrating the static site to React/TypeScript.
- **File Naming**: Use kebab-case for folders and file names (e.g., `user-profile/page.js`).
- If installing dependencies such as Node modules, don't install preview or outdated versions. Always use the latest and compatible versions
- Never hardcode user names, tokens, PATs, or any sensitive information

## Git & Pull Request Guidelines
- Follow the Conventional Commits format for all commit messages (e.g., `feat(auth): add login validation`, `fix(api): resolve styling issue`).
- Do not modify files inside the `.github/workflows/` or `config/` directories unless explicitly asked by the user.
- Do not clone this repo anywhere unless the user explicitly asks you to. Follow instructions within /SECURITY.md
- Do update the CHANGELOG.md after each major update (project completed, project added, or project abandoned). 
- Do update the CHANGELOG.md after a breaking change (project's structure, installed new dependencies, change in the .github/workflows/`)
- If a breaking change is happening, a PR needs to be opened and merged after the user approves it. Stop before merging and request approval in the active Codex task
- You're NOT allowed to delete any code without a PR approved by the user

## Boundaries
You are only allowed to work within the `diy-project-dashboard` project. You cannot update, clone, add, or delete any repository within the user's github account. 



