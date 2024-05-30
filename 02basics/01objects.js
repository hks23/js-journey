 //object literals
const JsUser1 = {
    name: "Harsh",
    age: 22,
    location: "UP",
    loginStatus: false
}

//accessing the values
//one way is dot operator and other is square bracket 
console.log(JsUser1.location);
console.log(JsUser1["location"]); //better way
console.log(JsUser1["age"]);

//to make a key as Symbol
const mykey = Symbol("key1")
let JsUser2 = {
    name: "Harsh",
    [mykey]: "keyISvalid",
    age: 22,
    location: "UP",
    loginStatus: false
}

console.log(JsUser2[mykey]);
console.log(JsUser2);

//creating a function
JsUser2.greeting = function(){
    console.log("Hello you are inside the function defined at line 29")
}
console.log(JsUser2.greeting); //prints [Function (anonymous)]
console.log(JsUser2.greeting()); //prints Hello you are inside the function defined at line 29f