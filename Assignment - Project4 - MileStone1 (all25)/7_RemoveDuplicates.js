function removeDuplicateItems(cart) {
  // Create an empty object to track items already added to the new cart
    const addedItems = [];
    // Create a new array to store unique items
    const uniqueCart = [];
    
    // Loop through each item in the original cart
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      // Check if the item has already been added to the new cart
      if (!addedItems[item.id]) {
        // Add the item to the new cart and mark it as added
        uniqueCart.push(item);
        addedItems[item.id] = true;
      }
    }
    
    // Return the new cart with duplicate items removed
    return uniqueCart;
  }
  
  // Example usage
  const cartWithDuplicates = [
    {id: 1, name: "Shirt", price: 20.99},
    {id: 2, name: "Pants", price: 35.99},
    {id: 1, name: "Shirt", price: 20.99},
    {id: 3, name: "Shoes", price: 79.99},
    {id: 2, name: "Pants", price: 35.99}
  ];
  
  const uniqueCart = removeDuplicateItems(cartWithDuplicates);
  console.log(uniqueCart); 
  // [{id: 1, name: "Shirt", price: 20.99}, {id: 2, name: "Pants", price: 35.99}, {id: 3, name: "Shoes", price: 79.99}]
  
