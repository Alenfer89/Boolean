/**
 * 
  Il software deve chiedere per 10 volte all'utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.
 */


//creo una vaariabile che utilizzerò per sommare i vari dati immessi dall'utente
let somma = 0;
//creo un 'for' per chiedere più volte i dati all'utente e per sommare ad ogni ciclo il dato per ottenere una somma in continua mutazione
for(let i = 0; i < 5 ; i++){
  let numero= parseInt(prompt('inserisci un numero'));
  somma += numero; //uguale a scrivere "somma = somma + numero"
}
//stampo il risultato finale della somma appena uscito dal ciclo for
console.log(somma)