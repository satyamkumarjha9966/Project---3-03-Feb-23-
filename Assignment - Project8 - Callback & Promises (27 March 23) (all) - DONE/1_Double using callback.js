function doubleNumber(arr, callbackFunc) {
    let dbrNum = arr.map((num) => {
        return callbackFunc(num);
    })
    return dbrNum;
}

let originalArray = [1,2,3,4,5]

function callbackFunc(num) {
    return num*2;
}


console.log(doubleNumber(originalArray, callbackFunc));  // [ 2, 4, 6, 8, 10 ]