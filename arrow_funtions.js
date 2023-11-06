
// Non-arrow function
function doIt(){
    console.log("Done")
}

function addTwo(a,b) {
    return a + b
}

console.log(addTwo(6,7));

//what is an arrow function ? Its anonymouse (without a name), doesnt need a name
const double = x => x * 2;// naming, parentheses, return keyword and curly braces all optional. 
console.log(double(11))

const addThree = (a, b, c) => {
    return a + b + c;
}

console.log(addThree(6, 7, 8))
