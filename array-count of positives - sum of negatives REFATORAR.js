//https://www.codewars.com/kata/576bb71bbbcf0951d5000044
//Recebe um array como argumento em uma função 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function arrayNumbers(array){
  if(array === null || array.length === 0){
    return console.log(`Dados do array inconsistentes`);
  }
  let contagemPositivos = 0;
  let somaNegativos = 0;
  let newArray = [];
  let auxSomaNegativos = 0;

//Feito com for - funcionando
 /*  for (let i = 0; i < array.length; i++) {
    if( array[i] > 0){
      contagemPositivos += 1;        
    }    
  } */
  
   
  //Feito com array function - funcionando
   array.forEach((element) => {  
    if(element > 0)  
     contagemPositivos += 1;  
    if(element < 0)
      auxSomaNegativos = somaNegativos += element;
  });

  newArray.push(contagemPositivos, auxSomaNegativos);
  return newArray; 
}

let positivo = arrayNumbers(array);
console.log(positivo);


//REFATORAR ESTE
