const user = {
    username: "harsh",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }// this refers to current context
}

user.welcomeMessage()
user.username = "disha"
user.welcomeMessage()

console.log(this) 

function chai(){
    let username = "harsh"
    console.log(this.username);
}
chai()  //returns undefined

const chaiNbiscuit = function () {
    let username = "hitesh"
    console.log(this.username);
} 
chai() //returns undefined

const chaiNbiscuit2 =  () => {
    let username = "hitesh"
    console.log(this.username);
}
chai() //returns undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo1 = (   num1, num2) =>  num1 + num2

const    addTwo2 = (num1, num2) => ( num1 + num2 )

const addTwo3 = (num1, num2) => ({username: "hitesh"})

//console.log(`the value you are printing is ${addTwo1} , ${addTwo2} , ${addTwo3}`);

console.log(addTwo1(3, 4))
console.log(addTwo2(4, 4))
console.log(addTwo3(5, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
if(2===2)
{
        console.log(`hello`);
    }