//find method
//It never change the array it returns only single value
//It returns only first occurence.
// If no elements found match then it returns undefine
const arr1=["my","obj","str","map","dist"];
// function isLength(string){
//     return string.length===3;
// }
// const res=arr1.find(isLength);
// console.log(arr1)
// console.log(res);
const res=arr1.find((i)=>
{
   return i.length===3
});
console.log(res);

const user=[
    {userId:1, userName:"Harshit"},
    {userId:2, userName:"Dinesh"},
    {userId:3, userName:"Carry"},
    {userId:4, userName:"Hitesh"},
    {userId:5, userName:"Vashisht"},
];

const user3=user.find((i)=>{
    return i.userId===3;
});
console.log(user3);

const numbers1=[3,5,777,68,27,64];
const even=numbers1.find((i)=>{
    return i%2===0;
});
console.log(even)