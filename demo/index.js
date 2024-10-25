document.addEventListener("DOMContentLoaded", function () {
  (async function loadContent(link) {
    //get all imported html files from header
    await loadDemoSections();
    registerDemoFeatures();
    window.mgplus.registerPlugins(false, [
      "dropdowns",
      "modals",
      "tabs",
      "navs",
      "collapses",
      "darkmode",
    ]);
  })();
});
async function loadDemoSections() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelector("#nav_links");

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    //ignore section not marked with id
    if (!section.id) {
      continue;
    }

    const navLink = document.createElement("li");
    const navLinkTitle = section.querySelector("h2");

    navLink.innerHTML = `<a href="#${section.id}">${navLinkTitle.innerText}</a>`;
    navLinks.appendChild(navLink);
  }
  const download_button = document.getElementById("download_button");

  //workaround to set the package version, this should be done in the build process
  const dataLastCdnUri = download_button.getAttribute("data-last-cdn-uri");
  download_button.setAttribute("href", dataLastCdnUri);
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

  const inputRadiusSelector = document.querySelector("#input-radius-selector");

  inputRadiusSelector.addEventListener("change", (ev) => {
    theme.style.setProperty("--mg-input-radius", `${ev.target.value / 10}rem`);
  });
  const controlRadiusSelector = document.querySelector(
    "#control-radius-selector"
  );
  controlRadiusSelector.addEventListener("change", (ev) => {
    theme.style.setProperty(
      "--mg-control-radius",
      `${ev.target.value / 10}rem`
    );
  });
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

  function buildHtmlPreview(elSource) {
    function htmlEscape(s) {
      return s
        .replace(/\n\n/g, "")
        .replace(/\t/g, "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
    if (elSource) {
      // this page's own source code

      var quineHtml = htmlEscape(elSource.outerHTML);

      // Highlight the operative parts:
      quineHtml = quineHtml.replace(
        /&lt;script src[\s\S]*?&gt;&lt;\/script&gt;|&lt;!--\?[\s\S]*?--&gt;|&lt;pre\b[\s\S]*?&lt;\/pre&gt;/g,
        '<span class="operative">$&</span>'
      );
      var previewPan = document.createElement("div");
      var buttonCollapse = document.createElement("button");
      var collapseContent = document.createElement("div");
      const preContent = document.createElement("pre");
      const clipboardButton = document.createElement("button");
      const clipboardButtonIcon = document.createElement("i");

      previewPan.classList.add("mg-pad-t3");
      buttonCollapse.classList.add(
        "mg-button",
        "mg-button--clear",
        "mg-button--primary",
        "mg-button--small",
        "mg-icon-dropdown",
        "mg-collapse"
      );

      clipboardButton.classList.add("mg-button--link", "mg-button--small");

      clipboardButton.addEventListener("click", (ev) => {
        navigator.clipboard.writeText(elSource.outerHTML);
      });
      clipboardButtonIcon.classList.add("mg-icon", "svg-icon-clipboard");

      buttonCollapse.setAttribute("data-toggle", "collapse");
      buttonCollapse.textContent = "view html";

      collapseContent.classList.add(
        "mg-collapse--content",
        "mg-col",
        "mg-x--end"
      );

      preContent.classList.add(
        "prettyprint",
        "mg-overflow-x-auto",
        "mg-max-w100"
      );
      preContent.innerHTML = quineHtml;

      clipboardButton.appendChild(clipboardButtonIcon);
      previewPan.appendChild(buttonCollapse);
      previewPan.appendChild(collapseContent);

      collapseContent.appendChild(clipboardButton);
      collapseContent.appendChild(preContent);

      elSource.parentNode.insertBefore(previewPan, elSource.nextSibling);
    }
  }
  document
    .querySelectorAll("[data-toggle~=htmlpreview]")
    .forEach(buildHtmlPreview);
  prettyPrint();
}
