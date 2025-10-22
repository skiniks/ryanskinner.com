---
title: The Rari SSR Breakthrough: 12x Faster, 10x Higher Throughput Than Next.js
description: We added proper app router support, SSR capabilities, and correct RSC semantics to Rari. Here's what we shipped and what it means for performance.
date: 2025-10-22T00:00:00-05:00
tags: [Open Source, React, Rust, Architecture, Performance]
---

Three months ago, I shipped Rari with numbers that felt impossible: 4x faster component rendering than Next.js, 3.74x higher throughput, and 5.8x faster builds. The framework was genuinely fast. The community responded with enthusiasm. I was proud of what we'd built.

Then I couldn't shake a feeling: we'd left something on the table.

I kept looking at the architecture, at how React Server Components were supposed to work, at the patterns emerging in production React apps. We had speed, but we were missing something fundamental. The app router wasn't there. True server-side rendering wasn't there. The use directive semantics weren't quite right.

So we went back and built the missing pieces properly.

The result surprised even me. Not just faster—*fundamentally* better aligned with how React Server Components were designed to work. And the performance numbers reflect that alignment.

## What We Discovered

When we added proper app router support, true SSR, and correct RSC semantics, something remarkable happened:

- **Response times dropped to 0.69ms** (3.8x faster than Next.js)
- **Throughput jumped to 20,226 req/sec** (10.5x higher than Next.js)
- **P99 latency under load: 4ms** (12x faster than Next.js)
- **Bundle sizes: 68% smaller** (27.6 KB vs 85.9 KB)

These aren't incremental improvements. This is what happens when your architecture matches React's design intentions.

## The Three Missing Pieces

Looking back, I realize we'd shipped Rari with some architectural gaps. Not bugs—gaps. We could render React Server Components, but we weren't doing it the *right* way. Here's what we added:

### 1. The App Router

I used to think the app router was just about file-based routing. I was wrong.

The app router is how your framework *understands* your application. During build, Rari now analyzes every route, every component, determining exactly what needs to run on the server and what needs to hydrate on the client.

This unlocks:
- **Automatic code splitting** based on route boundaries
- **Intelligent prefetching** of dependencies
- **Zero-config RSC rendering** directly from your routes
- **Proper dependency graph analysis** across the entire app

```tsx
// app/layout.tsx - Server component by default
export default function Layout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

// app/dashboard/page.tsx - Server component by default
export default async function Dashboard() {
  const data = await fetchUserData()
  return (
    <div>
      <h1>{data.name}</h1>
      <DashboardClient initialData={data} />
    </div>
  )
}
```

The moment we added this, bundle sizes dropped. The framework finally knew what belonged where.

### 2. Correct Use Directive Semantics

We had the directives wrong. Not broken—just wrong enough to cause confusion.

Here's what I learned: `'use server'` doesn't mark server *components*. It marks server *functions*. Server components are the default. No directive needed.

This is simpler and eliminates an entire category of confusion:

```tsx
// Server function - handles mutations, database access
'use server'

export async function updateUser(userId: string, data: FormData) {
  await db.users.update(userId, Object.fromEntries(data))
  revalidatePath('/dashboard')
}

// Server component - fetches data, renders markup (no directive needed)
export async function UserCard({ userId }: { userId: string }) {
  const user = await fetchUser(userId)
  return (
    <div>
      <h2>{user.name}</h2>
      <UpdateForm userId={userId} onSubmit={updateUser} />
    </div>
  )
}

// Client component - handles interactivity
'use client'

export function UpdateForm({
  userId,
  onSubmit
}: {
  userId: string
  onSubmit: (userId: string, data: FormData) => Promise<void>
}) {
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsPending(true)
    await onSubmit(userId, new FormData(e.currentTarget))
    setIsPending(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" required />
      <button disabled={isPending}>
        {isPending ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
}
```

Once we aligned with React's actual design, everything clicked. The mental model simplified. The code got clearer.

### 3. True Server-Side Rendering

Before, we were doing what I'd call "RSC-flavored rendering." Components ran on the server, but the hydration story wasn't complete.

Now everything renders on the Rust runtime by default. The client receives pre-rendered HTML and RSC payloads, then hydrates only the interactive bits.

This eliminates three major performance bottlenecks:
- **Client-side hydration overhead** — The tree doesn't re-render to become interactive
- **JavaScript parsing delay** — Interactive components are already wired up
- **Cascading waterfall requests** — Data is fetched server-side during render

The Rust runtime handles RSC rendering with minimal overhead, delivering HTML directly to the client. No ceremony. No layers. Just fast.

## The New Numbers

With these three pieces in place, here's what happened:

### Response Time: 3.8x Faster Than Next.js

| Metric | Rari | Next.js | Improvement |
|--------|------|---------|-------------|
| **Avg Response** | **0.69ms** | 2.58ms | **3.8x faster** |
| **P95** | 1.15ms | 3.37ms | **2.9x faster** |
| **Bundle Size** | 27.6 KB | 85.9 KB | **68% smaller** |

