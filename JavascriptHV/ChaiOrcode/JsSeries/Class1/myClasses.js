class user{
    constructor(userName, email, password){
        this.username=userName;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
};

const chai= new user("chai", "chai@gmail.com", 12345);
console.log(chai);
console.log(chai.encryptPassword());