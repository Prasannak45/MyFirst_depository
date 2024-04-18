//block scope vs function scope
//let and scope are block scope
//var is function scope
// {
//     const firstName="Harshit";
//     console.log(firstName)
// }
// {
//     const firstName="Mohit";
//     console.log(firstName)
// }

{
    var firstName="firstName";
}
{
    var firstName="secondName";
}
console.log(firstName);