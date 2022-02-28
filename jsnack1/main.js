/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */

const firstNumber = prompt("inserisci un numero")
const secondNumber = prompt("inserisci un numero")
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
