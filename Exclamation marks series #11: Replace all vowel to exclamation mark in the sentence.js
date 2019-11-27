/*
https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence/javascript


Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

//My solution
const replace = (string) => {
  return string.replace(/[aeiou]/gi, '!');  
}

replace("!Hi! Hi!")


//Best solution
function replaceTwo(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

//Done
















