/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */


//creo il mio array contenitore dei numeri randomici
const randomNumbers =[];
//creo la variabile somma che avrà un senso dopo il ciclo for
let sum=0;

for(let i = 0 ; i < 10; i++){
  //creo la variabile "numero casuale"
  let number = Math.floor(Math.random()* 100 );
  randomNumbers.push(number)
  sum += number;
  console.log('somma parziale ' + sum)
}
//creo la variabile per il vaolore medio
let medianValue = sum / randomNumbers.length;
//controllo i valori
console.log(randomNumbers);
console.log(sum);
console.log(medianValue);