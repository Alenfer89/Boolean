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


// //parte NON funzionante su cui sto ancora lavorando, il .length non funziona e cercherò alternative (DEPRECATED: NON MI ERO ACCORTO DI NON  AVER MESSO IL .VALUE ANCHE NEL LOG PER LA STAMPA E NELL'INNERHTML PER IL RISULTATO VISINO IN PAGINA)

//creo due variabili tramite cui chiedo all'utente l'inserimento di dati
const firstWord = document.getElementById('first-word');
const secondWord = document.getElementById('second-word');
//creo variabile per il listener e per poi mostrare il risultato finale in pagina
const leButton = document.getElementById('le-button');
let result = document.getElementById('result');


//l'aggiunto il listener
leButton.addEventListener('click', function(){

  console.log(firstWord.value.length)
  console.log(secondWord.value.length)
  //con il isnan al contrario volevo rimuovere i numeri dalla selezione, ma basta una lettera affinchè diventino stringhe e quindi diventa inutile il primo if
  if((/^[0-9]/.test(firstWord.value)) || (/^[0-9]/.test(secondWord.value))){
    alert('non inserire solo numeri, puoi però una combinazione di numeri e lettere')
  } else{
    //con questo if paragono le lunghezze delle due variabili e le stampo di conseguenza
    if(firstWord.value.length > secondWord.value.length){
      console.log(secondWord.value + " " + firstWord.value);
      result.innerHTML=(secondWord.value + " " + firstWord.value);
    } else if (firstWord.value.length < secondWord.value.length){
      console.log(firstWord.value + " " + secondWord.value);
      result.innerHTML=(firstWord.value + " " + secondWord.value);
    } else { //opzione neutra in caso di lunghezza uguale
      console.log('signora i limoni');
      result.innerHTML=('signora i limoni');
    }
  }
})


