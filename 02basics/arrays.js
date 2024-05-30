let myArr = new Array(1,2,3,4,5)
// myArr.unshift(19)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr);

//splice v/s slice
// console.log("A", myArr);
// const myn1 = myArr.slice(1,3) //it extracts n-1 elements but doesnt change the original array

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3) //splice includes both the indexes and removes them from original array
// console.log(myn2);
// console.log("C", myArr);

/////////////////////////////////////////////////////////////////////////////////////////////////////
//push() methods
const marvel_heros = ["thor" , "Hulk" , "IronMan"]
const dc_heros = ["Batman" , "Daredevil", "Superman"]
marvel_heros.push(dc_heros) //pushes the complete array inside ['thor','Hulk','IronMan',['Batman','Daredevil','Superman']]
console.log(marvel_heros); 

//concat() method 
const mcu = ["thor" , "Hulk" , "IronMan"]
const dc = ["Batman" , "Daredevil", "Superman"]
const merged_array = mcu.concat(dc) //[ 'thor', 'Hulk', 'IronMan', 'Batman', 'Daredevil', 'Superman' ]
console.log(merged_array); 

//spread() method
const numberArr = [1,2,3]
const all_new_heros = [...marvel_heros, ...dc_heros , ...numberArr] //better than concat()
console.log(all_new_heros);

//flat() method
const another_array = [1,2,3, [4,5,6], 7, [8,9,[10,11]]]
const spread_out_array = another_array.flat(Infinity) //[1, 2, 3, 4,5, 6, 7, 8, 9, 10,11]
console.log(spread_out_array);

//is(), from(), of()
console.log(Array.from("Hitesh"))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
