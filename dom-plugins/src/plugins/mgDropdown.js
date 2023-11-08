 export default function registergDropdowns() {
   let currentDropdown = null; 
   document.querySelectorAll("[data-toggle~=dropdown]").forEach(setupDropdown);
   function setupDropdown(dropdownToggle) {
     dropdownToggle.setAttribute("aria-haspopup", "true");
     dropdownToggle.setAttribute("aria-expanded", "false");

     const dropdownContent = dropdownToggle.parentNode.querySelector(".mg-dropdown--content");

     dropdownContent.setAttribute("aria-hidden", "true");

     dropdownToggle.onclick = toggleDropdown;

     function toggleDropdown(e) {
       e.preventDefault();
       e.stopPropagation();
       if (dropdownToggle.getAttribute("aria-expanded") === "true") {
         dropdownToggle.setAttribute("aria-expanded", "false");
         dropdownContent.setAttribute("aria-hidden", "true");
         dropdownToggle.parentNode.classList.remove("opened");
         currentDropdown = null;
         return;
       }
       closeCurrent.call(undefined);

       dropdownToggle.setAttribute("aria-expanded", "true");
       dropdownContent.setAttribute("aria-hidden", "false");
       dropdownToggle.parentNode.classList.add("opened");
       dropdownContent.children[0].focus();
       currentDropdown = dropdownToggle;
       return;
     }
   }
   function closeCurrent() {
     if (currentDropdown) {
       currentDropdown.setAttribute("aria-expanded", "false");
       currentDropdown.setAttribute("aria-hidden", "true");
       currentDropdown.parentNode.classList.remove("opened");
       currentDropdown = false;
     }
   }  
   
    window.onclick = function (event) {
      const element = event.target
    
       if (!element.classList) return;
       if (element.classList.contains("mg-dropdown")) return;
       if (element.classList.contains("mg-dropdown--button")) return;
       if (element.classList.contains("mg-dropdown--content")) return;
       closeCurrent.call(undefined);  
     };
 
}
 

