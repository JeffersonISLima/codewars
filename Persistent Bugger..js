/* 
https://www.codewars.com/kata/persistent-bugger

Persistent Bugger.

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.

For example:
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number 
*/

//My solution
 const persistence = (num) => {
   if(String(num).length < 2) {
     return 0
   }

   let counter = 1;
   let numberAux = 0;

   const reducer = (accumulator, currentValue) => numberAux = accumulator * currentValue;
   num.toString().split('').reduce(reducer); 

   while(String(numberAux).length > 1) {
     numberAux = numberAux.toString().split('').reduce(reducer);
     counter += 1;
    }

  return counter;
 }

/*
// Other solution
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}
*/

//Done