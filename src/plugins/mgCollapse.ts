let collapsesController: AbortController | null = null;

export function registerCollapses() {
  if (typeof document === "undefined") return;

  unregisterCollapses();
  collapsesController = new AbortController();
  const { signal } = collapsesController;

  document.querySelectorAll<HTMLElement>("[data-toggle~=collapse]").forEach(setupCollapse);

  function setupCollapse(collapseToggle: HTMLElement) {
    if (collapseToggle.dataset.mgCollapseInitialized === "true") {
      return;
    }
    collapseToggle.dataset.mgCollapseInitialized = "true";

    const targetToCollapse = collapseToggle.getAttribute("data-target");
    collapseToggle.setAttribute("aria-haspopup", "true");
    if (!collapseToggle.hasAttribute("aria-expanded")) {
      collapseToggle.setAttribute("aria-expanded", "false");
    }

    const collapseContent = targetToCollapse
      ? document.getElementById(targetToCollapse)
      : (collapseToggle.nextElementSibling as HTMLElement | null);

    if (collapseContent && !collapseContent.hasAttribute("aria-hidden")) {
      collapseContent.setAttribute("aria-hidden", "true");
    }

    collapseToggle.addEventListener("click", toggleCollapse, { signal });

    function toggleCollapse(e: Event) {
      e.preventDefault();
      e.stopPropagation();

      const isExpanded = collapseToggle.getAttribute("aria-expanded") === "true";
      const nextState = !isExpanded;

      collapseToggle.setAttribute("aria-expanded", String(nextState));
      collapseToggle.classList.toggle("opened", nextState);

      if (collapseContent) {
        collapseContent.setAttribute("aria-hidden", String(!nextState));
        collapseContent.classList.toggle("opened", nextState);
      }
    }
  }
}

export function unregisterCollapses() {
  if (collapsesController) {
    collapsesController.abort();
    collapsesController = null;
  }
  if (typeof document !== "undefined") {
    document.querySelectorAll<HTMLElement>("[data-toggle~=collapse]").forEach((el) => {
      delete el.dataset.mgCollapseInitialized;
    });
  }
}

/** @deprecated Use registerCollapses instead */
export const registergCollapses = registerCollapses;

