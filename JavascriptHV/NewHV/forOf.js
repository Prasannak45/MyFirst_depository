const arr1=["Hitesh","Sidhu","Durga","Dinesh"];
for(let i of arr1){
    if(i==="Sidhu"){
        console.log(i);
    }
}

const myObj=[
    {firstName:"Hitesh", age:22, city:"Mumbai"},
    {firstName:"Harry", age:23, city:"Pune"},
    {firstName:"Dinesh", age:24, city:"Noida"},
    {firstName:"Sidhu", age:25, city:"Delhi"},
];

for(let k of myObj){
    console.log(`My name is ${k.firstName} andmy age is ${k.age}, and my city is ${k.city}`)
};