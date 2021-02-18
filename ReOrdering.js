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

//My Solution
const reOrdering = (text) => {
  let newText = '';

  text.split(' ').map((element, index, self) => {
    if(element[0] === element[0].toUpperCase()) {
      const upperCaseElement = `${self.splice(index, 1)}`
      self.unshift(upperCaseElement)
    }

    newText = self.join(' ');
  })

  return newText;
}

reOrdering('wario LoBan hello');
reOrdering('Mano donowana');
reOrdering('ming Yao');

/*
//Other Solution
const reOrdering = str => str
  .split(' ')
  .reduce((carry, word) => word[0] === word[0].toUpperCase() 
    ? `${word} ${carry}` : `${carry} ${word}`)
*/

//Done
