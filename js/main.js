const customerAge = parseInt(prompt ("Quanti anni hai o dichiari di avere?"));
console.log(customerAge);

if (isNaN(customerAge)){
    console.error("sì strunz");
    alert("sì strunz");
} 
else if (customerAge < 10){
    console.warn("sono stati chiamati i servizi sociali")
    alert("chiedi alla mamma!")
} 
else if ((customerAge > 100)){
    console.warn("sono stati chiamati i servizi sociali")
    alert("forse è il caso di non spostarsi da soli")
}

let customerDistance = parseFloat(prompt ("Quanti kilometri ti devi fare?"));
console.log(customerDistance);

if (isNaN(customerDistance)){
    console.error("sì strunz");
    alert("sì strunz");
}


let totalPrice = "";


if (9 < customerAge < 18){
    totalPrice = customerDistance * 0.21 / 20;
    console.log(totalPrice)
} 
else if (17 < customerAge < 66){
    totalPrice = customerDistance * 0.21;
    console.log(totalPrice)
}
else if (customerAge > 65){
    totalPrice = customerDistance * 0.21 / 40;
    console.log(totalPrice)
}