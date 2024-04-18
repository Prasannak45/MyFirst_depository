//Rest parameter
// const myFunc=(a,b,c)=>
// {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(10,20,30);

// const myFunc=(a,b,...c)=>
// {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(10,20,30,40,50,60,70,80);


//Total of all numbers
const addAll=(...numbers)=>
{
    total=0;
    for(let i of numbers)
    {
        total=total+i;
    }
    return total;
}
const ans=addAll(10,20,30,40,50,60,70,80,90);
console.log(ans);