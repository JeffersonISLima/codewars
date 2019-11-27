/* 
https://www.codewars.com/kata/simple-remove-duplicates/train/javascript

Simple remove duplicates

In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

//My solution
const solve = (arr) => {
  return arr.filter((element, idx) => arr.lastIndexOf(element) === idx );
}

const result = solve([3,4,4,3,6,3]);
console.log(result);


//Best practices
const solvee = a => Array.from(new Set(a.reverse())).reverse();

//Done