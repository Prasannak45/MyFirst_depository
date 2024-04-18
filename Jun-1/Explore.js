// const arr1=[1,2,3];
// console.log(arr1);
// const arr2=[4,5,6];
// const arr3=[...arr1, ...arr2];
// console.log(arr3);
// const a1="abc";
// const a2=[a1]
// console.log(...a2)

const obj1={
    name:"abc",
    age:22,
    gender:"male"
};

const obj2={
    name:"asd",
    age:21,
    gender:"male"
};

const objj={...obj1,...obj2}
console.log(objj);  