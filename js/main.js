
let papDistance;


// if (isNaN(papDistance)){
//     alert("Per favore inserisci un nuimero")
// }

// let papAge = document.querySelector("#pap-age").value;
// console.log(papAge);

const basicCost = 0.27;
const price = basicCost * papDistance;

document.querySelector("#generator").addEventListener('click', function(){
    let ticketName = document.createElement("p");
    let papName = document.querySelector("#pap-name").value;
    console.log(papName);

    ticketName.innerHTML = papName;
    console.log(ticketName);

    document.querySelector("#ticket-name").append(ticketName);

    let ticketDistance = document.createElement("li");
    papDistance = parseInt(document.querySelector("#pap-distance").value);
    console.log(papDistance);
    ticketDistance.innerHTML = papDistance;
    console.log(ticketDistance);
    document.querySelector("#customer").append(ticketDistance);
})

document.querySelector("#get-back").addEventListener('click', function(){
    document.getElementById("pap-name").value="";
    document.getElementById("pap-distance").value="";
    document.querySelector("select").value="default";
})