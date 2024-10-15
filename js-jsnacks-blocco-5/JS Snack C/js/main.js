/**
 * 
  A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

  Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */

const stringhe =['pippo', 'PLUTO', 'Paperino','asdfgaerr','IJHGH uYT VYg uhb', 'sfag 5aerAW QDw'];
// const betterStringhe = [];
// for (let i = 0; i < stringhe.length; i++){
//   let element =stringhe[i].toLocaleLowerCase()
//   betterStringhe.push(element)
// }
// console.log(betterStringhe)
for (i = 0; i < randomIntFromInterval(5, 15); i++){
  stringhe.push(makeId(randomIntFromInterval(3, 10)))
}
const betterStringhe = stringhe.map((element) =>{
  return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
})
console.table(stringhe)
console.table(betterStringhe)

function makeId(length) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}



