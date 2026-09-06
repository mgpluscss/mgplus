export function registerTabs() {
  if (typeof document === "undefined") return;

  document.querySelectorAll<HTMLElement>("[data-toggle~=tabs]").forEach(setupTabs);

  function setupTabs(tabs: HTMLElement) {
    if (tabs.dataset.mgTabsInitialized === "true") return;
    tabs.dataset.mgTabsInitialized = "true";

    const items = tabs.querySelectorAll<HTMLElement>(".mg-tabs--item");

    items.forEach((item) => {
      item.setAttribute("role", "tab");
      const targetToShow = item.getAttribute("data-target");
      if (targetToShow) {
        item.setAttribute("aria-controls", targetToShow);
      }

      const isActive =
        item.classList.contains("active") ||
        item.getAttribute("data-active") === "true";

      if (isActive) {
        item.setAttribute("data-active", "true");
        item.setAttribute("aria-selected", "true");
        item.classList.add("active");

        if (targetToShow) {
          const el = document.getElementById(targetToShow);
          if (el) {
            el.classList.add("active");
            el.setAttribute("aria-hidden", "false");
          }
        }
      } else {
        item.setAttribute("data-active", "false");
        item.setAttribute("aria-selected", "false");
        if (targetToShow) {
          const el = document.getElementById(targetToShow);
          if (el) {
            el.setAttribute("aria-hidden", "true");
          }
        }
      }
    });

    tabs.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const tabItem = target.closest<HTMLElement>(".mg-tabs--item");
      if (!tabItem || !tabs.contains(tabItem)) return;

      e.preventDefault();

      if (tabItem.getAttribute("data-active") !== "true") {
        // Deactivate all tabs
        items.forEach((item) => {
          item.classList.remove("active");
          item.setAttribute("data-active", "false");
          item.setAttribute("aria-selected", "false");

          const targetToHide = item.getAttribute("data-target");
          if (targetToHide) {
            const el = document.getElementById(targetToHide);
            if (el) {
              el.classList.remove("active");
              el.setAttribute("aria-hidden", "true");
            }
          }
        });

        // Activate selected tab
        tabItem.classList.add("active");
        tabItem.setAttribute("data-active", "true");
        tabItem.setAttribute("aria-selected", "true");

        const targetToShow = tabItem.getAttribute("data-target");
        if (targetToShow) {
          const el = document.getElementById(targetToShow);
          if (el) {
            el.classList.add("active");
            el.setAttribute("aria-hidden", "false");
          }
        }
      }
    });
  }
}

