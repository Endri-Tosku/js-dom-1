const button = document.querySelector('button') // seleziono il bottone nell'html
const imgRef = document.querySelector('.lampadina') // seleziono l'immagine della lampadina

let lampOn = false; // variabile per capire che la lampadina sia spenta o accesa

button.addEventListener('click', () => { // aggiunge l'event listener suò bottone e funzione in arrow

    if (lampOn === false) { // controlla se la lampadina sia spenta
        imgRef.src = "./img/yellow_lamp.png" // se non è spenta cambia l'immagine con quella accesa
        imgRef.alt = "lampadina accesa " // e campbia anche l'alt dell'immagine
    } else { // altrimenti ritorna all'immagine con la lampadina spenta
        imgRef.src = "./img/white_lamp.png"
    }
});
