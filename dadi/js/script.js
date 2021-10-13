const container = document.querySelector(".container");

// genero row
let row = document.createElement("div");
row.classList.add("row");
container.append(row);

let randomNumbers = [];
let diceList = [];

//genero col e dadi
for (let i = 0; i < 2; i++) {

    //genero numeri casuali per utente e computer
    let currentRandomNumber = parseInt((Math.random()) * 6 + 1);
    randomNumbers[i] = currentRandomNumber;
    
    let titleDice = "";
    if (i === 0){
        titleDice = `Il tuo numero è: ${currentRandomNumber}` ;
    } else {
        titleDice = `Il numero del computer è: ${currentRandomNumber}`
    }

    let col = document.createElement("div");
    col.classList.add("col", "d-flex", "align-items-center", "flex-column", "text-white");
    col.innerHTML = `<span class="fs-3">
                    ${titleDice}
                    </span>`
    row.append(col);

    let dice = document.createElement("div");
    dice.style.width = "200px";
    dice.style.height = "200px";
    dice.classList.add("bg-dark", "d-flex", "align-items-center", "justify-content-center");
    col.append(dice);

    let diceRow = document.createElement("div");
    diceRow.classList.add("row",  "row-cols-2");

    for (j = 1; j <= currentRandomNumber; j++){
        
        let colDiceRow = document.createElement("div");
        colDiceRow.classList.add("col", "g-3", "text-center");
        diceRow.append(colDiceRow);

        let spot = document.createElement("div");
        spot.classList.add("rounded-pill", "bg-light", "d-inline-block"); 
        spot.style.width = "20px";
        spot.style.height = "20px"
        colDiceRow.append(spot)

    }


    dice.append(diceRow)  

}

let msgWinner = "";

if (randomNumbers[0] === randomNumbers[1]) {
    msgWinner = "Parità! Riprova.";
} else if (randomNumbers[0] > randomNumbers[1]) {
    msgWinner = "Congratulazioni! Hai vinto!";
} else {
    msgWinner = "Spiacente, ha vinto il computer!";
}


container.innerHTML += `<h2 class="text-center m-5"> ${msgWinner} </h2>`
