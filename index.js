(async function loadContent(link) {
  //get all imported html files from header
  await loadDemoSections();
  registerDemoFeatures();
  window.mgplus.registerDomPlugins();
})();

async function loadDemoSections() {
  const imports = document.querySelectorAll("link[rel='import']");
  for (let i = 0; i < imports.length; i++) {
    const link = imports[i];
    const main = document.querySelector("main");
    const response = await fetch(link.href);
    const content = await response.text();
    const section = document.createElement("div");
    section.innerHTML = content;
    main.appendChild(section);
  }
}

function registerMgPlugins() {
  registerDropdown();
  registerModals();
  registerNavs();
  registerTabs();
}

function registerDemoFeatures() {
  const theme = document.querySelector(":root");

  //color picker interaction
  const colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 120,
    // Set the initial color to pure red
    color: "#f00",
  });
  colorPicker.on("color:change", function (color) {
    // log the current color as a HEX string
    theme.style.setProperty("--mg-color-primary", color.hexString);
  });

  //theme switcher interaction
  document.querySelector("#theme-switcher").addEventListener(
    "click",
    function () {
      var current = document.querySelector("html").getAttribute("data-theme");
      document
        .querySelector("html")
        .setAttribute("data-theme", current == "dark" ? "light" : "dark");
    },
    false
  );
  //loader interaction
  document.querySelector("#loader-button").addEventListener(
    "click",
    function (el) {
      var element = el.target.parentNode;
      element.classList.add("mg-loader--loading");
      element.classList.remove("mg-loader--loaded");
      setTimeout(function () {
        element.classList.remove("mg-loader--loading");
        element.classList.add("mg-loader--loaded");
      }, 2000);
    },
    false
  );

  function prettify(el) {
    function indentHtml(el) {
      return format(el, 1).innerHTML;
    }

    function format(node, level) {
      let indentBefore = new Array(level++ + 1).join("  "),
        indentAfter = new Array(level - 1).join("  "),
        textNode;

      for (let i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode("" + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild == node.children[i]) {
          textNode = document.createTextNode("" + indentAfter);
          node.appendChild(textNode);
        }
      }

      return node;
    }

    function htmlEscape(s) {
      return s
        .replace(/\n\n/g, "")
        .replace(/\t/g, "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    var elSource = document.getElementById(el.getAttribute("data-source"));
    if (elSource) {
      // this page's own source code
      indentHtml(elSource);
      var quineHtml = htmlEscape(elSource.outerHTML);

      // Highlight the operative parts:
      quineHtml = quineHtml.replace(
        /&lt;script src[\s\S]*?&gt;&lt;\/script&gt;|&lt;!--\?[\s\S]*?--&gt;|&lt;pre\b[\s\S]*?&lt;\/pre&gt;/g,
        '<span class="operative">$&</span>'
      );
      // insert into PRE
      el.innerHTML = quineHtml;
    }
  }
  document.querySelectorAll("[data-toggle~=prettify]").forEach(prettify);
  prettyPrint();
}
