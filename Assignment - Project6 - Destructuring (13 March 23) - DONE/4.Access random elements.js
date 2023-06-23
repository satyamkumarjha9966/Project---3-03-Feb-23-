let arr = [1,2,3,4,5,6,7,8]

let i = 0;

function randomElement(arr) {
    const[first, second, , , , , , last] = arr
    return [first, second, last]
}

console.log(randomElement(arr));