// var a=[10,20,30];
// console.log("Loop using foreach");
// a.forEach(x=> console.log(x));
function addAll(...numbers)
{
    let total=0;
    for(let number of numbers)
    {
        total=total+number;
    }
    return total;
}
let ans=addAll(1,2,3,4,5,6,7,8,9)
console.log(ans);