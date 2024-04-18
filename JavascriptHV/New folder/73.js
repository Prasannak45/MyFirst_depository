//call, apply, bind methods
// function hello(){
//     console.log("hello world");
// }

// // hello.call();
// hello();

const user1={
    firstName:"harshit",
    age:8,
    about:function(){
        console.log(this.firstName , this.age);
    }
}
const user2={
    firstName:"mohit",
    age:9
}


//by using call we can use object1.method for passing object2 key values
//syntax: object1.methodname.call(object2);
user1.about.call(user2);
// ------------------------------------------------------------------------------------------------------

const obj1={
    firstName:"harshit",
    age:8,
    about:function(hobby, favMusician)
    {
        console.log(this.firstName,this.age,hobby, favMusician);
    }
}

const obj2={
    firstName:"mohit",
    age:9,
};

// obj1.about.call(obj2, "cricket","mozzart");
//Passing another way parameter
obj1.about.apply(obj2,["cricket","mozzart"]);