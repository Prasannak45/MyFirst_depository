// Every return true/false value.
//It apply on every elements 
// If all condition is satisfied on all element then it will return true.
const arr=[2,4,6,8];
const res=arr.every((i)=>{
    return i%2===0;
});
console.log(res);

const product=[
    {productid:1,productName:"p1",productPrice:200000},
    {productid:2,productName:"p2",productPrice:2098},
    {productid:3,productName:"p3",productPrice:45678},
    {productid:4,productName:"p4",productPrice:2976},
    {productid:5,productName:"p5",productPrice:1876},
    {productid:6,productName:"p6",productPrice:500},
];
// const undertenK=product.every((i)=>{
//     return i.productPrice>=500;
// });
// console.log(undertenK)
const utK=product.every((i)=>i.productPrice>=500);
console.log(utK);

for(let i of product){
    console.log("This is iterable",i)
}