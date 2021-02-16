/* 
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false 
*/ 

//My solution
const solution = ((str, ending) => {
  return str.endsWith(ending);   
});

const result = solution('abc', 'bc');
console.log(result);


//Best practices
function solutionn(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}


//Done
