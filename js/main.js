
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Se ci serve, disegnamo un piccolo schemino!

const myTest = document.querySelector('div.col');

for(let i = 0; i <= 100; i = i + 1){
    let myAdd = document.createElement('div');
    myAdd.classList.add('ax-box')
    myTest.append(myAdd)

    if ( (i % 3 == 0) && (i % 5 ==0) && (i !== 0)){
        console.log('FizzBuzz');
        myAdd.innerHTML='FizzBuzz';
    } else if((i % 3 == 0) && (i !== 0)){
        console.log('Fizz');
        myAdd.innerHTML='Fizz';
    } else if((i % 5 ==0) && (i !== 0)){
        console.log('Buzz');
        myAdd.innerHTML='Buzz';
    } else{
        console.log(i)
        myAdd.innerHTML='signora i limoni signoraaaa';
    }
}