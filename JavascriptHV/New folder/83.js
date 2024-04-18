//new keyword
function createUser(firstName, age){
this.firstName=firstName,
this.age=age
}
const createdUser=new createUser("harshit", 8);
createUser.prototype.about=function()
{
    console.log("Objectuser",this.firstName,this.age);
}
//new keyword
// 1- Creating empty object
    //   empty object this={}
    console.log(createdUser.about());
    // ------------------------------------------------------------------------
// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function --> because this is constructing object for us.
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());