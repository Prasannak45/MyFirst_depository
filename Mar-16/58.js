//Filter method
// const array=[2,3,4,5,6,7];
// const isEven=array.filter((i)=>{
//     return i%2===0;
// });
// console.log(isEven);

// const arr1=[1,2,3,4,5,6,7,8,9];
// const evenNumber=arr1.filter((i)=>i%2===0);
// console.log(evenNumber);

// const arr1=["ABC","abc","Abc","aBC"];
// const same=arr1.filter((i)=>i==="ABC");
// console.log(same);

// const arr1=[1,2,3,4,5,6,7,8,9];
// const is2=arr1.filter((i)=>i==2);
// console.log(is2);

const arr1=["avbcbcbc","hshs","nsns","qwerty"];
const isLength=arr1.filter((i)=>i.endsWith("bc"));
console.log(isLength);
