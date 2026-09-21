import { registerPlugins, registerCompat, checkBrowserSupport, applyTheme } from '../src/plugins/main.ts';
import iro from '@jaames/iro';

let currentDemoMode: "zero-js" | "plugins" | "compat" = "zero-js";

window.addEventListener("DOMContentLoaded", () => {
    loadDemoSections();
    registerDemoFeatures();
    initDemoMode();
    initThemeSwitcher();
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

    const inputRadiusSelector = document.querySelector("#input-radius-selector");

    inputRadiusSelector?.addEventListener("change", (ev: any) => {
        theme.style.setProperty("--mg-input-radius", `${ev.target.value / 10}rem`);
    });
    const controlRadiusSelector = document.querySelector(
        "#control-radius-selector"
    );
    controlRadiusSelector?.addEventListener("change", (ev: any) => {
        theme.style.setProperty(
            "--mg-control-radius",
            `${ev.target.value / 10}rem`
        );
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
        el.addEventListener("click", () => {
            const targetTheme = el.getAttribute("data-value") || "auto";
            applyTheme(targetTheme, true);
        });
    });
}

function initDemoMode() {
    const savedMode = (typeof localStorage !== "undefined" ? localStorage.getItem("mg-demo-mode") : null) as
        | "zero-js"
        | "plugins"
        | "compat"
        | null;

    setDemoMode(savedMode || "zero-js");

    const modeBtnZero = document.getElementById("mode-btn-zero");
    const modeBtnPlugins = document.getElementById("mode-btn-plugins");
    const modeBtnCompat = document.getElementById("mode-btn-compat");

    modeBtnZero?.addEventListener("click", () => setDemoMode("zero-js"));
    modeBtnPlugins?.addEventListener("click", () => setDemoMode("plugins"));
    modeBtnCompat?.addEventListener("click", () => setDemoMode("compat"));
}

function setDemoMode(mode: "zero-js" | "plugins" | "compat") {
    currentDemoMode = mode;
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("mg-demo-mode", mode);
    }

    const currentModeBtn = document.getElementById("demo-mode-current");
    const modeBadge = document.getElementById("active-mode-badge");
    const compatInfo = document.getElementById("compat-info");

    const modeBtnZero = document.getElementById("mode-btn-zero");
    const modeBtnPlugins = document.getElementById("mode-btn-plugins");
    const modeBtnCompat = document.getElementById("mode-btn-compat");

    [modeBtnZero, modeBtnPlugins, modeBtnCompat].forEach((btn) => btn?.classList.remove("active"));

    if (mode === "zero-js") {
        modeBtnZero?.classList.add("active");
        if (currentModeBtn) currentModeBtn.innerHTML = "⚡ Zero-JS";
        if (modeBadge) {
            modeBadge.className = "mg-badge mg-bg-primary";
            modeBadge.innerHTML = "⚡ Active Mode: Zero-JS (Pure HTML5 &amp; CSS)";
        }
        if (compatInfo) compatInfo.classList.add("mg-hidden");
        registerPlugins([]);
    } else if (mode === "plugins") {
        modeBtnPlugins?.classList.add("active");
        if (currentModeBtn) currentModeBtn.innerHTML = "🚀 JS Plugins";
        if (modeBadge) {
            modeBadge.className = "mg-badge mg-bg-success";
            modeBadge.innerHTML = "🚀 Active Mode: JS Plugins Enabled";
        }
        if (compatInfo) compatInfo.classList.add("mg-hidden");
        registerPlugins(["dropdowns", "modals", "navs", "collapses", "darkmode", "tabs"]);
    } else if (mode === "compat") {
        modeBtnCompat?.classList.add("active");
        if (currentModeBtn) currentModeBtn.innerHTML = "🛡️ Auto-Compat";
        if (modeBadge) {
            modeBadge.className = "mg-badge mg-bg-warning";
            modeBadge.innerHTML = "🛡️ Active Mode: Auto-Compat (Feature Detection)";
        }

        const support = checkBrowserSupport();
        if (compatInfo) {
            compatInfo.classList.remove("mg-hidden");
            compatInfo.innerHTML = `
                <div class="mg-text-bold mg-pad-b1">Browser Features:</div>
                <div class="mg-row mg-gap1 mg-text-xs">
                    <span>Dialog: ${support.dialog ? "✅" : "❌"}</span>
                    <span>Popover: ${support.popover ? "✅" : "❌"}</span>
                    <span>:has(): ${support.cssHas ? "✅" : "❌"}</span>
                    <span>Details: ${support.details ? "✅" : "❌"}</span>
                    <span>light-dark: ${support.lightDark ? "✅" : "❌"}</span>
                </div>
            `;
        }
        registerCompat({ polyfills: true });
    }
}
