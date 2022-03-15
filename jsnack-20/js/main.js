/**
 * 
 * 
   Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
   es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


   bonus::: crea un oggetto che abbia come chiave gli elementi del primo array e come valore gli elementi del secondo. dovrei dire chiavi e valori forse
 * 
 */

const letters = ['a','b','c','d','e'];
const numbers = [1, 2, 3, 4, 5];

function fusionOfArrays (firstArray, secondArray, length){
   const newArray =[];
   for (let i = 0; i < length; i++){
      newArray.push(firstArray[i]);
      newArray.push(secondArray[i]);
   }
   return newArray;
}

console.table(fusionOfArrays(letters, numbers, letters.length));

function objectsFromArrays (firstArray, secondArray, length){
   const object = {};
   for (let i = 0; i < length; i++){
      object[firstArray[i]] = secondArray[i];
   }
   return object
}
console.log(objectsFromArrays (letters, numbers, letters.length))