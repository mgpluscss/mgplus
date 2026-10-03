let dropdownController: AbortController | null = null;
let currentDropdown: HTMLElement | null = null;

function closeDropdown(toggle: HTMLElement, content: HTMLElement | null) {
  toggle.setAttribute("aria-expanded", "false");
  content?.setAttribute("aria-hidden", "true");
  toggle.classList.remove("opened");
  content?.classList.remove("opened");
  toggle.blur();
  if (currentDropdown === toggle) {
    currentDropdown = null;
  }
}

function openDropdown(toggle: HTMLElement, content: HTMLElement | null) {
  toggle.setAttribute("aria-expanded", "true");
  content?.setAttribute("aria-hidden", "false");
  toggle.classList.add("opened");
  content?.classList.add("opened");

  // Focus the first interactive element in the dropdown
  const firstChild = content?.querySelector<HTMLElement>(
    "a, button, input, [tabindex]:not([tabindex='-1'])"
  ) || (content?.children[0] as HTMLElement | undefined);

  if (firstChild && typeof firstChild.focus === "function") {
    firstChild.focus();
  }

  currentDropdown = toggle;
}

function closeCurrent() {
  if (currentDropdown) {
    const target = currentDropdown.getAttribute("data-target");
    const content = target
      ? document.getElementById(target)
      : (currentDropdown.nextElementSibling as HTMLElement | null);
    closeDropdown(currentDropdown, content);
  }
}

export function registerDropdowns() {
  if (typeof document === "undefined") return;

  unregisterDropdowns();
  dropdownController = new AbortController();
  const { signal } = dropdownController;

  document.addEventListener("click", (event: Event) => {
    const element = event.target as Node;
    if (!currentDropdown) return;

    const target = currentDropdown.getAttribute("data-target");
    const content = target
      ? document.getElementById(target)
      : (currentDropdown.nextElementSibling as HTMLElement | null);

    if (
      !currentDropdown.contains(element) &&
      (!content || !content.contains(element))
    ) {
      closeCurrent();
    }
  }, { signal });

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" && currentDropdown) {
      const toggleToFocus = currentDropdown;
      closeCurrent();
      toggleToFocus.focus();
    }
  }, { signal });

  document.querySelectorAll<HTMLElement>("[data-toggle~=dropdown]").forEach(setupDropdown);

  function setupDropdown(dropdownToggle: HTMLElement) {
    if (dropdownToggle.dataset.mgDropdownInitialized === "true") return;
    dropdownToggle.dataset.mgDropdownInitialized = "true";

    dropdownToggle.setAttribute("aria-haspopup", "true");
    if (!dropdownToggle.hasAttribute("aria-expanded")) {
      dropdownToggle.setAttribute("aria-expanded", "false");
    }

    const target = dropdownToggle.getAttribute("data-target");
    const dropdownContent = target
      ? document.getElementById(target)
      : (dropdownToggle.nextElementSibling as HTMLElement | null);

    if (dropdownContent && !dropdownContent.hasAttribute("aria-hidden")) {
      dropdownContent.setAttribute("aria-hidden", "true");
    }

    dropdownToggle.addEventListener("click", (e: Event) => {
      e.preventDefault();
      e.stopPropagation();

      const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeDropdown(dropdownToggle, dropdownContent);
      } else {
        closeCurrent();
        openDropdown(dropdownToggle, dropdownContent);
      }
    }, { signal });
  }
}

export function unregisterDropdowns() {
  closeCurrent();
  if (dropdownController) {
    dropdownController.abort();
    dropdownController = null;
  }
  if (typeof document !== "undefined") {
    document.querySelectorAll<HTMLElement>("[data-toggle~=dropdown]").forEach((el) => {
      delete el.dataset.mgDropdownInitialized;
    });
  }
}

