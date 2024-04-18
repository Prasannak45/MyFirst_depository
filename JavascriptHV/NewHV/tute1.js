const myObj=[
    {firstName:"Harshit",age:22,city:"Mumbai"},
    {firstName:"Dinesh",age:23,city:"Pune"},
    {firstName:"Sidhu",age:24,city:"Delhi"},
    {firstName:"carry",age:25,city:"Bengaluru"},
];

myObj.forEach((i)=>{
    console.log(`Myname is ${i.firstName} and my age is ${i.age}.My city name is ${i.city}`)
});

//map
const newMap=myObj.map((i)=>{
    // console.log("Inside map");
    // console.log(i.firstName)
    return i.firstName;
})
console.log(newMap);

//filter
const newFilter=myObj.filter((i)=>{
   return  i.age>=23;
});

console.log(newFilter)

newFilter.forEach((i)=>{
    console.log(i)
})

//for in
// it returns index
for(let i in myObj){
    console.log(i);
}

//for of
for (let j of myObj){
    console.log(j.firstName)
}

const arr=[2,4,6,7,8,9,10];
const sum=arr.reduce((accumulator, coordinator)=>{
    return accumulator+coordinator;
});
console.log(sum)