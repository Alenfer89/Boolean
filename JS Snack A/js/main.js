/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

const team=[];
const mvp ={
    code:"GSP911",
    name: 'Gino',
    lastName: 'Spadaccino',
    age: 23,
    points: 99,
    percentage: '100%'
};
team.push(mvp)
// playerInfos.name = generatePlayerName();
// playerInfos.lastName = generatePlayerName();
// playerInfos.code = makeCode(3, playerInfos.name).toUpperCase() + makeNumber(3);
// console.log(playerInfos.name)
// console.log(playerInfos.lastName)
// console.log(playerInfos.code)
for (let i = 0; i < 10; i++){
    team.push(generatePlayerName())
}
console.table(team)
function generatePlayerName(){
    const playerInfos={};
    playerInfos.name = makeId(Math.floor(Math.random() * (1) + 1)).charAt(0).toUpperCase()+makeId(Math.floor(Math.random() * (10 - 3 + 1) + 3)).toLowerCase();
    playerInfos.lastName = makeId(Math.floor(Math.random() * (1) + 1)).charAt(0).toUpperCase()+makeId(Math.floor(Math.random() * (10 - 3 + 1) + 3)).toLowerCase();
    playerInfos.code = makeCode(3, playerInfos.name).toUpperCase() + makeNumber(3);
    playerInfos.age = Math.floor(Math.random() * (38 - 18 + 1) + 18);
    playerInfos.points = Math.floor(Math.random() * (50 - 0 + 1) + 0);
    playerInfos.percentage = Math.floor(Math.random() * (100 - 0 + 1) + 0)+'%';
    return playerInfos
}

function makeId(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function makeNumber(length) {
    let result           = '';
    let characters       = '0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function makeCode(length, letterList) {
    let result           = '';
    let characters       = letterList;
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


//Math.floor(Math.random() * (max - min + 1) + min);



