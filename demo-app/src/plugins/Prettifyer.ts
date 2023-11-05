
function htmlEscape(s: any) {
  return s
    .replace(/\t/g, " ")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function indentHtml(el: any) {

  return format(el, 0).innerHTML;
}

function format(node: any, level: number) {


  let indentBefore = new Array(level++ + 1).join('  '),
    indentAfter = new Array(level - 1).join('  '),
    textNode;

  for (let i = 0; i < node.children.length; i++) {

    textNode = document.createTextNode('\n' + indentBefore);
    node.insertBefore(textNode, node.children[i]);

    format(node.children[i], level);

    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode('\n' + indentAfter);
      node.appendChild(textNode);
    }
  }

  return node;
}
function prettify(el: any) {
  const elSource: any = document.getElementById(el.getAttribute("data-source"));
  indentHtml(elSource.parentNode);
  // this page's own source code
  let quineHtml = htmlEscape(elSource.outerHTML);

  // Highlight the operative parts:
  quineHtml = quineHtml.replace(
    /&lt;script src[\s\S]*?&gt;&lt;\/script&gt;|&lt;!--\?[\s\S]*?--&gt;|&lt;pre\b[\s\S]*?&lt;\/pre&gt;/g,
    '<span class="operative">$&</span>'
  );

  // insert into PRE
  el.innerHTML = quineHtml;
  indentHtml(el.innerHTML);

}

export default function launchPrettifyer() {
  
  document.querySelectorAll("[data-toggle~=prettify]").forEach(prettify);
  
}