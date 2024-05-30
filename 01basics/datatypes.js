//Primitive data types
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Non-Primitive (Refrence)
//Array, Objects, Functions

/*JavaScript is a dynamically typed language, which means that data types of variables 
are determined by the value they hold at runtime and can change throughout the program 
as we assign different values to them*/

const Id = Symbol("123")
const anotherId = Symbol("123")

console.log(Id === anotherId);  //returns false

const bigNumber = 12345678910101n //BigInt datatype
console.log(typeof bigNumber);

const arrayEx = ['Harsh', 'Kumar', 'Singh']

const myDetails = {
    username: '@harshk.in',
    age: 22
}

const myFunctionEx = function(){
    console.log("Hellow World");
}

