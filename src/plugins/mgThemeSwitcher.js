export default function registerThemeSwitcher(forceTheme) {
  applyTheme(forceTheme);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      console.log("mgplus - theme changed:", newTheme);
    });
  // Select all elements with data-toggle attribute containing "modal" and setup modal for each
  document.querySelectorAll("[data-toggle~=theme]").forEach(setupTheme);

  function applyTheme(customTheme) {
    if (customTheme && customTheme != "auto" && customTheme != "system") {
      document.documentElement.setAttribute("data-theme", customTheme);
      console.log("mgplus - theme applied (forced):", customTheme);
    } else {
      const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : false;

      document.documentElement.setAttribute("data-theme", defaultTheme);
      console.log("mgplus - theme applied (system):", defaultTheme);
    }
  }
  // Function to setup modal for an element
  function setupTheme(el) {
    // Select the modal and close button elements
    const newTheme = el.getAttribute("data-value");
    // Add event listener to the element to show modal on click
    el.addEventListener("click", function () {
      applyTheme(newTheme);
    });
  }
}
