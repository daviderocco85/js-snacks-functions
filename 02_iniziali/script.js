/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/** Funzione prendi la lettera iniziale con la keyword function */
function getInitialsLetters1(namesArray) {
  const initials = [];

  for (let i = 0; i < namesArray.length; i++) {
    const name = namesArray[i];
    initials.push(name[0]);
  }

  return initials;
}
/** Funzione prendi la lettera iniziale con l'arrow function */
const getInitialsLetters2 = (namesArray) => {
   const initials = [];

  for (let i = 0; i < namesArray.length; i++) {
    const name = namesArray[i];
    initials.push(name[0]);
  }

  return initials;
}



// Invoca la funzione qui e stampa il risultato in console
const initials1 = getInitialsLetters1(names);
console.log(initials1);
const initials2 = getInitialsLetters2(names);
console.log(initials2);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]