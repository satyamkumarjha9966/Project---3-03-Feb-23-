// Making as a function
function capitalName(name) {
    return name[0].toLowerCase() !== name[0] 
    ? name 
    : name[0].toUpperCase() + name.slice(1);
}

console.log(capitalName('satyam'));
console.log(capitalName('Shivam'));


// Making for particular variable
const name1 = 'satyam';

let CapitalName = name1[0].toLowerCase() !== name1[0] 
    ? name1 
    : name1[0].toUpperCase() + name1.slice(1);

console.log(CapitalName);
