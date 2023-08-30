// Functionality of hamurger menu
const menuToggler = document.querySelector("[data-menu-toggler]");
const menu = document.querySelector("[data-header-menu]");
menuToggler.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");
    if (visibility === "false") {
        menu.setAttribute("data-visible", true);
        menuToggler.style.backgroundImage =
            "url('../images/hamburger-menu-close.svg')";
    } else {
        menu.setAttribute("data-visible", false);
        menuToggler.style.backgroundImage =
            "url('../images/hamburger-menu.svg')";
    }
});

//
const header = document.querySelector("[data-header]");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
header.before(scrollWatcher);

const scrollWatcherObserver = new IntersectionObserver(
    (entries) => {
        header.classList.toggle("sticking", !entries[0].isIntersecting);
    },
    {
        threshold: 1,
        rootMargin: "50px 0px 0px 0px",
    }
);

scrollWatcherObserver.observe(scrollWatcher);
