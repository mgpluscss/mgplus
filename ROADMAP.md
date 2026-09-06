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

---

## 📍 Milestones & Status

```
[x] v1.5: Stability, Packaging & Standalone Priority (Current)
└── [ ] v1.6: Multi-Framework Hybrid Architecture (Light-DOM Custom Elements & Controllers) ⭐
    └── [ ] v1.7: SCSS Modernization, Modular Builds & Primitives
        └── [ ] v2.0: Next-Gen CSS Architecture (@layer & light-dark)
```

---

### ✅ Milestone 1: v1.5 — Stability, Packaging & Standalone Priority

*Goal: Stabilize the build pipeline, prioritize the standalone CDN bundle, clean up dependencies, and fix plugin bugs.*

- [x] **Package Manager & Dependencies**:
  - Standardized on **npm** (`package-lock.json` committed, yarn references removed).
  - Moved demo-only dependency (`@jaames/iro`) to `devDependencies` for zero-dependency runtime.
  - Fixed `repository` URL and package metadata (`files` list matching case).
- [x] **Packaging & Exports**:
  - Corrected entry points in `package.json` (`main`, `module`, `types`, `style`, `unpkg`, `jsdelivr`).
  - Added modern conditional `exports` map for bundlers.
  - Dedicated `tsconfig.lib.json` fixing DOM type errors during TypeScript `.d.ts` declaration generation.
  - Cleaned up duplicate PostCSS configs (`postcss.config.cjs` removed, unused Node `os` import stripped).
- [x] **Plugin Fixes & Refactoring**:
  - **Auto-registration**: Automatic script execution on browser load supporting both `?register=` and `?plugins=` query parameters.
  - **mgCollapse**: Corrected typo (`registerCollapses`, with deprecated `registergCollapses` alias) and fixed ARIA attribute management.
  - **mgDropdown**: Replaced per-element document click listeners with a single delegated listener (eliminating memory leaks) and added `Escape` key dismissal.
  - **mgModal**: Added support for multiple close buttons, backdrop click dismissal, `Escape` key listener, and dialog ARIA roles.
  - **mgDarkMode**: Fixed theme detection to respect system `prefers-color-scheme`, added `localStorage` persistence, and exported theme utility helpers.
  - **mgNav & mgTabs**: Improved nested element handling using `closest()`, proper ARIA attributes (`role="tab"`, `aria-selected`), and strict typing.
  - Added initialization guards across all plugins to prevent duplicate listener bindings.
  - Removed lingering `console.log` statements from production bundles.
- [x] **CI/CD Modernization**:
  - Upgraded GitHub Actions to `checkout@v4`, `setup-node@v4`, and Node 20 LTS.
  - Switched release workflows to `npm publish`.

---

### 🚧 Milestone 2: v1.6 — Multi-Framework Hybrid Architecture (PRIORITY) ⭐

*Goal: Implement the 3-Tier Hybrid Strategy detailed in [ARCHITECTURE.md](file:///home/modev/gh/mgpluscss/mgplus/ARCHITECTURE.md), enabling seamless integration into React, Vue, Svelte, Angular, Solid, and Astro from a single codebase.*

- [ ] **Headless Core Controllers**:
  - Extract pure, framework-free UI state controllers (`createModalController`, `createDropdownController`, `createTabsController`, `createCollapseController`, `createThemeController`).
  - Share 100% of UI behavior, keyboard handling, and ARIA logic between Tier 2 (Vanilla data-attributes) and Tier 3 (Custom Elements).
  - Standardize custom event contracts (`mg:open`, `mg:close`, `mg:change`, `mg:theme-change`).
- [ ] **Tier 3: Native Light-DOM Web Components**:
  - Implement zero-dependency Custom Elements using standard browser `HTMLElement` APIs (no Lit, Stencil, or runtime overhead):
    - `<mg-modal>`: Accessible modal dialog with backdrop dismiss, Escape key, and focus management.
    - `<mg-dropdown>`: Contextual menu with automatic click-outside and keyboard dismissal.
    - `<mg-tabs>`: Reactive tab list and tab panel management.
    - `<mg-collapse>`: Collapsible accordion panels with ARIA sync.
    - `<mg-darkmode>`: Declarative theme switcher syncing with `localStorage` and system preferences.
  - Use **Light DOM** (no `attachShadow`) so components retain 100% access to `mgplus.css` utility classes and `--mg-*` variables.
  - Automatic lifecycle cleanup in `disconnectedCallback()` to prevent memory leaks in SPAs.
- [ ] **TypeScript JSX Typings**:
  - Provide `JSX.IntrinsicElements` declarations for first-class TypeScript autocomplete in React, Preact, Vue, and Solid JSX/TSX files.
- [ ] **Automated Testing Suite**:
  - Setup [Vitest](https://vitest.dev/) with `jsdom` for automated testing.
  - Unit-test both Vanilla plugins and Custom Elements lifecycles (mounting, unmounting, programmatic open/close, event dispatching, keyboard accessibility).
- [ ] **Subpath Packaging**:
  - Add `./elements` subpath export in `package.json` (`import 'mgplus/elements'`).

---

### 🔮 Milestone 3: v1.7 — SCSS Modernization, Modular Builds & Primitives

*Goal: Upgrade SCSS architecture, provide selective component imports, and expand UI primitives.*

- [ ] **SCSS Modernization**:
  - Migrate from deprecated `@import` to Dart Sass `@use` and `@forward`.
  - Eliminate top-level `/* stylelint-disable */` in `mg-variables.scss` and resolve underlying Stylelint rules.
- [ ] **New UI Primitives**:
  - Toast / Snackbars component with auto-dismiss timers.
  - Accordion component with single-expand mode built upon `mgCollapse`.
  - Skeleton loading placeholders.
- [ ] **Bundle Size Monitoring**:
  - Integrate `size-limit` into GitHub Actions to enforce strict size thresholds on PRs.

---

### 🚀 Milestone 4: v2.0 — Next-Gen Modern CSS Architecture

*Goal: Modernize the core architecture leveraging native modern CSS baseline features.*

- [ ] **CSS Cascade Layers (`@layer`)**:
  - Structure CSS into `@layer reset, base, components, utilities;` to cleanly eliminate specificity clashes without `!important`.
- [ ] **Native CSS Nesting**:
  - Leverage native browser CSS nesting, simplifying build processing.
- [ ] **Modern Color Functions**:
  - Adopt native CSS `light-dark()` for zero-JS initial dark mode rendering.
  - Modern color spaces (`oklch` / `color-mix()`) for dynamic palettes.
- [ ] **Documentation / Playground Overhaul**:
  - Interactive multi-framework component playground (toggle between HTML, React, Vue, Svelte).
  - Live CSS variable customization and export.
