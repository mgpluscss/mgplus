let isDarkModeInitialized = false;

export function getPreferredTheme(): "dark" | "light" {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function getCurrentTheme(): string {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") || "light";
}

export function applyTheme(theme: string | null, persist = true) {
  if (typeof document === "undefined") return;

  const targetTheme =
    !theme || theme === "auto" || theme === "system"
      ? getPreferredTheme()
      : theme;

  document.documentElement.setAttribute("data-theme", targetTheme);

  if (persist && typeof localStorage !== "undefined") {
    if (theme && theme !== "auto" && theme !== "system") {
      localStorage.setItem("mg-theme", theme);
    } else {
      localStorage.removeItem("mg-theme");
    }
  }
}

export function registerDarkMode() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // Check persisted theme or initial attribute
  const savedTheme = typeof localStorage !== "undefined" ? localStorage.getItem("mg-theme") : null;
  const initialTheme = savedTheme || document.documentElement.getAttribute("data-theme") || "auto";

  applyTheme(initialTheme, false);

  if (!isDarkModeInitialized) {
    isDarkModeInitialized = true;
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        const stored = typeof localStorage !== "undefined" ? localStorage.getItem("mg-theme") : null;
        if (!stored) {
          applyTheme("auto", false);
        }
      });
  }

  document.querySelectorAll<HTMLElement>("[data-toggle~=theme]").forEach((el) => {
    if (el.dataset.mgThemeInitialized === "true") return;
    el.dataset.mgThemeInitialized = "true";

    const targetTheme = el.getAttribute("data-value") || "auto";
    el.addEventListener("click", () => {
      applyTheme(targetTheme, true);
    });
  });
}

