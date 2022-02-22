const customerAge = parseInt(prompt ("Quanti anni hai o dichiari di avere?"));
console.log(customerAge)

if (isNaN(customerAge))
{
    console.error("sì strunz");
    alert("sì strunz");
} 
else if (customerAge < 10)
{
    console.warn("sono stati chiamati i servizi sociali")
    alert("chiedi alla mamma!")
} 
else if ((customerAge > 100))
{
    console.warn("sono stati chiamati i servizi sociali")
    alert("forse è il caso di non spostarsi da soli")
}

const customerDistance = prompt ("Quanti kilometri ti devi fare?");
console.log(customerDistance)

