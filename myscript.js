// - Creare un oggetto che descriva uno studente: nome, cognome e età.
// -Stampare attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
// studente inserendo nell’ordine: nome, cognome e età.

//1° parte
var studenti = [{
  nome: "Stefano",
  cognome: "Serafini",
  eta: 24
}];

for (var chiave in studenti) {
  console.log(studenti[chiave]);
};

//2° parte
console.log('2° parte');

var arraystud = [{
  nome: "Stefano",
  cognome: "Serafini",
  eta: 24
},
{
  nome: "Andrea",
  cognome: "Grumelli",
  eta: 24
},
{
  nome: "Mattia",
  cognome: "Foti",
  eta: 24
}];

//for per stampa nome e cognome array
for (var i = 0; i < arraystud.length; i++) {
var stampaOggetti = arraystud[i];
var nomeStampa = stampaOggetti.nome;
var cognomeStampa = stampaOggetti.cognome;
console.log(nomeStampa + " " + cognomeStampa);
};

//3° parte
console.log('3° parte');
//inserimento da parte del utente
arraystud.push({
  nome:prompt("Inserisci nome"),
  cognome:prompt("Inserisci cognome"),
  eta:parseInt(prompt("Inserisci età")),
});
//aggiunta secondo for per controllare funzionamento inserimento
for (var i = 0; i < arraystud.length; i++) {
var stampaOggetti = arraystud[i];
var nomeStampa = stampaOggetti.nome;
var cognomeStampa = stampaOggetti.cognome;
console.log(nomeStampa + " " + cognomeStampa);
};
