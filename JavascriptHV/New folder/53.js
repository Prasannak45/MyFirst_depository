//param destructuring






const person={
    firstName:"harshit",
    gender:"male",
    age:50
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age)
// }

function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);