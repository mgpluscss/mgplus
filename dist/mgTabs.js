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
        if (targetToShow) {
          var el = document.getElementById(targetToShow);
          if (el) {
            el.style.display = "block";
          }
        }
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
              var _el = document.getElementById(targetToHide);
              if (_el) {
                _el.style.display = "none";
              }
            }
          }
          //activate selected tab
          selector.classList.add("active");
          selector.setAttribute("data-active", "true");
          var _targetToShow = selector.getAttribute("data-target");
          if (_targetToShow) {
            var _el2 = document.getElementById(_targetToShow);
            if (_el2) {
              _el2.style.display = "block";
            }
          }
        }
      }
    });
  }
})(window);