//Sort method
//sort never returns a new array it changes current array --It mute current array

const numbers=[14,50,1200,400,46,73,40];
console.log(numbers);
//if u want asscending order then just pass a-b;
// if reslut comes in positive then its change the position
numbers.sort((a,b)=>{
    return a-b;
});
console.log(numbers)



const myVar=["harshit","abc","Yarn","zxcv"];
console.log(myVar);
myVar.sort();
console.log(myVar);

//if u want  number in descendng order then pass b-a;
// if result comes in positive then its changes the position
numbers.sort((a,b)=>{
    return b-a;
});
console.log(numbers);

const product=[
    {productId:1, productName:"p1", price:1000},
    {productId:2, productName:"p2", price:200},
    {productId:3, productName:"p3", price:4000},
    {productId:4, productName:"p4", price:8000},
    {productId:5, productName:"p5", price:2000},
    {productId:6, productName:"p6", price:800},
];

product.sort((a,b)=>{
    return a.price-b.price
});
product.forEach((i)=>{
    console.log(i)
})