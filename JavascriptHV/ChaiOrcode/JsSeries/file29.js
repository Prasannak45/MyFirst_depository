//for of
// const arr1=[1,2,3,4,5,6,7,8];
// for (const i of arr1) {
//     console.log(`I is ${i}`)
// }

// const obj1={
//     name:"Harshit",
//     age:18,
//     email:"harshit@gmail.com",
//     address:"mumbai"
// }

// for(const key in obj1){
//     console.log(obj1[key]);
// };

// const myArray=["Java", "CPP", "JAVASCRIPT","RUBY"];
// for(const key in myArray){
//     console.log(myArray[key]);
// }


const myLang=[
    {
        language:"JAVASCRIPT",
        shortName:"JS"
    },
    {
        language:"Java",
        shortName:"Java"
    },
    {
        language:"Python",
        shortName:"PY"
    },
    {
        language:"RUBY",
        shortName:"RB"
    }
];

myLang.forEach((item)=>{
    console.log(item.language);
})