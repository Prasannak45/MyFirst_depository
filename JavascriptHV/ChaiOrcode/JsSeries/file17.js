//singleTon object
const objSingleTon=new Object();

//nonSingleTonObject
const nonSingleTonObject={};

// const user={
//     user:"user1",
//     fullname:{
//         userFullName:"fullName"
//     }
// }
// console.log(user.fullname.userFullName);

const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};

//Combine object

//1-Spread operator
// const obj3={...obj1,...obj2};

//2-Assign object
const obj3=Object.assign({},obj1, obj2)
console.log(obj3);

//Object properties
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty(1));