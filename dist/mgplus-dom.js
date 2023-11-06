function $2a551a86451a9d86$export$2e2bcd8739ae039() {
    let currentDropdown = null;
    document.querySelectorAll("[data-toggle~=dropdown]").forEach(setupDropdown);
    function setupDropdown(dropdownToggle) {
        dropdownToggle.setAttribute("aria-haspopup", "true");
        dropdownToggle.setAttribute("aria-expanded", "false");
        const dropdownContent = dropdownToggle.parentNode.querySelector(".mg-dropdown--content");
        dropdownContent.setAttribute("aria-hidden", "true");
        dropdownToggle.onclick = toggleDropdown;
        function toggleDropdown(e) {
            e.preventDefault();
            e.stopPropagation();
            if (dropdownToggle.getAttribute("aria-expanded") === "true") {
                dropdownToggle.setAttribute("aria-expanded", "false");
                dropdownContent.setAttribute("aria-hidden", "true");
                dropdownToggle.parentNode.classList.remove("opened");
                currentDropdown = null;
                return;
            }
            closeCurrent.call(undefined);
            dropdownToggle.setAttribute("aria-expanded", "true");
            dropdownContent.setAttribute("aria-hidden", "false");
            dropdownToggle.parentNode.classList.add("opened");
            dropdownContent.children[0].focus();
            currentDropdown = dropdownToggle;
            return;
        }
    }
    function closeCurrent() {
        if (currentDropdown) {
            currentDropdown.setAttribute("aria-expanded", "false");
            currentDropdown.setAttribute("aria-hidden", "true");
            currentDropdown.parentNode.classList.remove("opened");
            currentDropdown = false;
        }
    }
    window.onclick = function(event) {
        const element = event.target;
        if (!element.classList) return;
        if (element.classList.contains("mg-dropdown")) return;
        if (element.classList.contains("mg-dropdown--button")) return;
        if (element.classList.contains("mg-dropdown--content")) return;
        closeCurrent.call(undefined);
    };
}


function $e2ea968a57da8a86$export$2e2bcd8739ae039() {
    // Select all elements with data-toggle attribute containing "modal" and setup modal for each
    document.querySelectorAll("[data-toggle~=modal]").forEach(setupModal);
    // Function to setup modal for an element
    function setupModal(el) {
        console.log("setting up modal");
        // Function to handle modal removal
        function removeModalHandler() {
            modal.classList.remove("mg-show");
        }
        // Select the modal and close button elements
        var modal = document.querySelector("#" + el.getAttribute("data-target"));
        var close = modal.querySelector("[data-action=close]");
        // Add event listener to the element to show modal on click
        el.addEventListener("click", function(ev) {
            modal.classList.add("mg-show");
        });
        // Add event listener to the close button to remove modal on click
        close.addEventListener("click", function(ev) {
            ev.stopPropagation();
            removeModalHandler();
        });
    }
}


function $e49cd42f69d2521f$export$2e2bcd8739ae039() {
    document.querySelectorAll("[data-toggle~=nav]").forEach(setupNav);
    function setupNav(nav) {
        const items = nav.getElementsByTagName("li");
        for(let j = 0; j < items.length; j++){
            const item = items[j];
            if (item.classList.contains("active") || item.getAttribute("data-active") === "true") {
                item.setAttribute("data-active", "true");
                item.classList.add("active");
            }
        }
        nav.addEventListener("click", function(e) {
            let selector = e.target;
            console.log(e.target.parentNode);
            if (e.target.parentNode.tagName == "LI") selector = e.target.parentNode;
            if (selector.getAttribute("data-active") !== "true") {
                //disable all selected tabs
                let items = nav.getElementsByTagName("li");
                for(let j = 0; j < items.length; j++){
                    const item = items[j];
                    item.classList.remove("active");
                    item.setAttribute("data-active", "false");
                }
                //activate selected tab
                selector.classList.add("active");
                selector.setAttribute("data-active", "true");
            }
        });
    }
}


function $a6a67ad7ed0be81b$export$2e2bcd8739ae039() {
    document.querySelectorAll("[data-toggle~=tabs]").forEach(setupTabs);
    function setupTabs(tabs) {
        let items = tabs.getElementsByClassName("mg-tabs--item");
        for(let j = 0; j < items.length; j++){
            const item = items[j];
            if (item.classList.contains("active") || item.getAttribute("data-active") === "true") {
                item.setAttribute("data-active", "true");
                item.classList.add("active");
                const targetToShow = item.getAttribute("data-target");
                if (targetToShow) {
                    const el = document.getElementById(targetToShow);
                    if (el) el.style.display = "block";
                }
            }
        }
        tabs.addEventListener("click", function(e) {
            let selector = e.target;
            if (e.target.parentNode.classList.contains("mg-tabs--item")) {
                selector = e.target.parentNode;
                e.stopPropagation();
                e.preventDefault();
                if (selector.getAttribute("data-active") !== "true") {
                    //disable all selected tabs
                    let items = tabs.getElementsByClassName("mg-tabs--item");
                    for(let j = 0; j < items.length; j++){
                        const item = items[j];
                        item.classList.remove("active");
                        item.setAttribute("data-active", "false");
                        let targetToHide = item.getAttribute("data-target");
                        if (targetToHide) {
                            const el = document.getElementById(targetToHide);
                            if (el) el.style.display = "none";
                        }
                    }
                    //activate selected tab
                    selector.classList.add("active");
                    selector.setAttribute("data-active", "true");
                    let targetToShow = selector.getAttribute("data-target");
                    if (targetToShow) {
                        const el = document.getElementById(targetToShow);
                        if (el) el.style.display = "block";
                    }
                }
            }
        });
    }
}


function $4fa36e821943b400$var$registerDomPlugins() {
    (0, $2a551a86451a9d86$export$2e2bcd8739ae039)();
    (0, $e2ea968a57da8a86$export$2e2bcd8739ae039)();
    (0, $e49cd42f69d2521f$export$2e2bcd8739ae039)();
    (0, $a6a67ad7ed0be81b$export$2e2bcd8739ae039)();
}
(function(window1) {
    window1.mgplus = {
        registerDomPlugins: $4fa36e821943b400$var$registerDomPlugins
    };
})(window);


//# sourceMappingURL=mgplus-dom.js.map
