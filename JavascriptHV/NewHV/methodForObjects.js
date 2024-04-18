const createMethods={
    about:function(){
        return `${this.firstName} is ${this.age} years and email is ${this.email } and address is ${this.address}`

    },
    is18:function(){
        return this.age>=18
    }
}

function createUser(firstName,lastName,age,email, address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    user.about=createMethods.about;
    user.is18=createMethods.is18;
}