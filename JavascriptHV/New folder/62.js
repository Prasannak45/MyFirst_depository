// every method
const numbers=[2,4,6,8];
const ans=numbers.every((number)=>number%2==0);
console.log(ans);




const userCart=[
    {userId:1, productName:"mobile", price:2200},
    {userId:2, productName:"laptop", price:22000},
    {userId:3, productName:"tv", price:35000}
];

const ans1=userCart.every((cart)=>cart.price>2000);
console.log(ans1)
