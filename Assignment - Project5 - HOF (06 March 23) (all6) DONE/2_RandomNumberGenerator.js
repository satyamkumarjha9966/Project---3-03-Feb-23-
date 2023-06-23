// Displaying How Much Time Left to Creating a Random Number
const startTime = Date.now();
const DisplayNumber = 4;
const CountDownInterval = setInterval(() => {
    const CountDownTime = DisplayNumber - Math.round((Date.now() - startTime) / 1000);
    console.log(`${CountDownTime} sec is remaining to generate a Random Number`);
    if (CountDownTime == 1){
        clearInterval(CountDownInterval);
    }
}, 1000);


// Creating  Random Number
let time = setTimeout(() => {
    let randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
}, 4000);

