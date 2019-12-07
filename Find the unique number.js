/*
 https://www.codewars.com/kata/585d7d5adb20cf33cb000235/

Find the unique number

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique 
*/

// My solution
const findUniq = elements => {
  try {
    elements.sort();
    return elements[0] === elements[1]
      ? elements[elements.length - 1]
      : elements[0];
  } catch (error) {
    throw new Error(error);
  }
};

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

// Other solution
function findUniqq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// Done
