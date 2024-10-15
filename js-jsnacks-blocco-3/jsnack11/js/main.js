/**
 *
 *
  Crea due tag div con due id diversi:
  un div avrà il testo colorato di rosso mentre l'altro di verde.
  Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
  Se sono pari li stampo nell'div "rosso",
  se sono dispari li stampo nell'div "verde".
 *
 */

//!not working
// // let div = document.createElement('div');
// // div.id = 'hello1';
// // console.log(div)
// // let main = document.querySelector('main');
// // main.appendChild(div);

// // function creationOfDivsWithIds (){
// //   theDiv = document.createElement('div');
// //   theDiv.id = 'hello2';
// // }
// // let redDiv;
// // creationOfDivsWithIds (redDiv)
// // console.log(redDiv)
// ////document.getElementById('themain').appendChild(redDiv)
// ////document.getElementById('themain').appendChild(greenDiv)


const randomNumbers =[];

// for ( i=0; i < 10; i++){
//   randomNumbers.push(Math.floor(Math.random()*100));
// }
while (randomNumbers.length < 10){
  randomNumbers.push(Math.floor(Math.random()* 100));
}
console.log(randomNumbers);

function isEven (number){
  if(number % 2 === 0){
    return true;
  }
  return false;
}
for ( i = 0; i < randomNumbers.length; i++){
  if(isEven(randomNumbers[i])){
    document.getElementById('red').innerHTML += " " + randomNumbers[i];
  } else {
    document.getElementById('green').innerHTML += " " + randomNumbers[i];
  }
}

