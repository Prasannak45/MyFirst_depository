//Reduce method
//reduce never return array it returns a single value
const obj1=[
    {firstName:"Harshit", produce:"Laptop", price:10000},
    {firstName:"Dinesh", produce:"Mobile", price:20000},
    {firstName:"Hitesh", produce:"TV", price:30000},
    {firstName:"Pankaj", produce:"Ipad", price:50000},
];
const sum=obj1.reduce((accumulator, codinator)=>{
    return accumulator+codinator.price
},0);
console.log(sum);

const array1=[1,2,3,4,5,6,7];
const res=array1.reduce((a,b)=>{
    return a+b;
});
console.log(res);

const myObj={
 firstName:""
}