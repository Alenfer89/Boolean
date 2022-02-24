

// Il programma dovrà mostrare una form (a piacere) da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.27 € al km)
// va applicato uno sconto del 17% per i minorenni
// va applicato uno sconto del 33% per gli over 65.
// L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.

let papName = document.getElementById('pap-name');
// console.log('log di controllo 1 ' + papName);

let papKm = document.getElementById('pap-distance');
// console.log('log di controllo 2 ' + papKm);

let papAge = document.getElementById('pap-age');
// console.log('log di controllo 3 ' + papAge);


const basicCost = 0.27;

// document.querySelector('#generator').addEventListener('click', function(){


//     console.log('log di controllo 4 ' + papName.value);
//     console.log('log di controllo 5 ' + papKm.value);
//     console.log('log di controllo 6 ' + papAge.value);

// })


// document.querySelector('#reset').addEventListener('click', function(){
//     papName.value=';
//     papKm.value=';
//     papAge.value='default';
// })