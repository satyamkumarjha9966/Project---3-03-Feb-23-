let x = 5;
let y = 15;

function swapValue(a, b) {
    [a, b] = [b, a]
    return [a, b]
}

console.log(swapValue(x, y));