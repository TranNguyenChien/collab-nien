---
description: "React Query (TanStack Query) patterns for data fetching, caching, and state synchronization"
applyTo: "src/**"
---

# 🔄 React Query Guidelines

> **Purpose:** Standards for data fetching, caching, mutations, and server state management  
> **Scope:** Applies to all code using React Query (@tanstack/react-query)

---

## 🎯 Core Principles

- ✅ **Separation of concerns** - API calls in `api/`, hooks wrap queries in `hooks/`
- ✅ **Declarative data fetching** - Define what data you need, not how to fetch it
- ✅ **Type-safe** - Full TypeScript support for queries and mutations
- ✅ **Automatic caching** - Smart cache management with background updates
- ✅ **Optimistic updates** - Update UI instantly, rollback on error

---

## 📁 File Organization

```
features/[feature]/
├── api/
│   ├── [feature]-api.ts      # API functions (pure)
│   └── index.ts
├── hooks/
│   ├── use[Feature].ts       # Query hooks
│   ├── useCreate[Feature].ts # Mutation hooks
│   └── index.ts
└── types/
    └── [feature].types.ts
```

---

## ✅ Best Practices

### 1. Query Keys Factory

**Use hierarchical, type-safe query keys:**

```tsx
// features/products/api/query-keys.ts
export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters?: ProductFilters) =>
    [...productKeys.lists(), filters] as const,
  detail: (id: string) => [...productKeys.all, "detail", id] as const,
};
```

### 2. API Functions (Pure)

**Keep API calls separate from hooks:**

```tsx
// features/products/api/products-api.ts
import type { Product, CreateProductDto } from "../types";

/**
 * Fetch products list
 */
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("/api/products");
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

/**
 * Fetch single product by ID
 */
export const fetchProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch product ${id}`);
  return response.json();
};

/**
 * Create new product
 */
export const createProduct = async (
  data: CreateProductDto
): Promise<Product> => {
  const response = await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create product");
  return response.json();
};
```

### 3. Query Hooks Pattern

Wrap queries in **custom hooks** with proper typing:

````tsx
// ✅ GOOD - Query hook
// src/features/products/hooks/useProducts.ts

import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products-api';
import { productKeys } from '../api/query-keys';
import type { ProductFilters } from '../types';

/**
 * Fetch products list with optional filters
 *
 * @param filters - Optional filters for products
 * @returns Query result with products data
 *
 * @example

**Wrap queries in custom hooks:**

```tsx
// features/products/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products-api';
import { productKeys } from '../api/query-keys';

/**
 * Fetch products list
 *
 * @example
 * const { data: products, isLoading } = useProducts();
 */
export const useProducts = () => {
  return useQuery({
    queryKey: productKeys.lists(),
    queryFn: fetchProducts,
  });
};

/**
 * Fetch single product by ID
 */
export const useProduct = (id: string, enabled = true) => {
  return useQuery({

**Handle mutations with cache invalidation:**

```tsx
// features/products/hooks/useCreateProduct.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../api/products-api';
import { productKeys } from '../api/query-keys';

/**
 * Create new product
 *
 * @example
 * const { mutate, isPending } = useCreateProduct();
 * mutate({ name: 'New Product' });
 */
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      // Invalidate to refetch fresh data
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
};

// Update mutation
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateProductDto }) =>
      updateProduct(id, data),
    onSuccess: (updated) => {
      queryClient.setQueryData(productKeys.detail(updated.id), updated);
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
};

// Delete mutation
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: (_, id) => {
      queryClient.removeQueries({ queryKey: productKeys.detail(id) });.ts
export type ApiError = {
  message: string;
  code: string;
  field?: string;
};

// src/features/products/hooks/useProducts.ts
export const useProducts = (filters?: ProductFilters) => {
  return useQuery({
    queryKey: productKeys.list(filters || {}),
    queryFn: async () => {
      try {
        return await fetchProducts(filters);
      } catch (error) {
        // Transform error to structured format
        if (error instanceof Error) {
          throw {
            message: error.message,
            code: 'FETCH_ERROR',
          } as ApiError;
        }
        throw error;
      }
    },
    retry: (failureCount, error) => {
      // Don't retry on 404
      if ((error as ApiError)?.code === 'NOT_FOUND') {
        return false;
      }
      return failureCount < 3;
    },
  });
};

// Component usage:
const ProductList = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) return <Spinner />;

  if (error) {
    return (
      <ErrorMessage>
        {(error as ApiError).message || 'Failed to load products'}
      </ErrorMessage>
    );
  }

  return <div>{/* Render products */}</div>;
};5. Handle Loading & Error States

```tsx
// ✅ GOOD - Proper state handling
const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (!products?.length) return <EmptyState />;

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
````

### 6. Conditional Queries

```tsx
// ✅ GOOD - Use enabled option
const UserProfile = ({ userId }: { userId?: string }) => {
  const { data: user } = useUser(userId!, { enabled: !!userId });

  if (!userId) return null;
  return <div>{user?.name}</div>;
};

// ✅ GOOD - Dependent queries
const ProductDetail = ({ productId }: { productId: string }) => {
  const { data: product } = useProduct(productId);
  const { data: reviews } = useReviews(productId, { enabled: !!product });

  if (!product) return <Spinner />;

  return (
    <div>
      <h1>{product.name}</h1>
      {reviews && <ReviewList reviews={reviews} />}
    </div>
  );
};
```

### 7. Query Client Setuplse));

}, []);

// ❌ No caching, no error handling, manual loading state
};

