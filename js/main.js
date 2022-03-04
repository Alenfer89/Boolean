
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:  di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


const gameStart = document.getElementById('play-button');
function elementCreator (elementType, elementClass){
  let element;
  element = document.createElement(`${elementType}`);
  element.classList.add(`${elementClass}`);
  return element;
}
let div;
elementCreator("div", "ax-square");
document.getElementById('game-table').appendChild(elementCreator(div, "ax-square"));
console.log(elementCreator(div, "ax-square"));
gameStart.addEventListener('click', function(){

})