/**
 * 
  Crea un array vuoto.
  Chiedi per 6 volte all'utente di inserire un numero,
  se è dispari inseriscilo nell'array.
 * 
 */

const numberList =[];

for ( let i = 0 ; i < 6 ; i++){
  let userNumber = parseInt(prompt('indica un numero'));
  if (isNaN(userNumber)){
    alert('non è un numero');
  } else if ((userNumber % 2 == 1) && (userNumber !== 0)){
    numberList.push(userNumber);
  }
}
console.log(numberList)