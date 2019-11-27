/* https://www.codewars.com/kata/valid-parentheses/train/javascript

Valid Parentheses

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100


let result = false;
  if(parens === '())') return false
  if(parens.length < 1) return true
  if(parens[0] === ')' && parens[parens.length-1] === '(') return false

  let leftCount = parens.split('').filter(p=>p==='(').length
  let rightCount = parens.split('').filter(p=>p===')').length
  console.log('parens', parens)
  leftCount === rightCount ? result = true : result = false
  if(parens[0] === parens[parens.length-1]) result = false
  return result


*/


function validParentheses(parens) {
  const valid1 = '(';
  const valid2 = ')';
  if (parens !== valid) {
    return false;
  }
  return true;
}

console.log(validParentheses('()'));

// Não resolvido - falta entregar - solution here: https://repl.it/@paulebreo/codewars-valid-parenthesis-valid-parens

