function initMenu() {
    const menu = document.getElementById("menu");
    if(window.innerWidth < 1000) {
        if(menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    } else {
        if(!menu.classList.contains("active")) {
            menu.classList.add("active");
        }
    }
}

function initSize() {
    initMenu();
    const root = document.documentElement;
    root.style.setProperty("--viewport-height",window.innerHeight + "px");
}

addEventListener("resize", (event) => {
    initSize();
});

document.addEventListener("DOMContentLoaded", (event) => {
    initSize();
});