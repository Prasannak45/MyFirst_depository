//Some method
// It returns result in true and false
//If condition is satisfied on any one element then it will return true.

const arr=[1,3,5,7,8];
const isAnyEven=arr.some((i)=>i%2===0);
console.log(isAnyEven);

const product=[
    {productId:1,productName:"p1",price:1000},
    {productId:2,productName:"p2",price:2275},
    {productId:3,productName:"p3",price:3250},
    {productId:4,productName:"p4",price:2860},
    {productId:5,productName:"p5",price:1650},
];

const lowPrice=product.some((i)=> i.price<=400);
console.log(lowPrice)