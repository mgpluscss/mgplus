export function registerDropdowns() {
  let currentDropdown: Element | null = null;
  document.querySelectorAll("[data-toggle~=dropdown]").forEach(setupDropdown);

  function setupDropdown(dropdownToggle: Element) {
    dropdownToggle.setAttribute("aria-haspopup", "true");
    dropdownToggle.setAttribute("aria-expanded", "false");

    const dropdownContent = dropdownToggle.nextElementSibling;
    dropdownContent?.setAttribute("aria-hidden", "true");
    dropdownToggle.addEventListener("click", toggleDropdown);

    function toggleDropdown(e: Event) {
      e.preventDefault();
      e.stopPropagation();
      if (dropdownToggle.getAttribute("aria-expanded") === "true") {
        closeDropdown(dropdownToggle, dropdownContent);
        return;
      }
      closeCurrent();

      openDropdown(dropdownToggle, dropdownContent);
    }

    function openDropdown(toggle: Element, content: Element | null) {
      toggle.setAttribute("aria-expanded", "true");
      content?.setAttribute("aria-hidden", "false");
      toggle.classList.add("opened");

      // Focus the first element in the dropdown
      if (content?.children && content.children.length > 0 && content.children[0]) {
        if (content.children[0] instanceof HTMLElement) {
          (content.children[0] as HTMLElement).focus();
        }
      }
      currentDropdown = toggle;
    }

    function closeDropdown(toggle: Element, content: Element | null) {
      toggle.setAttribute("aria-expanded", "false");
      content?.setAttribute("aria-hidden", "true");
      toggle.classList.remove("opened");
      currentDropdown = null;
    }

    function closeCurrent() {
      if (currentDropdown) {
        const content = currentDropdown.nextElementSibling;
        closeDropdown(currentDropdown, content);
      }
    }

    document.addEventListener("click", function (event: Event) {
      const element = event.target as Element;

      if (currentDropdown && !currentDropdown.contains(element) && !dropdownContent?.contains(element)) {
        closeCurrent();
      }
    });
  }
}
