/**
 * 
  L'utente inserisce due parole in successione, con due prompt.
  Il software stampa prima la parola più corta, poi la parola più lunga.
 */


//*parte funzionante:
//*1 - tramite due prompt chiedo due parole
//*2 - con un if paragono le lunghezze (.length) e stampo di conseguenza

//  const firstWord = prompt("inserisci una parola")
//  const secondWord = prompt("inserisci una parola")

//  if(firstWord.length > secondWord.length){
//      console.log(secondWord)
//      console.log(firstWord)
//  }else if (firstWord.length < secondWord.length){
//      console.log(firstWord)
//      console.log(secondWord)
// } else{
//      console.log('signora i limoni')
//  }


//*parte NON funzionante su cui sto ancora lavorando, il .length non funziona e cercherò alternative

const firstWord = document.getElementById('first-word');
const secondWord = document.getElementById('second-word');
const leButton = document.getElementById('le-button');
let result = document.getElementById('result');



leButton.addEventListener('click', function(){
  console.log(firstWord.length)
  console.log(secondWord.length)

  if(firstWord.length > secondWord.length){
    console.log(secondWord + firstWord);
    result.innerHTML=(secondWord + firstWord);
  } else if (firstWord.length < secondWord.length){
    console.log(firstWord + secondWord);
    result.innerHTML=(firstWord + secondWord);
  } else {
    console.log('signora i limoni');
    result.innerHTML=('signora i limoni');
  }
})


