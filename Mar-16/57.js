// //Map methods
// const numbers=[2,3,4,5,6,7];
// console.log("map",numbers);
// const ans=numbers.map((i)=>{
//     return i*i;
// })
// console.log("map", ans);

// const user=[
//     {userName:"abc",age:1},
//     {userName:"xyz",age:8},
// ];
// const mapfunc=user.map((i)=>{
//     return i.userName;
// })
// console.log("map",mapfunc);

// const numbers=[1,2,3,4,5,6,7,16];

// const square=(i)=>{
//  return i*i;
// };

// // const squaredNumbers=numbers.map(square);
// const squaredNumbers=numbers.map((i)=>i*i);
// console.log(squaredNumbers);

// const array1=["abcd", "qwert","asdfgh","zxcvbnm","cmcnvnvnv","fnhfnhfnf"]
// const array1Length=array1.map((i)=>i.length);
// console.log(array1Length);


// const array2=[10,20,30,40,50,60,70,80];
// const divide2=array2.map((i)=>i/2);
// console.log(divide2);


const arr1=["abcd","asddf","asddffg","zxcvbn","cvbnmkl","qwertyui","zxcvvbnnn"]
const addAlfa=arr1.map((i)=>i+"name");
console.log(addAlfa);