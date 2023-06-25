// Check for divisibility Program by 'countinue' 
const numbers = [2, 3, 5, 15, 18, 20, 25, 24, 30];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  if (num % 2 == 0) {
    continue;
  }

  if (num % 3 == 0) {
    console.log(num);
  }
}


// Check for divisibility Program without 'countinue' 


let array = [2, 3, 5, 15, 18, 20, 25, 24, 30]

for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 2 !== 0) {
        console.log(array[i]);
    } 
}










