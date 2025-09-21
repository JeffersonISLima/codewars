/* 
https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

Reverse a Number

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1 
*/

 //My solution
function reverseNumber(n) {
  let nAux = n.toString().split('').reverse().join('');  
  return nAux > 0 ? parseInt(nAux, 10) : -parseInt(nAux, 10);
} 

const result = reverseNumber(-123)
console.log(result);



//Best practices
const reverseNumberr = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')


//Done