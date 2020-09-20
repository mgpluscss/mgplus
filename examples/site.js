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
})();
