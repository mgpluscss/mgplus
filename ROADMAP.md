# MgPlus (Mg+) Roadmap

This document outlines the strategic roadmap, maintenance milestones, and refactoring priorities for **MgPlus**, a micro CSS library designed to build elegant web pages efficiently.

---

## 🎯 Project Vision

* **Ultra-lightweight**: Under 70 KB minified CSS, zero runtime JS dependencies.
* **Plug & Play**: Minimalist vanilla JS plugins for essential interactivity with zero configuration.
* **Developer Friendly**: Seamless CDN standalone usage and modern package exports for bundlers (Vite, Webpack, Rollup).
* **Standards-compliant**: Progressive enhancement, accessible semantics (WCAG), and modern CSS architecture.

---

## 📍 Milestones & Status

```
[x] v1.5: Stability, Packaging & Standalone Priority (Current)
└── [ ] v1.6: Testing, Accessibility & SCSS Modernization
    └── [ ] v1.7: Modular Builds & Component Enhancements
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

### 🚧 Milestone 2: v1.6 — Testing, Accessibility & SCSS DX

*Goal: Add automated unit test coverage, improve keyboard navigation/a11y, and modernize SCSS modules.*

- [ ] **Automated Testing Suite**:
  - Setup [Vitest](https://vitest.dev/) with `jsdom` or `happy-dom` for automated headless DOM testing.
  - Write test suites for all plugins (`mgDropdown`, `mgModal`, `mgTabs`, `mgDarkMode`, `mgCollapse`, `mgNav`).
- [ ] **Accessibility (a11y) Polish**:
  - Focus trap inside `mgModal` when open, restoring focus to trigger element on close.
  - Full keyboard navigation for `mgTabs` (Arrow keys `Left`/`Right`, `Home`, `End`).
  - Enhanced ARIA live regions for alerts and notifications.
- [ ] **SCSS Modernization**:
  - Migrate from deprecated `@import` to Dart Sass `@use` and `@forward`.
  - Eliminate top-level `/* stylelint-disable */` in `mg-variables.scss` and resolve underlying Stylelint rules.
- [ ] **Bundle Size Monitoring**:
  - Integrate `size-limit` into GitHub Actions to enforce strict size thresholds on PRs.

---

### 🔮 Milestone 3: v1.7 — Modular Builds & Component Enhancements

*Goal: Provide fine-grained component imports and additional common UI primitives.*

- [ ] **Modular CSS & SCSS Exports**:
  - Export standalone stylesheets: `mgplus/css/grid.css`, `mgplus/css/buttons.css`, `mgplus/css/core.css`.
  - Allow selective SCSS `@use "mgplus/scss/grid"`.
- [ ] **New UI Primitives**:
  - Toast / Snackbars component with auto-dismiss timers.
  - Accordion component with single-expand mode built upon `mgCollapse`.
  - Skeleton loading placeholders.
- [ ] **Documentation / Playground Enhancements**:
  - Interactive component playground with live CSS variable tweak controls.
  - Copy-to-clipboard code snippets for all components.

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
- [ ] **Optional Web Components / Custom Elements**:
  - Provide optional `<mg-modal>`, `<mg-dropdown>`, `<mg-tabs>` custom elements for zero-boilerplate usage in any frontend framework (React, Vue, Svelte, Angular, Astro).
