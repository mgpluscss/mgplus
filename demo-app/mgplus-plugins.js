"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mgDropdown;
function mgDropdown() {
  var currentDropdown = false;
  document.querySelectorAll("[data-toggle~=dropdown]").forEach(setupDropdown);
  function setupDropdown(dropdownToggle) {
    dropdownToggle.setAttribute("aria-haspopup", "true");
    dropdownToggle.setAttribute("aria-expanded", "false");
    var dropdownContent = dropdownToggle.parentNode.querySelector(".mg-dropdown--content");
    dropdownContent.setAttribute("aria-hidden", "true");
    dropdownToggle.onclick = toggleDropdown;
    function toggleDropdown(e) {
      e.preventDefault();
      e.stopPropagation();
      if (dropdownToggle.getAttribute("aria-expanded") === "true") {
        dropdownToggle.setAttribute("aria-expanded", "false");
        dropdownContent.setAttribute("aria-hidden", "true");
        dropdownToggle.parentNode.classList.remove("opened");
        currentDropdown = false;
        return;
      }
      closeCurrent.call();
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
    var element = event.target;
    if (!element.classList) return;
    if (element.classList.contains("mg-dropdown")) return;
    if (element.classList.contains("mg-dropdown--button")) return;
    if (element.classList.contains("mg-dropdown--content")) return;
    closeCurrent.call();
  };
}
"use strict";

(function (window) {
  // Select all elements with data-toggle attribute containing "modal" and setup modal for each
  document.querySelectorAll("[data-toggle~=modal]").forEach(setupModal);

  // Function to setup modal for an element
  function setupModal(el) {
    // Function to handle modal removal
    function removeModalHandler() {
      modal.classList.remove("mg-show");
    }

    // Select the modal and close button elements
    var modal = document.querySelector("#" + el.getAttribute("data-target")),
      close = modal.querySelector("[data-action=close]");

    // Add event listener to the element to show modal on click
    el.addEventListener("click", function (ev) {
      modal.classList.add("mg-show");
    });

    // Add event listener to the close button to remove modal on click
    close.addEventListener("click", function (ev) {
      ev.stopPropagation();
      removeModalHandler();
    });
  }
})(window);
"use strict";

(function (window) {
  document.querySelectorAll("[data-toggle~=nav]").forEach(setupNav);
  function setupNav(nav) {
    var items = nav.getElementsByTagName("li");
    for (var j = 0; j < items.length; j++) {
      var item = items[j];
      if (item.classList.contains("active") || item.getAttribute("data-active") === "true") {
        item.setAttribute("data-active", "true");
        item.classList.add("active");
      }
    }
    nav.addEventListener("click", function (e) {
      var selector = e.target;
      console.log(e.target.parentNode);
      if (e.target.parentNode.tagName == "LI") {
        selector = e.target.parentNode;
      }
      if (selector.getAttribute("data-active") !== "true") {
        //disable all selected tabs
        var _items = nav.getElementsByTagName("li");
        for (var _j = 0; _j < _items.length; _j++) {
          var _item = _items[_j];
          _item.classList.remove("active");
          _item.setAttribute("data-active", "false");
        }
        //activate selected tab
        selector.classList.add("active");
        selector.setAttribute("data-active", "true");
      }
    });
  }
})(window);
"use strict";

(function (window) {
  document.querySelectorAll("[data-toggle~=tabs]").forEach(setupTabs);
  function setupTabs(tabs) {
    var items = tabs.getElementsByClassName("mg-tabs--item");
    for (var j = 0; j < items.length; j++) {
      var item = items[j];
      if (item.classList.contains("active") || item.getAttribute("data-active") === "true") {
        item.setAttribute("data-active", "true");
        item.classList.add("active");
        var targetToShow = item.getAttribute("data-target");
        if (targetToShow) document.getElementById(targetToShow).style.display = "block";
      }
    }
    tabs.addEventListener("click", function (e) {
      var selector = e.target;
      if (e.target.parentNode.classList.contains("mg-tabs--item")) {
        selector = e.target.parentNode;
        e.stopPropagation();
        e.preventDefault();
        if (selector.getAttribute("data-active") !== "true") {
          //disable all selected tabs
          var _items = tabs.getElementsByClassName("mg-tabs--item");
          for (var _j = 0; _j < _items.length; _j++) {
            var _item = _items[_j];
            _item.classList.remove("active");
            _item.setAttribute("data-active", "false");
            var targetToHide = _item.getAttribute("data-target");
            if (targetToHide) {
              document.getElementById(targetToHide).style.display = "none";
            }
          }
          //activate selected tab
          selector.classList.add("active");
          selector.setAttribute("data-active", "true");
          var _targetToShow = selector.getAttribute("data-target");
          if (_targetToShow) {
            document.getElementById(_targetToShow).style.display = "block";
          }
        }
      }
    });
  }
})(window);