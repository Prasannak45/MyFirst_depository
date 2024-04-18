//Hoisting
hello();
//Hoisting working in function declaration
 function hello()
 {
    console.log("Hello");
 }

//Hoisting is not working in function expression
// const hello=function()
// {
//     console.log("Hello");
// }

//Hoisting is Not working in Arrow function
// const hello=()=>{
//     console.log("Hello");
// }

console.log(var1);
var var1="variable1"