let marks = [20, 33, 37, 39, 30];

let highestMark = 0;

for (let i = 0; i < marks.length; i++) {
    highestMark = marks[i] > highestMark ? marks[i] : highestMark;   
}

console.log("The highest marked by student is: " + highestMark);


// 2nd Method by filter

let mark = [20, 33, 37, 39, 30];

console.log("Highest Mark is: " + Math.max(...mark));
