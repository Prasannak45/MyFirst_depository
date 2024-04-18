const obj1={
    name:"Abc",
    age:18,
    "my address":"Mumbai",
    email:"Prasannakadam92@gmail.com",
    contact:8308644283,
    Designation:"React JS developer"
};

// obj1.map(i=>{
//     i.
// })
const keyValuePairs = Object.keys(obj1).map(key => `${key}: ${obj1[key]}`);

// console.log(keyValuePairs);
// console.log(Object.keys(obj1)()=>{``});
