let isModalInitialized = false;

export function openModal(dialog: HTMLDialogElement) {
  if (typeof dialog.showModal === "function" && !dialog.open) {
    dialog.classList.remove("mg-modal--closing");
    dialog.showModal();
  }

  const focusable = dialog.querySelector<HTMLElement>(
    "input, button, select, textarea, a[href], [tabindex]:not([tabindex='-1'])"
  );
  if (focusable) {
    focusable.focus();
  }
}

export function closeModal(dialog: HTMLDialogElement) {
  if (typeof dialog.close === "function" && dialog.open) {
    if (dialog.classList.contains("mg-modal--closing")) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      dialog.close();
      return;
    }

    dialog.classList.add("mg-modal--closing");

    let closed = false;
    const finishClose = () => {
      if (closed) return;
      closed = true;
      dialog.classList.remove("mg-modal--closing");
      dialog.removeEventListener("animationend", finishClose);
      if (dialog.open) {
        dialog.close();
      }
    };

    dialog.addEventListener("animationend", finishClose, { once: true });

    // Safety fallback in case animationend does not fire
    setTimeout(finishClose, 300);
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

    // Close on <form method="dialog"> submission with exit animation
    document.addEventListener("submit", (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement;
      if (form && form.getAttribute("method") === "dialog") {
        const dialog = form.closest<HTMLDialogElement>("dialog.mg-modal, dialog.mg-dialog");
        if (dialog && dialog.open && !dialog.classList.contains("mg-modal--closing")) {
          e.preventDefault();
          closeModal(dialog);
        }
      }
    });

    // Close on Escape key with exit animation
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const openDialogs = document.querySelectorAll<HTMLDialogElement>(
          "dialog.mg-modal[open], dialog.mg-dialog[open]"
        );
        if (openDialogs.length > 0) {
          const topDialog = openDialogs[openDialogs.length - 1];
          if (!topDialog.classList.contains("mg-modal--closing")) {
            e.preventDefault();
            closeModal(topDialog);
          }
        }
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
