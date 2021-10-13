//chiedo all'utente l'email
let emailUser = prompt('Inserisci la tua e-mail');

// lista di email che possono accedere
const emailList = ['mario.rossi@gmail.com', 'marco.bianchi@gmail.com', 'giuseppe.verdi@gmail.com'];

let emailAbsent = true; 

//controllo se emailUser è presente in emailList
for (let i = 0; i < emailList.length; i++){
    const currentEmail = emailList[i];

    if (emailUser === currentEmail){
        emailAbsent = false;
    } 
}

//messaggio di accesso negato o consentito
if (emailAbsent){
    alert("Spiacente, l'email inserita non è presente nella lista di chi può accedere");
} else {
    alert("La tua email è presente. Puoi accedere!")
}
