(async function loadContent(link) {
  //get all imported html files from header
  await loadDemoSections();
  registerDemoFeatures();
  window.mgplus.registerDomPlugins();
})();

async function loadDemoSections() {
  const imports = document.querySelectorAll("link[rel='import']");
  const navLinks = document.querySelector("#nav_links");

  for (let i = 0; i < imports.length; i++) {
    const link = imports[i];
    const main = document.querySelector("main");
    const response = await fetch(link.href);
    const content = await response.text();
    const section = document.createElement("section");
    section.id = link.href.split("/").pop().split(".")[0];
    section.innerHTML = content;
    main.appendChild(section);

    const navLink = document.createElement("li");
    const navLinkTitle = section.querySelector("h2");
    
    navLink.innerHTML = `<a href="#${section.id}">${navLinkTitle.innerText}</a>`;
    navLinks.appendChild(navLink);
  }
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
  
  function buildHtmlPreview(elSource){
   
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
     const preContent= document.createElement("pre");

     elSource.parentNode.insertBefore(previewPan,elSource.nextSibling);
     previewPan.appendChild(buttonCollapse);
     previewPan.appendChild(preContent);

     previewPan.classList.add("mg-pad-t3");
     buttonCollapse.classList.add(
      "mg-button",
      "mg-button--clear",
      "mg-button--primary",
      "mg-button--small", 
      "mg-icon-dropdown",       
      "mg-collapse");

      buttonCollapse.setAttribute("data-toggle","collapse");

     buttonCollapse.textContent="view html"
     preContent.classList.add(
      "prettyprint",
      "mg-collapse--content");
     preContent.innerHTML=quineHtml;

    }

  } 
  document.querySelectorAll("[data-toggle~=htmlpreview]").forEach(buildHtmlPreview);
  prettyPrint();
}
