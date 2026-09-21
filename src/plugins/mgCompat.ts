import { registerCollapses } from "./mgCollapse";
import { registerDropdowns } from "./mgDropdown";
import { registerModals } from "./mgModal";
import { registerNavs } from "./mgNav";
import { registerTabs } from "./mgTabs";
import { registerDarkMode } from "./mgDarkMode";

export interface BrowserSupport {
  /** Native HTML5 <dialog> and showModal() support */
  dialog: boolean;
  /** Native HTML5 Popover API support */
  popover: boolean;
  /** CSS :has() selector support */
  cssHas: boolean;
  /** Native HTML5 <details> and <summary> support */
  details: boolean;
  /** CSS light-dark() color function support */
  lightDark: boolean;
  /** CSS Cascade Layers (@layer) support */
  cascadeLayers: boolean;
}

export interface CompatOptions {
  /** If true, automatically install DOM/CSS polyfills and fallbacks for missing features. Defaults to true. */
  polyfills?: boolean;
  /** Force specific plugins to load even if browser natively supports the feature. */
  forcePlugins?: string[];
  /** Optional base URL to load standalone plugin script files if not bundled. */
  baseUrl?: string;
  /** Optional callback invoked with the detection results */
  onCheck?: (support: BrowserSupport, missing: (keyof BrowserSupport)[]) => void;
}

export interface CompatResult {
  support: BrowserSupport;
  missingFeatures: (keyof BrowserSupport)[];
  loadedPlugins: string[];
}

let isCompatInitialized = false;

/**
 * Returns whether the compatibility layer has already been initialized.
 */
export function isCompatActive(): boolean {
  return isCompatInitialized;
}

/**
 * Checks the current browser's support for modern HTML5 and CSS features required by MgPlus.
 */
export function checkBrowserSupport(): BrowserSupport {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return {
      dialog: true,
      popover: true,
      cssHas: true,
      details: true,
      lightDark: true,
      cascadeLayers: true,
    };
  }

  // 1. Native <dialog> and showModal()
  const dialog =
    typeof window.HTMLDialogElement !== "undefined" &&
    typeof HTMLDialogElement.prototype.showModal === "function";

  // 2. Native Popover API
  const popover =
    typeof HTMLElement !== "undefined" &&
    "popover" in HTMLElement.prototype &&
    typeof (HTMLElement.prototype as { showPopover?: () => void }).showPopover === "function";

  // 3. CSS :has() selector
  let cssHas: boolean;
  try {
    cssHas =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      (CSS.supports("selector(:has(*))") || CSS.supports("selector(:has(a))"));
  } catch {
    cssHas = false;
  }

  // 4. Native <details> disclosure element
  const detailsEl = document.createElement("details");
  const details = "open" in detailsEl && typeof detailsEl.open === "boolean";

  // 5. CSS light-dark() color function
  let lightDark: boolean;
  try {
    lightDark =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("color", "light-dark(#000, #fff)");
  } catch {
    lightDark = false;
  }

  // 6. CSS Cascade Layers (@layer)
  let cascadeLayers: boolean;
  try {
    cascadeLayers =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("@layer");
  } catch {
    cascadeLayers = false;
  }

  return {
    dialog,
    popover,
    cssHas,
    details,
    lightDark,
    cascadeLayers,
  };
}

/**
 * Returns a list of feature keys that are unsupported in the current browser.
 */
export function getMissingFeatures(support?: BrowserSupport): (keyof BrowserSupport)[] {
  const s = support || checkBrowserSupport();
  const missing: (keyof BrowserSupport)[] = [];

  if (!s.dialog) missing.push("dialog");
  if (!s.popover) missing.push("popover");
  if (!s.cssHas) missing.push("cssHas");
  if (!s.details) missing.push("details");
  if (!s.lightDark) missing.push("lightDark");
  if (!s.cascadeLayers) missing.push("cascadeLayers");

  return missing;
}

/**
 * Shims HTMLDialogElement methods and backdrop for older browsers.
 */
