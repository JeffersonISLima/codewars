/*
https://www.codewars.com/kata/mumbling/train/javascript

Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//My solution
const accum = (s) => {
  return [...s].map((element ,idx) => {
    return element.toUpperCase() + element.toLowerCase().repeat(idx);
  }).join('-');
}

const result = accum("ZpglnRxqenU");
console.log(result);


//Best practices
function accumm(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}