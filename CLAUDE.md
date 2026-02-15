# CLAUDE.md

Guidelines for Claude when working in this project.

## Communication

- Always communicate with the user in **Portuguese (Brazil)**.
- All code, comments, variable names, function names, component names, and file names must be written in **English**.
- When a request is ambiguous or could be interpreted in multiple ways, **always ask for clarification before implementing**. Do not assume.

## Project Overview

Angular 21 study project implementing a **Framework Explorer** — a page to browse and filter frontend frameworks.

**Run the project:**
```bash
npm start
```

**Run tests:**
```bash
npm test
```

**Build:**
```bash
npm run build
```

## Tech Stack

- Angular 21 (standalone components)
- TypeScript 5.9
- TailwindCSS v4
- Vitest for testing
- Prettier for formatting

## Angular Conventions

- Use **standalone components** — no NgModules.
- Use the new `input()` and `input.required<T>()` signal-based API for component inputs.
- Use `signal()` and `effect()` for reactive state when appropriate.
- Keep component logic in `.ts` files; keep templates clean and declarative.
- Use `protected` for members accessed only in the template.
- Use `private readonly` for injected services and internal dependencies.

## Code Style

- Follow the existing Prettier config: `printWidth: 100`, `singleQuote: true`.
- Do not use `any` in TypeScript.
- Do not add comments unless the logic is non-obvious.
- Do not add docstrings to methods.
- Do not create helper files or abstractions for one-time use.
- Do not add error handling for scenarios that cannot happen.

## File Structure

```
src/app/
├── app.ts                        # Root component
├── app.html
├── app.routes.ts                 # Route definitions
└── frameworks/
    ├── frameworks-page.component.ts   # Page with filter logic
    ├── framework-list/               # List of frameworks
    ├── framework-item/               # Individual framework card
    └── ui-button/                    # Reusable button component
```

## Before Making Changes

- Read the relevant files before proposing or applying any modification.
- If a task will touch more than 2–3 files, describe the plan first and wait for approval.
- Do not create new files unless strictly necessary.
- Do not refactor code outside the scope of the requested task.
