const person={
    name1:"Harshit",
    age:19,
    year:1968,
    "famous Song":"Kashmir"

};
// const name1=person.name;
// const age=person["age"];
let {name1, age, ...restvalue}=person
console.log(name1);
console.log(age)
console.log(restvalue);