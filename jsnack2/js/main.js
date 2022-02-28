/**
 * 
   L'utente inserisce due parole in successione, con due prompt.
   Il software stampa prima la parola più corta, poi la parola più lunga.
 */


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


