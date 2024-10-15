/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */


const arrayVuoto= [];




let sum=0;
while (sum < 200){
  let richiesta = parseInt(prompt('inserisci un numero'));
  arrayVuoto.push(richiesta);
  sum += richiesta;
  console.log(sum);
}
console.log(sum)
console.log(arrayVuoto)