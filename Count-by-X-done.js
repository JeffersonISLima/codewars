/*
https://www.codewars.com/kata/count-by-x/train/javascript

Count by X

Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

//My solution
const countBy = (x, n) => {
  let fila = new Array(n);
  for(let i = 1; i <= n; i += 1){
    let aux = x * i;
    fila.push(aux);    
  } 
  console.log(fila.slice(n));  
}

countBy(2,5);


//Best solution
function countByy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}

//Done