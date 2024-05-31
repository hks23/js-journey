//Immediately Invoked Function Exprerssion (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})() ; //semicolon very important to halt the function

((name)=>{
    //unnamed IIFE
    console.log(`DB CONNECTED TO ${name}`);
}) ('Harsh')