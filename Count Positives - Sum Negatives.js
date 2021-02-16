/* https://www.codewars.com/kata/576bb71bbbcf0951d5000044

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

const countPositivesSumNegatives = input => {
  if (!input || !input.length) return [];

  let resultNumbers = [0, 0];

  input.map(function(e) {
    if (e > 0) {
      resultNumbers[0] += 1; // Count Positive
    }

    if (e < 0) {
      resultNumbers[1] += e; // Sum Negative
    }
  });

  return resultNumbers;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

console.log(countPositivesSumNegatives(array));

// #DONE ---enviado

/*
Others solutions
function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];
  var sum = 0, count = 0;
  input.forEach(function(el){ if (el > 0) count++; else sum+=el});
  return [count, sum];
}

-----

function countPositivesSumNegatives (A) {
  if (!A || !A.length) return []

  let pos = A.filter(x=>x>0),
      neg = A.filter(x=>x<=0)

  return [pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))]
}

-----

function countPositivesSumNegatives(input) {
  if(input === null || input.length < 1) return [];
  let r = [0,0];
  input.forEach(function(e) {
    (e>0) ? r[0]++ : r[1] += e;
  });
  return r;
}

-----

function countPositivesSumNegatives(input) {
  return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

*/
