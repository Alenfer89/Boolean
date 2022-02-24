

// Il programma dovrà mostrare una form (a piacere) da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.27 € al km)
// va applicato uno sconto del 17% per i minorenni
// va applicato uno sconto del 33% per gli over 65.
// L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.

let papName = document.querySelector("#pap-name");
let papKm = document.querySelector("#pap-distance");
let papAge = document.querySelector("#pap-age");
const basicCost = 0.27;

document.querySelector("#generator").addEventListener('click', function(){
    let ticketName = document.createElement("p");
    const papName = document.querySelector("#pap-name").value;
    console.log(papName);
    ticketName.innerHTML = papName;
    console.log(ticketName);
    document.querySelector("#ticket-name").append(ticketName);

    let ticketDistance = document.createElement("li");
    const papDistance = parseInt(document.querySelector("#pap-distance").value);
    console.log(papDistance);
    ticketDistance.innerHTML = papDistance;
    console.log(ticketDistance);
    document.querySelector("#customer").append(ticketDistance);

    
    const price = basicCost * parseInt(papDistance) ;

    let ticketPrice = document.createElement("li");
    ticketPrice.innerHTML = price;
    console.log(ticketPrice);
    document.querySelector("#customer").append(ticketDistance);

})


document.querySelector("#get-back").addEventListener('click', function(){
    document.getElementById("pap-name").value="";
    document.getElementById("pap-distance").value="";
    document.querySelector("select").value="default";
})