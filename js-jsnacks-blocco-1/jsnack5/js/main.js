/**
 * 
  Crea un array vuoto.
  Chiedi per 6 volte all'utente di inserire un numero,
  se è dispari inseriscilo nell'array.
 * 
 */


//creo un array vuoto
const numberList =[];
//con un ciclo for chiedo più volte tramite prompt all'utente l'inserimento di dati
for ( let i = 0 ; i < 6 ; i++){
  let userNumber = parseInt(prompt('indica un numero'));
  //con un if mi assicuro che i dati inseriti siano numeri
  if (isNaN(userNumber)){
    alert('non è un numero');
  } else if ((userNumber % 2 == 1) && (userNumber !== 0)){
    //con un altro if legato in modo consequenziale al primo seleziono i nr dispari e diversi da zero
    numberList.push(userNumber);
  }
  //non metto else perchè non mi serve specificare altro e/o non mi servono altri dati messi dall'utente
}

//stampo l'array per il controllo
console.log(numberList)