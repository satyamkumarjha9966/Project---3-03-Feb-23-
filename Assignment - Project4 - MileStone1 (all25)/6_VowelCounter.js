function vowelCounter(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(name[i])) {
            total++
        };
    };
    return total
};

console.log(vowelCounter('satyam'));
console.log(vowelCounter('SatyamShivamSundaramSushil'));