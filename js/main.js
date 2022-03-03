// Palidroma:
//      Chiedere all’utente di inserire una parola
//      Creare una funzione per capire se la parola inserita è palindroma
//
// Pari e Dispari
//      L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//      Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//      Sommiamo i due numeri
//      Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//      Dichiariamo chi ha vinto.

const requiredWord = prompt('inserisci una parola');

function reversedWord (theWord){
  return theWord.split("").reverse().join("");
}

if (requiredWord == reversedWord(requiredWord)){
  console.warn('palindrome')
} else {
  console.warn('diverse')
}


let userChoice = document.getElementById('odd-or-even');


let userNumber = document.getElementById('number');


document.querySelector('button.btn.btn-primary').addEventListener('click', function(){
  console.log(userChoice.value.toLowerCase());
  console.log(parseInt(userNumber.value));
})

document.querySelector('button.btn.btn-danger').addEventListener('click', function(){
  userChoice.value ='';
  userNumber.value ='';
})