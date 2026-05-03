---
description: "Folder structure and architecture guidelines for TanStack Router applications"
applyTo: "src/**"
---

# 🗄️ Folder Structure - TanStack Router

> **Purpose:** Define scalable folder structure and unidirectional code flow for TanStack Router apps  
> **Scope:** Applies to all code in the `src/` directory

---

## 🎯 Core Architecture Principles

### Unidirectional Code Flow

Code flows in **one direction**: `shared → features → app → routes`

```
shared modules (components, hooks, lib, types, utils)
    ↓
features (auth, users, products, etc.)
    ↓
app (routes, app.tsx, provider.tsx)
    ↓
routes (route files using TanStack Router)
```

**Rules:**

- ✅ Shared modules can be used **anywhere**
- ✅ Features can import **only from shared modules**
- ✅ App can import from **features and shared modules**
- ✅ Routes can import from **app, features, and shared modules**
- ❌ **NO cross-feature imports** - compose features at app/route level
- ❌ **NO upward imports** - features cannot import from app, app cannot import from routes

---

## 📁 Project Structure

```
src/
├── app/                      # Application layer
│   ├── routes/              # Route components (pages)
│   │   ├── home.tsx         # Home page component
│   │   ├── about.tsx        # About page component
│   │   └── dashboard/       # Dashboard section
│   │       ├── index.tsx    # Dashboard index
│   │       └── settings.tsx # Settings page
│   ├── app.tsx              # Main application component
│   ├── provider.tsx         # Global providers wrapper
│
├── routes/                   # TanStack Router route definitions
│   ├── __root.tsx           # Root route layout
│   ├── index.tsx            # / route
│   ├── about.tsx            # /about route
│   └── dashboard/           # /dashboard routes
│       ├── index.tsx        # /dashboard route
│       └── settings.tsx     # /dashboard/settings route
│
├── assets/                   # Static files (images, fonts, icons)
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── components/               # Shared components
│   └── ui/                  # Design system components
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Card.tsx
│
├── config/                   # Global configuration
│   ├── env.ts               # Environment variables
│   └── constants.ts         # App constants
│
├── features/                 # Feature modules (domain-driven)
│   ├── auth/                # Authentication feature
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── stores/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── helpers.tsx.     # Handle logic.
│   │   └── index.ts         # Public API
│   │
│   ├── users/
│   └── products/
│
├── hooks/                    # Shared custom hooks
│   ├── useDebounce.ts
│   └── useMediaQuery.ts
│
├── lib/                      # Pre configured libraries
│   ├── utils.ts             # cn() utility
│   ├── api-client.ts        # API client config
│   └── query-client.ts      # React Query config
│
├── stores/                   # Global state stores
│   └── theme-store.ts       # Theme state
│
├── testing/                  # Test utilities
│   ├── test-utils.tsx
│   └── mocks/
│
├── types/                    # Shared TypeScript types
│   ├── api.types.ts
│   └── common.types.ts
│
└── utils/                    # Shared utility functions
    ├── format.ts
    └── validation.ts
```

---

## 🚦 TanStack Router Specifics

### Route Files Location

**Routes live in `src/routes/` at the same level as `app/`**

```
src/
├── app/           # Application components and logic
├── routes/        # TanStack Router route definitions ✅
└── ...
```

**❌ BAD - Routes inside app:**

```
src/
└── app/
    └── routes/    # ❌ Don't put TanStack Router files here
```

### Route File Structure

```tsx
// src/routes/index.tsx - Root index route

import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/app/routes/home";

export const Route = createFileRoute("/")({
  component: HomePage,
});
```

```tsx
// src/routes/__root.tsx - Root layout

import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <Outlet />
    </div>
  ),
});
```

```tsx
// src/routes/dashboard/index.tsx - Nested route

import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/app/routes/dashboard";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});
```

### Route Component Location

**Route components (pages) live in `src/app/routes/`**

```tsx
// src/app/routes/home.tsx - Home page component

import { ProductList } from "@/features/products";
import { Button } from "@/components/ui/Button";

export const HomePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <Button>Get Started</Button>
      <ProductList />
    </div>
  );
};
```

**Separation of Concerns:**

- `src/routes/*.tsx` → TanStack Router configuration (routing logic)
- `src/app/routes/*.tsx` → Page components (UI logic)

---

## 📊 Import Rules

### ✅ Allowed Imports

```tsx
// src/components/ui/Button.tsx - Shared component
import type { ButtonProps } from "@/types/common.types"; // ✅ Shared → Shared

// src/features/auth/components/LoginForm.tsx - Feature component
import { Button } from "@/components/ui/Button"; // ✅ Feature → Shared
import { useForm } from "@/hooks/useForm"; // ✅ Feature → Shared

// src/app/routes/dashboard.tsx - App route component
import { useAuth } from "@/features/auth"; // ✅ App → Feature
import { ProductList } from "@/features/products"; // ✅ App → Feature
import { Card } from "@/components/ui/Card"; // ✅ App → Shared

// src/routes/dashboard/index.tsx - TanStack Router file
import { DashboardPage } from "@/app/routes/dashboard"; // ✅ Route → App
import { createFileRoute } from "@tanstack/react-router"; // ✅ External library
```

