/*
https://www.codewars.com/kata/55a2d7ebe362935a210000b2

Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. 
*/

//My solution
class SmallestIntegerFinder {
  findSmallestInt(number) {
    let smallerNumber = number[0];
    number.filter((element) => {
      if(element < smallerNumber){
        smallerNumber = element;
      }
    });
    return smallerNumber; 
  }
}

//Best solution
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//Done