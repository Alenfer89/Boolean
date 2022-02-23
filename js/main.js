

let papDistance = parseInt(document.querySelector("#pap-distance").value);
console.log(papDistance);

let papAge = document.querySelector("#pap-age").value;
console.log(papAge);

const basicCost = 0.27;
const price = basicCost * papDistance;

document.querySelector("#generator").addEventListener('click', function(){
    let ticketName = document.createElement("p");

    const papName = document.querySelector("#pap-name").value;
    console.log(papName);

    ticketName.innerHTML = papName;
    console.log(ticketName);

    document.querySelector("#ticket-name").append(ticketName);
})

document.querySelector("#get-back").addEventListener('click', function(){
    document.getElementById("pap-name").value="";
})