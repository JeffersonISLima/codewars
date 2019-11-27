/* 
https://www.codewars.com/kata/anagram-detection/train/javascript

Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" 
*/

const isAnagram = (test, original) => {
  test = test
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  original = original
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  if (test.length != original.length) return false;

  return test.includes(original);
};

console.log(isAnagram("apple", "pale"));

// Done - sended.

// Others Solutions from kata responses

//Solution 1
String.prototype.sortLetters = function() {
  return this.toLowerCase()
    .split("")
    .sort()
    .join("");
};

const isAnagramm = function(test, original) {
  return test.sortLetters() == original.sortLetters();
};

//Solution 2
function isAnagrammm(test, original) {
  return (
    test
      .toLowerCase()
      .split("")
      .sort()
      .join("") ===
    original
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
}

// Solution 3
var isAnagram = function(t, o) {
  let r = new RegExp("^" + t.replace(/(.)/g, "(?=.*$1)"), "i");
  return t.length === o.length ? r.test(o) : false;
};
