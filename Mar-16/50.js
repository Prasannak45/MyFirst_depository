//Block scope vs function scope

//let and const are block scope
//var is function scope
// {
//     let name1="Harshii";
//     console.log(name1)

// }
// {
//     let name1="vasisht";
//     console.log(name1)
// }
// let name1="garima"
// console.log(name1)


{
    var firstName="Harshit";
    console.log(firstName);
}
{
    var firstName="Mohit";
    console.log(firstName);
}
console.log(firstName);
