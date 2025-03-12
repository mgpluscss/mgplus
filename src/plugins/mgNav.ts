export function registerNavs() {
  document.querySelectorAll("[data-toggle~=nav]").forEach(setupNav);
  function setupNav(nav: Element) {
    const items = nav.getElementsByTagName("li");

    for (let j = 0; j < items.length; j++) {
      const item = items[j];

      if (
        item.classList.contains("active") ||
        item.getAttribute("data-active") === "true"
      ) {
        item.setAttribute("data-active", "true");
        item.classList.add("active");
      }
    }

    nav.addEventListener("click", function (e: Event) {
      let selector = e.target as HTMLElement;
      if (selector.parentNode?.nodeName == "LI" && selector.parentNode instanceof HTMLElement) {
        selector = selector.parentNode;
      }
      if (selector.getAttribute("data-active") !== "true") {
        //disable all selected tabs
        let items = nav.getElementsByTagName("li");
        for (let j = 0; j < items.length; j++) {
          const item = items[j];
          item.classList.remove("active");
          item.setAttribute("data-active", "false");
        }
        //activate selected tab
        selector.classList.add("active");
        selector.setAttribute("data-active", "true");
      }
    });
  }
}
