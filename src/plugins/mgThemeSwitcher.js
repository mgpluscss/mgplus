export default function registerThemeSwitcher() {
  const current = document.documentElement.getAttribute("data-theme");

  applyTheme(current ? current : "light");

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      console.log("mgplus - theme changed:", newTheme);
    });
  // Select all elements with data-toggle attribute containing "theme" and setup theme for each
  document.querySelectorAll("[data-toggle~=theme]").forEach(setupTheme);

  function applyTheme(customTheme) {
    if (customTheme && customTheme != "auto" && customTheme != "system") {
      document.documentElement.setAttribute("data-theme", customTheme);
      console.log("mgplus - theme applied (forced):", customTheme);
    } else {
      const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      document.documentElement.setAttribute("data-theme", defaultTheme);
      console.log("mgplus - theme applied (system):", defaultTheme);
    }
  }
  // Function to setup theme for an element
  function setupTheme(el) {
    // Select target theme
    const newTheme = el.getAttribute("data-value");
    // Add event listener to the element to theme switcher
    el.addEventListener("click", function () {
      applyTheme(newTheme);
    });
  }
}
