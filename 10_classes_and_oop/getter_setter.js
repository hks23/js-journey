class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}harsh`
    }

    set password(value){
        this._password = value
    }
}

const harsh = new User("harshks.MIT@gmail.com", "abc")
console.log(harsh.email);