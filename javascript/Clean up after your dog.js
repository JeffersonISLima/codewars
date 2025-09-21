/*
https://www.codewars.com/kata/clean-up-after-your-dog/train/javascript

Clean up after your dog

You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]

bags = 2, cap = 2

return --> 'Clean' 
*/

//My solution
const crap = (x, bags, cap) => {
  let counterCrap = 0;

  for (let i = 0; i < x.length; i += 1) {
    let element = x[i];

    for (let j = 0; j < element.length; j += 1) {
      switch (element[j]) {
        case '@':
          counterCrap += 1;
          break;
        case 'D':
          return 'Dog!!';
      }
    }
  }

  if (counterCrap === 0 || cap > counterCrap && bags !== 0 && cap !== 0 && counterCrap <= bags) {
    return 'Clean';
  } else if ((counterCrap > bags) || (bags < cap) && (cap > counterCrap)) {
    return 'Cr@p';
  } else if ((cap >= bags) && (bags > 0) || (cap >= counterCrap)) {
    return 'Clean';
  }
}

const result = crap([
  ['_', '_', '@', '_'],
  ['_', '@', '_', '@'],
  ['@', '_', '@', '_']
], 4, 9);
console.log(result);



//Best practices 
function crapp(x, bags, cap) {
  var yard = x.reduce((a, b) => a.concat(b));
  return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter(val => val === '@').length > 0 ? 'Clean' : 'Cr@p';
}

//Done