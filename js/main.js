

// Il programma dovrà mostrare una form (a piacere) da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.27 € al km)
// va applicato uno sconto del 17% per i minorenni
// va applicato uno sconto del 33% per gli over 65.
// L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.




let papName = document.getElementById('pax-name');
let papKm = document.getElementById('pax-distance');
let papAge = document.getElementById('pax-age');
const basicCost = 0.27;
const priceTag = document.getElementById('customer');

document.getElementById('generator').addEventListener('click', function(){
    const price = parseFloat(papKm.value) * basicCost;
    console.log(priceTag)
    console.log(price)
    priceTag.classList.remove('d-none');
    priceTag.innerHTML=`Il biglietto di ${papName.value}, con validità di ${papKm.value} Km, costa ${price}$.`
    
})


document.getElementById('reset').addEventListener('click', function(){
    papName.value='';
    papKm.value='';
    papAge.value='default';
    priceTag.classList.add('d-none');
})