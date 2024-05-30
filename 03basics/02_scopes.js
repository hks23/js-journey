//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "harsh"

    function two(){
        const website = "google"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "harsh"
    if (username === "harsh") {
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //this command executes 

function addone(num){  
    return num + 1
}



addTwo(5) //this gives error Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}