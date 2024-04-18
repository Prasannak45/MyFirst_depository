const myObj={
    firstName:"Harshit",
    age:22
};
for(let i in myObj){
    console.log(i)
}


//In object key will be always string or symbol
for(let i in myObj){
    console.log(typeof i);
}

//Map will store key value pair
const person=new Map();
person.set('firstName', 'Harshit');
person.set('age', 7);
person.set(1, 'one');
// console.log(person); It will through error

// How to access object defined by map
console.log(person.get('firstName'));


//We cant apply for of loop on object
//But by using map created object we can apply for of loop on this object.

for (let i of person){
    console.log(i);
}