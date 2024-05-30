//convert to number 
let score = "33"
let newScore = Number(score)
console.log(newScore) // prints 33 

let rank = "33A"
let newRank = Number(rank)
console.log(newRank) //prints NaN - Not a number

let id = undefined
let newId = Number(id)
console.log(newId) //prints NaN - Not a Number

let temp = null
let newTemp = Number(temp)
console.log(newId) //prints NaN - Not a Number

/*all these values return FALSE in JS
false
0
"", '', `` (empty strings)
null
undefined
NaN 
*/

//convert to string
let number = 33
let stringNumber = String(number)
console.log(typeof stringNumber); 


