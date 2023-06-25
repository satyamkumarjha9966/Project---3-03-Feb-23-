function billSplitter(dish, numPeople) {
    let total = 0;
    for (let i = 0; i < dish.length; i++) {
        total += dish[i];    
    }
    let splitBill = total/numPeople;
    let AllBill = {'The total Bill is': total, 'On spliting Bill of one person is': splitBill}
    return AllBill;
}

let dish = [20, 40, 100, 50, 90];
let numPeople = 5;

console.log(billSplitter(dish, numPeople));




