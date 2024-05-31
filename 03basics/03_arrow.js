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

const chai = function () {
    let username = "hitesh"
    console.log(this.username);
} 
chai() //returns undefined

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}
chai() //returns undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()