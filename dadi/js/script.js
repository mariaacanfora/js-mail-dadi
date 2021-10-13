// genero numero random per utente
let userNumber = parseInt((Math.random())*6  + 1);
console.log("Lancio dell'utente: " + userNumber);

//genero numero random per computer
let cptNumber = parseInt((Math.random())*6  + 1);
console.log("Lancio del computer: " + cptNumber);

let msgAlert = "";

//condizioni vittoria, sconfitta o parità
if (cptNumber === userNumber){
    msgAlert = "Parità!";
} else if ( cptNumber > userNumber) {
    msgAlert = "Spiacente, ha vinto il computer!";
} else {
    msgAlert = "Congratulazioni! Hai vinto!";
}

alert(msgAlert);