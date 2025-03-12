import { registergCollapses } from "./mgCollapse";
import { registerDropdowns } from "./mgDropdown";
import { registerModals } from "./mgModal";
import { registerNavs } from "./mgNav";
import { registerTabs } from "./mgTabs";
import { registerDarkMode } from "./mgDarkMode";



export function autoRegister() {
  console.log(
    `mgplus - auto registering DOM plugins for query params`
  );
  window.addEventListener("DOMContentLoaded", () => {
    const plugins = getQueryParam("plugins", getScriptUrl());
    registerPlugins(plugins?.split(",") ?? []);
  });
}


export function registerDarkModePlugin() {
  registerDarkMode();
}
//autorun : true or false
//plugins : ["dropdowns", "modals", "navs", "collapses", "darkmode"]
export function registerPlugins(plugins: string[]) {
  const pluginsArgs = plugins ? plugins : [];
  console.log(`mgplus - registering plugins: ${pluginsArgs}`);
  if (pluginsArgs instanceof Array) {

    pluginsArgs.map(function (pluginName) {
      switch (pluginName) {
        case "all":
          registerDropdowns();
          registerModals();
          registerNavs();
          registerTabs();
          registergCollapses();
          registerDarkModePlugin();
          break;
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
}

// extracts the params from the currently running (external) script
function getScriptUrl() {
  const scripts = document.getElementsByTagName("script");

  for (let i = 0; i < scripts.length; i++) {
    const scriptUrl = scripts[i] && scripts[i].src;

    if (scriptUrl.indexOf("mgplus-vanilla.js") > 0) {
      return scriptUrl;
    }
  }
  return null;
}

// gets the Query Params of a given query string
function getQueryParam(name: string, query: string | null) {
  name = name.replace(/[[]/, "\\[").replace(/[]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);

  var results = query && regex.exec(query);

  if (!results) return "";
  else return results[1];
} 