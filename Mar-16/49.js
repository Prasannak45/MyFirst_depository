//Lexical scope
function myApp()
{
const myVar="Value1";

function myFunc()
{
    // const myVar="value59";
    console.log("Inside myFunc", myVar)
}
console.log(myVar);
myFunc();
}
myApp();