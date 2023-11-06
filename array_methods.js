let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];
// .map() Always retunrs an array of the same length as the input array.
// .reduce() Always returns exactly one and only one output 

// B.) - total for cart incorporating quantity
console.log(cart.reduce((a,c)=> a + (c.price * c.quantity) , 0)); 

// A.) - Map return only name/item and then forEach() to display

// listOfStrings = cart.map(row => row.item);
// console.log(listOfStrings);

// listOfStrings.forEach(text => console.log(text));

//cCOMBINED
cart.map(r => r.item).forEach(t => console.log(t));
//WITHOUT THE SUGGESRED CALL TO MAP
cart.forEach(r => console.log(r.item));

// cart.map(r => r.item).forEach(console.log);// LOGS NAME, INDEX , AND LIST EVERYTIME

// .join() = opposite of .slice 
console.log(cart.map(r => r.item).join("\n"));// OR USE "\n", "\t", " ", "<br>"

