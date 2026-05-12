---
name: "Implement Feature"
description: "Scaffold and implement a new feature end-to-end following the NIEN project architecture: feature folder, types, schema, hooks, components, and route integration."
argument-hint: "Feature name and brief description (e.g. 'user-profile: display and edit user info')"
agent: "agent"
---

# Implement Feature: $input

You are a senior frontend architect implementing a new feature in the NIEN System project.
Follow **all** project conventions described in the attached instruction files before writing any code.

## Step 1 — Understand the request

Parse `$input` into:

- **Feature name** (kebab-case, e.g. `user-profile`)
- **Domain** — which top-level feature group does it belong to? (e.g. `auth`, `home`, `collabration`, or a new domain)
- **Core responsibility** — one sentence describing what this feature does

If anything is ambiguous, ask one clarifying question before proceeding.

## Step 2 — Explore the codebase

Before writing any code, read the relevant instruction files and scan existing features:

- Read [features.instructions.md](./../instructions/features.instructions.md)
- Read [folder-structure-tanstack-router.instructions.md](./../instructions/folder-structure-tanstack-router.instructions.md)
- Read [react-query.instructions.md](./../instructions/react-query.instructions.md)
- Read [types.instructions.md](./../instructions/types.instructions.md)
- Read [hooks.instructions.md](./../instructions/hooks.instructions.md)
- Read [tailwind.instructions.md](./../instructions/tailwind.instructions.md)
- Read [utils.instructions.md](./../instructions/utils.instructions.md)

## Step 3 — Plan the file structure

Output a proposed file tree **before** creating any files.
Only include layers that are actually needed — do not scaffold empty files.

Typical feature layout (include only what's necessary):

```
src/features/<domain>/<feature-name>/
├── types.ts              # Feature-scoped TypeScript types/interfaces
├── schema/
│   └── index.ts          # Zod validation schemas (form inputs, API payloads)
├── hooks/
│   └── use-<feature>.ts  # React Query hooks (queries + mutations)
├── components/
│   ├── <feature>-page.tsx        # Page-level container
│   └── <sub-component>.tsx       # Presentational sub-components
└── index.ts              # Public barrel export
```

Route file (if a new page is needed):

```
src/routes/<path>.tsx
```

## Step 4 — Implement

Work through each file in dependency order:
`types.ts` → `schema/` → `hooks/` → `components/` → route

### Types (`types.ts`)

- Export one interface per entity
- No `any` — use `unknown` + type guards where needed
- Extend shared types from `src/types/` if applicable

### Schema (`schema/index.ts`)

- Use **Zod** for all validation
- Export inferred TypeScript types alongside schemas: `export type XForm = z.infer<typeof xFormSchema>`

### Hooks (`hooks/use-<feature>.ts`)

- Follow React Query patterns from `react-query.instructions.md`
- One file per logical concern (query vs. mutation)
- Export a single custom hook per file
- Derive loading/error/data states inside the hook, never in the component

### Components

Structure each component file as:

```tsx
// 1. Imports
// 2. Types / prop interface
// 3. Constants (variant maps, lookup objects — never inline ternary chains)
// 4. Component function
//    a. Hooks
//    b. Derived state / handlers
//    c. Return JSX
```

Rules:

- **All user-facing text in Vietnamese**
- Use `cn()` + lookup objects instead of nested ternaries for conditional classes
- No prop drilling beyond 2 levels — use composition or context
- Max ~50 lines per function; extract helpers as needed

### Route (`src/routes/<path>.tsx`)

- Use TanStack Router file-based routing conventions
- Import the page component from the feature barrel export

## Step 5 — Verify

After implementation:

1. Check for TypeScript errors in the new files
2. Confirm no `any` types were introduced
3. Confirm all UI strings are in Vietnamese
4. Confirm no logic was duplicated from existing utilities or hooks

Report a concise summary:

- Files created
- Any assumptions made
- Anything that needs backend API endpoints or additional data not yet available
