function updateCountdown(countdownGoal,id,endFunction) {
    if(countdownGoal&&id&&endFunction) {
        let countdownDate = new Date(countdownGoal);
        const dateNow = new Date();

        const now = dateNow.getTime();
        const distance = countdownDate.getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const days_ = " Tag" + (days !== 1 ? "en" : ""),
            hours_ = " Stunde" + (hours !== 1 ? "n" : ""),
            minutes_ = " Minute" + (minutes !== 1 ? "n" : ""),
            seconds_ = " Sekunde" + (seconds !== 1 ? "n" : "");

        document.getElementById(id + "-days").innerText = days+days_;
        document.getElementById(id + "-hours").innerText = hours+hours_;
        document.getElementById(id + "-minutes").innerText = minutes+minutes_;
        document.getElementById(id + "-seconds").innerText = seconds+seconds_;

        if (distance <= 0 || String(days + " " + hours + " " + minutes + " " + seconds).includes("-") || String(days + " " + hours + " " + minutes + " " + seconds) === "0 0 0 0") {
            endFunction();
        }
    }
}
