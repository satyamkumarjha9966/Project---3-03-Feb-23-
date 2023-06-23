let obj = {
    firstName: 'Satyam',
    lastName: 'Jha',
    age: '21'
};

function ageInDays(obj, callback) {
    let fullName = `${obj.firstName} ${obj.lastName}`;
    let ageInDays = obj.age * 365;;
    return callback(fullName, ageInDays);
};

function callback(fullName, ageInDays) {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
};

ageInDays(obj, callback)    // The person's full name is Satyam Jha and their age in days is 7665.