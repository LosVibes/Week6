

// function showAllObjects(objectList) {
//     objectList.forEach(item => console.log(item.name)); //Loop calling new function for each item
// }

const data = [
    { id:111, name:"Pencil", price: 1.11},
    { id:222, name:"Pen", price: 2.22},
    { id:333, name:"Pad", price: 3.33},
];


// showAllObjects(data); 

// const callbackFunction = item => console.log(item.name);
// data.forEach(callbackFunction);

data.forEach( item => console.log(item.name)); // loop calling new function for each item

data.forEach(console.log); // logs all three parameteres our callback receives (items, index, list)


function showItem(item, index, list){
    console.log(
        item.id, 
        item.name, 
        "$" + item.price.toFixed(2),
        " INDEX " + index + " OF " + list.length
    );
}

data.forEach(showItem);