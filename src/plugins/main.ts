import { registerCollapses, registergCollapses } from "./mgCollapse";
import { registerDropdowns } from "./mgDropdown";
import { registerModals } from "./mgModal";
import { registerNavs } from "./mgNav";
import { registerTabs } from "./mgTabs";
import { registerDarkMode, applyTheme, getCurrentTheme, getPreferredTheme } from "./mgDarkMode";

export {
  registerCollapses,
  registergCollapses,
  registerDropdowns,
  registerModals,
  registerNavs,
  registerTabs,
  registerDarkMode,
  applyTheme,
  getCurrentTheme,
  getPreferredTheme,
};

export function registerDarkModePlugin() {
  registerDarkMode();
}

export type PluginName =
  | "all"
  | "dropdowns"
  | "dropdown"
  | "modals"
  | "modal"
  | "navs"
  | "nav"
  | "tabs"
  | "tab"
  | "collapses"
  | "collapse"
  | "darkmode"
  | "theme";

export function registerPlugins(plugins?: string[] | string) {
  if (!plugins) return;

  const list = Array.isArray(plugins)
    ? plugins
    : plugins.split(",").map((p) => p.trim());

  for (const pluginName of list) {
    const normalized = pluginName.toLowerCase().trim();
    switch (normalized) {
      case "all":
        registerDropdowns();
        registerModals();
        registerNavs();
        registerTabs();
        registerCollapses();
        registerDarkMode();
        return;
      case "dropdowns":
      case "dropdown":
        registerDropdowns();
        break;
      case "modals":
      case "modal":
        registerModals();
        break;
      case "navs":
      case "nav":
        registerNavs();
        break;
      case "tabs":
      case "tab":
        registerTabs();
        break;
      case "collapses":
      case "collapse":
        registerCollapses();
        break;
      case "darkmode":
      case "theme":
        registerDarkMode();
        break;
      default:
        console.warn(`mgplus - unknown plugin: ${pluginName}`);
        break;
    }
  }
}

// Extracts the params from the currently running script
function getScriptUrl(): string | null {
  if (typeof document === "undefined") return null;

  const current = document.currentScript as HTMLScriptElement | null;
  if (current?.src) return current.src;

  const scripts = document.getElementsByTagName("script");
  for (let i = scripts.length - 1; i >= 0; i--) {
    const src = scripts[i]?.src;
    if (src && (src.includes("mgplus-vanilla") || src.includes("mgplus"))) {
      return src;
    }
  }
  return null;
}

// Gets Query Params from a URL string
function getQueryParam(name: string, url: string | null): string {
  if (!url) return "";
  try {
    const parsed = new URL(url, "https://dummy.base");
    return parsed.searchParams.get(name) || "";
  } catch {
    const escaped = name.replace(/[[\]]/g, "\\[$&]");
    const regex = new RegExp("[?&]" + escaped + "=([^&#]*)");
    const results = regex.exec(url);
    return results ? decodeURIComponent(results[1]) : "";
  }
}

export function autoRegister() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const run = () => {
    const scriptUrl = getScriptUrl();
    if (!scriptUrl) return;

    // Check both ?register= and ?plugins= parameters
    const plugins = getQueryParam("register", scriptUrl) || getQueryParam("plugins", scriptUrl);
    if (plugins) {
      registerPlugins(plugins);
    }
  };

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
}
 