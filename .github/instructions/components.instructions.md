---
description: "Use when creating or editing React components (.tsx). Enforces NIEN component structure, prop interfaces, conditional class patterns, Vietnamese UI text, and component size limits."
applyTo: "src/**/*.tsx"
---

# Component Authoring Guidelines

## File Structure

Every component file must follow this top-to-bottom order:

```tsx
// 1. Imports (external libs → internal shared → local)
// 2. Constants (lookup objects, variant maps — never inline)
// 3. Prop interface
// 4. Component function
//    a. Hooks (useState, useQuery, custom hooks)
//    b. Derived state and event handlers
//    c. Return JSX
```

## Prop Interface

- Always define an explicit `interface` for props — no inline types, no `any`
- Name it `<ComponentName>Props`
- Use `unknown` + type guards instead of `any` for dynamic values

```tsx
// ✅
interface UserCardProps {
  userId: string;
  onSelect?: (id: string) => void;
}

// ❌
const UserCard = ({ userId, onSelect }: { userId: any; onSelect: any }) => {
```

## Conditional Styles — Lookup Objects

Never use nested ternaries for class names. Use a lookup object + `cn()`.

```tsx
// ✅
const STATUS_STYLES = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-500',
  pending: 'bg-yellow-100 text-yellow-800',
} as const;

<span className={cn('rounded-full px-2 py-1 text-xs', STATUS_STYLES[status])} />

// ❌
<span className={
  status === 'active' ? 'bg-green-100' :
  status === 'inactive' ? 'bg-gray-100' : 'bg-yellow-100'
} />
```

## Function Size

- Keep each component function under ~50 lines
- Extract named sub-components or helper functions if the render section grows too long
- One component per file (exception: tiny co-located sub-components used only in that file)

## Vietnamese UI Text

All user-facing strings — labels, placeholders, headings, button text, error messages, empty states — **must be written in Vietnamese**.

```tsx
// ✅
<Button>Lưu thay đổi</Button>
<p className="text-muted">Không có dữ liệu</p>

// ❌
<Button>Save changes</Button>
```

## No Prop Drilling Beyond 2 Levels

If a prop needs to travel more than 2 component levels, lift state into a Zustand store, React context, or restructure via composition.

## Async / Loading States

Derive loading, error, and data states inside custom hooks — **never** in the component body.

```tsx
// ✅ in hook
export function useProjects() {
  const { data, isLoading, isError } = useQuery(...)
  return { projects: data ?? [], isLoading, isError };
}

// ✅ in component — clean
const { projects, isLoading } = useProjects();

// ❌ in component — messy
const { data, isLoading, isFetching, isError, error } = useQuery(...);
```

## Accessibility

- Interactive elements (`button`, `a`, custom controls) must have accessible labels
- Use semantic HTML (`<button>` not `<div onClick>`)
- Include `aria-label` or visible text for icon-only buttons
