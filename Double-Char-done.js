/* 
https://www.codewars.com/kata/double-char

Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
double_char("String") ==> "SSttrriinngg"

str.repeat(count);

double_char("Hello World") ==> "HHeelllloo  WWoorrlldd"

double_char("1234!_ ") ==> "11223344!!__  "
 */

//My solution
const doubleChar = (str) => {
  const stringDouble = str.split('').map( element => {
    return element + element;
  }).join('');
  return stringDouble;  
}

doubleChar("abcd");


//Best solution
const doubleCharr = (str) => str.split("").map(c => c + c).join("");

//Done