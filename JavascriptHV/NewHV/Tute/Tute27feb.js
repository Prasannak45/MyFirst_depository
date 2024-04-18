const obj1={
    firstName:"Harshit",
    age:20,
    about:function(){
        console.log(`First name is ${this.firstName} and age is ${this.age}`)
    }
};
const obj2={
    firstName:"Dinesh",
    age:24
};

obj1.about.call(obj2);


const info=function(address, contact){
    console.log(`Person name is ${this.personName} and person age is ${this.age}  and person address is ${address} also contact number is ${contact}`);
}

const person={
    personName:"Harry",
    age:20,
    address:"Mumbai",
    contact:1234567
};
info.apply(person,["Pune",456789]);

const person1={
    personName:"Sidhu",
    age:38,
};
info.call(person1,"Satara",12345678)
const func=info.bind(person,"Delhi",234);
func();
