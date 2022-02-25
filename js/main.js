
// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Consigli generali
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare attraverso le nostre istruzioni
// si, ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// usiamo i diagrammini e i discorsi filosofici di oggi come base per costruire un nostro sistema di implementazione autonomo

//setto i dati
const userEmail = document.getElementById('user-email');
const registeredEmailList = ['pera', 'mela', 'banana','orange', 'melanzana', 'pomodoros', 'ciliegie', 'ananas'] ;
console.log(userEmail);
console.log(registeredEmailList);
//creo un listener
document.getElementById('generator').addEventListener('click', function(){
    for ( i = 0 ; i < registeredEmailList.length; i++){
        console.log(registeredEmailList[i]);
        if(registeredEmailList[i] == userEmail.value){
            prompt('benvenuto');
        } else{
            console.warn('registrati gratis');
        }
    }
})
//? ciclo for con un if dentro per controllo e risposta?

