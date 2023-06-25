let color1 = 'blue';
let color2 = 'yellow';

let switchCase = color1.toLowerCase() + '-' + color2.toLowerCase();

switch (switchCase) {
  case 'red-blue':
  case 'blue-red':
    console.log('Purple');
    break;
  
  case 'red-yellow':
  case 'yellow-red':
    console.log('Orange');
    break;
  
  case 'blue-yellow':
  case 'yellow-blue':
    console.log('Green');
    break;

  default:
    console.log('Invalid Color Combination');
    break;
}