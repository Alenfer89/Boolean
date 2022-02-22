const customerAge = parseInt(prompt("eta?"));
console.log(customerAge)
const customerDistance = parseInt(prompt("kilometri?"))
console.log(customerDistance)

if (isNaN(customerAge) || isNaN(customerDistance)){
    alert("inserire un valore numerico")
}

const price = customerDistance * 0.21;
console.log(price)

let finalPrice;

if (customerAge < 18){
    finalPrice = price - price * 0.2;
    console.log(finalPrice);
} else if(customerAge > 65){
    finalPrice = price - price * 0.4;
    console.log(finalPrice);
} else {
    finalPrice = price;
    console.log(finalPrice);
}


