---
applyTo: "**/*.{js,jsx,ts,tsx}"
description: Tailwind CSS v4 utility-first styling patterns including responsive design, dark mode, and custom configuration. Use when styling with Tailwind, adding utility classes, configuring Tailwind, or customizing the theme.
---

# Tailwind CSS v4 Development Guidelines

Best practices for using Tailwind CSS v4 utility classes effectively.

## Core Principles

1. **Utility-First**: Use utility classes instead of custom CSS
2. **Mobile-First**: Design for mobile, then scale up with responsive modifiers
3. **Component Extraction**: Extract repeated patterns into components
4. **Consistent Spacing**: Use Tailwind's spacing scale
5. **Custom Configuration**: Extend the default theme for brand consistency

## Tailwind CSS v4 Palette Integration

## Color Usage Guidelines

**CRITICAL RULE: Before using ANY color in Tailwind classes, you MUST check if it exists in `src/index.css` first.**

### Workflow for Using Colors

**Step 1: Search `src/index.css` for the hex code (NOT the color name)**

Before writing any Tailwind color class, open `src/index.css` and **search for the HEX CODE** in the `@theme` block:

```css
/* src/index.css */
@theme {
  --color-brand-50: #eff6ff;
  --color-zinc-600: #696972;
  --color-primary-500: #3b82f6;
  /* ... search by hex code like #696972, not by name */
}
```

**Example searches:**

- Need color `#696972` → Search for `#696972` in index.css → Found as `--color-zinc-600` → Use `bg-zinc-600`
- Need color `#3b82f6` → Search for `#3b82f6` in index.css → Found as `--color-primary-500` → Use `bg-primary-500`

**Step 2: If hex code EXISTS → Use the variable name**

```tsx
// ✅ GOOD - Found #696972 = color-zinc-600 in index.css
<div className="bg-zinc-600 text-white p-4">
  Using existing color from index.css
</div>
```

**Step 3: If hex code DOES NOT EXIST → Request user to create it with design token name**

**DO NOT** use arbitrary hex values. Instead, request the user to add the variable with the **design token name from Figma/design**:

```tsx
// ❌ FORBIDDEN - Never use arbitrary values
<div className="bg-[#E5EDF0]">Member background</div>
<button className="text-[#10b981]">Success</button>

// ✅ CORRECT APPROACH
// 1. Check index.css - search for "#E5EDF0" - not found
// 2. Check design/Figma - color token name is "member-40"
// 3. Ask user: "I need color #E5EDF0 (design token: member-40).
//    Please add to @theme in src/index.css:
//    --color-member-40: #E5EDF0;"
// 4. Wait for user to add it
// 5. Then use: <div className="bg-member-40">Member background</div>

// Another example:
// 1. Search for "#10b981" in index.css - not found
// 2. Design token name is "success-500"
// 3. Request: "Please add --color-success-500: #10b981;"
// 4. Use: <button className="text-success-500">Success</button>
```

### Variable Naming Conventions

When requesting new variables, follow these patterns:

- **Colors**: `--color-{name}-{shade}`
  - Examples: `--color-primary-500`, `--color-gray-100`, `--color-success-600`
- **Spacing**: `--spacing-{size}`
  - Examples: `--spacing-128`, `--spacing-72`
- **Fonts**: `--font-family-{type}`
  - Examples: `--font-family-display`, `--font-family-mono`
- **Breakpoints**: `--breakpoint-{size}`
  - Examples: `--breakpoint-3xl`, `--breakpoint-4xl`

### Example: Correct Workflow

```tsx
// Scenario 1: Need to use color #696972

// ❌ WRONG - Use arbitrary value directly
<div className="bg-[#696972] text-white">Content</div>

// ✅ RIGHT - Search by hex code:
// 1. Open src/index.css
// 2. Search for "#696972" (NOT "gray" or "zinc")
// 3. Found: --color-zinc-600: #696972
// 4. Use the variable name:
<div className="bg-zinc-600 text-white">Content</div>

// Scenario 2: Need to use color #E5EDF0 (from Figma design token "member-40")

// ❌ WRONG - Use arbitrary value
<div className="bg-[#E5EDF0]">Member card</div>

// ✅ RIGHT - Request user to create:
// 1. Open src/index.css
// 2. Search for "#E5EDF0" - not found
// 3. Check Figma/design - token name is "member-40"
// 4. Request user: "I need color #E5EDF0 (design token: member-40).
//    Please add to src/index.css @theme:
//    --color-member-40: #E5EDF0;"
// 5. After user adds it:
<div className="bg-member-40">Member card</div>

// Scenario 3: Need success green #10b981

// 1. Search "#10b981" in index.css - not found
// 2. Request: "Please add --color-success-500: #10b981;"
// 3. Then use:
<button className="bg-success-500">Success</button>
```

### Why This Matters

- ✅ **Centralized design system** - All colors in one place
- ✅ **Consistency** - Same colors used everywhere
- ✅ **Maintainability** - Easy to update colors globally
- ✅ **Type safety** - Tailwind autocomplete works
- ❌ **Avoid** - Scattered hex values creating maintenance nightmare

## Responsive Design

### Breakpoints

```tsx
// Mobile-first responsive classes
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Full width on mobile, half on medium screens, third on large */}
</div>

<h1 className="text-2xl md:text-4xl lg:text-6xl">
  {/* Responsive text sizes */}
</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Responsive grid */}
</div>
```

### Container

```tsx
<div className="container mx-auto px-4">
  {/* Centered container with horizontal padding */}
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Responsive container padding */}
</div>
```

## State Variants

### Hover, Focus, Active

```tsx
<button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-500">
  Interactive Button
</button>

<a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
  Link
</a>
```

### Group Hover

```tsx
<div className="group">
  <img src="/image.jpg" className="group-hover:opacity-75 transition-opacity" />
  <p className="group-hover:text-blue-600">Hover the container</p>
</div>
```

### Disabled

```tsx
<button className="disabled:opacity-50 disabled:cursor-not-allowed" disabled>
  Disabled Button
</button>
```

## Configuration

### Tailwind v4: CSS-First Configuration

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Custom colors */
  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-900: #1e3a8a;

  /* Custom spacing */
  --spacing-128: 32rem;

  /* Custom fonts */
  --font-family-sans: "Inter", sans-serif;

  /* Custom breakpoints */
  --breakpoint-3xl: 1920px;
}
```

## Common Patterns

### Centered Content

```tsx
<div className="flex items-center justify-center min-h-screen">
  <div>Centered content</div>
</div>
```

### Sticky Header

```tsx
<header className="sticky top-0 z-50 bg-white border-b">
  <nav>Navigation</nav>
</header>
```

### Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {posts.map((post) => (
    <PostCard key={post.id} post={post} />
  ))}
</div>
```

### Truncate Text

```tsx
<p className="truncate">This text will be truncated with ellipsis if too long</p>
<p className="line-clamp-3">This text will show max 3 lines with ellipsis</p>
```

## Best Practices

1. **Use Consistent Spacing**: Stick to Tailwind's spacing scale
2. **Responsive by Default**: Always consider mobile-first design
3. **Extract Components**: Avoid repeating long class lists
4. **Use Theme Colors**: Define custom colors in config, not arbitrary values
5. **Leverage @apply Sparingly**: Prefer utility classes in JSX
6. **Enable Dark Mode**: Plan for dark mode from the start
7. **Use Plugins**: Leverage official plugins for common needs
8. **Optimize Production**: Ensure purge is configured correctly