// ✅ GOOD - Use React Query hook
const ProductList = () => {
const { data: products, isLoading } = useProducts();

if (isLoading) return <Spinner />;

return <div>{/_ Render products _/}</div>;
};

````

### Mistake 2: Not Using Query Keys Properly

```tsx
// ❌ BAD - String-only query keys
useQuery({ queryKey: ['products'], queryFn: fetchProducts });

// ❌ BAD - Dynamic keys without structure
useQuery({
  queryKey: [`products-${category}-${page}`],
  queryFn: fetchProducts
});

// ✅ GOOD - Structured query keys
const productKeys = {
  all: ['products'] as const,
  list: (filters: ProductFilters) => ['products', 'list', filters] as const,
};

useQuery({
  queryKey: productKeys.list({ category, page }),
  queryFn: fetchProducts
});
````

### Mistake 3: Not Handling Loading/Error States

```tsx
// ❌ BAD - Ignoring states
const ProductDetail = ({ id }: { id: string }) => {
  const { data: product } = useProduct(id); // ❌ No loading/error handling

  return <div>{product.name}</div>; // ❌ Crashes if product is undefined
};

// ✅ GOOD - Proper state handling
const ProductDetail = ({ id }: { id: string }) => {
  const { data: product, isLoading, error } = useProduct(id);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!product) return <NotFound />;

  return <div>{product.name}</div>;
};
```

### Mistake 4: Mutating Cache Directly

```tsx
// ❌ BAD - Manual cache mutation
const updateProductInCache = (id: string, updates: Partial<Product>) => {
  const products = queryClient.getQueryData<Product[]>(["products"]);
  const updated = products?.map((p) =>
    p.id === id ? { ...p, ...updates } : p
  );
  queryClient.setQueryData(["products"], updated); // ❌ Complex, error-prone
};

// ✅ GOOD - Let React Query handle it
const { mutate: updateProduct } = useUpdateProduct();

updateProduct({ id, data: updates }); // ✅ Automatic cache update
```

### Mistake 5: Over-fetching with Missing `enabled`

```tsx
// ❌ BAD - Fetches even when data isn't needed
const UserProfile = ({ userId }: { userId?: string }) => {
  const { data: user } = useUser(userId!); // ❌ Fetches even if userId is undefined

  if (!userId) return null;
  return <div>{user?.name}</div>;
};

// ✅ GOOD - Conditional fetching
const UserProfile = ({ userId }: { userId?: string }) => {
  const { data: user } = useUser(userId!, { enabled: !!userId });

  if (!userId) return null;
  return <div>{user?.name}</div>;
};
```

### Mistake 6: Not Invalidating After Mutations

````tsx
// ❌ BAD - No cache invalidation
const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,
    // ❌ Cache not updated, UI shows stale data
  });
};

// ✅ GOOD - Invalidate queries
const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    1. Using useEffect Instead of React Query

```tsx
// ❌ BAD - Manual fetching
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/products').then((res) => res.json()).then(setProducts);
  }, []);
};

// ✅ GOOD - React Query
const ProductList = () => {
  const { data: products } = useProducts();
};
````

### 2. Not Handling States

```tsx
// ❌ BAD - Missing error/loading states
const ProductDetail = ({ id }: { id: string }) => {
  const { data: product } = useProduct(id);
  return <div>{product.name}</div>; // Crashes!
};

// ✅ GOOD - Proper handling
const ProductDetail = ({ id }: { id: string }) => {
  const { data: product, isLoading, error } = useProduct(id);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage />;
  if (!product) return <NotFound />;

  return <div>{product.name}</div>;
};
```

### 3. Forgetting Cache Invalidation

```tsx
// ❌ BAD - No invalidation
const useCreateProduct = () => {
  return useMutation({ mutationFn: createProduct });
};

// ✅ GOOD - Invalidate cache
const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
};
```

### 4. Not Using enabled Option

```tsx
// ❌ BAD - Fetches with undefined id
const UserProfile = ({ userId }: { userId?: string }) => {
  const { data: user } = useUser(userId!);
  if (!userId) return null;
  return <div>{user?.name}</div>;
};

// ✅ GOOD - Conditional fetch
const UserProfile = ({ userId }: { userId?: string }) => {
  const { data: user } = useUser(userId!, { enabled: !!userId });
  if (!userId) return null;
  return <div>{user?.name}</div>;
};
```

---
