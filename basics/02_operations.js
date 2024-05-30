// ----------------------------*****operations*****------------------------------------------//
console.log(1 + "2")   //prints 12 
console.log("1" + 2)   //prints 12
console.log(1 + 2 + "2") //prints 32
console.log("1" + 2 + 2) //prints 122

console.log(+true)    //prints 1
console.log(+"")     //prints 0

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
//output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
//output: "a:4, b:4"
