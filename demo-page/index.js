import registerDropdown from "./plugins/mgDropdown.js";
 console.log("demo-page/index.js"); 
 registerDropdown();

 const theme = document.querySelector(":root");

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

  document.querySelector("#theme-switcher").addEventListener(
    "click",
    function () {
      var current = document.querySelector("html").getAttribute("data-theme");
      document.querySelector("html")
      .setAttribute("data-theme",current == "dark" ? "light" : "dark");      
       
    },
    false
  );
  const toggleMode = () => {
    document.body.classList.remove(`mg-theme--${mode()}`);
    setMode(mode() === "dark" ? "light" : "dark");
    document.body.classList.add(`mg-theme--${mode()}`);
  };