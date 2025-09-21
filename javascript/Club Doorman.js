/* 
https://www.codewars.com/kata/club-doorman/train/javascript

Club Doorman

INTRODUCTION
The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

Every given word has a doubled letter, like 'tt' in lettuce.

To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

It will be given only words with one doubled letter.

EXAMPLE
Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.

The answer to the Club Doorman is 20 * 3 = 60

TASK
The function passTheDoorMan with a given string word shall return the right number. 
*/

//My solution
const passTheDoorMan = (word) => {
  let aux = '';
  for (let i = 0; i < word.length; i += 1 ) {
    word[i] == word[i + 1] ? aux = word[i] : aux;
  }
  return (aux.charCodeAt() - 96) * 3;
}

const result = passTheDoorMan("lettuce")
console.log(result);


//Best practices
const passTheDoorMann = w => ((w.match(/(.)\1/)[1]).charCodeAt(0) - 96) * 3

//Done