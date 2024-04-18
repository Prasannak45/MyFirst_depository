// In apply and call is same the only diff is u dont need to pass argument separately u can pass in an array

function about(game, song){
    console.log(`Name is ${this.firstName} and age is ${this.age} and hobby is ${game} and is favourite song is ${song}`);
};

const obj1={
    firstName:"Harshit",
    age:20
};

about.apply(obj1,["Cricket", "fastCar"]);