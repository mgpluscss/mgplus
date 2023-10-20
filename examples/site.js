(function () {
  function htmlEscape(s) {
    return s
      .replace(/\t/g, " ")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function prettify(el) {
    var elSource = document.getElementById(el.getAttribute("data-source"));

    // this page's own source code
    var quineHtml = htmlEscape(elSource.outerHTML);

    // Highlight the operative parts:
    quineHtml = quineHtml.replace(
      /&lt;script src[\s\S]*?&gt;&lt;\/script&gt;|&lt;!--\?[\s\S]*?--&gt;|&lt;pre\b[\s\S]*?&lt;\/pre&gt;/g,
      '<span class="operative">$&</span>'
    );
    // insert into PRE
    el.innerHTML = quineHtml;
  }
  document.querySelectorAll("[data-toggle~=prettify]").forEach(prettify);
  var theme = document.querySelector(":root");

  var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 120,
    // Set the initial color to pure red
    color: "#f00",
  });
  colorPicker.on("color:change", function (color) {
    // log the current color as a HEX string
    theme.style.setProperty("--mg-color-primary", color.hexString);
  });

  document.querySelector("#theme-switcher").addEventListener(
    "click",
    function () {
      var current = document.querySelector("html").getAttribute("data-theme");
      document.querySelector("html")
      .setAttribute("data-theme",current == "dark" ? "light" : "dark");      
       
    },
    false
  );

  document.querySelector("#loader-button").addEventListener(
    "click",
    function (el) {
      var element = el.target.parentNode;
      element.classList.add("mg-loader--loading");
      element.classList.remove("mg-loader--loaded");
      setTimeout(function () {
        element.classList.remove("mg-loader--loading");
        element.classList.add("mg-loader--loaded");
      }, 3000);
    },
    false
  );
})();
