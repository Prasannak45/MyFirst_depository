const obj1={
    a:1,
    b:2
};
const obj2={
    c:3,
    d:4
}

// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1, ...obj2}
// console.log(obj3);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
