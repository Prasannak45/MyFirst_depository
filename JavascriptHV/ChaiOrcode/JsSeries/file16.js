//Object literals

const obj1={
    name1:"Hitesh",
    age:18,
    location:"Mumbai",
    email:"hitesh@gmail.com",
    isLoggedIn:true,
    logginTime:["Monday","Friday"],
};

console.log(obj1.email);
console.log(obj1["email"]);
// obj1.greeting=function(){
//     console.log("Hello JS User");
// }
obj1.greeting2=function(){
    console.log(`Hello JSsss user ${this.name1}`);
}
// console.log(obj1.greeting);
console.log(obj1.greeting2());
Object.freeze(obj1);