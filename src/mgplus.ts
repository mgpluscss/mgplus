
import { autoRegister } from "./plugins/main";

export * from "./plugins/mgTabs";
export * from "./plugins/mgDarkMode";
export * from "./plugins/main";
export * from "./scss/main.scss";

// Auto-register plugins when loaded as a standalone script in the browser
if (typeof window !== "undefined") {
  autoRegister();
}

