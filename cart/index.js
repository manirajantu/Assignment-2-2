// 1. Import tax-calculator.js using CommonJS

const cart = [
    {
        item:"Toy",
        price:29.90
    },
    {
        item:"Back Pack",
        price:59.90
    },
    {
        item:"Pencil Case",
        price:12.90
    }
];

// 2. Use array iteration method to produce an amount payable using the property "price".

cart.forEach(individualItem => {
    console.log(individualItem);
})



// 3. Invoke tax calculator with the payable amount.

function sum(item) {
    amount += item.price;
}
let amount = 0;
cart.forEach(sum);
console.log('$',amount);



