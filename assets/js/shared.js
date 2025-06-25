if(location.href.toLowerCase().includes("nerotvlive.nerofy.de")) {
    location.href = location.href.replaceAll("nerotvlive.nerofy.de","nerotv.live");
}
if(location.href.toLowerCase().includes("nerotvlive.nrfy.net")) {
    location.href = location.href.replaceAll("nerotvlive.nrfy.net","nerotv.live");
}
if(location.href.toLowerCase().includes("nerotv.live")&&location.href.toLowerCase().endsWith(".html")) {
    location.href = location.href.replaceAll(".html","");
}