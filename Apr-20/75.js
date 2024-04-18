const user1={
    firstName:"Harshit",
    age:22,
    about:()=>{
        console.log(this.firstName,this.age);
    }
}
user1.about();