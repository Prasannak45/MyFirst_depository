//Bind
//Bind returns a function and u can store it in a variable and after that u can call it.

const About= function(game, song){
console.log(`The name is ${this.firstName} and age is ${this.age} and favourite game is ${game} and song is ${song}`)
};

const obj1={
    firstName:"Harshit",
    age:20
};

const func=About.bind(obj1,["Cricket","fastCar"]);
func();
