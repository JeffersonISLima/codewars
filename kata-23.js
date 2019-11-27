/* https://www.codewars.com/kata/585d7d5adb20cf33cb000235/

Find the unique number

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique */


/* function findUniq(arr) {
let aux = 0;
console.log(arr);

  arr.forEach((element) => {
    if (element !== element) {
      return element;
    }
  });
} */


function findUniq(arr) {
  // console.log(arr);

  const newArray = arr.filter((e, i) =>
  //  arr.lastIndexOf(e) === i, // Dá a posição index dentro do array
     if (e === e) {
      return arr.lasindexOf(e)

    }

    return newArray;
  );
}
findUniq([1, 1, 1, 2, 1, 1]);


// FALTA FAZER - NÃO ENTREGUE
