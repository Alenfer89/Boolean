/**
 *
  Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.
 *
 */

//quello che volevo fare era chiedere, tramite prompt, un numero di 7 cifre all'utente. poi tramite un if scartare tutti gli inserimenti scorretti  o procedere con la richiesta della consegna. Volevo, tramite ricerca su MDN andata per le lunghe, scomporre la stringa ricevuta col prompt, mettere tutto in un array e infine sommare le cifre dell'array

//chiedo con un prompt 7 numeri all'utente, e controllo la lunghezza della stringa
const userNumber = prompt('indicami un numero di 7 cifre!');
console.log(userNumber)
console.log(userNumber.length)
//preparo la variabile somma per la richiesta della consegna
let somma = 0;
console.log(somma)
//con un if scremo gli errori dell'utente, con la prima condizione i le stringhe che non hanno 8 caratteri, cvon la seconda condizione le stringhe che contengono dei "non-numeri"
if ((userNumber.length !== 7) || (!/^[0-9]*$/g.test(userNumber)) ){
  alert('inserisci 7 caratteri numerici')
} else{ //in caso di inserimento corretto, parte il cilo for innestato nell'else
  //con ciclo for controllo ogni carattere, tale carattere tramite il parsint verrà indentificato come numero e soppato ad ogni ciclo, al fine di ottenere la somma
  for(let i = 0; i < userNumber.length; i++){
    somma+= parseInt(userNumber.charAt(i));
  }
}
//stampo la somma per controllo
console.log(somma)