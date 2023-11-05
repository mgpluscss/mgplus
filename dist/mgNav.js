"use strict";

(function (window) {
  {
    var setupNav = function setupNav(nav) {
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
    };
    document.querySelectorAll("[data-toggle~=nav]").forEach(setupNav);
  }
})(window);