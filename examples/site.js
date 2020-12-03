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
  var theme = document.querySelector(':root');
  
 
  var colorPicker = new iro.ColorPicker('#picker',{
    // Set the size of the color picker
    width: 120,
    // Set the initial color to pure red
    color: "#f00"
  });
  colorPicker.on('color:change', function(color) {
    // log the current color as a HEX string
    theme.style.setProperty('--mg-color-primary', color.hexString);
  });

 
})();

function switchTheme() {
  var element = document.getElementsByTagName('body')[0];
  element.classList.toggle("mg-theme-inverted");      
 }
 function tooglePickerPanel(){
  var pickerPanel = document.getElementById('pickerPanel');
  pickerPanel.classList.toggle("opened")
}
