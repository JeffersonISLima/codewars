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

const encryptThis = text => {
  try {
    let helperChars = [];

    const replaceSecondCharAndFeedArrayHelperChars = text
      .split(" ")
      .map(element => {
        helperChars.push(element.charAt(1));

      //  console.log(element.charAt(0), element.charAt(1),element.charAt(2) );

   /*    if(element.charAt(0) === element.charAt(1)) {
        element = 'q';
      } */
        
      // DEBUGANDO AKIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
      return element.replace(element.charAt(1), function() {
        console.log(">>>>>>>>>", element.charAt(element.length - 1));
        console.log("<<<<<<<<<<", element.charAt(0));
        console.log("!!!!!!!!", element.charAt(1));

        console.log("ELEMENT", element);

        
          return element.charAt(element.length - 1);
        });
      });

      



    const response = replaceSecondCharAndFeedArrayHelperChars.map(element => {
      return element.slice(0, element.length - 1);
    });

   // console.log(">>>>>>", replaceSecondCharAndFeedArrayHelperChars);


    for (let i = 0; i < response.length; i += 1) {
      response[i] += helperChars[i]
    //  console.log("@@@@@@", response[i]);
      
    //  console.log("kkkkk", response[i] += helperChars[i]);
    }

    return response.map(e => e.charCodeAt(0) + e.slice(1)).join(" ");
  } catch (e) {
    throw new Error(e);
  }
};

console.log(encryptThis("ffmxg"));
console.log(encryptThis("LLFT")); // tem q entrar LTFL

//console.log(encryptThis('A wise old owl lived in an oak'));


// ffmxg EXPECTED 102gmxf esta mostrando 103fmxf
// LLFT EXPECTED 76TFL esta mostrando 84LFL
