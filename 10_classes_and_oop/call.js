function SetUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    //complex DB calls
    // SetUsername(username) //only writing this is not working 
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);  
