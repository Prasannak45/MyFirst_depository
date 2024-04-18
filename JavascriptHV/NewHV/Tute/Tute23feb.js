const arr1=[1,2,3,4,5,6,7];


// every 
const evenEvery=arr1.every((i)=>i%2===0);
console.log(evenEvery);

//filter
const resFilter=arr1.filter((i)=>i%2===0);
console.log(resFilter);

//map
const resMap=arr1.map((i)=>i*2);
console.log("ResMap",resMap);

//find
const resFind=arr1.find((i)=>i===4);
console.log(resFind);

//reduce
const resReduce=arr1.reduce((a,b)=>{
    return a+b;
});
console.log(resReduce);

//some
const resSome=arr1.some((i)=>i===5);
console.log("resSome",resSome);



//forEach
arr1.forEach((i)=>{
    console.log(`I value is ${i}`)
});
console.log(arr1);

//for in
for(let i in arr1){
    console.log(`value of i is ${i}`);
}

//for of
for(let i of arr1){
    console.log(i)
}

//reverse
const reverse=arr1.reverse();
console.log(reverse);