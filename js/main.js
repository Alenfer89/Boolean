
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

//mail
//*setto i dati
const userEmail = document.getElementById('user-email');
const registeredEmailList = ['pera', 'mela', 'banana','orange', 'melanzana', 'pomodoros', 'ciliegie', 'ananas'] ;
console.log(userEmail);
console.log(registeredEmailList);
//*creo un listener
//? ciclo for con un if dentro per controllo e risposta?
document.getElementById('generator').addEventListener('click', function(){
    //ù qua non funziona perche' la variabile non ha un valore assegnato e sotto in fondo non prende l'identità
    //let check;
    let check=false;
    for ( i = 0 ; i < registeredEmailList.length; i++){
        //ù qua il la variabile check non funzionava perchè si creava per ogni ciclo di for?
        if(registeredEmailList[i] === userEmail.value){
            //ù creare qua la variabile check non funzionava perchè si creava e si verificava sempre e solo col true(vedi sotto)
            check = true;
            if (check = true){
                alert('benvenuto')
            }
            //ù qua non funziona perche' non sarà mai possibile verificarlo
            //else if (!check){
            //    alert('registrati')
           // }
        } 
        //ù qua non funziona ma non ho ancora capito perche' (o forse qua ne fa uno per ogni ciclo di for? ma dovrebbe comunque funzionare, ma forse non c'era l'identità fuori dal for)
       // else{
       //     check = false
       // }
    }
    //ù qua senza l'uguaglianza forte o l'identità non funziona
    if (check==false){
        alert('registrati gratis')
    }
})


//dadi
//*setto i dati
let userDoom
let pcDoom



