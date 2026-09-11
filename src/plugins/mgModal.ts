let isModalInitialized = false;

function openModal(dialog: HTMLDialogElement) {
  if (typeof dialog.showModal === "function" && !dialog.open) {
    dialog.showModal();
  }

  const focusable = dialog.querySelector<HTMLElement>(
    "input, button, select, textarea, a[href], [tabindex]:not([tabindex='-1'])"
  );
  if (focusable) {
    focusable.focus();
  }
}

function closeModal(dialog: HTMLDialogElement) {
  if (typeof dialog.close === "function" && dialog.open) {
    dialog.close();
  }
}

export function registerModals() {
  if (typeof document === "undefined") return;

  if (!isModalInitialized) {
    isModalInitialized = true;

    // Close native dialog when clicking on its backdrop
    document.addEventListener("click", (e: MouseEvent) => {
      const target = e.target;
      if (
        target instanceof HTMLDialogElement &&
        (target.classList.contains("mg-modal") || target.classList.contains("mg-dialog")) &&
        target.open
      ) {
        const rect = target.getBoundingClientRect();
        const isInDialog =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;
        if (!isInDialog) {
          closeModal(target);
        }
      }
    });

    // Close on any element with data-action="close"
    document.addEventListener("click", (e: MouseEvent) => {
      const closeBtn = (e.target as HTMLElement)?.closest<HTMLElement>("[data-action=close]");
      if (!closeBtn) return;
      const dialog = closeBtn.closest<HTMLDialogElement>("dialog.mg-modal, dialog.mg-dialog");
      if (dialog) {
        e.stopPropagation();
        closeModal(dialog);
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
    if (!(modal instanceof HTMLDialogElement)) return;

    trigger.addEventListener("click", (e: Event) => {
      e.preventDefault();
      openModal(modal);
    });
  }
}
