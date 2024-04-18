const user1={
    firstName:"harshit",
    age:8,
    about:function()
    {
        console.log("this",this);
        console.log(this.firstName, this.age);
    }
}
const myFunc=user1.about.bind(user1); 
myFunc();