function rentCalculator(numDay, carType) {
    let rentalCost ='';
    switch (carType) {
        case 'Economy':
            rentalCost = 4000;
            break;
        case 'Midsize':
            rentalCost = 10000;
            break;
        case 'Luxury':
            rentalCost = 20000;
            break;
    
        default:
            console.log('Invalid Car Type');
            break;
    }
    return rentalCost*numDay;
    
}

console.log(rentCalculator(4, 'Luxury'));