//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    nome: "Matteo",
    cognome: "Sormas",
    eta: 22
};

console.log(studente);

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var key in studente){
    console.log(`${key} => ${studente[key]}`);
};

//Creare un array di oggetti di studenti.

var studenti = [
    {
        nome: "Matteo",
        cognome: "Sormas",
        eta: 22
    },

    {
        nome: "Giordano",
        cognome: "Rinaldi",
        eta: 23
    },

    {
        nome: "Alessandro",
        cognome: "Firmani",
        eta: 23
    },

    {
        nome: "Francesco",
        cognome: "Vittorio",
        eta: 25
    }
];





//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var nuovoStudente = {
    nome: prompt("inserisci il nome dell'alunno"),
    cognome: prompt("inserisci il cognome dell'alunno"),
    eta: prompt("inserisci l'etá dell'alunno"),
};

studenti.push(nuovoStudente);


//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < studenti.length; i++) {
    var studente = studenti[i];
    console.log(`${studente.nome} ${studente.cognome}`);
};