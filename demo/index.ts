import { registerPlugins, unregisterPlugins, registerCompat, checkBrowserSupport, applyTheme } from '../src/plugins/main.ts';
import iro from '@jaames/iro';

let currentDemoMode: "pure-css" | "compat" = "pure-css";

window.addEventListener("DOMContentLoaded", () => {
    loadDemoSections();
    registerDemoFeatures();
    initDemoMode();
    initThemeSwitcher();
    initToolbarDropdowns();
});

function loadDemoSections() {
    const sections = document.querySelectorAll("section");
    const navLinksToggles = document.querySelectorAll("[data-toggle~=navlinks]");
    navLinksToggles.forEach((navLinks) => {
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];

            //ignore section not marked with id
            if (!section.id) {
                continue;
            }

            const navLink = document.createElement("li");
            const navLinkTitle = section.querySelector("h2");

            navLink.innerHTML = `<a href="#${section.id}">${navLinkTitle?.innerText}</a>`;
            navLinks.appendChild(navLink);
        }
    });
    const download_button = document.getElementById("download_button");

    //workaround to set the package version, this should be done in the build process
    const dataLastCdnUri = download_button?.getAttribute("data-last-cdn-uri");
    if (dataLastCdnUri) {
        download_button?.setAttribute("href", dataLastCdnUri);
    }
}

function registerDemoFeatures() {
    const theme = document.querySelector(":root") as HTMLElement;

    //color picker interaction
    const colorPicker = iro.ColorPicker("#picker", {
        // Set the size of the color picker
        width: 120,
        // Set the initial color to pure red
        color: "#f00",
    });
    colorPicker.on("color:change", function (color: any) {
        // log the current color as a HEX string
        theme?.style.setProperty("--mg-color-primary", color.hexString);
    });

    const inputRadiusSelector = document.querySelector<HTMLInputElement>(
        "#input-radius-selector"
    );
    const controlRadiusSelector = document.querySelector<HTMLInputElement>(
        "#control-radius-selector"
    );

    ["input", "change"].forEach((evt) => {
        inputRadiusSelector?.addEventListener(evt, (ev: any) => {
            theme.style.setProperty("--mg-input-radius", `${ev.target.value / 10}rem`);
        });
        controlRadiusSelector?.addEventListener(evt, (ev: any) => {
            theme.style.setProperty(
                "--mg-control-radius",
                `${ev.target.value / 10}rem`
            );
        });
    });
    //loader interaction
    const loader = document.querySelector("#loader-button") as HTMLElement;

    loader.addEventListener(
        "click",
        function (el: MouseEvent) {
            var element = (el.target as HTMLElement).parentNode as HTMLElement;
            element.classList.add("mg-loader--loading");
            element.classList.remove("mg-loader--loaded");
            setTimeout(function () {
                element.classList.remove("mg-loader--loading");
                element.classList.add("mg-loader--loaded");
            }, 2000);
        },
        false
    );
    function htmlCodeFormatter(s: string) {
        return s
            .replace(/\n\n/g, "")
            .replace(/\t/g, "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(
                /&lt;script src[\s\S]*?&gt;&lt;\/script&gt;|&lt;!--\?[\s\S]*?--&gt;|&lt;pre\b[\s\S]*?&lt;\/pre&gt;/g,  // Highlight the operative parts:
                '<span class="operative">$&</span>'
            );
    }
    function buildHtmlPreview(elSource: Element) {
        if (elSource) {
            // this page's own source code
            var quineHtml = htmlCodeFormatter(elSource.outerHTML);

            // Use native HTML5 <details class="mg-collapse"> for 100% zero-JS native collapse
            var previewPan = document.createElement("details");
            var buttonCollapse = document.createElement("summary");
            var collapseContent = document.createElement("div");
            const preContent = document.createElement("pre");
            const clipboardButton = document.createElement("button");
            const clipboardButtonIcon = document.createElement("i");

            previewPan.classList.add("mg-collapse", "mg-pad-b3");
            buttonCollapse.classList.add(
                "mg-button",
                "mg-button--clear",
                "mg-button--primary",
                "mg-button--small",
                "mg-icon-dropdown"
            );

            clipboardButton.classList.add("mg-button--link", "mg-button--small");

            clipboardButton.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                navigator.clipboard.writeText(elSource.outerHTML);
            });
            clipboardButtonIcon.classList.add("mg-icon", "svg-icon-clipboard");

            buttonCollapse.textContent = "view html";

            collapseContent.classList.add(
                "mg-collapse--content",
                "mg-col",
                "mg-x--end"
            );

            preContent.classList.add("prettyprint", "mg-overflow-x-auto", "mg-max-w-full");
            preContent.innerHTML = quineHtml;

            clipboardButton.appendChild(clipboardButtonIcon);
            previewPan.appendChild(buttonCollapse);
            previewPan.appendChild(collapseContent);

            collapseContent.appendChild(clipboardButton);
            collapseContent.appendChild(preContent);

            elSource.parentNode?.insertBefore(previewPan, elSource.nextSibling);
        }
    }
    document
        .querySelectorAll("[data-toggle~=htmlpreview]")
        .forEach(buildHtmlPreview);

    document.querySelectorAll("pre").forEach((el) => {
        el.classList.add("prettyprint", "mg-overflow-x-auto", "mg-max-w-full");
    });

    (window as any)?.prettyPrint();
}

