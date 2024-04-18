class userExample{
    constructor(name, email,password){
        this.name=name;
        this.email=email;
        this.password=password
    } 

    encryptPassword(){
        return `${this.password}abc`
    }
}

const myObj=new userExample("Harsh", "Harsh@gmail.com", 1234);
console.log(myObj);
console.log(myObj.encryptPassword());


//behind scene
function User(name, email, password){
    this.name=name;
    this.email=email;
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}


class class1{
    constructor(userName){
        this.userName=userName;
    }
    logMe(){
      return  `The login is by ${this.userName}`
    }
}

class class2 extends class1{
    constructor(userName, email, password){
        super(userName);
        this.email=email;
        this.password=password
    }
    encryptPassword(){
     return   `The encrypted password is ${this.password}12345678`
    }
}

const myChai=new class2("Harshit", "Harshit@gmail.com", 12345678);
console.log(myChai);
console.log(myChai.encryptPassword());