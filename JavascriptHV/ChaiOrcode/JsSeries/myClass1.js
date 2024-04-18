class user1{
    constructor(userName, email, password){
        this.userName=userName;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const myObj=new user1("Hitesh", "Hitesh@gmail.com", 1234);
console.log(myObj);
console.log(myObj.encryptPassword());