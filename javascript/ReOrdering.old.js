/*
https://www.codewars.com/kata/5785cd91a1b8d5c06e000007

ReOrdering

There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Examples
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
*/

// My solution
const reOrdering = text => {
  const result = text.split(" ");

  result.map(item => {
    if (item.charCodeAt() > 64 && item.charCodeAt() < 91) {
      result.unshift(item);
    }
  });

  const clearResult = [...new Set(result)];

  return clearResult.join(" ");
};

console.log(reOrdering("ming Yao"));
console.log(reOrdering("Mano donowana"));
console.log(reOrdering("wario LoBan hello"));
console.log(reOrdering("bull color pig Patrick"));

// Other solution
// const reOrdering = t => t.replace(/^(.+)\s([A-Z][^\s]*)(.*)$/, "$2 $1$3");

// Done
