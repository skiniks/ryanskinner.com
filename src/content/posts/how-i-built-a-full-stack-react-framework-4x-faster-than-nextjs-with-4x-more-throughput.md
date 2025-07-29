---
title: How I Built a Full-Stack React Framework 4x Faster Than Next.js With 4x More Throughput
description: Introducing the next-generation React framework with Rust-powered runtime, React Server Components, and ridiculously-fast development experience delivering 4x faster performance than Next.js.
date: 2025-07-24T00:00:00-05:00
tags: [Open Source, React, Rust, Software Development]
---

After nearly 25 years of building for the web—from Perl to PHP, through the jQuery years, and into the modern JavaScript era—I've seen tooling come and go. I've watched JavaScript bundlers get faster, server-side rendering improve, and React evolve from a simple view library into a full-stack platform. But for a while now, I've felt that we could do better—much better.

Today, I'm excited to introduce **Runtime Accelerated Rendering Infrastructure** (**Rari**), a full-stack React framework that delivers performance numbers I once thought impossible with React:

- **4.04x faster component rendering** under load (4.23ms vs 17.11ms average response time)
- **3.74x higher throughput** under load (10,586 req/sec vs 2,832 req/sec)
- **5.80x faster build times** (1.59 seconds vs 9.22 seconds)
- **100% React Server Component compatibility** with true streaming support

Rari isn't just another Node.js framework with performance optimizations—it's a fundamental rethinking of how React applications should run. Built on a custom Rust runtime with V8 at its core, Rari proves that web frameworks can be both developer-friendly and ridiculously fast.

## The Performance Story

Let me start with the numbers that demonstrate Rari's performance advantages.

### Response Time Comparison

I built identical applications in both Next.js and Rari, each rendering the same complex component tree with server-side data fetching, client components, and real-world patterns. Here's what happened:

| Framework | Avg Response Time | Min | Max | P95 |
|-----------|------------------|-----|-----|-----|
| **Rari** | **2.15ms** | 1.34ms | 3.09ms | 3.09ms |
| Next.js | 4.88ms | 2.57ms | 6.93ms | 6.93ms |

Rari renders complex React Server Components **2.27x faster** than Next.js across identical workloads.

### Concurrent Load Performance

But response time is only part of the story. Modern applications need to handle concurrent users without breaking a sweat. I stress-tested both frameworks with 50 concurrent connections for 30 seconds:

| Framework | Total Requests | Req/Sec | Avg Latency | P99 Latency |
|-----------|----------------|---------|-------------|-------------|
| **Rari** | **317,569** | **10,586** | **4.23ms** | **46ms** |
| Next.js | 84,955 | 2,832 | 17.11ms | 33ms |

Rari handled **3.74x more requests** with **4.04x lower latency**. Under extreme load, Rari consistently delivered sub-50ms response times while maintaining high throughput.

### Build Performance

Development velocity matters too. Nobody wants to wait for builds:

| Framework | Build Time | Bundle Size |
|-----------|------------|-------------|
| **Rari** | **1.59 seconds** | **400 KB** |
| Next.js | 9.22 seconds | 742 KB |

Rari builds **5.80x faster** while producing **46% smaller bundles** all thanks to tsgo and Rolldown.

## How It Works: The Architecture

Rari's performance comes from a unique three-layer architecture that combines the best of Rust's performance with JavaScript's ecosystem compatibility.

### Layer 1: Rust Core Runtime

At the heart of Rari is a custom Rust runtime built on Deno Core and V8. This isn't just about "Rust being fast"—it's about fundamental architectural decisions:

```rust
// React Server Components execute directly in the Rust runtime
// JSX is transformed and components are registered automatically
let mut renderer = RscRenderer::new(runtime);
renderer.initialize().await?;

// Transform and register the component
renderer.register_component("UserProfile", jsx_source).await?;

// Render to RSC serialized format for streaming to client
let rsc_payload = renderer.render_to_rsc_format("UserProfile", Some(props_json)).await?;
```

**Why Rust?** After decades of web development, I've learned that performance bottlenecks often come from the runtime itself. Node.js, despite its improvements, still carries overhead from its event loop design and garbage collection patterns. Rust gives us:

- **Zero-cost abstractions**: Performance optimizations that don't compromise developer experience
- **Memory safety without garbage collection**: Predictable performance under load
- **True concurrency**: Handle thousands of requests without blocking
- **Direct V8 integration**: JavaScript execution without Node.js layers

### Layer 2: Intelligent Vite Integration

Rari doesn't reinvent build tooling—it extends Vite with RSC-aware transformations:

```typescript
// Automatic client/server component detection and transformation
function transformServerModule(code: string, id: string): string {
  if (!code.includes('use server'))
    return code

  // Transform server components for RSC serialization
  let newCode = `${code}\n\nimport {registerServerReference} from "react-server-dom-rari/server";\n`

  // Register server functions for RPC calls
  for (const name of exportedNames) {
    newCode += `registerServerReference(${name}, ${JSON.stringify(id)}, ${JSON.stringify(name)});\n`
  }

  return newCode
}
```

