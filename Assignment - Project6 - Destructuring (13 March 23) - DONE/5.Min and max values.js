let arr = [1,3,2,5,6,7,90,0,3];

function valueMaxMin(arr) {
    let x = Math.max(...arr)
    let y = Math.min(...arr)

    return {max: x, min: y}
}

console.log(valueMaxMin(arr));