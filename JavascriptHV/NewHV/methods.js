//methods
//function inside object
const obj1={
    firstName:"Harshit",
    age:28,
    about:function(){
        console.log(`Person name is ${this.firstName} and age is ${this.age}`);
    }
};

obj1.about();

function personInfo(){
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
};

const person1={
    firstName:"Harsh",
    age:22,
    about:personInfo
};

const person2={
    firstName:"Mohit",
    age:23,
    about:personInfo
};

const person3={
    firstName:"nitish",
    age:24,
    about:personInfo
};

person1.about();
person2.about();
person3.about();