### Throughput Under Load: 10.5x Better

We stress-tested with 50 concurrent connections for 30 seconds:

| Metric | Rari | Next.js | Improvement |
|--------|------|---------|-------------|
| **Throughput** | **20,226 req/sec** | 1,934 req/sec | **10.5x higher** |
| **Avg Latency** | **2.04ms** | 25.25ms | **12.4x faster** |
| **P99 Latency** | 4ms | 48ms | **12x faster** |
| **Errors** | 0 | 0 | Stable |

### Build Performance: Stayed Consistent

| Metric | Rari | Next.js |
|--------|------|---------|
| **Build Time** | 1.64s | 9.11s |
| **Bundle Size** | 273 KB | 742 KB |

Build times barely changed because we were already leveraging Rolldown and tsgo optimally. The real wins were in runtime performance and bundle size.

## Why Performance Improved

Better architecture plus correct semantics equals better performance. Here's the breakdown:

**Smaller Bundles (68% reduction)**

Only interactive components ship to the client. Server components stay on the server. The app router eliminates dead code. The framework finally knows what the client actually needs.

**Lower Latency (3.8x faster)**

SSR means no client-side hydration wait. The Rust runtime renders faster than JavaScript. RSC rendering starts immediately. No layers between your components and the client.

**Higher Throughput (10.5x)**

The persistent Rust runtime handles connection pooling efficiently. Concurrent request handling is optimized at the runtime level. No per-request overhead from spinning up Node.js contexts.

**Predictable Performance**

No garbage collection pauses. No event loop blocking. Linear scaling with more instances. The kind of predictability you need in production.

## The Lesson: Alignment Matters

Here's what I learned from this: great performance comes from alignment. When your implementation matches the underlying design philosophy, speed follows naturally.

React Server Components were designed with a specific model: server components by default, client components when you need interactivity, and a clean boundary between the two. Once we fully embraced that model, the performance gains weren't incremental—they were exponential.

This isn't just about Rari being fast. It's about proving that you can have both great performance and great developer experience when you build the foundation correctly.

## What This Means

### For Users
- **Faster First Paint:** HTML arrives immediately from the server
- **No JavaScript Parsing Delay:** Interactive components hydrate instantly
- **Lower Memory Usage:** The client only runs code for interactive features
- **Better Performance Under Load:** The server handles the heavy lifting

### For Developers
- **Same DX:** `'use server'` and `'use client'` directives work exactly as you'd expect
- **Hot Module Replacement:** Change a server component and see it update instantly
- **Full TypeScript Support:** Complete type safety across the client/server boundary
- **Zero Config:** Build, bundle, and RSC setup are automatic

### For Business
- **Lower Server Costs:** Smaller client JavaScript means fewer resources needed
- **Better Scalability:** The Rust runtime handles 10.5x more concurrent requests
- **Predictable Performance:** No garbage collection pauses under load

## Getting Started

The API hasn't changed. If you've tried Rari before, upgrading is a single version bump:

```bash
npm install rari@latest
npm run dev
```

New to Rari? Start here:

```bash
npm create rari-app@latest my-app
cd my-app
npm run dev
```

You don't need to think about any of this. The framework handles it:

- **Hot module replacement** works for both server and client components
- **TypeScript inference** across the client/server boundary
- **Error boundaries** and **Suspense** work as expected
- **Form actions** and **revalidation** are built-in

## Open Source, Completely Reproducible

All benchmarks are reproducible. The test applications and scripts are at [github.com/rari-build/benchmarks](https://github.com/rari-build/benchmarks).

**Test Environment:**
- Hardware: MacBook Pro M2, 8GB RAM
- Test Duration: 30 seconds with warmup
- Concurrent Users: 50 simultaneous connections
- Real-world patterns: data fetching, nested components, client interactivity

Run the benchmarks yourself and share your results. I'm genuinely curious what numbers you see on different hardware.

## What's Next

This is just the beginning. With SSR and app router now in place, we're focusing on:

- **Streaming RSC** for progressive rendering (framework support added, testing in progress)
- **Advanced RSC patterns** for suspense and edge-case support
- **Ecosystem integrations** with popular libraries and services
- **Production case studies** from teams using Rari in real applications

## Join Us

If you believe that performance and developer experience shouldn't be mutually exclusive, I'd love to have you:

- **Try Rari** at [rari.build](https://rari.build)
- **Star us** at [github.com/rari-build/rari](https://github.com/rari-build/rari)
- **Contribute** to the framework or ecosystem
- **Join our Discord** for real-time discussions and support

We built Rari because we believed we could do better. These benchmarks prove it. Now we're building the features and ecosystem to match.

The web deserves frameworks that are both fast and beautiful to work with. That's what we're delivering.
