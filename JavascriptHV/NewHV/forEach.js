const arr1=[1,2,3,4,5,6,7,8];
// arr1.forEach((i)=>{
//     console.log(i)
// });

const obj1=[
    {firstName:"Harshit",age:22, city:"Mumbai"},
    {firstName:"Dinesh",age:23, city:"Chennai"},
    {firstName:"Carry",age:24, city:"Delhi"},
    {firstName:"Hitesh",age:25, city:"Pune"},
];
console.log("Before", obj1)
obj1.forEach((i)=>{
    console.log(i.firstName);
});
function isObjectInstanceof(value) {
    return value instanceof Object;
}
console.log("After", obj1.prot);
console.log(isObjectInstanceof(obj1));
console.log(obj1 instanceof Object);
// const obj2={
//     firstName:"Javascript",
//     age:28
// }
// Object.defineProperty(obj3,firstName,{
//     value:"myName",
//     writable:false
// });
// console.log(obj3);

const greek={};

Object.defineProperties(greek,{
    prop1:{
        value:"FirstValue",
        writable:true
    },
    prop2:
    {

    }
});
console.log(greek.prop1);
console.log(greek.prop2);
