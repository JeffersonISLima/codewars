/*
https://www.codewars.com/kata/576bb71bbbcf0951d5000044

Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// My solution
const countPositivesSumNegatives = numbers => {
  if (!numbers || !numbers.length) {
    return [];
  }

  let response = [0, 0];

  numbers.sort().reduce((acc, curr) => {
    return curr > 0 ? (response[0] += 1) : (response[1] = acc + curr);
  }, 0);

  return response;
};

console.log(
  countPositivesSumNegatives([
    0,
    2,
    3,
    0,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14
  ])
);

// Other solution
function countPositivesSumNegativess(input) {
  return input && input.length
    ? [
        input.filter(p => p > 0).length,
        input.filter(n => n < 0).reduce((a, b) => a + b, 0)
      ]
    : [];
}

// Done
