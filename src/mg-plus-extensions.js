/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 */

(function (window) {
  "use strict";

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  var hasClass, addClass, removeClass;

  if ("classList" in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + " " + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), " ");
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass,
  };

  // transport
  if (typeof define === "function" && define.amd) {
    // AMD
    define(classie);
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = classie;
  } else {
    // browser global
    window.classie = classie;
  }
})(window);

/*!
 * milligram extensions
 *
 * MIT license
 */
(function (window) {
  /*nav component*/
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-toggle~=nav]").forEach(setupNav);
    function setupNav(nav) {
      var items = nav.getElementsByTagName("li");

      for (var j = 0; j < items.length; j++) {
        if (
          classie.hasClass(items[j], "active") ||
          items[j].getAttribute("data-active") === "true"
        ) {
          items[j].setAttribute("data-active", "true");
          classie.addClass(items[j], "active");
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
          var items = nav.getElementsByTagName("li");
          for (var j = 0; j < items.length; j++) {
            classie.removeClass(items[j], "active");
            items[j].setAttribute("data-active", "false");
          }
          //activate selected tab
          classie.addClass(selector, "active");
          selector.setAttribute("data-active", "true");
        }
      });
    }
    /*tabs component*/
    document.querySelectorAll("[data-toggle~=tabs]").forEach(setupTabs);
    function setupTabs(tabs) {
      var items = tabs.getElementsByClassName("mg-tabs--item");

      for (var j = 0; j < items.length; j++) {
        if (
          classie.hasClass(items[j], "active") ||
          items[j].getAttribute("data-active") === "true"
        ) {
          items[j].setAttribute("data-active", "true");
          classie.addClass(items[j], "active");

          var targetToShow = items[j].getAttribute("data-target");

          if (targetToShow)
            document.getElementById(targetToShow).style.display = "block";
        }
      }

      tabs.addEventListener("click", function (e) {
        var selector = e.target;
        if (classie.hasClass(e.target.parentNode, "mg-tabs--item"))
          selector = e.target.parentNode;

        e.stopPropagation();
        e.preventDefault();

        if (selector.getAttribute("data-active") !== "true") {
          //disable all selected tabs
          var items = tabs.getElementsByClassName("mg-tabs--item");

          for (var j = 0; j < items.length; j++) {
            classie.removeClass(items[j], "active");
            items[j].setAttribute("data-active", "false");
            var targetToHide = items[j].getAttribute("data-target");
            if (targetToHide)
              document.getElementById(targetToHide).style.display = "none";
          }
          //activate selected tab
          classie.addClass(selector, "active");
          selector.setAttribute("data-active", "true");
          var targetToShow = selector.getAttribute("data-target");
          if (targetToShow)
            document.getElementById(targetToShow).style.display = "block";
        }
      });
    }
    /*dropdown component*/
    var currentDropdown = null;
    document.querySelectorAll("[data-toggle~=dropdown]").forEach(setupDropdown);
    function setupDropdown(dropdownToggle) {
      dropdownToggle.setAttribute("aria-haspopup", "true");
      dropdownToggle.setAttribute("aria-expanded", "false");

      var dropdownMenu = dropdownToggle.parentNode.querySelector(
        ".mg-dropdown--menu"
      );

      dropdownMenu.setAttribute("aria-hidden", "true");

      dropdownToggle.onclick = toggleDropdown;

      function toggleDropdown(e) {
        e.preventDefault();
        e.stopPropagation();
        if (dropdownToggle.getAttribute("aria-expanded") === "true") {
          dropdownToggle.setAttribute("aria-expanded", "false");
          dropdownMenu.setAttribute("aria-hidden", "true");
          dropdownToggle.parentNode.classList.remove("opened");
          currentDropdown = false;
          return;
        }
        closeCurrent.call();

        dropdownToggle.setAttribute("aria-expanded", "true");
        dropdownMenu.setAttribute("aria-hidden", "false");
        dropdownToggle.parentNode.classList.add("opened");
        dropdownMenu.children[0].focus();
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
    /*modal component*/
    document.querySelectorAll("[data-toggle~=modal]").forEach(setupModal);

    function setupModal(el) {
      function removeModal() {
        classie.remove(modal, "mg-show");
      }

      function removeModalHandler() {
        removeModal(classie.has(el));
      }

      var modal = document.querySelector("#" + el.getAttribute("data-target")),
        close = modal.querySelector(".mg-modal--closebtn");

      el.addEventListener("click", function (ev) {
        classie.add(modal, "mg-show");
      });

      close.addEventListener("click", function (ev) {
        ev.stopPropagation();
        removeModalHandler();
      });
    }

    window.onclick = function (e) {
      if (classie.hasClass(e.target, "mg-dropdown")) return;
      if (classie.hasClass(e.target, "mg-dropdown--button")) return;
      if (classie.hasClass(e.target, "mg-dropdown--menu")) return;

      closeCurrent.call();
    };

    window.addEventListener("load", function () {
      document.querySelector("body").classList.add("loaded");
    });
  });
})(window);
