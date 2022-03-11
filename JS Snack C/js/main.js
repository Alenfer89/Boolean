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

const betterStringhe = stringhe.map((element) =>{
  return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
})
console.table(stringhe)
console.table(betterStringhe)

