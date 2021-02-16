/*
https://www.codewars.com/kata/54e6533c92449cc251001667

Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] 
*/

// My solution
const uniqueInOrder = (iterable) => {
  return [...iterable].reduce((accumulator, currentValue, index, self) => {
    if (self[index -1] !== self[index]) {
      accumulator.push(currentValue);
    }

    return accumulator;
  }, []);
}

/* 
// Other solution
const uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
} 
*/

//Done
















/* const uniqueInOrder = ((iterable) => {
  let lastValue = '';
  const result = [];
  
  for (let i = 0; i < iterable.length; i += 0) {
    if (iterable[i] !== lastValue) {
      lastValue = iterable[i];
      result.push(lastValue);
    }
  }
  console.log('result: ', result);
  
  return result;
}); */



// KATA NÃO RESOLVID0 - FALTA FAZER - SOLUÇÕES ABAIXO















/*
function uniqueInOrder(it) {
  var result = []
  var last

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      console.log(last);
      result.push(last = it[i])
    }
  }

  return result
}


function uniqueInOrder(it){
  var result = [];
  var last = '';

  for(var i = 0; i < it.length; i++){
    if(it[i] !== last){
      last = it[i]
      result.push(last);
    }
  }
  return result;
}


*/
