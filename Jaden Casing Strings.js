/*
https://www.codewars.com/kata/jaden-casing-strings/train/javascript

Jaden Casing Strings

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

Note that the Java version expects a return value of null for an empty string or null. 
*/

//My solution
String.prototype.toJadenCase = function () {
  let response = this;
  let auxWord;
  for (let i = -1; i < response.length - 1; i += 1) {
    let operation = response[i] === ' ' 
    ? response[i + 1].toUpperCase()
    : response[i + 1];

    auxWord += operation;
  }
  const capitalLetter = auxWord.charAt(9).toUpperCase();

  return `${ capitalLetter + auxWord.slice(10) }`;
}

let str = "how can mirrors be real if our eyes aren't real";
let result = str.toJadenCase();

console.log(result);


//Best practices
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

//Done