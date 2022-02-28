/**
 *
  Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.
 *
 */

//quello che volevo fare era chiedere, tramite prompt, un numero di 7 cifre all'utente. poi tramite un if scartare tutti gli inserimenti scorretti  o procedere con la richiesta della consegna. Volevo, tramite ricerca su MDN andata per le lunghe, scomporre la stringa ricevuta col prompt, mettere tutto in un array e infine sommare le cifre dell'array

const userNumber = prompt('indicami un numero di 7 cifre!');
console.log(userNumber)
console.log(userNumber.length)

if ((userNumber.length !== 7) || (!/^[0-9]*$/g.test(userNumber)) ){
  alert('inserisci 7 caratteri numerici')
} else{
  userNumber
}