function initThemeSwitcher() {
    const savedTheme = typeof localStorage !== "undefined" ? localStorage.getItem("mg-theme") : null;
    if (savedTheme) {
        applyTheme(savedTheme, false);
    }

    document.querySelectorAll<HTMLElement>("[data-toggle~=theme]").forEach((el) => {
        el.addEventListener("mousedown", (e) => {
            e.preventDefault();
        });
        el.addEventListener("click", () => {
            const targetTheme = el.getAttribute("data-value") || "auto";
            applyTheme(targetTheme, true);
            closeAllToolbarDropdowns();
        });
        el.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const targetTheme = el.getAttribute("data-value") || "auto";
                applyTheme(targetTheme, true);
                closeAllToolbarDropdowns();
            }
        });
    });
}

function initToolbarDropdowns() {
    const toolbarDropdowns = document.querySelectorAll<HTMLElement>(
        "header nav .mg-dropdown:not(#demo-mode-dropdown)"
    );

    toolbarDropdowns.forEach((dd) => {
        const btn = dd.querySelector<HTMLElement>("button.mg-icon-dropdown, button[data-toggle=dropdown]");
        const content = dd.querySelector<HTMLElement>(".mg-dropdown--content");
        if (!btn || !content) return;

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpened = btn.classList.contains("opened");

            // Close all other dropdowns
            closeAllToolbarDropdowns();

            if (!isOpened) {
                btn.classList.add("opened");
                btn.setAttribute("aria-expanded", "true");
                content.classList.add("opened");
            }
        });
    });

    document.addEventListener("click", (e) => {
        const target = e.target as Node;
        toolbarDropdowns.forEach((dd) => {
            if (!dd.contains(target)) {
                const btn = dd.querySelector<HTMLElement>("button.mg-icon-dropdown, button[data-toggle=dropdown]");
                const content = dd.querySelector<HTMLElement>(".mg-dropdown--content");
                btn?.classList.remove("opened");
                btn?.setAttribute("aria-expanded", "false");
                content?.classList.remove("opened");
            }
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAllToolbarDropdowns();
        }
    });
}

function closeAllToolbarDropdowns() {
    const dropdowns = document.querySelectorAll<HTMLElement>("header nav .mg-dropdown");
    dropdowns.forEach((dd) => {
        const btn = dd.querySelector<HTMLElement>("button.mg-icon-dropdown, button[data-toggle=dropdown]");
        const content = dd.querySelector<HTMLElement>(".mg-dropdown--content");
        btn?.classList.remove("opened");
        btn?.setAttribute("aria-expanded", "false");
        content?.classList.remove("opened");
    });
}

