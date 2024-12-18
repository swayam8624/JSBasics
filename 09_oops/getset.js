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
        return `${this._password}swayam`
    }

    set password(value){
        this._password = value
    }
}

const swayam = new User("h@swayam.ai", "abc")
console.log(swayam.email);