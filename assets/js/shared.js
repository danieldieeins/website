if(location.href.toLowerCase().includes("nerotvlive.nerofy.de")) {
    location.href = location.href.replaceAll("nerotvlive.nerofy.de","nerotvlive.nrfy.net");
}
if(location.href.toLowerCase().includes("nerotv.live")) {
    location.href = location.href.replaceAll("nerotv.live","nerotvlive.nrfy.net");
}
if(location.href.toLowerCase().includes("nerotvlive.nrfy.net")&&location.href.toLowerCase().endsWith(".html")) {
    location.href = location.href.replaceAll(".html","");
}