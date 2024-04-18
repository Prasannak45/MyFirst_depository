// const arr1=[1,2,3,4,5,6,7,8]
// for (const i of arr1) {
//     console.log(i);
// }

// const str1="Hello World";
// for(const i of str1){
//     console.log(i);
// }

const obj1={
    name:"Harshit",
    age:18,
    email:"harshit@gmail.com",
    city:"JAIPUR"
};
//You can not iterate object by for of
for(const [i] of obj1){
    console.log(i);
}