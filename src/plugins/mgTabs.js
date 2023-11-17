export default function registerTabs(){
    document.querySelectorAll("[data-toggle~=tabs]").forEach(setupTabs);
    function setupTabs(tabs) {
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
  
          if (targetToShow) 
          {
            const el = document.getElementById(targetToShow);
           if (el)
           { el.style.display = "block";
          }
          }
        }
      }
  
      tabs.addEventListener("click", function (e) {
        let selector = e.target;
        if (e.target.parentNode.classList.contains("mg-tabs--item")) {
          selector = e.target.parentNode;
  
          e.stopPropagation();
          e.preventDefault();
  
          if (selector.getAttribute("data-active") !== "true") {
            //disable all selected tabs
            let items = tabs.getElementsByClassName("mg-tabs--item");
  
            for (let j = 0; j < items.length; j++) {
              const item = items[j];
              item.classList.remove("active")
              item.setAttribute("data-active", "false");
              let targetToHide = item.getAttribute("data-target");
              if (targetToHide) {
                const el = document.getElementById(targetToHide);
                if (el)
                {
                    el.style.display = "none";
              }
              }
            }
            //activate selected tab
            selector.classList.add("active");
            selector.setAttribute("data-active", "true");
            let targetToShow = selector.getAttribute("data-target");
            if (targetToShow) {
            const el = document.getElementById(targetToShow);
            if (el)
            {
              el.style.display = "block";
            }
            }
          }
        }
      });
    } 
  }