function polyfillDialog(): void {
  if (typeof document === "undefined") return;

  const patchDialog = (dialog: HTMLElement) => {
    const anyDialog = dialog as unknown as {
      showModal?: () => void;
      close?: () => void;
      open?: boolean;
    };

    if (typeof anyDialog.showModal !== "function") {
      anyDialog.showModal = function () {
        dialog.setAttribute("open", "");
        let backdrop = document.querySelector(".mg-dialog-backdrop");
        if (!backdrop) {
          backdrop = document.createElement("div");
          backdrop.className = "mg-dialog-backdrop";
          backdrop.setAttribute(
            "style",
            "position: fixed; inset: 0; background: rgba(0, 0, 0, 0.4); z-index: 9998;"
          );
          backdrop.addEventListener("click", () => {
            if (typeof anyDialog.close === "function") {
              anyDialog.close();
            }
          });
          document.body.appendChild(backdrop);
        }
        dialog.style.zIndex = "9999";
      };
    }

    if (typeof anyDialog.close !== "function") {
      anyDialog.close = function () {
        dialog.removeAttribute("open");
        const backdrop = document.querySelector(".mg-dialog-backdrop");
        if (backdrop) backdrop.remove();
      };
    }
  };

  document.querySelectorAll<HTMLElement>("dialog").forEach(patchDialog);
}

/**
 * Fallback for HTML5 Popover API attributes ([popover], [popovertarget]).
 */
function polyfillPopover(): void {
  if (typeof document === "undefined") return;

  // Ensure un-opened popovers are hidden
  document.querySelectorAll<HTMLElement>("[popover]").forEach((el) => {
    if (!el.dataset.mgPopoverCompat) {
      el.dataset.mgPopoverCompat = "true";
      if (!el.hasAttribute("data-open")) {
        el.style.display = "none";
      }
    }
  });

  const show = (el: HTMLElement) => {
    el.setAttribute("data-open", "true");
    el.style.display = "block";
    el.style.position = "fixed";
    el.style.zIndex = "999";
  };

  const hide = (el: HTMLElement) => {
    el.removeAttribute("data-open");
    el.style.display = "none";
  };

  document.addEventListener("click", (e: MouseEvent) => {
    const trigger = (e.target as HTMLElement)?.closest<HTMLElement>("[popovertarget]");
    if (trigger) {
      e.preventDefault();
      const targetId = trigger.getAttribute("popovertarget");
      if (!targetId) return;
      const popoverEl = document.getElementById(targetId);
      if (!popoverEl) return;

      const isOpen = popoverEl.style.display !== "none" && popoverEl.hasAttribute("data-open");
      const action = trigger.getAttribute("popovertargetaction") || "toggle";

      if (action === "toggle") {
        if (isOpen) hide(popoverEl);
        else show(popoverEl);
      } else if (action === "show") {
        show(popoverEl);
      } else if (action === "hide") {
        hide(popoverEl);
      }
      return;
    }

    // Light dismiss: click outside open popovers
    document.querySelectorAll<HTMLElement>("[popover][data-open]").forEach((p) => {
      if (!p.contains(e.target as Node)) {
        hide(p);
      }
    });
  });

  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      document.querySelectorAll<HTMLElement>("[popover][data-open]").forEach(hide);
    }
  });
}

/**
 * Fallback for zero-JS CSS :has() selectors in tabs and navigation.
 */
function polyfillCssHas(): void {
  if (typeof document === "undefined") return;

  // 1. Tabs fallback: sync radio checked states to tab items and content
  const syncTabs = (container: HTMLElement) => {
    const radios = container.querySelectorAll<HTMLInputElement>(".mg-tabs--radio");
    const tabItems = container.querySelectorAll<HTMLElement>(".mg-tabs > ul > li");
    const tabContents = container.querySelectorAll<HTMLElement>(".mg-tabs--content");

    radios.forEach((radio, index) => {
      if (radio.checked) {
        tabItems.forEach((item, i) => {
          item.classList.toggle("active", i === index);
        });
        tabContents.forEach((content, i) => {
          content.classList.toggle("active", i === index);
          content.style.display = i === index ? "block" : "none";
        });
      }
    });
  };

  document.querySelectorAll<HTMLElement>(".mg-tabs").forEach((tabsContainer) => {
    syncTabs(tabsContainer);
    tabsContainer.addEventListener("change", (e) => {
      const target = e.target as HTMLElement | null;
      if (target && target.classList.contains("mg-tabs--radio")) {
        syncTabs(tabsContainer);
      }
    });
  });

  // 2. Navigation fallback: highlight li when child link has aria-current or .active
  document.querySelectorAll<HTMLElement>(".mg-nav li").forEach((li) => {
    const hasCurrent = li.querySelector('a[aria-current="page"], a.active');
    if (hasCurrent) {
      li.classList.add("active");
    }
  });
}

/**
 * Fallback for HTML5 <details> and <summary> disclosure in legacy browsers.
 */
