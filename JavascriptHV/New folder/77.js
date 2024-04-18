//create function to create multiple object
function createUser(firstName, lastName, email, age, address)
{
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18=function(){
        return this.age>=18;
    }
    return user;
};


const user1=createUser('harshit', 'vashisth', 'harshit@gmail.com', 19, 'my address');
console.log(user1);
const about=user1.about();
console.log(about);