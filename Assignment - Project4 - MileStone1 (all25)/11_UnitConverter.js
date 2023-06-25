function unitsConverter(unit) {
    let convertedUnit = (unit*9/5) + 32;
    return convertedUnit
};

const unit = 25;
const fahrenheitTemperature = unitsConverter(unit);

console.log(`The temperature in Fahrenheit is ${fahrenheitTemperature}`);