//some method
//if one conditions is satisfied then its return true
// const numbers=[2,3,4,5,6,7,8,9];
// ans=numbers.some((number)=>number%2===0);
// console.log(ans);

const userCart=[
    {productId:1, productName:"mobile", price:12000},
    {productId:2, productName:"laptop", price:22000},
    {productId:3, productName:"tv", price:35000},
    {productId:4, productName:"macbook",price:250000}
];

const ans=userCart.some((user)=>user.price>1000000);
console.log(ans);
