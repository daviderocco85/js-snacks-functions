/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/** Funzione che filtra con la keyword function */
function filterByLetter1(wordsArray, letter) {
  const result = [];

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if (word.toLowerCase().startsWith(letter.toLowerCase())) {
      result.push(word);
    }
  }

  return result;
}
/** Funzione che filtra con l'arrow function */
const filterByLetter2 = (wordsArray,letter)=>{

    const result = [];

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if (word.toLowerCase().startsWith(letter.toLowerCase())) {
      result.push(word);
    }
  }

  return result;
}




// Invoca la funzione qui e stampa il risultato in console
const filtered1 = filterByLetter1(names, "M");
console.log(filtered1);
const filtered2 = filterByLetter2(names, "A");
console.log(filtered2);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]