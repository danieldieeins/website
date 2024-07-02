const isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent);
window.addEventListener('resize', checkWindowSize);
document.addEventListener("DOMContentLoaded", function() {
    checkWindowSize();
});

function checkWindowSize() {
    if(window.innerWidth > 800) {
        activateMenu()
    } else {
        deactivateMenu();
    }
    checkURL();
}

function activateMenu() {
    let headMenu = document.getElementById('head-menu');
    if (!isMobile) {
        if(headMenu) {
            headMenu.classList.add("active");
            document.getElementById("sub-menu").classList.add("active");
            document.getElementById("content").classList.add("active");
        }
    } else {
        deactivateMenu();
    }
}

function deactivateMenu() {
    let headMenu = document.getElementById('head-menu');
    if(headMenu) {
        headMenu.classList.remove("active");
        document.getElementById("content").classList.remove("active");
        if (isMobile) {
            document.getElementById("sub-menu").classList.add("active");
        } else {
            document.getElementById("sub-menu").classList.remove("active");
        }
    }
}

function checkURL() {
    const urlParams = new URLSearchParams(location.search);
    if(urlParams.get("r")!=null) {
        location.href = "https://nerotv.live/"+urlParams.get("r");
        return;
    }
    if(urlParams.get("s")!=null) {
        const s = urlParams.get('s');
        if(s === "start"||s === "home") {
            document.title = "a.nerotv.live (start)"
            open_("sub/start.html");
        } else if(s === "lawstuff"||s==="rechtliches") {
            document.title = "a.nerotv.live (impressum & datenschutzerklärung)"
            open_("sub/lawstuff.html");
        } else if(s==="datenschutzerklärung") {
            document.title = "a.nerotv.live (impressum & datenschutzerklärung)"
            open_("sub/lawstuff.html#datenschutzerklärung");
        } else if(s==="impressum") {
            document.title = "a.nerotv.live (impressum & datenschutzerklärung)"
            open_("sub/lawstuff.html");
        } else if(s === "discord") {
            document.title = "a.nerotv.live (discord)"
            open_("sub/discord.html");
        } else if(s === "creator") {
            document.title = "a.nerotv.live (andere creator)"
            open_("sub/creator.html");
        } else if(s === "zyneon") {
            document.title = "a.nerotv.live (zyneon)"
            open_("sub/zyneon.html");
        } else if(s === "zyneonweb") {
            document.title = "a.nerotv.live (zyneon website)"
            open_("https://zyneonstudios.com");
        } else if(s === "zyneonapp") {
            document.title = "a.nerotv.live (zyneon web app)"
            open_("https://danieldieeins.github.io/Zyneon-Application/");
        } else {
            document.title = "a.nerotv.live (404)"
            open_("sub/e404.html");
        }
    }
}

function link(url) {
    console.log("[Launcher-Bridge] button.refresh");
    window.open(url, "_self");
}

function link_(url) {
    window.open(url,'_blank');
}

function link__(url) {
    window.location.href = url;
}

function open_(url) {
    document.getElementById("content").src = url;
    $( "iframe" ).on('load',function() {
        document.title = document.getElementById("content").contentDocument.title;
    });
}