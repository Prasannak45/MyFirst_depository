//sort method

// const numbers=[5,9,1200,400,3000];
// const numbers1=[4,8,2,9];
// numbers.sort();
// numbers1.sort();
// console.log(numbers);
// console.log(numbers1);
// const words=['v','w','d','a','c','a'];
// words.sort();
// console.log(words);
// const numbers=[5,9,1200,410,3000];
// numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(numbers);

const products=[
    {productId:1, productName:"p1", price:300},
    {productId:2, productName:"p2", price:3000},
    {productId:3, productName:"p3", price:200},
    {productId:4, productName:"p4", price:8000}
];
const lowTohigh=products.sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowTohigh);
