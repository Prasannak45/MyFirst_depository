//map method
const numbers=[8,9,10,28,15,29,58,78];
// const square=function(number)
// {
//     return number * number;
// }

// const squareNumber=numbers.map(square);
// console.log(squareNumber);

// const squareNumber=numbers.map(i=>{ 
//     return i*i;
// })
// console.log(squareNumber);
const users=[
    {firstName:"harshit", age:23},
    {firstName:"Mohit", age:23},
    {firstName:"Nitish",age:22},
    {firstName:"garima",age:20}
]
const userName= users.map((user)=>{
    return user.firstName;
}) 
console.log(userName);