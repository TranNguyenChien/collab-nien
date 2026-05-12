---
description: "Fix bugs in the NIEN codebase — diagnose root cause, apply minimal fix, and verify no regressions"
name: "Fix Bug"
argument-hint: "Describe the bug or paste the error message..."
agent: "agent"
tools: [search, read_file, replace_string_in_file, get_errors, run_in_terminal]
---

# Fix Bug — NIEN System

## Project Context

- **Framework:** React 19+ + TypeScript (strict mode — no `any`)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **State:** Zustand
- **Routing:** TanStack Router
- **Package Manager:** pnpm

## Bug Fixing Process

### 1. Diagnose

- Read the error message / stack trace carefully.
- Use `get_errors` to check all current TypeScript/lint errors in the workspace.
- Locate the source file causing the error using `grep_search` or `semantic_search`.
- Identify the **root cause** — do not just fix the symptom.

### 2. Analyze Before Fixing

Before changing any code, verify:

- [ ] Which layer is the bug in? (component, hook, util, store, query, route)
- [ ] Are there any related tests?
- [ ] Which other components/hooks does this change affect?
- [ ] Is this a race condition, stale closure, or type mismatch?

### 3. Apply the Fix

Make the **smallest possible fix** to resolve the root cause:

- ✅ Edit the correct file — no refactoring outside the bug's scope
- ✅ Preserve the existing coding style of the file
- ✅ Do not add unrelated features or improvements
- ✅ If the fix requires type changes, update `src/types/` per the [types guidelines](../instructions/types.instructions.md)
- ✅ If the fix involves data fetching, follow the [react-query patterns](../instructions/react-query.instructions.md)

**Avoid common mistakes:**

```ts
// ❌ Using any to bypass TypeScript errors
const data = response as any;

// ✅ Use a type guard or unknown
const data = response as unknown as ExpectedType;

// ❌ Nested ternary to handle edge cases
const label =
  status === "active"
    ? "Active"
    : status === "inactive"
      ? "Inactive"
      : "Unknown";

// ✅ Lookup object
const STATUS_LABELS: Record<Status, string> = {
  active: "Active",
  inactive: "Inactive",
  unknown: "Unknown",
};
```

### 4. Verify After Fixing

After applying the fix:

1. Run `get_errors` again to confirm no TypeScript errors remain.
2. Check whether the fix introduced new errors in other files.
3. If possible, run the build to confirm: `pnpm build`.

### 5. Report Results

Provide a brief summary:

- **Root cause:** [describe the underlying cause]
- **Fix:** [describe the change applied]
- **Files changed:** [list of modified files]
- **Regressions check:** [verification results]

---

## Bug to Fix

$argument
