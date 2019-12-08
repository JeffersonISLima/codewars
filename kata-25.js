/*
 https://www.codewars.com/kata/52549d3e19453df56f0000fe

Fibonacci Reloaded

And here is Fibonacci again. This time we want to go one step further. Our fib() function must be faster! Can you do it?

In case you don't know, what the Fibonacci number is:

The nth Fibonacci number is defined by the sum of the two previous Fibonacci numbers. In our case: fib(1) == 0 and fib(2) == 1. With these initial values you should be able to calculate each following Fibonacci number.

Examples:

fib(1) // === 0
fib(2) // === 1
fib(3) // === 1
fib(4) // === 2
fib(5) // === 3 
*/

// My solution
const fib = n => {
  let result = new Array(n).fill(1).reduce((arr, _, i) => {
    arr.push(i <= 1 ? i : arr[i - 2] + arr[i - 1]);
    return arr;
  }, []);

  return result.pop();
};

console.log(fib(5));
console.log(fib(2));

// Other solution
function fibb(n) {
  var [x, y] = [0, 1];
  for (let i = 1; i < n; i++) [x, y] = [y, x + y];
  return x;
}

// Other solution
function fibbb(n) {
  return Math.round(Math.pow(1.618033988749895, n - 1) / 2.23606797749979);
}
// Done
