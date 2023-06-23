let str = "This is first Destructuring Assignment. And the motto is to explore more about Destructuring";

function wordCounter(str) {
    let words = str.split(" ");
    
    const map = new Map();

    for (const word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1)
        } else{
            map.set(word, 1)
        }
    }

    return map;
}

console.log(wordCounter(str));








wordCounter(str);

