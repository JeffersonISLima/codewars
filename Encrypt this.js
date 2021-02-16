/* 
https://www.codewars.com/kata/5848565e273af816fb000449

Encrypt this!

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

1- Your message is a string containing space separated words.
2- You need to encrypt each word in the message using the following rules:
--The first letter needs to be converted to its ASCII code.
--The second letter needs to be switched with the last letter
3- Keepin' it simple: There are no special characters in input.


encrypt This("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo" 
*/

// My solution
const encryptThis = text => {
  try {
    return text
      .split(" ")
      .map(element => {
        let newText = element.substring(1);
        let secondChar = newText.charAt(0);
        let lastChar = newText.charAt(newText.length - 1);
        let texts = newText.slice(1, newText.length - 1).split("");

        texts.push(secondChar);
        texts.unshift(lastChar);
        if (element.length <= 2) {
          texts.pop();
        }

        return element.charCodeAt(0) + texts.join("");
      })
      .join(" ");
  } catch (e) {
    throw new Error(e);
  }
};

console.log(encryptThis("in"));
console.log(encryptThis("ffmxg"));
console.log(encryptThis("hello world"));
console.log(encryptThis("A wise old owl lived in an oak"));

// Other solution
const encryptThiss = text =>
  text
    .split(" ")
    .map(word =>
      word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0))
    )
    .join(" ");

// Done