### ❌ Forbidden Imports

```tsx
// ❌ BAD - Shared importing from Feature
// src/components/ui/Button.tsx
import { useAuth } from "@/features/auth"; // ❌ Shared → Feature

// ❌ BAD - Shared importing from App
// src/hooks/useDebounce.ts
import { HomePage } from "@/app/routes/home"; // ❌ Shared → App

// ❌ BAD - Feature importing from another Feature
// src/features/products/components/ProductCard.tsx
import { useAuth } from "@/features/auth"; // ❌ Feature → Feature

// ❌ BAD - Feature importing from App
// src/features/auth/components/LoginForm.tsx
import { DashboardPage } from "@/app/routes/dashboard"; // ❌ Feature → App

// ❌ BAD - App importing from Routes
// src/app/app.tsx
import { Route } from "@/routes/index"; // ❌ App → Routes
```

---

## 🎨 Feature Module Structure

For detailed feature module structure and best practices, see [features.instructions.md](./features.instructions.md).

---

## 🎯 Shared Hooks Structure

For shared hooks structure and best practices, see [hooks.instructions.md](./hooks.instructions.md).

---

## 🎯 Shared Types Structure

For shared types structure and best practices, see [types.instructions.md](./types.instructions.md).

---

## 🎯 Shared Utils Structure

For shared utility function structure and best practices, see [utils.instructions.md](./utils.instructions.md).

---

## 🚫 Common Mistakes

### Mistake 1: Routes Inside App Folder

```
❌ BAD
src/app/routes/
├── __root.tsx    # ❌ TanStack Router files in app
└── index.tsx

✅ GOOD
src/
├── app/
│   └── routes/   # Page components
│       └── home.tsx
└── routes/       # TanStack Router files
    └── index.tsx
```

### Mistake 2: Cross-Feature Imports

```tsx
// ❌ BAD - Product feature importing from Auth feature
// src/features/products/components/ProductCard.tsx
import { useAuth } from "@/features/auth";

// ✅ GOOD - Compose at app level
// src/app/routes/products.tsx
import { useAuth } from "@/features/auth";
import { ProductCard } from "@/features/products";

export const ProductsPage = () => {
  const { user } = useAuth(); // Get auth state

  return <div>{user && <ProductCard />}</div>;
};
```

### Mistake 3: Feature Code in Shared Folders

```tsx
// ❌ BAD - Auth-specific component in shared
// src/components/ui/LoginButton.tsx
import { login } from "@/features/auth/api/auth-api";

// ✅ GOOD - Keep in feature
// src/features/auth/components/LoginButton.tsx
import { login } from "../api/auth-api";
```

### Mistake 4: Too Much in One Feature

```
❌ BAD - Bloated "users" feature
features/users/
├── components/ (50 components)
├── hooks/ (30 hooks)
└── api/ (20 files)

✅ GOOD - Split into focused features
features/
├── user-profile/
├── user-settings/
└── user-management/
```

---

## 📝 Folder Decision Tree

**"Where should I put this file?"**

```
Is it used by multiple features?
├─ Yes → Is it UI-related?
│  ├─ Yes → src/components/ui/
│  └─ No → Is it a hook?
│     ├─ Yes → src/hooks/
│     └─ No → Is it a utility?
│        ├─ Yes → src/utils/
│        └─ No → src/lib/ or src/types/
│
└─ No → Is it specific to one feature?
   ├─ Yes → src/features/<feature-name>/
   └─ No → Is it a route component?
      ├─ Yes → Is it TanStack Router config?
      │  ├─ Yes → src/routes/
      │  └─ No → src/app/routes/
      └─ No → Is it app-level config?
         └─ Yes → src/app/ or src/config/
```

---

## 🛡️ Enforce with ESLint

Prevent architectural violations with ESLint rules:

```js
// .eslintrc.js
'import/no-restricted-paths': [
  'error',
  {
    zones: [
      // 🚫 NO cross-feature imports
      {
        target: './src/features/auth',
        from: './src/features',
        except: ['./auth'],
      },
      {
        target: './src/features/products',
        from: './src/features',
        except: ['./products'],
      },

      // 🚫 NO upward imports (shared → features/app)
      {
        target: [
          './src/components',
          './src/hooks',
          './src/lib',
          './src/types',
          './src/utils',
        ],
        from: ['./src/features', './src/app', './src/routes'],
      },

      // 🚫 NO features → app imports
      {
        target: './src/features',
        from: './src/app',
      },

      // 🚫 NO app → routes imports
      {
        target: './src/app',
        from: './src/routes',
      },
    ],
  },
]
```

---

## 📚 Summary

### Key Takeaways

1. **TanStack Router files** (`createFileRoute`) → `src/routes/`
2. **Page components** → `src/app/routes/`
3. **Feature code** → `src/features/<feature-name>/`
4. **Shared code** → `src/components/`, `src/hooks/`, `src/utils/`
5. **Unidirectional flow** → `shared → features → app → routes`
6. **No cross-feature imports** → Compose at app/route level
7. **Minimal exports** → Only export what's needed from features

---
