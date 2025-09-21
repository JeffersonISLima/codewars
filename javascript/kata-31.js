/* 
https://www.codewars.com/kata/57a6633153ba33189e000074

Ordered Count of Characters

Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]] 
*/

const orderedCount = text => {
  let counterLetters = 1;
  let hasSpaceCharacter = [];
  let resultOrderedCount = [];

  text = text
    .split("")
    .map(letter => {
      if (letter === " ") {
        return (hasSpaceCharacter = [...text].map(letter => [letter, 1]));
      }

      return letter;
    })
    .sort()
    .filter((element, index, text) => {
      if (element === text[index + 1]) {
        counterLetters += 1;
      }

      if (element !== text[index + 1]) {
        resultOrderedCount.push([element, counterLetters]);
        counterLetters = 1;
      }
    });

  resultOrderedCount.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }

    return 0;
  });

  return hasSpaceCharacter.length ? hasSpaceCharacter : resultOrderedCount;
};

console.log(orderedCount("abracadabra"));
console.log(orderedCount("Code Wars"));
// orderedCount("abracadabra");


  // DEU PAU NO SORT DE STRINGS NUMERICAS, VER: https://stackoverflow.com/questions/2802341/javascript-natural-sort-of-alphanumerical-strings/38641281
/* expected [ [ '5', 8 ],
  [ '8', 7 ],
  [ '4', 6 ],
  [ '9', 6 ],
  [ '0', 5 ],
  [ '1', 4 ],
  [ '7', 4 ],
  [ '6', 3 ],
  [ '3', 2 ],
  [ '2', 1 ] ] 
  
  to deeply equal [ [ '1', 4 ],
  [ '6', 3 ],
  [ '7', 4 ],
  [ '9', 6 ],
  [ '0', 5 ],
  [ '5', 8 ],
  [ '8', 7 ],
  [ '4', 6 ],
  [ '3', 2 ],
  [ '2', 1 ] ] */

/* 
[ [ ' ', 1 ],
  [ 'C', 1 ],
  [ 'W', 1 ],
  [ 'a', 1 ],
  [ 'd', 1 ],
  [ 'e', 1 ],
  [ 'o', 1 ],
  [ 'r', 1 ],
  [ 's', 1 ] ] 
  
  to deeply equal 
  
  [ [ 'C', 1 ],
  [ 'o', 1 ],
  [ 'd', 1 ],
  [ 'e', 1 ],
  [ ' ', 1 ],
  [ 'W', 1 ],
  [ 'a', 1 ],
  [ 'r', 1 ],
  [ 's', 1 ] ] 
  */
