const myArr=[1,2,3,4,5,6,7];
for(let i in myArr){
    console.log(myArr[i]);
};

const myObj=[
    {firstName:"Harshit", Age:22,email:"Harshit@gmail.com"}, 
    {firstName:"Hitesh", Age:23,email:"Hitesh@gmail.com"}, 
    {firstName:"Harry", Age:24,email:"Harry@gmail.com"}, 
    {firstName:"Dinesh", Age:25,email:"Dinesh@gmail.com"}, 
];
for(let j in myObj){
    console.log(myObj[j].firstName);
};
//  const sum=myObj.reduce((myAccumulator, accumulator)=>{
//     return myAccumulator+accumulator.Age
//  },0);
//  console.log(sum)

// const sum=myArr.reduce((a,b)=>{
//     return a+b;
// });
// console.log(sum);