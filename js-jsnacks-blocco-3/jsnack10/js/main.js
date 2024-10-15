/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */
/** Ultimo snack di oggi versioni custom
 *
 * § BONUS 1
 *
    Fai inserire due numeri, che chiameremo N & M, all'utente.
    Genera N array, ognuno formato da M numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.

 *
 */
  /**
 *
 * # BONUS 2
 *
    Fai inserire tre numeri, che chiameremo N & M & L, all'utente.
    Genera N array, ognuno formato da M numeri casuali tra 4 e 4532 che sommati diano almeno L.
    Ogni volta che ne crei uno, stampalo a schermo.

 *
 */

  /**
 *
 * # BONUS 3
 *
    Fai inserire tre numeri, che chiameremo N & M & L, all'utente.
    Genera N array, ognuno formato da M numeri casuali tra 4 e 4532 che sommati diano al più L.
    Ogni volta che ne crei uno, stampalo a schermo.

 *
 */

const richiesta = parseInt(prompt('inserisci un numero'));
while (isNaN(richiesta)){
  richiesta = parseInt(prompt('inserisci un numero'));
}
if (richiesta >= 100){
  richiesta = 100;
}

const arrayList = [];

for (i = 0; i < richiesta; i++){
  const arrayNr=[];
  while (arrayNr.length < 10){
    arrayNr.push(Math.floor(Math.random()* 4528) +4)
  }
  console.log(arrayNr)
  arrayList.push(arrayNr)
}
console.log(arrayList)