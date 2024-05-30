/*---------------------------MEMORY--------------------------- */

//Stack Memory (Primitive)
//Heap (Non Primitive)

let Id1 = "harsh"
let Id2 = Id1
Id2 = "chai"
console.log(Id1);
console.log(Id2);


let userOne = {
    email: "user1@google.com",
    age: "20"
}
let userTwo = userOne
userTwo.email = "user2@google.com"

console.log(userOne.email); //prints user2@google.com
console.log(userTwo.email); //print user2@google.com 