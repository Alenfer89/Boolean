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

    const basicCost = 0.27;
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