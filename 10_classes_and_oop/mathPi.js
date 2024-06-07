// in math.pi the value is 3.14159.. can we make it 3.4
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);  //still prints 3.14149..

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
/**
 {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
 } 
*/

const car = {
    name: "BMW",
    model: 22,
    luxary: true,

    orderCar: function(){
        console.log("not running");
    }
}
console.log(Object.getOwnPropertyDescriptor(car , "name"));
/*{
  value: 'BMW',
  writable: true,
  enumerable: true,
  configurable: true
} */

Object.defineProperty(car , "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(car , "name"));

// for (let [key, value] of car) {
//     console.log(`${key} : ${value}`);
// }

for (let [key, value] of Object.entries(car)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
   

