import registerDropdown from "./plugins/mgDropdown.js";
import registerModals from "./plugins/mgModal.js";
import registerNavs from "./plugins/mgNav.js";
import registerTabs from "./plugins/mgTabs.js"; 
 
function registerDomPlugins(){
 
  registerDropdown();
  registerModals();
  registerNavs();
  registerTabs(); 
}

(function(window) {
window.mgplus = {registerDomPlugins};
})(window);
