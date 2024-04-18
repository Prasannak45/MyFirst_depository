const user1={
    firstName:"Harshit",
    age:22,
    about:function()
    {
        console.log(this.firstName,this.age);
    }
}

// user1.about();
const myFunc=user1.about.bind(user1);
myFunc();