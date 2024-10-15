
// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.

//* genero i numeri col randomint
//*           -pusho i numeri in un array A per il controllo dopo
//*setto un timer (o due) che fa sparire il div coi numeri random e che al contempo fa partire i prompt
//*           -ad ogni prompt se il numero è come quello generato lo pusho in un array B
//*           -se array A e array B sono lunghi uguali esce un messaggio di vottoria


let activeGameNumbers=[];
let betterWrittenActiveGameNumbers=[];
for (i = 0; i < 5; i++){
  let randomInt = generateUniqueRandomNumber(activeGameNumbers, 1, 100);
  activeGameNumbers.push(randomInt);
  let betterWrittenRandomInt = " " + randomInt;
  betterWrittenActiveGameNumbers.push(betterWrittenRandomInt);
  elementCreator (activeGameNumbers[i], 'game-numbers')
}
console.log(activeGameNumbers)
console.log(betterWrittenActiveGameNumbers)



function theGame(){
  document.getElementById('game-numbers').innerHTML='TENTA LA FORTUNA';
  let userGuessNumbers=[];
  let betterWrittenUserGuessNumbers=[];
  let userWrongNumbers=[];
  let betterWrittenUserWrongNumbers=[];
  for (i = 0; i < 5; i++){
    let userGuess = parseInt(prompt('inserisci uno dei numeri appena visti'));
    elementCreator(userGuess, "user-numbers");
    let betterWrittenUserGuess;
    if(activeGameNumbers.includes(userGuess)){
      userGuessNumbers.push(userGuess);
      betterWrittenUserGuess = ' ' + userGuess;
      betterWrittenUserGuessNumbers.push(betterWrittenUserGuess);
      // if(userGuess == userGuessNumbers[0] ){
      //   console.log('tutto ok')
      // } else if (userGuessNumbers.includes(userGuess)){
      //   alert('NUMERO GIA\' INSERITO')
      //   userGuess = parseInt(prompt('inserisci uno dei numeri appena visti'));
      // }
      console.log(userGuessNumbers);
    } else{
      userWrongNumbers.push(userGuess);
      betterWrittenUserGuess = ' ' + userGuess;
      betterWrittenUserWrongNumbers.push(betterWrittenUserGuess);
      console.log('not ok')
    }
  }
  let result = document.getElementById('result');
  let plural;
  if(userGuessNumbers.length == 1){
    plural = 'o';
  } else{
    plural = 'i';
  }
  if (userGuessNumbers.length == activeGameNumbers.length){
    result.innerHTML =`HAI VINTO! Hai indovinato ${userGuessNumbers.length} numer${plural}, ovvero: ${betterWrittenUserGuessNumbers}`;
  } else{
    result.innerHTML =`HAI PERSO! Hai indovinato ${userGuessNumbers.length} numer${plural}, ovvero: ${betterWrittenUserGuessNumbers}, e hai sbagliato ${betterWrittenUserWrongNumbers}. I numeri da indovinare erano:${betterWrittenActiveGameNumbers}`;
  }
}
setTimeout(theGame, 5000);

/**
 * Function that generates a random number between two included values, which is not already present in the given blacklist.
 *
 * @param {*} numsBlacklist The blacklist to check.
 * @param {*} min The minimum value of the random generated integer.
 * @param {*} max The maximum value of the random generated integer.
 * @returns A random generated integer which is not present in the blacklist.
 */
function generateUniqueRandomNumber(numsBlacklist, min, max){
  let check = false;
  let randomInt;
  while ( !check ){
      randomInt  = Math.floor(Math.random() * ((max + 1) - min) + min);
      if ( !numsBlacklist.includes(randomInt)  ){
          check = true;
      }
  }
  return randomInt;
}
/**
 * This function creates a div element which contains a number, with a preset pill background
 * 
 * @param {*} number the number which is going inside the div element
 * @param {*} container the container where to put the div element
 * @returns the div element, styled, with a number inside and in a given parent element
 */
function elementCreator (number, container){
  let element;
  element = document.createElement('div');
  element.classList.add('ax-numbers')
  element.innerHTML= number;
  document.getElementById(container).appendChild(element);
  return element;
}