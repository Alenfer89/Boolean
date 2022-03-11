/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */


const playerInfos ={
    code:"",
    name: 'Gino',
    lastName: 'Spadaccino',
    age: '23',
    points: '',
    percentage: ''
};

function generateUniqueRandomNumber( numsBlacklist, min, max){
    let check = false;
    let randomInt;
    while ( !check ){
        randomInt  = Math.floor(Math.random() * ((max + 1) - min) + min);
        if ( !numsBlacklist.includes(randomInt)  ){
            check = true;
        }
    }
    return randomInt;
}
console.log(playerInfos.name)
const playerCodeTest = generateUniqueRandomNumber(playerInfos.name, 0, playerInfos.name.length);
console.log(playerCodeTest)


let playerCode;
for (let i = 0; i < 3; i++){

}
