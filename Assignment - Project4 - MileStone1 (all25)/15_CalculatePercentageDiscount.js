const percentageDiscount = (originalPrice, discountedPrice) => {
    const discountPercentage = (discountedPrice / originalPrice) * 100;
    return Math.round(discountPercentage);
}

const originalPrice = 320;
const discountedPrice = 50;

const DiscountInPercentage = percentageDiscount(originalPrice, discountedPrice);

console.log(`You saved ${DiscountInPercentage}% on this product!`);





