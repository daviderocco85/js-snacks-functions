/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/** Funzione che conta le vocali con la keyword function */
function countVowels1(word) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }

  return count;
}


/** Funzione che conta le vocali con l'arrow function */
const countVowels2 = (word) =>{

 const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }

  return count;

}


// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels1(word));
console.log(countVowels2(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)