function initDemoMode() {
    const savedMode = (typeof localStorage !== "undefined" ? localStorage.getItem("mg-demo-mode") : null) as
        | "pure-css"
        | "compat"
        | null;

    setDemoMode(savedMode === "compat" ? "compat" : "pure-css");

    const modeDropdown = document.getElementById("demo-mode-dropdown");
    const modeCurrentBtn = document.getElementById("demo-mode-current");
    const modeDropdownContent = modeDropdown?.querySelector<HTMLElement>(".mg-dropdown--content");

    function closeModeDropdown() {
        modeCurrentBtn?.classList.remove("opened");
        modeCurrentBtn?.setAttribute("aria-expanded", "false");
        modeDropdownContent?.classList.remove("opened");
    }

    modeCurrentBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = modeCurrentBtn.classList.contains("opened");
        closeAllToolbarDropdowns();
        if (!isOpen) {
            modeCurrentBtn.classList.add("opened");
            modeCurrentBtn.setAttribute("aria-expanded", "true");
            modeDropdownContent?.classList.add("opened");
        }
    });

    document.addEventListener("click", (e) => {
        if (!modeDropdown?.contains(e.target as Node)) {
            closeModeDropdown();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModeDropdown();
        }
    });

    const bindModeButton = (id: string, mode: "pure-css" | "compat") => {
        const btn = document.getElementById(id);
        if (!btn) return;

        btn.addEventListener("mousedown", (e) => {
            e.preventDefault();
        });

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            setDemoMode(mode);
            closeModeDropdown();
        });

        btn.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setDemoMode(mode);
                closeModeDropdown();
            }
        });
    };

    bindModeButton("mode-btn-pure", "pure-css");
    bindModeButton("mode-btn-compat", "compat");
}

function setDemoMode(mode: "pure-css" | "compat") {
    currentDemoMode = mode;
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("mg-demo-mode", mode);
    }

    const currentModeBtn = document.getElementById("demo-mode-current");
    const modeBadge = document.getElementById("active-mode-badge");
    const compatInfo = document.getElementById("compat-info");

    const modeBtnPure = document.getElementById("mode-btn-pure");
    const modeBtnCompat = document.getElementById("mode-btn-compat");

    [modeBtnPure, modeBtnCompat].forEach((btn) => btn?.classList.remove("active"));

    // Always unregister existing polyfills first to cleanly tear down old state
    unregisterPlugins("all");

    if (mode === "pure-css") {
        modeBtnPure?.classList.add("active");
        if (currentModeBtn) currentModeBtn.innerHTML = `<span>⚡</span><span class="mg-s-hidden"> Pure CSS</span>`;
        if (modeBadge) {
            modeBadge.className = "mg-badge mg-bg-primary";
            modeBadge.innerHTML = "⚡ Active Mode: Pure CSS (Zero-JS)";
        }
        if (compatInfo) compatInfo.classList.add("mg-hidden");
    } else if (mode === "compat") {
        modeBtnCompat?.classList.add("active");
        if (currentModeBtn) currentModeBtn.innerHTML = `<span>🛡️</span><span class="mg-s-hidden"> Compat Mode</span>`;
        if (modeBadge) {
            modeBadge.className = "mg-badge mg-bg-warning";
            modeBadge.innerHTML = "🛡️ Active Mode: Compat Mode (Forced Polyfills)";
        }

        const support = checkBrowserSupport();
        if (compatInfo) {
            compatInfo.classList.remove("mg-hidden");
            compatInfo.innerHTML = `
                <div class="mg-text-bold mg-pad-b1">Forced Compat Polyfills:</div>
                <div class="mg-row mg-gap1 mg-text-xs">
                    <span>Dialog: ${support.dialog ? "Native" : "Polyfilled"}</span>
                    <span>Popover: ${support.popover ? "Native" : "Polyfilled"}</span>
                    <span>:has(): ${support.cssHas ? "Native" : "Polyfilled"}</span>
                    <span>Details: ${support.details ? "Native" : "Polyfilled"}</span>
                    <span>light-dark: ${support.lightDark ? "Native" : "Polyfilled"}</span>
                </div>
            `;
        }
        registerCompat({
            polyfills: true,
            forcePlugins: ["modal", "dropdown", "tabs", "nav", "collapse", "darkmode"],
        });
    }
}
