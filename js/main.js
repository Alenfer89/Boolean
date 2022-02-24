

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
    let price = parseFloat(papKm.value) * basicCost;
    console.log('controllo 1 ' + price);
    // let newElement = document.createElement('p');
    // document.querySelector('ax-selector').append(newElement);

    if (papAge.value == 'minor'){
        price -= price * 17 / 100
        console.log('prezzo minori')
    } else if (papAge.value == 'elderly'){
        price -= price * 33 / 100
        console.log('prezzo reduci')
    } else {
        console.log('prezzo pieno')
    }
    console.log('controllo 2 ' + price);

    if( isNaN(parseFloat(papKm.value)) || papAge.value=='default'){
        console.log('l\'utente ha sbagliato')
        alert('per favore inserire i valori come indicato')
    } else {
        priceTag.classList.remove('d-none');
        priceTag.innerHTML=`Il biglietto di ${papName.value}, con validità ${papKm.value} Km, costa ${price.toFixed(2)}$.`
        let newElement = document.createElement('p');
        newElement.classList.add('ax-test');
        document.getElementById('ax-selector').append(newElement);
    }
})


document.getElementById('reset').addEventListener('click', function(){
    papName.value='';
    papKm.value='';
    papAge.value='default';
    priceTag.classList.add('d-none');
})