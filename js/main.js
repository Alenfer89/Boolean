
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

console.log('yes, you lost untill you forget again about THE GAME')
const gameStart = document.getElementById('play-button');
//const gameTable = document.getElementById('game-table');
const gameGrid = document.querySelector('div.table-grid');


gameStart.addEventListener('click', function(){
  gameGrid.innerHTML='';
  gameCreation();
})

function gameCreation (){
  const gameDifficulty = document.getElementById('set-difficulty').value;
  let squareNumber;
  let square;
  //let squarePerRow;

  switch (gameDifficulty){
    case 'easy':
      squareNumber = 100;
      break;
    case 'medium':
      squareNumber = 81;
      break;
    case 'hard':
      squareNumber = 49;
      break;
  }

  //squarePerRow = Math.sqrt(squareNumber);

  for(let i = 1; i <= squareNumber; i++){
    
    square = elementCreator();
    square.innerHTML=`${i}`;
    switch (gameDifficulty){
      case 'easy':
        square.classList.add('easy-square');
        break;
      case 'medium':
        square.classList.add('medium-square');
        break;
      case 'hard':
        square.classList.add('hard-square');
        break;
    }
    square.addEventListener('click', function(){
      this.classList.add('clicked');
    })
    gameGrid.appendChild(square);
  }
  
}

/**
 * //this function creates a DOM element with a class you want attached to it
 * @param {*} elementType // string (!) of the type of DOM element you want to create
 * @param {*} elementClass // string (!) of the class you want to add to your DOM element
 * @returns // egs < elementType class="elementClass"> </ elementType>
 */
function elementCreator (){
  let element;
  element = document.createElement('div');
  element.classList.add('ax-square');
  return element;
}