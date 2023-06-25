const cart = [
    {item: "mouse", unitPrice:"20", quantity: "10"}, 
    {item: "pen", unitPrice:"10", quantity: "20"},
    {item: "bike", unitPrice:"200", quantity: "40"},
    {item: "phone", unitPrice:"400", quantity: "50"}
]

const cartTotalPrice = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const itemPrice = cart[i].unitPrice * cart[i].quantity
        total += itemPrice
    }
    return total;
}
    
console.log(cartTotalPrice(cart));
