function blockSpaceAndEnter(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault();
    }
}


function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * germanWords.length);
    return germanWords[randomIndex];
}

function findAmeno() {
    let i = 0;
    let word;
    do {
        i=i+1;
        word = getRandomWord();
        console.log(word+" ("+i+")");
        document.getElementById('input').value = word;
    } while (word !== "Ameno");
    console.log("Ameno gefunden! (nach "+i+" Versuchen)");
}