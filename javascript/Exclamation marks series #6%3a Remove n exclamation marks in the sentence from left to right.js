/*
https: //www.codewars.com/kata/exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right

Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples

remove("Hi!",1) = == "Hi"
remove("Hi!", 100) === "Hi"
remove("Hi!!!", 1) === "Hi!!"
remove("Hi!!!", 100) === "Hi"
remove("!Hi", 1) === "Hi"
remove("!Hi!", 1) === "Hi!"
remove("!Hi!", 100) === "Hi"
remove("!!!Hi !!hi!!! !hi", 1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi", 3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi", 5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi", 100) === "Hi hi hi" *
*/

//My solution
const remove = (s, n) => {
  for ( let i = 0; i < n; i += 1 ) {
    s = s.replace(/!/, '');
  }
  return s;
}

const result = remove("Hi!!!", 2);
console.log(result);



//Best solution - equal mine
function removee(s,n){
  for (var i=0;i<n;i++) s=s.replace("!","");
  return s;
}

//Done