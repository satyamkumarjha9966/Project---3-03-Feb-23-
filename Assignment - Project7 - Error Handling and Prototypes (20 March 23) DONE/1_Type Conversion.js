let str1 = "1245"
let str2 = "1234vbfb5"

function convertToNumber(str) {
  try {
    var num = Number(str);
    if (isNaN(num)) {
      throw new Error('Invalid Number');
    }
    return num
  } catch (error) {
    return 'Invalid Number1'
  }
  }  

console.log(convertToNumber(str1));
console.log(convertToNumber(str2));



