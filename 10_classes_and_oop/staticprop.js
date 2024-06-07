class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){   //now this static keyword makes this method inaccessible by the User
        return `123`
    }
}

const harsh = new User("harsh")
// console.log(harsh.createId()) //after making the createId() method static this log command will give error

/*------------------------------------------------------------------------------------------------------------ */
class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const ProfProton = new Teacher("Proton", "electron")
ProfProton.logMe()