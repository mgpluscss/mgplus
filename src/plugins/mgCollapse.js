export default function registergCollapses() {
  document.querySelectorAll("[data-toggle~=collapse]").forEach(setupCollapse);
  function setupCollapse(collapseToggle) {
    const targetToCollapse = collapseToggle.getAttribute("data-target");
    collapseToggle.setAttribute("aria-haspopup", "true");
    collapseToggle.setAttribute("aria-expanded", "false");

    const collapseContent = targetToCollapse
      ? document.getElementById(targetToCollapse)
      : collapseToggle.nextElementSibling;

    collapseContent.setAttribute("aria-hidden", "true");

    collapseToggle.onclick = toggleCollapse;

    function toggleCollapse(e) {
      e.preventDefault();
      e.stopPropagation();
      if (collapseToggle.getAttribute("aria-expanded") === "true") {
        collapseToggle.setAttribute("aria-expanded", "false");
        collapseToggle.setAttribute("aria-hidden", "true");
        collapseToggle.classList.remove("opened");
        return;
      }

      collapseToggle.setAttribute("aria-expanded", "true");
      collapseToggle.setAttribute("aria-hidden", "false");
      collapseToggle.classList.add("opened");
      return;
    }
  }
}
