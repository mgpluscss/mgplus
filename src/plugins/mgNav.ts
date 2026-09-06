export function registerNavs() {
  if (typeof document === "undefined") return;

  document.querySelectorAll<HTMLElement>("[data-toggle~=nav]").forEach(setupNav);

  function setupNav(nav: HTMLElement) {
    if (nav.dataset.mgNavInitialized === "true") return;
    nav.dataset.mgNavInitialized = "true";

    const items = nav.querySelectorAll<HTMLElement>("li");

    items.forEach((item) => {
      if (item.classList.contains("active") || item.getAttribute("data-active") === "true") {
        item.setAttribute("data-active", "true");
        item.classList.add("active");
      }
    });

    nav.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const listItem = target.closest("li");
      if (!listItem || !nav.contains(listItem)) return;

      if (listItem.getAttribute("data-active") !== "true") {
        // Deactivate all items in this nav
        items.forEach((item) => {
          item.classList.remove("active");
          item.setAttribute("data-active", "false");
        });

        // Activate selected item
        listItem.classList.add("active");
        listItem.setAttribute("data-active", "true");
      }
    });
  }
}

