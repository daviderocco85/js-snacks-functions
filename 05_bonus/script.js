/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

/** Funzione che saluta secondo l'orario con la keyword function */
function greetByTime1(name, hour) {
  let greeting;

  if (hour <= 13) {
    greeting = "Buongiorno";
  } else if (hour <= 17) {
    greeting = "Buon pomeriggio";
  } else {
    greeting = "Buonasera";
  }

  return `${greeting} ${name}`;
}

/** Funzione che saluta secondo l'orario con l'arrow function */
const greetByTime2 = (name, hour) => {
  let greeting;

  if (hour <= 13) {
    greeting = "Buongiorno";
  } else if (hour <= 17) {
    greeting = "Buon pomeriggio";
  } else {
    greeting = "Buonasera";
  }

  return `${greeting} ${name}`;
};


// Invoca la funzione qui e stampa il risultato in console

console.log(greetByTime1(name, 18)); 
console.log(greetByTime2(name, 18)); 
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.