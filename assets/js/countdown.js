function updateCountdown(countdownGoal,id,endFunction) {
    if(countdownGoal&&id&&endFunction) {
        let countdownDate = new Date(countdownGoal);
        const dateNow = new Date();

        const now = dateNow.getTime();
        const distance = countdownDate.getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let days_ = " Tagen";
        if(days === 1) {
            days_ = " Tag";
        }

        let hours_ = " Stunden";
        if(hours === 1) {
            hours_ = " Stunde";
        }

        let minutes_ = " Minuten";
        if(minutes === 1) {
            minutes_ = " Minute";
        }

        let seconds_ = " Sekunden";
        if(seconds === 1) {
            seconds_ = " Sekunde";
        }

        document.getElementById(id + "-days").innerText = days+days_;
        document.getElementById(id + "-hours").innerText = hours+hours_;
        document.getElementById(id + "-minutes").innerText = minutes+minutes_;
        document.getElementById(id + "-seconds").innerText = seconds+seconds_;

        if (distance <= 0 || String(days + " " + hours + " " + minutes + " " + seconds).includes("-") || String(days + " " + hours + " " + minutes + " " + seconds) === "0 0 0 0") {
            endFunction();
        }
    }
}