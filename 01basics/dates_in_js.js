//Dates

let myDate = new Date()
console.log(myDate)   //2024-05-30T08:55:26.569Z
console.log(myDate.toDateString()); // Thu May 30 2024
console.log(myDate.toLocaleString());  // 30/5/2024, 2:25:26 pm
console.log(typeof myDate); // object

let createdDate1 = new Date(2023 , 0 , 23)
let createdDate2 = new Date(2023, 0, 23, 5, 3)
console.log(createdDate1.toLocaleString()); // 23/1/2023, 12:00:00 am
console.log(createdDate2.toLocaleString()); // 23/1/2023, 5:03:00 am

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})