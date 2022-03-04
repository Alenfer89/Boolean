
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
const gameTable = document.getElementById('game-table');
const gameGrid = document.querySelector('div.table-grid');
const gameDifficulty = document.getElementById('set-difficulty');
/**
 * //this function creates a DOM element with a class you want attached to it
 * @param {*} elementType // string (!) of the type of DOM element you want to create
 * @param {*} elementClass // string (!) of the class you want to add to your DOM element
 * @returns // egs < elementType class="elementClass"> </ elementType>
 */
function elementCreator (elementType, elementClass){
  let element;
  element = document.createElement(`${elementType}`);
  element.classList.add(`${elementClass}`);
  return element;
}
//gameTable.appendChild(elementCreator("div", "ax-square"));
// console.log(elementCreator("div", "ax-square"));


gameStart.addEventListener('click', function(){
  gameGrid.innerHTML=' ';
  if (gameDifficulty.value == "easy"){
    for (i = 1 ; i < 101; i++){
      const tempGrid = elementCreator("div", "ax-square");
      tempGrid.innerHTML=`${i}`;
      tempGrid.addEventListener('click', function(){
        this.classList.toggle('clicked')
      })
      gameGrid.appendChild(tempGrid);
    }
  } else if (gameDifficulty.value == "medium"){
    for (i = 1 ; i < 82; i++){
      const tempGrid = elementCreator("div", "ax-square");
      tempGrid.innerHTML=`${i}`;
      tempGrid.addEventListener('click', function(){
        this.classList.toggle('clicked')
      })
      gameGrid.appendChild(tempGrid);
    }
  } else if (gameDifficulty.value == "hard"){
    for (i = 1 ; i < 50; i++){
      const tempGrid = elementCreator("div", "ax-square");
      tempGrid.innerHTML=`${i}`;
      tempGrid.addEventListener('click', function(){
        this.classList.toggle('clicked')
      })
      gameGrid.appendChild(tempGrid);
    }
  }
  
})