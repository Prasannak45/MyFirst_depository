//important array methods
// const numbers=[4,2,5,8];
// function multiplyBy2(number, index){
//     console.log("index is", index);
//     console.log(`${number}*2=${number*2}`);
// }
// for(let i=0; i<numbers.length;i++){
//     multiplyBy2(numbers[i],i)
// }
// numbers.forEach(multiplyBy2);

// numbers.forEach(function(number, index)
// {
//     console.log(number*3, index)
// })


const users=[
    {firstName:"harshit", age:23},
    {firstName:"mohit",age:21},
    {firstName:"nitish", age:22},
    {firstName:"garima", age:20}   
]
// users.forEach(function(user){
//     console.log(user.firstName)
// })

// for(let user of users){
//     console.log(user.firstName);
// }
users.map(i=>{
    console.log(i.firstName);
})

users.forEach((user)=>{
    console.log(user.firstName)
})