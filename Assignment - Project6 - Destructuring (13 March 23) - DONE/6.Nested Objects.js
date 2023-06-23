const person = {
    name: 'Satyam',
    age: 22,
    address: {
        street: 'BB, Block B, Industrial Area',
        city: 'Noida',
        state: 'UP'
    }
}

function nestedObj(person) {
    const{name, address: {street}} = person;
    return {name, street};
}

console.log(nestedObj(person));