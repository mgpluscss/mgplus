export function registerTabs() {
  document.querySelectorAll("[data-toggle~=tabs]").forEach(setupTabs);

  function setupTabs(tabs: Element) {
    let items = tabs.getElementsByClassName("mg-tabs--item");

    for (let j = 0; j < items.length; j++) {
      const item = items[j];
      if (
        item.classList.contains("active") ||
        item.getAttribute("data-active") === "true"
      ) {
        item.setAttribute("data-active", "true");
        item.classList.add("active");

        const targetToShow = item.getAttribute("data-target");

        if (targetToShow) {
          const el = document.getElementById(targetToShow);
          if (el) {
            el.classList.add("active");
          }
        }
      }
    }

    tabs.addEventListener("click", function (e) {
      let selector = e.target as HTMLElement;

      // Ensure the clicked element is a tab item or its child
      while (selector && !selector.classList.contains("mg-tabs--item")) {
        selector = selector.parentElement as HTMLElement;
      }

      if (selector && selector.classList.contains("mg-tabs--item")) {
        e.stopPropagation();
        e.preventDefault();

        if (selector.getAttribute("data-active") !== "true") {
          // Disable all selected tabs
          let items = tabs.getElementsByClassName("mg-tabs--item");

          for (let j = 0; j < items.length; j++) {
            const item = items[j];
            item.classList.remove("active");
            item.setAttribute("data-active", "false");
            let targetToHide = item.getAttribute("data-target");
            if (targetToHide) {
              const el = document.getElementById(targetToHide);
              if (el) {
                el.classList.remove("active");
              }
            }
          }

          // Activate selected tab
          selector.classList.add("active");
          selector.setAttribute("data-active", "true");
          let targetToShow = selector.getAttribute("data-target");
          if (targetToShow) {
            const el = document.getElementById(targetToShow);
            if (el) {
              el.classList.add("active");
            }
          }
        }
      }
    });
  }
}
