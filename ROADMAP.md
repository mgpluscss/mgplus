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

## 🏛️ Current Architectural Baseline vs. Target State

* **Current Architecture**: Hybrid Milligram core (classless semantic base + legacy normalize) + BEM-style UI component classes (`.mg-modal`, `.mg-dropdown`, `.mg-card`) + generated 12-column atomic utilities (`.mg-col`, `.mg-s-1`..`12`) + Vanilla JS plugins (`src/plugins/`).
* **Current Bundle Size**: **69.2 kB uncompressed CSS (~11.9 kB gzip)**. Approximately 40% of the stylesheet is generated 12-column grid math and repetitive breakpoint media queries.
* **Target Identity**: **Semantic-First Modern CSS Micro-Library (< 8 kB compressed)** leveraging native browser baseline features (`@layer`, `oklch()`, `light-dark()`, intrinsic grid/flex layouts, `<dialog>`, `<details>`, and `:has()`).

---

## 📋 Step-by-Step Modern CSS Execution Plan

### 🚀 Phase 1: Modern CSS Core & Specificity Architecture

*Goal: Establish bulletproof cascade layering, modern reset, and perceptual color models.*

- [x] **Step 1.1: Cascade Layers (`@layer`) Contract**:
  - Defined official layer order in `mg-variables.scss`:
    ```scss
    @layer mg.reset, mg.base, mg.theme, mg.components, mg.utilities;
    ```
  - Wrapped internal reset, core elements, components, and utilities into dedicated layers so author/consumer CSS always overrides mgplus cleanly without `!important`.
- [x] **Step 1.2: Modern Reset Modernization**:
  - Encapsulated reset in `@layer mg.reset`.
  - Added modern defaults (`box-sizing: inherit`, `img { max-width: 100% }`).
- [x] **Step 1.3: OKLCH & Native `light-dark()` Palette**:
  - Redefined design tokens in `mg-variables.scss` using perceptual `oklch()` for uniform contrast across hues.
  - Implemented native `light-dark()` with `color-scheme: light dark;` to enable instant, zero-JS system dark mode without flash of unstyled content (FOUC).
  - Modernized `mg-theme.scss` to toggle `color-scheme` cleanly.

---

### 📦 Phase 2: DX & Micro Footprint (Sub-8KB Diet)

*Goal: Eliminate atomic bloat, establish intrinsic responsive layouts, and achieve the < 8 kB compressed budget.*

- [x] **Step 2.1: Intrinsic Layout Engine (Retire 12-Column Math)**:
  - Added modern intrinsic CSS Grid (`.mg-grid`, `.mg-grid--auto`, `.mg-cols-*`, `.mg-col-span-*`) and fluid flexbox (`.mg-flex`) in `@layer mg.utilities`.
  - Added container query primitives (`.mg-container-query { container-type: inline-size; }`).
  - Maintained backward compatibility for legacy `.mg-row` and `.mg-col`.
- [x] **Step 2.2: Semantic Classless Baseline**:
  - Ensured unclassed standard HTML tags (`button`, `input`, `select`, `textarea`, `table`, `blockquote`, `nav`, `dialog`, `details`) look styled and professional out-of-the-box inside `@layer mg.base`.
  - Reserved `.mg-*` classes as optional modifiers.
- [ ] **Step 2.3: Strict Size Budget Enforcement**:
  - Integrate `size-limit` in GitHub Actions CI to enforce the strict **< 8 kB (brotli/gzip)** threshold.

---

### ⚡ Phase 3: Zero-JS Interactive Components & a11y Defaults

*Goal: Deliver interactive UI patterns using standard HTML5 elements and modern CSS selectors without JavaScript.*

- [x] **Step 3.1: Native `<dialog>` Modal**:
  - Styled `dialog.mg-dialog, dialog.mg-modal` and `::backdrop` with top-layer positioning, backdrop blur, and native Escape key dismissal.
- [x] **Step 3.2: Native `<details>` & `<summary>` Accordions**:
  - Styled `details.mg-collapse, details.mg-accordion` with fluid disclosure indicator and native accordion grouping support via HTML `name="..."` attribute.
- [x] **Step 3.3: Popover API Integration**:
  - Added `src/scss/extensions/mg-popover.scss` styling `[popover]` attributes for zero-JS dropdowns, menus, and tooltips.
- [x] **Step 3.4: Dynamic States with `:has()`**:
  - Added `.mg-field:has(...)` with dynamic focus and `:user-invalid` styling.
- [x] **Step 3.5: Accessibility Defaults**:
  - Visible, high-contrast `:focus-visible` rings across buttons, links, and form elements.

---

### 🛠️ Phase 4: Modern Ecosystem & Design Tokens

*Goal: Multi-output packaging, open design tokens, and seamless toolchain integration.*

- [x] **Step 4.1: Open Design Tokens (`tokens.json`)**:
  - Created `src/tokens.json` defining colors, spacing, typography scales, and shadows, and exposed `./tokens` subpath export in `package.json`.
- [ ] **Step 4.2: Modular Build Targets**:
  - Build standalone `dist/mgplus.semantic.css` and `dist/mgplus.utilities.css` targets.
- [ ] **Step 4.3: Interactive Documentation & Sandbox**:
  - Modernized demo showcasing zero-JS components, theme switching, and live OKLCH palette customization.

