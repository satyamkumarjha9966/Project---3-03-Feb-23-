let cart = [20, 40, 60, 80];

function updatedCart(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2
    }
    return cart;
}

console.log(updatedCart(cart));