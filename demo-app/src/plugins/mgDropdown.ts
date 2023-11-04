export default function mgDropdown()
{
   var currentDropdown:any = null; 
   document.querySelectorAll("[data-toggle~=dropdown]").forEach(setupDropdown);
   function setupDropdown(dropdownToggle:any) {
     dropdownToggle.setAttribute("aria-haspopup", "true");
     dropdownToggle.setAttribute("aria-expanded", "false");

     var dropdownContent = dropdownToggle.parentNode.querySelector(".mg-dropdown--content");

     dropdownContent.setAttribute("aria-hidden", "true");

     dropdownToggle.onclick = toggleDropdown;

     function toggleDropdown(e:any) {
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

    //register global handlers
    window.onclick = function (event) {
      const element:any = event.target
    
       if (!element.classList) return;
       if (element.classList.contains("mg-dropdown")) return;
       if (element.classList.contains("mg-dropdown--button")) return;
       if (element.classList.contains("mg-dropdown--content")) return;
       closeCurrent.call(undefined);  
     };
 
}