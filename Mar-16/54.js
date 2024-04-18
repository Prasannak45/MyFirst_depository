//Callback function
// function myFunc(a)
// {
//     console.log(a)
//     console.log("My func");
// }
// const array1={name1:"abc", age:10}
// myFunc(array1);







// const myFunc=()=>
// {
//     console.log("Inside my func");
// }

// const myFunc2=(a)=>
// {
// a();
// }
// myFunc2(myFunc);


const name1="abc"
function greeting(name1)
{
    console.log("Inside greeting function");
    console.log(name1);
}

function mainCallBack(a)
{
    console.log("Main callback");
    // const name1=prompt("Enter the name");
    a(name1);
    console.log("After execution greeting function");
}
mainCallBack(greeting);
