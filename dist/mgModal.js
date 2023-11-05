"use strict";

(function (window) {
  {
    // Function to setup modal for an element
    var setupModal = function setupModal(el) {
      // Function to handle modal removal
      function removeModalHandler() {
        modal.classList.remove("mg-show");
      }

      // Select the modal and close button elements
      var modal = document.querySelector("#" + el.getAttribute("data-target"));
      var close = modal.querySelector("[data-action=close]");

      // Add event listener to the element to show modal on click
      el.addEventListener("click", function (ev) {
        modal.classList.add("mg-show");
      });

      // Add event listener to the close button to remove modal on click
      close.addEventListener("click", function (ev) {
        ev.stopPropagation();
        removeModalHandler();
      });
    };
    // Select all elements with data-toggle attribute containing "modal" and setup modal for each
    document.querySelectorAll("[data-toggle~=modal]").forEach(setupModal);
  }
})(window);