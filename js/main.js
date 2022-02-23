let papName = document.querySelector("#pap-name").value;
console.log(papName);

let papDistance = parseInt(document.querySelector("#pap-distance").value);
console.log(papDistance);

let papAge = document.querySelector("#pap-age").value;
console.log(papAge);

const basicCost = 0.27;
const price = basicCost * papDistance;