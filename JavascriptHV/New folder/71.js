const obj1={
    firstName:"harshit",
    age:8,
    about:function(){
        console.log(`person name is ${this.firstName}  and person age is ${this.age} `);
    }
}
obj1.about();
