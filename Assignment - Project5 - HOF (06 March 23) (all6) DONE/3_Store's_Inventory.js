// Object of items in dollar price 
const ItemPriceInDollar = {
    "Item-1": 90,
    "Item-2": 100,
    "Item-3": 60.85,
    "Item-4": 50,
    "Item-5": 10.20
};

// Converting object items price in INR Using map() hogh order function
const ItemPriceInINR = Object.fromEntries(Object.entries(ItemPriceInDollar).map(([key, value]) => [key, value*80]));
console.log(ItemPriceInINR);

