// const user1={
//     name1:"hitesh",
//     age:28,
//     welcomeMessage:function(){
//         console.log(`${this.name1}, welcome to website`);
//     }
// }

// user1.welcomeMessage();
// user1.name1="Jayesh";
// user1.welcomeMessage();
const username="hitesh";
const chai=()=>{
    
    console.log(this.username);
};

chai();