// function f1()
// {
//     console.log("Entering function");
//     console.log("Leaving function");
// }
// f1();
// f1();
// f1();

// Program 2

// function  sum(a, b)
// {
//     console.log("Entering function");
//     let sum=a+b;
//     console.log("The sum of a & b is-->" +sum);
//     console.log("Leaving function");

// }

// sum(10, 10);
// sum(20,10);

// Program 3

// function sum(a, b=5)
// {
//     console.log("Entering function");
//      let sum=(a+b);
//     console.log("The sum of a & b is -->" +sum);
//     console.log("Leaving  function");

// }
// sum(10);
// sum(10, 20);

//  Program 4

let a=[10, 20];
function sum(a, b)
{
    console.log("Entering function");
    let sum =a+b;
    console.log("The sum of a & b-->"+ sum);
    console.log("Leaving function");
}

sum(...a);