This intelligent transformation layer:
- **Automatically detects** component boundaries between client and server
- **Handles RSC serialization** without manual configuration
- **Enables hot module replacement** for server components
- **Manages dependency graphs** across the client/server boundary

### Layer 3: React Server Components Done Right

Rari implements React Server Components as they were meant to be—true server-side rendering with streaming support:

```rust
// RSC streaming implementation in Rust
async fn stream_component(
    State(state): State<ServerState>,
    Json(request): Json<RenderRequest>,
) -> Result<Response, StatusCode> {
    let props_str = request.props.as_ref().map(|p| serde_json::to_string(p).unwrap_or_default());

    // Create RSC stream directly from renderer
    let stream_result = {
        let mut renderer = state.renderer.lock().await;
        renderer.render_with_readable_stream(&request.component_id, props_str.as_deref())
    };

    match stream_result {
        Ok(mut rsc_stream) => {
            // Convert RSC stream to HTTP response stream
            let byte_stream = async_stream::stream! {
                while let Some(chunk_result) = rsc_stream.next().await {
                    match chunk_result {
                        Ok(chunk_bytes) => yield Ok(chunk_bytes),
                        Err(e) => yield Err(std::io::Error::other(e.to_string())),
                    }
                }
            };

            Ok(Response::builder()
                .header("content-type", "text/x-component")
                .header("transfer-encoding", "chunked")
                .body(Body::from_stream(byte_stream))
                .expect("Valid streaming response"))
        }
        Err(e) => Err(StatusCode::INTERNAL_SERVER_ERROR)
    }
}
```

## Intelligent Routing and Code Splitting

Rari's file-based routing automatically discovers and optimizes routes during build, with smart code splitting and prefetching built in. Routes are pre-analyzed for RSC/client component boundaries, enabling optimal bundle sizes and zero-configuration performance.

## Developer Experience Without Compromise

Performance means nothing if the developer experience suffers. Rari maintains all the conveniences you expect:

### Server and Client Components

```tsx
// Server component - runs in Rust runtime
'use server'

export default async function UserProfile({ userId }: { userId: string }) {
  // Fetch data from APIs, access file system, external services
  const response = await fetch(`https://api.example.com/users/${userId}`)
  const user = await response.json()

  return (
    <div>
      <h1>{user.name}</h1>
      <ClientCounter initialCount={user.loginCount} />
    </div>
  )
}
```

```tsx
// Client component - hydrates in browser
'use client'

export default function ClientCounter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount)

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked
      {' '}
      {count}
      {' '}
      times
    </button>
  )
}
```

### Hot Module Replacement for Everything

Rari's HMR works for both client and server components. Change a server component and see it update instantly—no full page reload, no lost state.

### TypeScript by Default

Full TypeScript support with intelligent type inference across the client/server boundary. Props flow from server components to client components with complete type safety.

## Why I Built This

Throughout my career, I've seen the same pattern repeat: we build frameworks that prioritize developer experience over performance, then spend years optimizing them. I believe we can have both from day one.

I built Rari because:

**I believe in the power of open source.** The web's greatest innovations have come from open collaboration. Rari is MIT licensed and designed to be extended by the community.

**We can do better.** Current React frameworks make architectural compromises that limit their performance ceiling. By building on Rust while maintaining JavaScript compatibility, we can break through those limitations.

**Performance is a feature.** Faster applications mean better user experiences, lower server costs, and happier developers. Performance shouldn't be an afterthought—it should be built into the foundation.

**The web deserves better tooling.** I wanted to contribute something meaningful to the ecosystem that gave me my career. Rari represents the framework I wish I'd had for the past decade.

## Getting Started

Ready to try Rari? Getting started takes less than a minute:

```bash
# Create a new Rari app
npm create rari-app@latest my-app
cd my-app

# Start developing
npm run dev
```

Rari automatically downloads the appropriate binary for your platform and starts both the Vite development server and Rust runtime. No Docker, no complex setup—just fast React development.

## The Benchmark Code

All benchmarks in this post are reproducible. The test applications and benchmarking scripts are available at [github.com/rari-build/benchmarks](https://github.com/rari-build/benchmarks). I encourage you to run them yourself and share your results.

Key testing details:
- **Hardware**: MacBook Pro M2, 8GB RAM
- **Test duration**: 30 seconds per test with 5-second warmup
- **Concurrent users**: 50 simultaneous connections
- **Component complexity**: Real-world patterns including data fetching, nested components, and client interactivity

## Join the Community

Rari is more than a framework—it's a bet that we can build better tools for the web. If you believe that performance and developer experience aren't mutually exclusive, I'd love for you to:

- **Try Rari** at [rari.build](https://rari.build) in your next project
- **Contribute** to the codebase at [github.com/rari-build/rari](https://github.com/rari-build/rari)
- **[Join our Discord](https://discord.gg/GSh2Ak3b8Q)** for real-time discussions and support
- **Share feedback** about what works and what doesn't
- **Help build** the next generation of web tools

I'm more excited about the web's future than ever. With tools like Rari, we can easily create experiences that would have required massive engineering teams and infrastructure just a few years ago.

The web deserves frameworks that are both fast and beautiful to work with. That's what Rari delivers.
