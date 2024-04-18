//Function return object
//Function- 1-function that create object
// 2-Add key value pairs
// 3-Object ko return karega

const user1={
    firstName:"Harshit",
    lastName:"Vashistha",
    email:"harshitVashisth@gmail.com",
    age:2,
    address:"Mumbai",
    about:function(){
        return `${this.firstName} is ${this.age} years and email is ${this.email } and address is ${this.address}`
    },
    is18:function(){
        return this.age>=18},
 
    }

    function createUser(firstName, lastName,email,age,address){
        user={},
        user.firstName=firstName,
        user.lastName=lastName,
        user.email=email,
        user.age=age,
        user.address=address,
        user.about=function(){
            return `${this.firstName} is ${this.age} years and email is ${this.email } and address is ${this.address}`
        },
        user.is18=function(){
            return this.age>=18}
      return user
    };

    const user2=createUser("Sidhu","Harry","Sidhu@gmail.com",20,"Delhi")
    console.log(user2)
    console.log(user2.is18());