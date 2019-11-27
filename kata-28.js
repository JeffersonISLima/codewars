/* https://www.codewars.com/kata/persistent-bugger

Persistent Bugger.


Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number */

function persistence(num) {
  const array = num.toString().split('');
  let count = 0;

  while (array.length > 1) {
    count += 1;
    const result = array.reduce((ele, idx) => ele * idx);
    return result;
  }
}

console.log(persistence(39));

// SOLUTION ---- https://repl.it/@jeffersonlima/codewars-6-persistent-bugger


/* function persistence(num) {
  //set multiplyCount equal 0
  //turn the number into an array of nums
  //while the length of the array is more than 1
    //multiply each digit together
    //the product becomes the new arr
  //return multiplyCount

  var arr = num.toString().split("");
  var multiplyCount = 0;
  var product;
  while (arr.length > 1) {
    product = arr.reduce(function(a, b) {
      return a * b;
    });
    multiplyCount++;
    arr = product.toString().split("");
  }
  return multiplyCount;
}

persistence(39); // 3
persistence(999); // 4
persistence(4); // 0


//other solution=========================================
function persistenceB(num) {
  var times = 0;
  num = num.toString();
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  return times;
 */