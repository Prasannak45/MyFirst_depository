// var a=[10,20,30];
// console.log("Loop using of")
// for (let v of a)
// {
//     console.log(v);

// }

// function sum(a, b)
// {
//     return a+b;
// }
// console.log(sum(5,10));

// let sum=(a)=>{
//     return "hello "+ a;
// }
// console.log(sum("ananda"));
// let arr=[10,20,30,40,50,60,70];
// // let arr1=[];

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// for(let i=0;i<arr.length;i++)
// {
//     arr1[i]=arr[i]*2;
    
// }
// console.log(arr1)

// let arr1=arr.map((val)=>{
// return val*3;
// })
// console.log(arr1);

let test=[
    {
        name:"a",
        position:"developer"
    },
    {
        name:"b",
        position:"developer",
    },
    {
        name:"c",
        position:"developer",
    },
    {
        name:"d",
        position:"developer"
    },
    {
        name:"e",
        position:"developer"
    },
    {
        name:"f",
        position:"developer",
    },
    {
        name:"g",
        position:"developer"
    },
    {
        name:"h",
        position:"tester"
    }
];

const test1=test.filter(val=> val.position=="developer");
console.log(test1);
document.cookie

