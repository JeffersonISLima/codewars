/* https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

function abbrevName(name) {
  return name.toUpperCase().split(' ').map(nameEl => nameEl.substring(0, 1)).join('.');
}


abbrevName('Patrick Feenan');
abbrevName('Evan Cole');
abbrevName('P Favuzzi');
abbrevName('David Mendieta');

const ab = abbrevName('Sam Harris');
console.log(ab);


/*
Solution with Arrow Function - Solution By mine
const abbrevName = (name) => {
  return name.toUpperCase().split(' ').map( eleName => eleName.substring(0, 1)).join('.');
}


const ab = abbrevName('Jefferson Lima');
console.log(ab);  */


// Kata Done - Good Job
