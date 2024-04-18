//  const sing= function(){
//     console.log("Happy Birthday");
//  }

//  sing();

// function sing(){
//     console.log("HBDSDDDD");
// }

// sing();
// function sum(a, b=50)
// {
//     console.log(a+b);
// }

// sum(10);
// function sum()
// {
//     return 2+4;
// };
// console.log(sum());
// function isEven(number)
// {
//     if(number%2===0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(8))


function findTarget(arr, nu)
{
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i]===nu)
        {
            return i+1;
        }
        
    }
    return -1;
};


console.log(findTarget([1,2,3,4,5,6,7],7) )