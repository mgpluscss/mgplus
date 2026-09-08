let isModalKeydownInitialized = false;

function openModal(modal: HTMLElement) {
  modal.classList.add("opened");
  modal.setAttribute("aria-hidden", "false");

  // Focus modal or first interactive element inside it
  const focusable = modal.querySelector<HTMLElement>(
    "input, button, select, textarea, a[href], [tabindex]:not([tabindex='-1'])"
  );
  if (focusable) {
    focusable.focus();
  }
}

function closeModal(modal: HTMLElement) {
  modal.classList.remove("opened");
  modal.setAttribute("aria-hidden", "true");
}

export function registerModals() {
  if (typeof document === "undefined") return;

  if (!isModalKeydownInitialized) {
    isModalKeydownInitialized = true;
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        document.querySelectorAll<HTMLElement>(".mg-modal.opened").forEach((m) => {
          closeModal(m);
        });
      }
    });
  }

  document.querySelectorAll<HTMLElement>("[data-toggle~=modal]").forEach(setupModal);

  function setupModal(trigger: HTMLElement) {
    if (trigger.dataset.mgModalInitialized === "true") return;
    trigger.dataset.mgModalInitialized = "true";

    const targetId = trigger.getAttribute("data-target");
    if (!targetId) return;

    const modal = document.getElementById(targetId);
    if (!modal) return;

    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    if (!modal.classList.contains("opened")) {
      modal.setAttribute("aria-hidden", "true");
    }

    trigger.addEventListener("click", (e: Event) => {
      e.preventDefault();
      openModal(modal);
    });

    // Close on any element with data-action="close"
    modal.querySelectorAll<HTMLElement>("[data-action=close]").forEach((closeBtn) => {
      if (closeBtn.dataset.mgCloseInitialized === "true") return;
      closeBtn.dataset.mgCloseInitialized = "true";

      closeBtn.addEventListener("click", (ev: Event) => {
        ev.stopPropagation();
        closeModal(modal);
      });
    });

    // Close on clicking backdrop (direct click on modal wrapper)
    modal.addEventListener("click", (e: MouseEvent) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  }
}

