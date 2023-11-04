export default function mgModal()
{
    // Select all elements with data-toggle attribute containing "modal" and setup modal for each
    document.querySelectorAll("[data-toggle~=modal]").forEach(setupModal);
  
    // Function to setup modal for an element
    function setupModal(el:any) {
      // Function to handle modal removal
      function removeModalHandler() {
        modal.classList.remove("mg-show");      
      }
   
      // Select the modal and close button elements
      var modal:any = document.querySelector("#" + el.getAttribute("data-target"));

      var  close = modal.querySelector("[data-action=close]");
  
      // Add event listener to the element to show modal on click
      el.addEventListener("click", function (ev:any) {
        modal.classList.add("mg-show");
      });
  
      // Add event listener to the close button to remove modal on click
      close.addEventListener("click", function (ev:any) {
        ev.stopPropagation();
        removeModalHandler();
      });
    }
}