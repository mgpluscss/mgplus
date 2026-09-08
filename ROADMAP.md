# MgPlus (Mg+) Roadmap

This document outlines the strategic roadmap, maintenance milestones, and architectural evolution for **MgPlus**, a micro CSS library designed to build elegant web pages efficiently.

For the full technical design and multi-framework integration guide, see [ARCHITECTURE.md](file:///home/modev/gh/mgpluscss/mgplus/ARCHITECTURE.md).

---

## 🎯 Project Vision

* **Ultra-lightweight**: Under 70 KB minified CSS, zero runtime JS framework dependencies.
* **Universal Multi-Framework Support**: A single codebase powering static HTML, SSR, and reactive frontend frameworks (React, Vue, Svelte, Angular, Solid, Astro).
* **Plug & Play**: Minimalist vanilla JS plugins (`data-toggle`) alongside native Light-DOM Web Components (`<mg-modal>`).
* **Developer Friendly**: Seamless CDN standalone usage and modern package exports for bundlers (Vite, Webpack, Rollup).
* **Standards-compliant**: Progressive enhancement, accessible semantics (WCAG), and modern CSS architecture.
* **zero-build simplicity combined with modern native CSS standards** (Cascade Layers, CSS Nesting, native color spaces, and modern viewport units).

A strategically positioned roadmap for **mgplus** focuses on four key phases:

| Phase | Strategic Focus | Key Deliverables |
| --- | --- | --- |
| **1. Modern CSS Core** | Spec alignment & specificity control | `@layer` architecture, OKLCH color palettes, zero-JS container queries. |
| **2. DX & Micro Footprint** | Lightweight footprint & drop-in ease | Sub-8KB brotli target, semantic classless default mode + optional utility mixins. |
| **3. Component Architecture** | Modern web standards | Native HTML `<dialog>`, `<details>`, and `:has()` powered interactive elements without JS. |
| **4. Modern Ecosystem** | Tooling & multi-stack adoption | Vite/Unocss/PostCSS plugins, automated CDN distribution, and design token integration. |

---

**Phase 1: Modern CSS Foundation (Baseline Standards)**

* **Cascade Layers (`@layer`)**: Wrap mgplus internals into distinct layers (e.g., `@layer mg.reset, mg.base, mg.components, mg.utilities`). This allows consumers to override styles cleanly without fighting specificity or relying on `!important`.
* **OKLCH & Perceptual Color Palettes**: Ditch RGB/HSL for `oklch()`. It enables consistent visual contrast, effortless programmatic tints/shades via CSS custom properties, and seamless `light-dark()` or `prefers-color-scheme` switching.
* **Modern Layout Primitives**: Build grid and flex utilities around intrinsic sizing (`min()`, `clamp()`, `auto-fit`, `auto-fill`), deprecating rigid 12-column math in favor of container-aware responsive layouts.

**Phase 2: Hybrid "Semantic-First + Utility-Lite" Identity**

* **Classless Baseline**: Provide styled semantic HTML out-of-the-box (like Pico.css) so a raw Markdown/HTML file looks polished instantly.
* **Selective Utilities**: Keep utilities strictly focused on layout rhythm (`display`, `gap`, `padding`, `margin`, `alignment`) rather than recreating atomic utility bloat.
* **Strict Size Budget**: Cap the full compressed bundle strictly under **8KB (brotli/gzip)** to justify the "micro" moniker and enable instant CDN execution.

**Phase 3: Zero-JS Interactive Components**

* **The `:has()` Engine**: Leverage the parent selector to build dynamic UI states (e.g., floating form labels, card focus states, responsive menus) without JavaScript.
* **Native Elements First**: Deliver styling for HTML5 primitives: `<dialog>` (modals), `<details>`/`<summary>` (accordions), `<progress>`, and popover APIs.
* **Accessibility (a11y) Defaults**: Built-in visible focus rings (`:focus-visible`), forced color mode compatibility, and strict WCAG contrast compliance out of the box.

**Phase 4: Tooling & Modern Integrations**

* **Open Design Tokens**: Structure tokens using standard JSON format (`tokens.json`), making theme exports friendly for Figma, Vite, and frontend frameworks.
* **CSS-Only CDN & NPM Dual-Delivery**: Ensure developers can either drop a single `<link>` tag into simple static sites or `npm install mgplus` into modern bundlers without requiring post-processors.

---

What architectural approach does mgplus currently take (e.g., classless/semantic, utility-first, or prebuilt component classes)? Knowing its current size and syntax helps tailor specific technical milestones.
