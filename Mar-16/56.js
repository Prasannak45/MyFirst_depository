// Important Array Methoda
const numbers=[2,4,6,8];
const multiplyByTwo=(number, index)=>
{
    // console.log("Index is", index);
    // // console.log(number*2);
    // console.log(`${number}*2= ${number*2}`)
    console.log(`index is ${index} and number is ${number}`);
}

// multiplyByTwo(numbers[0], 0);
// for(let i=0;i<numbers.length;i++)
// {
//     // console.log(i);
//     multiplyByTwo(numbers[i], i);

// }


//For each
//It passes array and index
numbers.forEach(multiplyByTwo);





const users=[
    {fname:"abc", age:12},
    {fname:"sdd", age:20}
];
users.forEach((i)=>
{
console.log(i.fname)
})

const user1=[
    {userName:"ABC", age:1},
    {userName:"xyz", age:2}
];
user1.forEach((i)=>{
    console.log(i.userName);
})