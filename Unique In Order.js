/*
https://www.codewars.com/kata/54e6533c92449cc251001667

Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] 
*/

// My solution
const uniqueInOrder = iterable => {
  return [...iterable].reduce((unique, current) => {
    if (!unique.length || unique[unique.length - 1] !== current) {
      unique.push(current);
    }

    return unique;
  }, []);
};

console.log(uniqueInOrder("ABBCcAD"));

// Other solution
var uniqueInOrderr = function(iterable) {
  return [].filter.call(iterable, function(a, i) {
    return iterable[i - 1] !== a;
  });
};

// Done
