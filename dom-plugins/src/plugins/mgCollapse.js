export default function registergCollapses() {
 
    document.querySelectorAll("[data-toggle~=collapse]").forEach(setupCollapse);
    function setupCollapse(collapseToggle) {
        collapseToggle.setAttribute("aria-haspopup", "true");
        collapseToggle.setAttribute("aria-expanded", "false"); 
      const collapseContent = collapseToggle.nextElementSibling;
      collapseContent.setAttribute("aria-hidden", "true");
     
      collapseToggle.onclick = toggleCollapse;
 
      function toggleCollapse(e) {
        e.preventDefault();
        e.stopPropagation(); 
        if (collapseToggle.getAttribute("aria-expanded") === "true") {
            collapseToggle.setAttribute("aria-expanded", "false");
            collapseToggle.setAttribute("aria-hidden", "true");
            collapseContent.classList.remove("opened");
       
          return;
        }
     
        collapseToggle.setAttribute("aria-expanded", "true");
        collapseToggle.setAttribute("aria-hidden", "false");
        collapseContent.classList.add("opened"); 
        return;
      }
    } 
 }
  
 
 