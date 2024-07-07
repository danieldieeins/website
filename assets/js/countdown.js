function updateCountdown(countdownGoal,id,endFunction) {
    const distance = new Date(countdownGoal) - new Date();

    const days = Math.floor(distance / 86400000),
        hours = Math.floor((distance % 86400000) / 3600000),
        minutes = Math.floor((distance % 3600000) / 60000),
        seconds = Math.floor((distance % 60000) / 1000);

    document.getElementById(id + "-days").innerText = (days > 0 ? days+" Tag" + (days !== 1 ? "en" : "") : "");
    document.getElementById(id + "-hours").innerText = (hours > 0 ? hours+" Stunde" + (hours !== 1 ? "n" : "") : "");
    document.getElementById(id + "-minutes").innerText = (minutes > 0 ? minutes+" Minute" + (minutes !== 1 ? "n" : "") : "");
    document.getElementById(id + "-seconds").innerText = (seconds > 0 ? seconds+" Sekunde" + (seconds !== 1 ? "n" : "") : "");

    if (distance <= 0) {
        endFunction();
    }
}