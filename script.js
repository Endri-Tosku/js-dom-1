const button = document.querySelector('button') // seleziono il bottone nell'html
const imgRef = document.querySelector('.lampadina') // seleziono l'immagine della lampadina

let lampOn = false; // variabile per capire che la lampadina sia spenta o accesa

button.addEventListener('click', () => { // aggiunge l'event listener suò bottone e funzione in arrow

    if (lampOn === false) { // controlla se la lampadina sia spenta
        imgRef.src = "./img/yellow_lamp.png" // se è accesa cambia l'immagine da quella spenta a quella accesa
        imgRef.alt = "lampadina accesa" // cambia anche l'alt dell'immagine
        button.textContent = "Spegni"; // cambia il testo del bottone in "Spegni"
        lampOn = true // aggiorna la variabile per indicare che la lampadina sia accesa

    } else { // altrimenti ritorna all'immagine con la lampadina spenta
        imgRef.src = "./img/white_lamp.png" // ritorna l'immagine alla lampadina spenta
        imgRef.alt = "lampadina spenta" // ritorna anche l'alt della lampadina spenta
        button.textContent = "Accendi"; // cambia il testo del bottone in "Accendi"
        lampOn = false // aggiorna la variabile per indicare che la lampadina sia spenta
    }
});


