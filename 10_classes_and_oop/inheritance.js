class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)   //SUPER is a keyword
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1 = new Teacher("harsh", "harsh@gmail.com", "hks")
user1.addCourse()

const user2 = new User("chainika")
user2.logMe()

console.log(user1 instanceof User);
console.log(user1 instanceof Teacher);
