// class class1{
//     constructor(username){
//         this.username=username
//     }
//     logBy(){
//         return `The login is by ${this.username}`;
//     }
// }

// class class2 extends class1{
//     constructor(username, email, password){
//         super(username);
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword(){
//       return  `The encrypted password is ${this.password}abc`;
//     }
// }

// const myChai=new class2("Ankit", "Ankit@gmail.com", 12345678);
// // console.log(myChai);
// console.log(myChai.logBy());
// console.log(myChai.encryptPassword());


class class1{
    constructor(userName){
        this.userName=userName
    }
    logByMe(){
        return `The loggin is by userName${this.userName}`
    }
}

class class2 extends class1{
    constructor(userName, email, password){
        super(userName);
        this.email=email;
        this.password=password
    }

    passwordEncryption(){
      return  `The encrypted password is ${this.password*2}isthenewpassword`
    }
};

const myChai=new class2("Aniket", "Aniket@gmail.com", 12345678);
console.log(myChai);
console.log(myChai.logByMe());
console.log(myChai.passwordEncryption());