function polyfillDetails(): void {
  if (typeof document === "undefined") return;

  document.addEventListener("click", (e: MouseEvent) => {
    const summary = (e.target as HTMLElement)?.closest<HTMLElement>("summary");
    if (!summary) return;
    const details = summary.closest<HTMLDetailsElement>("details");
    if (!details) return;

    e.preventDefault();
    const isOpen = details.hasAttribute("open");
    if (isOpen) {
      details.removeAttribute("open");
    } else {
      const groupName = details.getAttribute("name");
      if (groupName) {
        document.querySelectorAll(`details[name="${groupName}"]`).forEach((d) => {
          d.removeAttribute("open");
        });
      }
      details.setAttribute("open", "");
    }
  });
}

/**
 * Fallback for CSS light-dark() by injecting resolved custom properties on :root.
 */
function polyfillLightDark(): void {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  const applyColors = () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark" ||
      (document.documentElement.getAttribute("data-theme") !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--mg-color-initial", "var(--mg-color-dark)");
      root.style.setProperty("--mg-color-secondary", "oklch(92% 0.01 260)");
      root.style.setProperty("--mg-color-tertiary", "oklch(75% 0.015 260)");
      root.style.setProperty("--mg-color-quaternary", "oklch(55% 0.015 260)");
      root.style.setProperty("--mg-color-quinary", "oklch(25% 0.015 260)");
    } else {
      root.style.setProperty("--mg-color-initial", "var(--mg-color-light)");
      root.style.setProperty("--mg-color-secondary", "oklch(20% 0.015 260)");
      root.style.setProperty("--mg-color-tertiary", "oklch(40% 0.02 260)");
      root.style.setProperty("--mg-color-quaternary", "oklch(60% 0.02 260)");
      root.style.setProperty("--mg-color-quinary", "oklch(90% 0.01 260)");
    }
  };

  applyColors();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyColors);
}

/**
 * Dynamically loads an external JavaScript file into the document head.
 */
export function loadScript(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      resolve();
      return;
    }

    const existing = document.querySelector(`script[src="${url}"]`);
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
    document.head.appendChild(script);
  });
}

/**
 * Evaluates browser capabilities and automatically registers the required fallback plugins.
 * If the browser natively supports modern CSS and HTML5 features, zero unnecessary plugins are executed.
 */
export function registerCompat(options: CompatOptions = {}): CompatResult {
  const support = checkBrowserSupport();
  const missing = getMissingFeatures(support);
  const loadedPlugins: string[] = [];

  const enablePolyfills = options.polyfills !== false;
  const force = options.forcePlugins?.map((p) => p.toLowerCase()) || [];

  if (options.onCheck) {
    options.onCheck(support, missing);
  }

  // 1. Dialog support (modals & drawers)
  if (!support.dialog || force.includes("modal") || force.includes("modals")) {
    if (enablePolyfills) polyfillDialog();
    registerModals();
    loadedPlugins.push("modal");
  }

  // 2. Popover support (dropdowns & tooltips)
  if (!support.popover || force.includes("dropdown") || force.includes("dropdowns")) {
    if (enablePolyfills) polyfillPopover();
    registerDropdowns();
    loadedPlugins.push("dropdown");
  }

  // 3. CSS :has() support (tabs and navs)
  if (!support.cssHas || force.includes("tabs") || force.includes("tab")) {
    if (enablePolyfills) polyfillCssHas();
    registerTabs();
    loadedPlugins.push("tabs");
  }

  if (!support.cssHas || force.includes("nav") || force.includes("navs")) {
    registerNavs();
    loadedPlugins.push("nav");
  }

  // 4. HTML <details> support (collapses & accordions)
  if (!support.details || force.includes("collapse") || force.includes("collapses")) {
    if (enablePolyfills) polyfillDetails();
    registerCollapses();
    loadedPlugins.push("collapse");
  }

  // 5. CSS light-dark() support (theme & dark mode)
  if (!support.lightDark || force.includes("theme") || force.includes("darkmode")) {
    if (enablePolyfills) polyfillLightDark();
    registerDarkMode();
    loadedPlugins.push("darkmode");
  }

  isCompatInitialized = true;

  return {
    support,
    missingFeatures: missing,
    loadedPlugins,
  };
}

/**
 * Async version of registerCompat that also supports downloading external plugin scripts if configured.
 */
export async function loadRequiredPlugins(options: CompatOptions = {}): Promise<CompatResult> {
  const result = registerCompat(options);

  if (options.baseUrl && result.loadedPlugins.length > 0) {
    for (const plugin of result.loadedPlugins) {
      try {
        await loadScript(`${options.baseUrl.replace(/\/$/, "")}/mg-${plugin}.js`);
      } catch {
        // In-memory fallback is already activated
      }
    }
  }

  return result;
}

/**
 * Alias for registerCompat with automatic browser detection.
 */
export const autoCompat = registerCompat;
