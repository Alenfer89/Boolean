// * creo un'altra funzione che controlla che la somma di due numeri x e y sia pari
// *
// * sommaPari(24214, 12451241) ==> true se la somma mi dà un numero pari
// *                            ==> false se la somma mi dà un numero dispari
// */


const randomNumero = Math.floor(Math.random()*100);
const randomNumeroDue = Math.floor(Math.random()*100);
let sum = randomNumero + randomNumeroDue;

function isEven (number){
  if(number % 2 === 0){
    return true;
  }
  return false;
}

if(isEven(sum)){
  console.log(sum);
  console.log('somma pari');
} else{
  console.log(sum);
  console.log('somma dispari');
}
