/**
    *  Dato un array, genera randomicamente due numeri:
    *   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
    *   il secondo numero che dovrà essere sempre minore del primo numero
    *
    * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
    * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
    * 
    * 
    * BONUS:::: Creo un'altra funzione che dati gli stessi input, restituisca un array esclusivamente composto dagli elementi esterni a quelli selezionati (l'opposto di prima)
*/
const listOfNumbers = [];

for (let i = 0; i < randomIntFromInterval(10, 20); i ++){
   listOfNumbers.push(randomIntFromInterval(1, 100));
}
console.log(listOfNumbers);
let numberA = randomIntFromInterval(1, listOfNumbers.length - 1);
let numberB = randomIntFromInterval(0, numberA - 1);
console.log(numberA);
console.log(numberB);

console.table(arrayOfNumbers(listOfNumbers, numberB, numberA))
console.table(arrayOfExcluded(listOfNumbers, numberB, numberA))
function randomIntFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
function arrayOfNumbers(array, minLength, maxLength){
   newArray = [];
   for (let i = minLength; i <= maxLength; i++){
      newArray.push(array[i]);
   }
   return newArray;
}
function arrayOfExcluded(array, minLength, maxLength){
   newArray = array;
   for (let i = minLength; i <= maxLength; i++){
      newArray.splice(array[i]);
   }
   return newArray;
}