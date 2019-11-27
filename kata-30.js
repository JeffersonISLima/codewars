/* https://www.codewars.com/kata/5785cd91a1b8d5c06e000007

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
'Patrick bull color pig' */

/* function reOrdering(text){
  //your code here
} */

const reOrdering = ((text) => {
  const newText = text.split(' ').map(name => name.substring(0, 1));
  if (newText.lower() === newText) {
    return newText;
  }
});

console.log(reOrdering('ming Yao'));


// NÃO RESOLVIDO - SOLUÇÃO NO EMAIL - SOLUÇÃO DO GUI