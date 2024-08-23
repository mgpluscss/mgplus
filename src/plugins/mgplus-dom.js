import registergCollapses from "./mgCollapse.js";
import registerDropdowns from "./mgDropdown.js";
import registerModals from "./mgModal.js";
import registerNavs from "./mgNav.js";
import registerTabs from "./mgTabs.js";
import registerDarkMode from "./mgDarkMode.js";

(function (window) {
  function registerDarkModePlugin() {
    registerDarkMode();
  }
  //autorun : true or false
  //plugins : ["dropdowns", "modals", "navs", "collapses", "darkmode"]
  function registerPlugins(autorun, plugins) {
    const pluginsArgs = plugins ? plugins : [];
    console.log(
      `mgplus - registering DOM plugins (autorun=${
        autorun ? "true" : "false"
      })`,
      plugins
    );
    pluginsArgs.map(function (pluginName) {
      switch (pluginName) {
        case "dropdowns":
          registerDropdowns();
          break;
        case "modals":
          registerModals();
          break;
        case "navs":
          registerNavs();
          break;
        case "tabs":
          registerTabs();
          break;
        case "collapses":
          registergCollapses();
          break;
        case "darkmode":
          registerDarkModePlugin();
          break;
        default:
          console.log(`mgplus - plugin not found: ${pluginName}`);
          return;
      }
      console.log(`mgplus - registered plugin: ${pluginName}`);
    });
  }

  // extracts the params from the currently running (external) script
  function getScriptUrl() {
    const scripts = document.getElementsByTagName("script");

    for (let i = 0; i < scripts.length; i++) {
      const scriptUrl = scripts[i] && scripts[i].src;

      if (scriptUrl.indexOf("mgplus-dom.js") > 0) {
        return scriptUrl;
      }
    }
    return null;
  }

  // gets the Query Params of a given query string
  function getQueryParam(name, query) {
    name = name.replace(/[[]/, "\\[").replace(/[]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(query);

    if (results == null) return "";
    else return results[1];
  }
  window.mgplus = {
    registerPlugins,
  };
  window.addEventListener("DOMContentLoaded", () => {
    const plugins = getQueryParam("plugins", getScriptUrl());
    registerPlugins(true, plugins ? plugins.split(",") : []);
  });
})(window);
