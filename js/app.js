//Dichiarazione delle variabili
var nameUser, lastName, age, color, password, immage;

//Assegnamo le variabili con la funzione globale di JavaScript prompt() e recuperiamo l'elemento html dal DOM
nameUser = prompt('Inserisci il tuo nome');
var eleName = document.getElementById('name');
eleName.innerHTML = nameUser;

lastName = prompt('Inserisci il tuo cognome');
var eleLastName = document.getElementById('lastname');
eleLastName.innerHTML = lastName;

//Possiamo anche scriverlo in questa maniera senza dichiarare la variabile
age = prompt('Inserisci i tuoi anni');
document.getElementById('age').innerHTML = parseInt(age);

color = prompt('Inserisci il tuo colore preferito');
document.getElementById('color').innerHTML = color;

immage = prompt('Inserisci il link di una tua immagine');
immage = immage ? immage : 'img/avatar.png';
document.getElementById('immage').src = immage;


password = nameUser + lastName + age + color + 21;
password = password.toLowerCase();
document.getElementById('password').innerHTML = password;

