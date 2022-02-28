/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */





//chiedo i due numeri con due prompt.
const firstNumber = prompt("inserisci un numero");
const secondNumber = prompt("inserisci un numero");

//con due if innestati dapprima scremo i "non numeri", quindi se ho solo numeri procedo con lo stampare il maggiore dei due
if (isNaN(firstNumber) || isNaN(secondNumber)){
    console.error('numeri please')
    alert('errore')
} else{
    if(firstNumber > secondNumber){
        console.log(firstNumber)
    }else if (firstNumber < secondNumber){
        console.log(secondNumber)
    } else{
        console.log('signora i limoni')
    }
}
