/**
 * 
  Il software deve chiedere per 10 volte all'utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.
 */
let somma = 0;

for(let i = 0; i < 5 ; i++){
  let numero= parseInt(prompt('inserisci un numero'));
  somma += numero;
}
console.log(somma)