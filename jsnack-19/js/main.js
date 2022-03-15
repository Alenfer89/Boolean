/**
 * 
   A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
   B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
   C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
    * 
 */
const strList = [];
for (let i = 0; i < 10; i++){
   strList.push(randomIntFromInterval(1, 100));
   strList.push(makeId(10));
}
console.table(strList);
const reversedStrList = strList.map((element) => (isNaN(parseInt(element))) ? reverseString(element) : getAdditiveInverse(element) );
console.table(reversedStrList);
function reverseString(string){
   return string.split('').reverse().join('');
}
function getAdditiveInverse(number){
   return -number;
}
// function numberOpposite (...number){
//    if(!isNaN(number)){
//       let oppositeNumber = '-'+number;
//       return oppositeNumber
//    }
// }
function randomIntFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
function makeId(length) {
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}