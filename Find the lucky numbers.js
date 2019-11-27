/*
https://www.codewars.com/kata/580435ab150cca22650001fb

Find the lucky numbers

Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

For example,

ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]

Don't worry about bad input, you will always receive a finite list of integers.
*/

//My solution
const filterLucky = x => {
  return x.filter((e) => {
    return /7/.test(e);
  });
}

const result = filterLucky([1,2,3,4,5,6,7,68,69,70,15,17])
console.log(result);


//Best practices
const filterLuckyy = list => list.filter(n => /7/.test(n))

const filterLuckyyy = x => ( x.filter( n => n.toString().match(/7/)) );

//Done