const customerAge = parseInt(prompt("eta?"));
console.log(customerAge)
const customerDistance = parseInt(prompt("kilometri?"))
console.log(customerDistance)

if (isNaN(customerAge) || isNaN(customerDistance)){
    alert("inserire un valore numerico")
}

const price = customerDistance * 21 / 100;
console.log(price)

let finalPrice;

if (customerAge < 18){
    finalPrice = price - price * 20 / 100;
    console.log(finalPrice);
} else if(customerAge > 65){
    finalPrice = price - price * 40 / 100;
    console.log(finalPrice);
} else {
    finalPrice = price;
    console.log(finalPrice);
}

const finalPriceRounded= finalPrice.toFixed(1)
console.log(finalPriceRounded)


