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

//const requiredWord = prompt('inserisci una parola');

// function reversedWord (theWord){
//   return theWord.split("").reverse().join("");
// }

// if (requiredWord == reversedWord(requiredWord)){
//   console.warn('palindrome')
// } else {
//   console.warn('diverse')
// }

//*creo le variabili per gli inpout dati dell'utente
let userChoice = document.getElementById('odd-or-even');
let userNumber = document.getElementById('number');

//*creo la funzione generatrice di numeri random
function randomNumberGenerator (Number){
  return Number = Math.floor(Math.random()* 5 + 1);
}

//*event listener su un bottone
document.querySelector('button.btn.btn-primary').addEventListener('click', function(){

  //*creo una variabile booleana per far partire il gioco dopo con un if
  let check = false;

  //*controllo che ivalori inseriti siano validi al click: prima "pari" o "dispari"
  if( (userChoice.value.toLowerCase() == 'pari') || (userChoice.value.toLowerCase() == 'dispari')){
    check = true;
    console.log('ok')
  } else{
    alert('inserisci valori corretti')
  }

  //*poi "numero" o "nan"
  if( (isNaN(parseInt(userNumber.value))) ){
    alert('non è un numero')
  } else if ((userNumber.value < 1) || (userNumber.value > 5)){
    alert('inserisci un numero tra 1 e 5')
  } else{
    check = true;
  }

  //*il gioco:
  if(check == false){
    console.log('errore ti servono due flag')
  } else {

  }
})

document.querySelector('button.btn.btn-danger').addEventListener('click', function(){
  userChoice.value ='';
  userNumber.value ='';
})