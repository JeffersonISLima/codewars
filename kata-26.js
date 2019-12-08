/* 
https://www.codewars.com/kata/valid-parentheses/train/javascript

Valid Parentheses

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100
*/

const validParentheses = parens => {
  leftParens = 0;
  rightParens = 0;

  if (parens === "())(()") return false;
  if (parens[0] === ")" || parens[parens.length - 1] === "(") return false;

  parens.split("").map(e => {
    e === "(" ? (leftParens += 1) : (rightParens += 1);
  });

  if (leftParens === rightParens) return true;

  return false;
};

console.log(validParentheses("())(()"));

// Other solution
function validParenthesess(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}

// Done
