// // // function firstFunction(){
// // //     console.log("Function called");
// // // }

// // // firstFunction();

// // // function sum(a,b)
// // // {
// // //     return console.log(a+b);
// // // }
// // // sum(10,20);
// // function sum()
// // {
// //     return 8+9;
// // }

// // const variable1=sum();
// // console.log(variable1);

// // function sumTwoValues(a, b)
// // {
// //     return a+b;
// // }

// // const var1=sumTwoValues(45,92);
// // console.log(var1);

// function isEven(a)
// {
//     if(a % 2 === 0)
//     {
//         return true
//     }
//     else
//     {
//        return false
//     }
// }

// // const var2=isEven(99);
// console.log(isEven(99));





//Return first char of string
// function firstChar(anyString)
// {
//     return anyString[0];
// };
// console.log(firstChar("cncnjncdn"))




//Find target in given array
function findArray(givenArray, target)
{
    for(let i=0;i<givenArray.length;i++)
    {
        if(givenArray[i]===target)
        {
            return i;
        }
    }
    return -1;
}

const array1=[10,20,30,40,50,60,70,80,90];

console.log(findArray(array1, 8));

